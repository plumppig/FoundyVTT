let energyBeam = actor.items.find(
    (item) => item.type === "feat" && item.name.includes("Energy Beam")
);
  
if (!energyBeam) 
    return ui.notifications.error("The selected actor does not have the Energy Beam feat");

const element = prompt(
    "Choose either acid, cold, fire, lightning, thunder, or poison",
    energyBeam.system.damage.parts[0][1]
);
await energyBeam.update({
    "name": "Energy Beam (" + element.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ') + ")",
    "system.damage.parts": [[energyBeam.system.damage.parts[0][0], element]],
});
