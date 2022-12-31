/**
 * Heal Over Time
 * This macro will heal actors with the "hot" flag set on their effects. The
 * expected format is "flags.hot.<spellName>": "<amount>" where amount is the amount of HP
 * to heal per tick.
 * Any heal spell that will heal over time should not only set the flag, but
 * call this macro like so: 
 * 
 * game.Gametime.doIn(6, "Heal Over Time")
 * 
 * This macro is self-calling, and will automatically remove expired effects.
 */

let actorsHealed = 0, healingEffects = [], amount = 0;

for (let target of game.actors) {
    if (!target.flags?.hot) continue;

    amount = target.effects.reduce((total, effect) => {
      if (removeExpiredEffect(effect, target)) return total;
      return total + calculateTotalHealing(effect.data.changes);
    }, 0);

    let hp = target.data.data.attributes.hp ?? { value: 0, max: 0 };
    await target.update({"data.attributes.hp.value": Math.min(hp.value + amount, hp.max)});

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: target }),
        content: `<b>${target.name}</b> heals ${amount} HP.`,
    });

    actorsHealed++;
}

if (actorsHealed) game.Gametime.doIn(6, "Heal Over Time");


// Helper functions
function removeExpiredEffect(effect, target) {
  return effect.duration.seconds <= 0 ||
    effect.duration.startTime + effect.duration.seconds >= game.time.worldTime
    ? false
    : (target.deleteEmbeddedDocuments("ActiveEffect", [effect.id]), true);
}


function calculateTotalHealing(changes) {
  return changes.reduce((total, change) => {
    if (change.key.includes("flags.hot"))
      return total + parseInt(change.value);
    return total;
  }, 0);
}
