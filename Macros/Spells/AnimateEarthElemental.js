function greetings(token) {
  const actions = [
    "I am the embodiment of the earth itself. Tremble before me.",
    "You dare challenge the power of the earth? You will be crushed.",
    "I will shatter you like the fragile mortals you are.",
    "The ground beneath your feet belongs to me. I will swallow you whole.",
    "I am the master of all that is solid and strong. You are nothing but dust to me.",
  ];

  ChatMessage.create({
    content: `
        An earth elemental coalesces into its form, creating a humanoid shape made of soil, rocks, and glowing minerals. Its eyes are orbs of molten lava and it exudes a sense of power and strength.<br /><br />
        The earth elemental's powerful, deep voice booms like rolling thunder, commanding respect and attention from all who hear it.  It says, 
        "${actions[Math.floor(Math.random() * actions.length)]}".`,
  });
}

// The Summoning effect
async function myEffectFunction(template) {
  new Sequence()
    .effect()
        .file("jb2a.scorched_earth.black")
        .atLocation(template)
        .center()
        .scale(0.3)
        .fadeIn(500)
        .fadeOut(500)
        .duration(2000)
    .play();
}

// Show the creature
async function postEffects(template, token) {
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
  "Summon Earth Elemental",
  {
    token: {
      alpha: 0,
      name: `Earth Elemental of ${args[0].actor.name}`,
    },
    actor: {
      name: `Earth Elemental of ${args[0].actor.name}`,
    },
  },
  callbacks,
  { controllingActor: actor }
);
