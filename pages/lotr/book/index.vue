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

    //Text animations
    const p = document.querySelectorAll("[data-offset]");
    for (let i = 0; i < p.length; i++) {
      p[i].style.opacity = 0;
      p[i].style.transform = "translateY(2em)";
      const fade = gsap.to(p[i], { opacity: 1, y: 0 });
      new ScrollMagic.Scene({
        offset: p[i].dataset.offset,
        duration: p[i].dataset.duration ? p[i].dataset.duration : 200,
        triggerHook: 0,
      })
        .setTween(fade)
        .addTo(controller);
    }

    //Remove entry graphics
    const fadeEntry = gsap.to(".entry", { opacity: 0 });
    new ScrollMagic.Scene({
      offset: 3000,
      duration: 0,
      triggerHook: 0,
    })
      .setTween(fadeEntry)
      .addTo(controller);

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

    const balrogFlame1 = gsap.to(".balrog-flame-2", { opacity: 1 });
    new ScrollMagic.Scene({
      offset: 12000,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(balrogFlame1)
      .addTo(controller);

    const balrogFlame2 = gsap.to(".balrog-flame-1", { opacity: 1 });
    new ScrollMagic.Scene({
      offset: 12650,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(balrogFlame2)
      .addTo(controller);

    const fadeDarkness = gsap.to(".darkness", { opacity: 0 });
    new ScrollMagic.Scene({
      offset: 16800,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(fadeDarkness)
      .addTo(controller);

    const fly = gsap.to(".ring", { opacity: 1, y: 0 });
    new ScrollMagic.Scene({
      offset: 21400,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(fly)
      .addTo(controller);

    const flyText = gsap.to(".fly-text", { opacity: 1, y: 0 });
    new ScrollMagic.Scene({
      offset: 21700,
      duration: 500,
      triggerHook: 0,
    })
      .setTween(flyText)
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
    <div class="cave" data-offset="2000" data-duration="1000"></div>
    <div class="edge">
      <FireParticles ref="particles" />
      <p data-offset="3500">
        It came to the edge of the fire and the light faded as if a cloud had
        bent over it.
      </p>
      <p data-offset="3700">
        Then with a rush it leaped across the fissure. The flames roared up to
        greet it, and wreathed about it; and a black smoke swirled in the air.
      </p>
      <p data-offset="3900">
        Its streaming mane kindled, and blazed behind it.
      </p>
      <p data-offset="4100">
        In its right hand was a blade like a stabbing tongue of fire; in its
        left it held a whip of many thongs.
      </p>
    </div>
    <div class="balrog">
      <p data-offset="5000">
        'Ai! ai!' wailed Legolas. 'A Balrog! A Balrog is come!'
      </p>
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
      <p data-offset="6400">
        Gimli stared with wide eyes. 'Durin's Bane!' he cried, and letting his
        axe fall he covered his face.
      </p>
      <p data-offset="6900">
        'A Balrog,' muttered Gandalf. 'Now I understand.' He faltered and leaned
        heavily on his staff. 'What an evil fortune! And I am already weary.'
      </p>
      <p data-offset="7400">
        The dark figure streaming with fire raced towards them. The orcs yelled
        and poured over the stone gangways. Then Boromir raised his horn and
        blew.
      </p>
      <p data-offset="7900">
        Loud the challenge rang and bellowed, like the shout of many throats
        under the cavernous roof.
      </p>
      <p data-offset="8100">
        For a moment the orcs quailed and the fiery shadow halted. Then the
        echoes died as suddenly as a flame blown out by a dark wind, and the
        enemy advanced again.
      </p>
      <p data-offset="8600">
        'Over the bridge!' cried Gandalf, recalling his strength. 'Fly! This is
        a foe beyond any of you. I must hold the narrow way. Fly!'
      </p>
      <div class="gandalf-container" data-offset="9100" data-duration="500">
        <img
          src="~assets/lotr/script-normal-red.png"
          class="red-ring"
          alt="Red Ring"
        />
        <img
          src="~assets/lotr/Gandalf.png"
          alt="Gandalf the Grey"
          class="gandalf"
        />
      </div>
      <img
        src="~assets/lotr/morder-divider.png"
        alt="Morder Divider"
        class="morder-divider"
      />
      <p data-offset="10300">
        Aragorn and Boromir did not heed the command, but still held their
        ground, side by side, behind Gandalf at the far end of the bridge.
      </p>
      <p data-offset="10800">
        The others halted just within the doorway at the hall's end, and turned,
        unable to leave their leader to face the enemy alone.
      </p>
    </div>
    <div class="text">
      <p data-offset="11300">
        The Balrog reached the bridge. Gandalf stood in the middle of the span,
        leaning on the staff in his left hand, but in his other hand Glamdring
        gleamed, cold and white.
      </p>
      <p data-offset="11800">
        His enemy halted again, facing him, and the shadow about it reached out
        like two vast wings. It raised the whip, and the thongs whined and
        cracked. Fire came from its nostrils. But Gandalf stood firm.
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
      <p data-offset="13500" class="p16">'You cannot pass,' he said.</p>
      <p data-offset="13800">The orcs stood still, and a dead silence fell.</p>
      <p data-offset="14100" class="p18">
        'I am a servant of the Secret Fire, wielder of the flame of Anor. You
        cannot pass. The dark fire will not avail you, flame of Udûn. Go back to
        the Shadow! You cannot pass.'
      </p>
    </div>
    <div class="darkness" data-offset="15000" data-duration="500">
      <FireParticles />
      <p data-offset="15300">
        The Balrog made no answer. The fire in it seemed to die, but the
        darkness grew. It stepped forward slowly on to the bridge, and suddenly
        it drew itself up to a great height, and its wings were spread from wall
        to wall;
      </p>
      <p data-offset="15600">
        but still Gandalf could be seen, glimmering in the gloom; he seemed
        small, and altogether alone: grey and bent, like a wizened tree before
        the onset of a storm.
      </p>
      <p data-offset="15900">
        From out of the shadow a red sword leaped flaming. Glamdring glittered
        white in answer. There was a ringing clash and a stab of white fire.
      </p>
      <p data-offset="16100">
        The Balrog fell back, and its sword flew up in molten fragments. The
        wizard swayed on the bridge, stepped back a pace, and then again stood
        still.
      </p>
    </div>
    <div class="text">
      <p class="p23" data-offset="18000">'You cannot pass!' he said.</p>
      <p data-offset="18300">
        With a bound the Balrog leaped full upon the bridge. Its whip whirled
        and hissed.
      </p>
      <p data-offset="18600">
        'He cannot stand alone!' cried Aragorn suddenly and ran back along the
        bridge. 'Elendil!' he shouted. 'I am with you, Gandalf!'
      </p>
      <p class="p26" data-offset="18900">'Gondor!' cried Boromir and leaped after him.</p>
      <p data-offset="19300">
        At that moment Gandalf lifted his staff, and crying aloud he smote the
        bridge before him. The staff broke asunder and fell from his hand. A
        blinding sheet of white flame sprang up.
      </p>
      <p data-offset="19700">
        The bridge cracked. Right at the Balrog's feet it broke, and the stone
        upon which it stood crashed into the gulf, while the rest remained,
        poised, quivering like a tongue of rock thrust out into emptiness.
      </p>
      <p data-offset="20300">
        With a terrible cry the Balrog fell forward, and its shadow plunged down
        and vanished.
      </p>
      <p data-offset="20700">
        But even as it fell it swung its whip, and the thongs lashed and curled
        about the wizard's knees, dragging him to the brink. He staggered and
        fell, grasped vainly at the stone, and slid into the abyss.
      </p>
    </div>
    <div class="fly text">
      <img src="~assets/lotr/ring.png" alt="Ring" class="ring" />
      <p class="fly-text">'Fly, you fools!' he cried, and was gone.</p>
    </div>
    <p class="continue">Continue reading</p>
    <section class="buy-section">
      <p>J.R.R. Tolkien</p>
      <h2>The Fellowship <br />of the Ring</h2>
      <p>1954</p>
      <figure>
        <img
          src="~assets/Bookcover-thelordoftherings.png"
          alt="Book Cover Lord of the Rings"
          class="book"
        />
      </figure>
      <NuxtLink to="/" class="cta">Buy | €6,49</NuxtLink>
    </section>
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
  transform: translateY(2em);
  opacity: 0;
  padding: 3em 0;
}

div > p {
  padding-top: 2rem;
  font-size: 2.5rem;
}

.gandalf-container {
  opacity: 0;
}

.red-ring {
  position: relative;
  left: 52%;
  width: 45em;
  transform-origin: 0 40%;
  animation-name: spin;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 1;
}

@keyframes spin {
  from {
    transform: rotate(0deg) translateX(-50%) translateY(-10%);
  }
  to {
    transform: rotate(360deg) translateX(-50%) translateY(-10%);
  }
}

.gandalf {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  z-index: 2;
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

.p16 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.p16::before {
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

.p18 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  text-align: center;
  padding-bottom: 0 !important;
}

.p18::before {
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

.darkness {
  height: 300vh;
  width: 100%;
  background: var(--black);
  position: relative;
  opacity: 0;
  top: 0;
  left: 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.darkness > canvas {
  top: 50%;
  transform: translateY(-50%);
}

.darkness > p {
  padding: 0.5em 0;
  color: var(--lotr-grey);
  opacity: 0;
}

.p23 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  text-align: center;
}

.p23::before {
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

.p26 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.p26::before {
  content: "";
  background-image: url("~assets/lotr/quote-mark-red.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  transform: translateY(-0.4em);
}

.fly {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.fly-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  text-align: center;
  opacity: 0;
}

.fly-text::before {
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

.ring {
  opacity: 0;
  width: 20em;
  margin-bottom: 30em;
}

.continue {
  text-align: center;
  font-size: 1.3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.buy-section {
  text-align: center;
  margin: 2em;
  padding: 2em 0;
  border-radius: 2em;
  background-color: var(--white);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.buy-section figure > img {
  width: 15em;
  padding: 3em 0;
  animation: up-and-down infinite alternate ease 2s;
}

.buy-section h2 {
  font-size: 2.5rem;
}

.buy-section p {
  font-size: 2rem;
}

.cta {
  position: relative;
  z-index: 5;
  padding: 1em 3em;
  font-size: 1.2rem;
  background-color: var(--dark-blue);
  margin-bottom: 2em;
}

@keyframes up-and-down {
  from {
    transform: translateY(-1em);
  }

  to {
    transform: translateY(1em);
  }
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
