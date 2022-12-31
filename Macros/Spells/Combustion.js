let resources = +prompt("Enter the number of resources to consume:", 1) || 0;
let combustion = actor.items.find(item => item.type === 'feat' && item.name === 'Combustion');
let damage = resources * actor.data.data.abilities.wis.mod;
let target = Array.from(game.user.targets)[0];

if (!combustion) return ui.notifications.error("The selected token does not have the Combustion skill");
if (resources > 7) return ui.notifications.error("You can only consume up to 7 resources");
if (resources < 1) return ui.notifications.error("You must consume at least 1 resource");
if (!target) return ui.notifications.error("You must target a creature.");

await combustion.update({"system.damage.parts": [[`${damage}`, 'fire']]});

// Deduct the consumed resource value from the primary resource
actor.update({
  "data.resources.primary.value": actor.data.data.resources.primary.value - resources
});
