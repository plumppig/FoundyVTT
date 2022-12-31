function greetings(token) {
  const actions = [
    "I am the embodiment of the oceans themselves. I will drown you in my depths.",
    "You cannot hope to withstand the power of the water. You will be swept away.",
    "I will wash you away like a mere pebble in a stream.",
    "You are no match for the fluidity and adaptability of water. I will flood your defenses and drown you in my wake.",
    "I am the master of all that is fluid and flexible. You will be crushed under the weight of my power.",
  ];

  ChatMessage.create({
    content: `
        As the water elemental coalesces into its form, a swirling vortex of water rises up from the ground, swirling faster and faster until it takes on a humanoid shape. The elemental's body is made entirely of water, with glowing, sparkling droplets swirling within its form. Its eyes are glowing orbs of shimmering liquid, and it has tendrils of water flowing from its shoulders and arms.<br /><br />
        The water elemental's menacing, fluid voice flows like a rushing river, carrying with it the power to sweep away all who stand in its path.  It says, 
        "${actions[Math.floor(Math.random() * actions.length)]}".`,
  });
}

async function myEffectFunction(template) {
  //prep summoning area
  new Sequence()
    .effect()
        .file("jb2a.water_splash.circle.01.blue")
        .atLocation(template)
        .center()
        .scale(0.7)
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
  "Summon Water Elemental",
  {
    token: {
      alpha: 0,
      name: `Water Elemental of ${args[0].actor.name}`,
    },
    actor: {
      name: `Water Elemental of ${args[0].actor.name}`,
    },
  },
  callbacks,
  { controllingActor: actor }
);
