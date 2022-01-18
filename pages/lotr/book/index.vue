<script>
export default {
  layout: "lotr",
  mounted: function () {
    this.transformParagraphs();
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

    //Edge paragraph
    const refKeys = Object.keys(this.$refs);
    const paragraphKeys = refKeys.filter((key) => key.includes("spans"));
    let edgeCounter = 0;
    paragraphKeys.map((paragraph, index) => {
      const p = this.$refs[paragraph];
      for (let i = 0; i < p.childElementCount; i++) {
        const action = gsap.to(p.children[i], { color: "#fff", duration: 0.1 });
        new ScrollMagic.Scene({
          offset: 3400 + edgeCounter * 12 + 16 * index,
          duration: 0,
          triggerHook: 0,
        })
          .setTween(action)
          .addTo(controller);
        edgeCounter++;
      }
    });
  },
  methods: {
    transformParagraphs() {
      const refKeys = Object.keys(this.$refs);
      const paragraphKeys = refKeys.filter((key) => key.includes("spans"));
      paragraphKeys.map((paragraph) => {
        const p = this.$refs[paragraph];
        const text = p.innerText;
        const spans = text.split(" ").map((word) => {
          return `<span style="display: inline-block; color: rgb(126, 127, 127);">${word}</span>`;
        });
        p.innerHTML = spans.join(" ");
      });
    },
  },
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
    <section class="cave">
    </section>
    <section class="edge">
      <FireParticles/>
      <p ref="spans-1">
        It came to the edge of the fire and the light faded as if a cloud had
        bent over it.
      </p>
      <p ref="spans-2">
        Then with a rush it leaped across the fissure. The flames roared up to
        greet it, and wreathed about it; and a black smoke swirled in the air.
      </p>
      <p ref="spans-3">Its streaming mane kindled, and blazed behind it.</p>
      <p ref="spans-4">
        In its right hand was a blade like a stabbing tongue of fire; in its
        left it held a whip of many thongs.
      </p>
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
  padding: 2em;
  font-size: 2.5rem;
  height: 150vh;
}

.edge p {
  margin-bottom: 2rem;
}

#particles-js {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

@media (orientation: landscape) {
  .entry img {
    width: 35em;
  }
}
</style>
