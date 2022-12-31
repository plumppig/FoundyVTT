/**
 * Mend Wounds
 * The Mend Wounds skill allows you to heal a creature you touch. It 
 * will apply a healing over time effect to the target that will heal
 * them for 1d8 + your Wisdom modifier every 6 seconds for the duration
 * of the effect. The amount of healing is increased by 1d8 + your Wisdom 
 * modifier for every resource you consume.
 */
let resources = +prompt("Enter the number of resources to consume:", 1) || 0;
let mendWounds = actor.items.find(item => item.type === 'feat' && item.name === 'Mend Wounds');
let healing = actor.data.data.abilities.wis.mod * resources;
let target = Array.from(game.user.targets)[0];

if (!mendWounds) return ui.notifications.error("The selected token does not have the Mend Wounds skill");
if (resources > 7) return ui.notifications.error("You can only consume up to 7 resources");
if (resources < 1) return ui.notifications.error("You must consume at least 1 resource");
if (!target) return ui.notifications.error("You must target a creature.");

// We update the healing formula so the initial heal is correct
await mendWounds.update({"system.damage.parts": [[`${resources}d8 + ${healing}`, 'healing']]});

// Apply effect to target that we'll use for the HoT
const effect = target.actor.effects.find(e => e.label === mendWounds.name);
if (effect) {
    game.Gametime.clearTimeout(+effect.changes[1].value);
    await target.actor.deleteEmbeddedDocuments("ActiveEffect", [effect.id]);
}

await target.actor.createEmbeddedDocuments("ActiveEffect", [{
    "label": "Mend Wounds",
    "icon": "icons/magic/light/explosion-beam-impact-silhouette.webp",
    "origin": `Actor.${actor.id}.Item.${mendWounds.id}`,
    "disabled": false,
    "changes": [
        { 
            "key": "flags.hot.mendWounds", 
            "value": parseInt(resources) + actor.data.data.abilities.wis.mod, 
            "mode": 2, 
            "priority": 20 
        },
        {
            "key": "flags.intervals.mendWounds",
            "value": game.Gametime.doIn(6, "Heal Over Time"), // This is what makes the HoT happen
            "mode": 2,
            "priority": 20
        }
    ],
    "duration":{
        "startTime": game.time.worldTime,
        "seconds": actor.system.attributes.prof * 6,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null,
        "type": "seconds",
        "duration": actor.system.attributes.prof * 6,
        "remaining": actor.system.attributes.prof * 6,
        "label": `${actor.system.attributes.prof * 6} Seconds`
    }
}]);

// Deduct the consumed resource value from the primary resource
actor.update({
  "data.resources.primary.value": actor.data.data.resources.primary.value - resources
});
