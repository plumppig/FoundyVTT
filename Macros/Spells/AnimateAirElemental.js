function greetings(token) {
  const actions = [
    "I am the wind, and I will sweep you away.",
    "I am the breath of life and can take it away just as easily.",
    "I am the force of the storm, and I will unleash my fury upon you.",
    "I am the embodiment of the air, and I will suffocate the life from you.",
    "I am the master of the skies, and you are nothing but a mere mortal before me.",
    "I am the voice of the winds, and I will speak your doom.",
    "I am the spirit of the air, and I will crush you beneath my power.",
  ];

  ChatMessage.create({
    content: `
        An air elemental begins as a swirling mass of mist, swirling and churning in midair. As it coalesces into its form, the mist begins to condense and take on a more defined shape.<br /><br />
        The air elemental's voice eminates with a powerful and commanding force, like the roar of a gust of wind, as it says, 
        "${actions[Math.floor(Math.random() * actions.length)]}".`,
  });
}

// Summoning area
async function myEffectFunction(template) {
  new Sequence()
    .effect()
        .file("jb2a.whirlwind.bluegrey")
        .atLocation(template)
        .center()
        .scale(0.7)
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
  "Summon Air Elemental",
  {
    token: {
      alpha: 0,
      name: `Air Elemental of ${args[0].actor.name}`,
    },
    actor: {
      name: `Air Elemental of ${args[0].actor.name}`,
    },
  },
  callbacks,
  { controllingActor: actor }
);
