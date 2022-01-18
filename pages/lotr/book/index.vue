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
      offset: 5500,
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
