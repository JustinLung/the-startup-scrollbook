<script>
export default {
  layout: "lotr",
  mounted: function () {
    const controller = new ScrollMagic.Controller();

    //Landings animation
    gsap.to(".entry img", {
      top: "-18em",
      opacity: 1,
      duration: 1,
      delay: 0.9,
    });
    gsap
      .timeline()
      .to(
        ".entry h1 span",
        { opacity: 1, duration: 0.75, stagger: 0.3, delay: 0.3 },
        "group"
      )
      .to(
        ".entry h1 span",
        { letterSpacing: "0", duration: 0.75, stagger: 0.3, delay: 0.3 },
        "group"
      )
      .to(".entry h1 span", {
        textStroke: "1px rgba(216, 26, 34, 0)",
        color: "rgba(216, 26, 34, 1)",
        duration: 0.75,
      });
    //Entry
    const entry = gsap.to(".entry", { scale: 7 });

    new ScrollMagic.Scene({
      triggerElement: ".entry",
      duration: 3000,
      triggerHook: 0,
    })
      .setPin(".entry")
      .setTween(entry)
      .addTo(controller);

    //Cave
    const cave = gsap.to(".cave", { opacity: 1 });

    new ScrollMagic.Scene({
      offset: 2000,
      duration: 1000,
      triggerHook: 0,
    })
      .setTween(cave)
      .addTo(controller);

    //Remove entry graphics
    const fadeEntry = gsap.to(".entry", { opacity: 0 });
    new ScrollMagic.Scene({
      offset: 3000,
      duration: 0,
      triggerHook: 0,
    })
      .setTween(fadeEntry)
      .addTo(controller);

    //Edge paragraph
    const p1 = gsap.to(this.$refs.p1, { color: "#fff", duration: 0.1 });
    const p2 = gsap.to(this.$refs.p2, { color: "#fff", duration: 0.1 });
    const p3 = gsap.to(this.$refs.p3, { color: "#fff", duration: 0.1 });
    const p4 = gsap.to(this.$refs.p4, { color: "#fff", duration: 0.1 });
    const edgeParagraphs = [p1, p2, p3, p4];

    for (let i = 0; i < edgeParagraphs.length; i++) {
      new ScrollMagic.Scene({
        offset: 3500 + 200 * i,
        duration: 100,
        triggerHook: 0,
      })
        .setTween(edgeParagraphs[i])
        .addTo(controller);
    }

    //Fadeaway particles
    const begoneParticles = gsap.to(this.$refs.particles.$el, { opacity: 0 });
    new ScrollMagic.Scene({
      offset: 4400,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(begoneParticles)
      .addTo(controller);

    //Fadeaway cave
    const fadeCave = gsap.to(".cave", { opacity: 0 });
    new ScrollMagic.Scene({
      offset: 4700,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(fadeCave)
      .addTo(controller);

    //Balrog
    gsap.to(".balrog-mouth", {
      opacity: 0.7,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    gsap.to(".balrog-eyes", {
      opacity: 0.3,
      duration: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    //FadeIn Balrog
    const fadeBalrog = gsap.to(".balrog figure", { opacity: 1, scale: 1 });
    new ScrollMagic.Scene({
      offset: 5300,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(fadeBalrog)
      .addTo(controller);

    // Balrog Text
    const p5 = gsap.to(this.$refs.p5, { color: "#000", duration: 0.1 });
    new ScrollMagic.Scene({
      offset: 5500,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(p5)
      .addTo(controller);

    //paragraph
    const p6 = gsap.to(this.$refs.p6, { y: 0, opacity: 1 });
    const p7 = gsap.to(this.$refs.p7, { y: 0, opacity: 1 });
    const p8 = gsap.to(this.$refs.p8, { y: 0, opacity: 1 });
    const p9 = gsap.to(this.$refs.p9, { y: 0, opacity: 1 });
    const paragraphs = [p6, p7, p8, p9];

    for (let i = 0; i < paragraphs.length; i++) {
      new ScrollMagic.Scene({
        offset: 6400 + 200 * i,
        duration: 500,
        triggerHook: 0,
      })
        .setTween(paragraphs[i])
        .addTo(controller);
    }

    // FadeIn Gandalf
    const fadeGandalf = gsap.to(".gandalf", { opacity: 1, scale: 1, y: 0 });
    new ScrollMagic.Scene({
      offset: 7500,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(fadeGandalf)
      .addTo(controller);

    const p10 = gsap.to(this.$refs.p10, { y: 0, opacity: 1 });
    new ScrollMagic.Scene({
      offset: 8500,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(p10)
      .addTo(controller);

    const p11 = gsap.to(this.$refs.p11, { y: 0, opacity: 1 });
    new ScrollMagic.Scene({
      offset: 8800,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(p11)
      .addTo(controller);

    const balrogFlame1 = gsap.to(".balrog-flame-2", { opacity: 1 });
    new ScrollMagic.Scene({
      offset: 9600,
      duration: 300,
      triggerHook: 0,
    })
      .setTween(balrogFlame1)
      .addTo(controller);

    const balrogFlame2 = gsap.to(".balrog-flame-1", { opacity: 1 });
    new ScrollMagic.Scene({
      offset: 10000,
      duration: 300,
      triggerHook: 0,
    })
      .setTween(balrogFlame2)
      .addTo(controller);

    const p12 = gsap.to(this.$refs.p12, { y: 0, opacity: 1 });
    new ScrollMagic.Scene({
      offset: 10200,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(p12)
      .addTo(controller);
  },
  methods: {},
};
</script>

<template>
  <div class="imfell">
    <section class="entry">
      <p class="tngan">d</p>
      <p>Book Preview</p>
      <h1 class="botw">
        <span>BRIDGE</span><br /><span>Of</span><br /><span>KHAZAD DUM</span>
      </h1>
      <img src="~assets/lotr/mines-of-moria.png" alt="The mines of moria" />
    </section>
    <div class="cave"></div>
    <div class="edge">
      <FireParticles ref="particles" />
      <p ref="p1">
        It came to the edge of the fire and the light faded as if a cloud had
        bent over it.
      </p>
      <p ref="p2">
        Then with a rush it leaped across the fissure. The flames roared up to
        greet it, and wreathed about it; and a black smoke swirled in the air.
      </p>
      <p ref="p3">Its streaming mane kindled, and blazed behind it.</p>
      <p ref="p4">
        In its right hand was a blade like a stabbing tongue of fire; in its
        left it held a whip of many thongs.
      </p>
    </div>
    <div class="balrog">
      <p ref="p5">'Ai! ai!' wailed Legolas. 'A Balrog! A Balrog is come!'</p>
      <figure>
        <img
          class="balrog-head"
          src="~assets/lotr/balrog-head.png"
          alt="Head of Balrog"
        />
        <img
          class="balrog-mouth"
          src="~assets/lotr/balrog-mouth.png"
          alt="Flaming Mouth of the Balrog "
        />
        <img
          class="balrog-eyes"
          src="~assets/lotr/balrog-eyes.png"
          alt="Firey Eyes of the Balrog"
        />
        <div class="smoke-container">
          <img class="smoke" src="~assets/lotr/smoke.png" alt="Smoke" />
          <img class="smoke" src="~assets/lotr/smoke.png" alt="Smoke" />
          <img
            class="smoke smoke-rotate-left"
            src="~assets/lotr/smoke.png"
            alt="Smoke"
          />
        </div>
      </figure>
    </div>
    <div class="text">
      <p ref="p6">
        Gimli stared with wide eyes. 'Durin's Bane!' he cried, and letting his
        axe fall he covered his face.
      </p>
      <p ref="p7">
        'A Balrog,' muttered Gandalf. 'Now I understand.' He faltered and leaned
        heavily on his staff. 'What an evil fortune! And I am already weary.'
      </p>
      <p ref="p8">
        The dark figure streaming with fire raced towards them. The orcs yelled
        and poured over the stone gangways. Then Boromir raised his horn and
        blew. Loud the challenge rang and bellowed, like the shout of many
        throats under the cavernous roof. For a moment the orcs quailed and the
        fiery shadow halted. Then the echoes died as suddenly as a flame blown
        out by a dark wind, and the enemy advanced again.
      </p>
      <p ref="p9">
        'Over the bridge!' cried Gandalf, recalling his strength. 'Fly! This is
        a foe beyond any of you. I must hold the narrow way. Fly!'
      </p>
      <img
        src="~assets/lotr/Gandalf.png"
        alt="Gandalf the Grey"
        class="gandalf"
      />
      <img
        src="~assets/lotr/morder-divider.png"
        alt="Morder Divider"
        class="morder-divider"
      />
      <p ref="p10">
        Aragorn and Boromir did not heed the command, but still held their
        ground, side by side, behind Gandalf at the far end of the bridge. The
        others halted just within the doorway at the hall's end, and turned,
        unable to leave their leader to face the enemy alone.
      </p>
    </div>
    <div class="text">
      <p ref="p11">
        The Balrog reached the bridge. Gandalf stood in the middle of the span,
        leaning on the staff in his left hand, but in his other hand Glamdring
        gleamed, cold and white. His enemy halted again, facing him, and the
        shadow about it reached out like two vast wings. It raised the whip, and
        the thongs whined and cracked. Fire came from its nostrils. But Gandalf
        stood firm.
      </p>
      <figure class="balrog-flame-container">
        <img
          src="~assets/lotr/Balrog-flames-1.png"
          class="balrog-flame-1"
          alt="Balrog Flames"
        />
        <img
          src="~assets/lotr/Balrog-flames-2.png"
          class="balrog-flame-2"
          alt="Balrog Flames"
        />
      </figure>
      <p ref="p12" class="p12">'You cannot pass,' he said.</p>
      <p>The orcs stood still, and a dead silence fell.</p>
      <p>
        'I am a servant of the Secret Fire, wielder of the flame of Anor. You
        cannot pass. The dark fire will not avail you, flame of Udûn. Go back to
        the Shadow! You cannot pass.'
      </p>
      <p>
        The Balrog made no answer. The fire in it seemed to die, but the
        darkness grew. It stepped forward slowly on to the bridge, and suddenly
        it drew itself up to a great height, and its wings were spread from wall
        to wall; but still Gandalf could be seen, glimmering in the gloom; he
        seemed small, and altogether alone: grey and bent, like a wizened tree
        before the onset of a storm.
      </p>
      <p>
        From out of the shadow a red sword leaped flaming. Glamdring glittered
        white in answer. There was a ringing clash and a stab of white fire. The
        Balrog fell back, and its sword flew up in molten fragments. The wizard
        swayed on the bridge, stepped back a pace, and then again stood still.
      </p>
    </div>
    <div class="text">
      <p>'You cannot pass!' he said.</p>
      <p>
        With a bound the Balrog leaped full upon the bridge. Its whip whirled
        and hissed.
      </p>
      <p>
        'He cannot stand alone!' cried Aragorn suddenly and ran back along the
        bridge. 'Elendil!' he shouted. 'I am with you, Gandalf!'
      </p>
      <p>'Gondor!' cried Boromir and leaped after him.</p>
      <p>
        At that moment Gandalf lifted his staff, and crying aloud he smote the
        bridge before him. The staff broke asunder and fell from his hand. A
        blinding sheet of white flame sprang up. The bridge cracked. Right at
        the Balrog's feet it broke, and the stone upon which it stood crashed
        into the gulf, while the rest remained, poised, quivering like a tongue
        of rock thrust out into emptiness.
      </p>
      <p>
        With a terrible cry the Balrog fell forward, and its shadow plunged down
        and vanished. But even as it fell it swung its whip, and the thongs
        lashed and curled about the wizard's knees, dragging him to the brink.
        He staggered and fell, grasped vainly at the stone, and slid into the
        abyss.
      </p>
    </div>
    <div class="text">
      <p>'Fly, you fools!' he cried, and was gone.</p>
    </div>
  </div>
</template>

<style scoped>
div.imfell {
  overflow: hidden;
}

.entry {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 18em;
  text-align: center;
  will-change: transform;
}

.entry .tngan {
  font-size: 2rem;
}

.entry .imfell {
  font-size: 1.5rem;
}

.entry .botw {
  font-size: 5rem;
}

.entry h1 span {
  opacity: 0;
  color: rgba(216, 26, 34, 0);
  letter-spacing: 1rem;
  -webkit-text-stroke: 1px rgba(216, 26, 34, 1);
}

.entry .tngan,
.entry .imfell,
.entry .botw {
  color: var(--lotr-red);
  position: relative;
  z-index: 2;
}
.entry img {
  width: 40em;
  position: relative;
  top: -14em;
  opacity: 0;
}

.cave {
  height: 100vh;
  width: 100%;
  background: var(--black);
  position: fixed;
  top: 0;
  opacity: 0;
}

.edge {
  color: var(--lotr-grey);
  position: relative;
  z-index: 3;
  padding: 2rem;
  font-size: 2.5rem;
  height: 160vh;
}

.edge p {
  margin-bottom: 2rem;
}

.balrog {
  padding: 2rem;
}

.balrog p {
  font-size: 2.5rem;
  color: var(--lotr-grey);
}

.balrog figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0.9);
}

.balrog figure img {
  width: 95%;
  margin: 0 auto;
}

.balrog figure .balrog-head {
  position: relative;
  z-index: 2;
}

.balrog figure .balrog-mouth,
.balrog figure .balrog-eyes {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.smoke-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleX(1.6);
  width: 100%;
  height: 100%;
  z-index: 1;
}
.smoke {
  width: 100%;
  position: absolute;
  animation: rotation 40s infinite linear;
  opacity: 0.4;
}

.smoke-rotate-left {
  animation: rotation-left 40s infinite linear;
}

.text {
  position: relative;
  padding: 2rem;
}

.text > p {
  color: var(--black);
  transform: translateY(10em);
  opacity: 0;
}

div > p {
  padding-top: 2rem;
  font-size: 2.5rem;
}

.gandalf {
  position: relative;
  left: 50%;
  transform: translate(-50%, 10em);
  max-width: 90%;
  opacity: 0;
}

.morder-divider {
  max-width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.balrog-flame-container {
  position: relative;
}

.balrog-flame-container > img {
  width: 95%;
  margin: 0 auto;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.balrog-flame-1,
.balrog-flame-2 {
  opacity: 0;
}

.balrog-flame-container > img:first-child {
  position: relative;
  left: 1em;
  top: 0;
  transform: translate(0, 0);
  z-index: 2;
}

.balrog-flame-container > img:nth-child(2) {
  z-index: 1;
}

.p12 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.p12::before {
  content: "";
  background-image: url("~assets/lotr/quote-mark-red.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  transform: translateY(-0.2em);
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotation-left {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@media (orientation: landscape) {
  .entry img {
    width: 35em;
  }
}
</style>
