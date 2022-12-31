function greetings(token) {
  const actions = [
    "I am the embodiment of pure flame. I will burn you to ashes.",
    "You cannot hope to withstand the heat of my fury.",
    "I will incinerate you where you stand.",
    "You are no match for the power of fire. You will be consumed.",
    "I am the master of all that is hot and destructive. You will feel the full force of my might.",
  ];

  ChatMessage.create({
    content: `
        As the fire elemental coalesces into its form, flames begin to rise up from the ground, swirling and dancing until they take on a humanoid shape. The elemental's body is made entirely of flames, with glowing embers swirling within its form. Its eyes are burning orbs of pure fire, and it has elongated, flame-like protuberances jutting out from its shoulders and arms.<br /><br />
        The fire elemental's fierce, hot voice crackles like flames, striking fear into the hearts of all who hear it.  It says, 
        "${actions[Math.floor(Math.random() * actions.length)]}".`,
  });
}

async function myEffectFunction(template) {
  //prep summoning area
  new Sequence()
    .effect()
        .file("jb2a.fireball.explosion.orange")
        .atLocation(template)
        .center()
        .scale(0.5)
        .fadeIn(500)
        .fadeOut(500)
        .duration(2000)
    .play();
}

async function postEffects(template, token) {
  //bring in our minion
  new Sequence().animation().on(token).fadeIn(500).play();
}

const callbacks = {
  pre: async (template, update) => {
    myEffectFunction(template);
  },
  post: async (template, token) => {
    postEffects(template, token);
    greetings(token);
  },
};

await warpgate.spawn(
  "Summon Fire Elemental",
  {
    token: {
      alpha: 0,
      name: `Fire Elemental of ${args[0].actor.name}`,
    },
    actor: {
      name: `Fire Elemental of ${args[0].actor.name}`,
    },
  },
  callbacks,
  { controllingActor: actor }
);
