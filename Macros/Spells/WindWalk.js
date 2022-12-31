/**
 * Wind Walk
 * This macro will consume a number of resources and apply the Wind Walk effect to the selected token.
 * The effect will last for 10 minutes and will increase the token's fly speed by a scaling amount
 * based on the number of resources consumed.
 */

let resources = +prompt("Enter the number of resources to consume:", 1) || 0;
const windWalk = actor.items.find((i) => i.name === "Wind Walk");
let flySpeed = actor.system.attributes.movement.walk;
const isHover = resources <= 3;

switch (resources) {
  case 1: flySpeed = 10; break;
  case 3:
  case 6: flySpeed *= 2; break;
  case 4: flySpeed /= 2; break;
  case 7: flySpeed *= 3; break;
  default:
}

if (!windWalk)     return ui.notifications.error("The selected token does not have the Wind Walk skill");
if (resources > 7) return ui.notifications.error("You can only consume up to 7 resources");
if (resources < 1) return ui.notifications.error("You must consume at least 1 resource");

const changes = [{ "key": "system.attributes.movement.fly", "value": `${flySpeed}`, "mode": 2, "priority": 20 }];
if (isHover) changes.push({ "key": "system.attributes.movement.hover", "value": isHover, "mode": 0, "priority": 20 });

const effect = actor.effects.find(e => e.label === "Wind Walk");
if (effect) await actor.deleteEmbeddedDocuments("ActiveEffect", actor.effects.filter(e => e.label === "Wind Walk").map(e => e.id));

await actor.createEmbeddedDocuments("ActiveEffect", [{
    "label": "Wind Walk",
    "icon": "icons/magic/air/fog-gas-smoke-swirling-white.webp",
    "origin": `Actor.${actor.id}.Item.${windWalk.id}`,
    "disabled": false,
    "changes": changes,
    "duration":{
        "startTime": game.time.worldTime,
        "seconds": 600,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null,
        "type": "seconds",
        "duration": 600,
        "remaining": 600,
        "label": "600 Seconds"
    }
}]);

// Deduct the consumed resource value from the primary resource
actor.update({
  "data.resources.primary.value": actor.data.data.resources.primary.value - resources
});
