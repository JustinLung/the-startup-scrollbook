<script>
export default {
  layout: "the-shining",
  mounted: function() {
    const controller = new ScrollMagic.Controller();

    const entry = gsap.timeline()
    .to(".entry", { scale: 3 }, "door")
    .to(".entry .door", {rotateY: 90}, "door");

    new ScrollMagic.Scene({
      triggerElement: ".entry",
      duration: 3000,
      triggerHook: 0,
    })
    .setPin(".entry")
    .setTween(entry)
    .addTo(controller);

    //Entry fadeaway
    const entryFade = gsap.to(".entry", {opacity: 0})
    new ScrollMagic.Scene({
      triggerElement: ".entry",
      offset: 2300,
      duration: 500,
      triggerHook: 0,
    })
    .setTween(entryFade)
    .addTo(controller);

    //claw animation
    const claw = gsap.to(".scratch", {"clip-path": "inset(0% 0% 0% 0%)"})
    new ScrollMagic.Scene({
      offset: 4000,
      duration: 500,
      triggerHook: 0
    })
    .setTween(claw)
    .addTo(controller)

    const doorShut = gsap.to(".paragraph1 .door", {rotateY: 0, ease: Power1.easeIn})
    new ScrollMagic.Scene({
      offset: 5100,
      duration: 100,
      triggerHook: 0
    })
    .setTween(doorShut)
    .addTo(controller)

    //Text animations
    const p = document.querySelectorAll('[data-offset]')
    for (let i = 0; i < p.length; i++) {
      p[i].style.opacity = 0
      p[i].style.transform = "translateY(2em)"
      const fade = gsap.to(p[i], {opacity: 1, y: 0})
      new ScrollMagic.Scene({
        offset: p[i].dataset.offset,
        duration: 200,
        triggerHook: 0
      })
      .setTween(fade)
      .addTo(controller)
    }

    //Mallet against door
    const mallet = gsap.to(".paragraph1 .mallet", {opacity: 1, rotate: 0, left: 0})
    new ScrollMagic.Scene({
      offset: 5300,
      duration: 200,
      triggerHook: 0
    })
    .setTween(mallet)
    .addTo(controller)

  }
}
</script>

<template>
  <div class="sectra">
    <section class="entry">
      <div>
        <h1 class="friz">Jack &<br/>Wendy</h1>
        <div class="door-container">
          <img src="~assets/the-shining/door.svg" class="door" alt="Door" />
          <img src="~assets/the-shining/door-frame.svg" alt="Door frame" />
        </div>
      </div>
    </section>
    <div class="text paragraph1">
      <p data-offset="3700">
        She reached the corner and pulled herself around it, using her hands to yank at the angle of the wall. 
        Her terror deepened—she would not have believed that possible, but it was. It was a hundred times worse not to be able to see him or know how close he was getting. 
        She tore out fistfuls of the carpet napping pulling herself along, and she was halfway down this short hall before she noticed the bedroom door was standing wide open.
      </p>
      <div class="claw">
      <p data-offset="3900">
        (Danny! O Jesus)
        She forced herself to her knees and then clawed her way to her feet, fingers slipping over the silk wallpaper.
        Her nails pulled little strips of it loose. She ignored the pain and half-walked, half-shambled through the doorway as Jack came around the far corner and began to lunge his way down toward the open door, leaning on the roque mallet.
      </p>
      <img class="scratch" src="~assets/the-shining/claw_nails.png" alt="Scratched surface">
      </div>
      <p data-offset="4100">
        She caught the edge of the dresser, held herself up against it, and grabbed the doorframe.
      </p>
      <p data-offset="4300">
        Jack shouted at her: “Don't you shut that door! Goddam you, don't you dare shut it!”
      </p>
      <p data-offset="4500">
        She slammed it closed and shot the bolt.
        Her left hand pawed wildly at the junk on the dresser, knocking loose coins onto the floor where they rolled in every direction.
        Her hand seized the key ring just as the mallet whistled down against the door, making it tremble in its frame.
      </p>
      <div class="door-container" data-offset="4700">
        <img src="~assets/the-shining/mallet.png" alt="Mallet" class="mallet">
        <img src="~assets/the-shining/door.svg" class="door" alt="Door" />
        <img src="~assets/the-shining/door-frame.svg" alt="Door frame" />
      </div>
      <p data-offset="5500">
        She got the key into the lock on the second stab and twisted it to the right. At the sound of the tumblers falling, Jack screamed.
        The mallet came down against the door in a volley of booming blows that made her flinch and step back.
        How could he be doing that with a knife in his back? Where was he finding the strength?
        She wanted to shriek Why aren't you dead? at the locked door.
      </p>
      <p data-offset="5700">
        Instead she turned around. She and Danny would have to go into the attached bathroom and lock that door, too, in case Jack actually could break through the bedroom door.
        The thought of escaping down the dumbwaiter shaft crossed her mind in a wild burst, and then she rejected it. Danny was small enough to fit into it, but she would be unable to control the rope pull.
        He might go crashing all the way to the bottom.
      </p>
    </div>
  </div>
</template>

<style scoped>
.entry {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  will-change: transform;
}

.entry > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  overflow: hidden;
}

.entry .door-container {
  position: relative;
  width: 23em;
  transform: translateY(-8rem);
  overflow: hidden;
}

.entry .door-container img {
  width: 100%;
}

.entry .door-container img:last-child {
  position: absolute;
  left: 0;
  top: 0;
}

.entry h1 {
  color: var(--ts-light-red);
  font-size: 6.5rem;
  z-index: 2;
}

.entry .door-container .door {
  transform-origin: 5% 50%;
}

.text {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 2rem;
  padding: 0 2rem;
}

.text p {
  margin-bottom: 5rem;
}

.claw {
  position: relative;
}

.claw img {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: 50% 0%;
  clip-path: inset(0% 0% 100% 0%);
}

.paragraph1 .door-container {
  position: relative;
  width: 10em;
  align-self: center;
  margin-bottom: 5rem;
}

.paragraph1 .door-container img {
  width: 100%;
}

.paragraph1 .door-container img:last-child {
  position: absolute;
  left: 0;
  top: 0;
}

.paragraph1 .door-container .door {
  transform: rotateY(70deg);
  transform-origin: 5% 50%;
}

.paragraph1 .door-container .mallet {
  position: absolute;
  z-index: 2;
  width: 8em;
  top: 45%;
  transform: translate(-10%, -50%) rotate(-90deg);
  left: -50%;
  opacity: 0;
}
</style>