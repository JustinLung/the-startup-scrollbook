<script>
export default {
  layout: "the-shining",
  data: ()=>{
    return {height: 0}
  },
  mounted: function() {

    window.addEventListener("load", this.resize)
    window.addEventListener("resize", this.resize)

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

    //First text
    new ScrollMagic.Scene({
      triggerElement: ".first-text",
      duration: 1000,
      triggerHook: 0
    })
    .setPin(".first-text")
    .addTo(controller)

    //First text fade
    const firstText = gsap.to(".first-text > *", {opacity: 1})
    new ScrollMagic.Scene({
      triggerElement: ".first-text",
      duration: 600,
      triggerHook: 0
    })
    .setTween(firstText)
    .addTo(controller)

    //claw animation
    const claw = gsap.to(".scratch", {"clip-path": "inset(0% 0% 0% 0%)"})
    new ScrollMagic.Scene({
      offset: 4500,
      duration: 500,
      triggerHook: 0
    })
    .setTween(claw)
    .addTo(controller)

    //Text animations
    const p = document.querySelectorAll('[data-offset]')
    for (let i = 0; i < p.length; i++) {
      p[i].style.opacity = 0
      const fade = gsap.to(p[i], {opacity: 1})
      new ScrollMagic.Scene({
        offset: p[i].dataset.offset,
        duration: this.height * .3,
        triggerHook: 0
      })
      .setTween(fade)
      .addTo(controller)
    }

    //shake in on door
    const shake = gsap.timeline()
    .to(".door-text .door", {rotateY: 0})
    .to(".door-text .mallet", {opacity: 1, rotate: 0, left: "-25%"})
    .to(".keyhole", {x: "-3%", y: "1%"})
    .to(".keyhole", {x: "3%", y: "1%"})
    .to(".keyhole", {x: "-3%", y: "-1%"})
    .to(".keyhole", {x: "3%", y: "-1%"})
    .to(".keyhole", {x: "-3%", y: "1%"})
    .to(".keyhole", {x: "0%", y: "0%"})
    new ScrollMagic.Scene({
      triggerElement: ".door-text",
      triggerHook: 0,
      duration: 1000,
    })
    .setPin('.door-text')
    .setTween(shake)
    .addTo(controller)

    //Turn around
    const turn = gsap.fromTo(".turn", {rotateY: -90}, {rotateY: 0})
    new ScrollMagic.Scene({
      triggerHook: 0,
      offset: 7200,
      duration: this.height * .15
    })
    .setTween(turn)
    .addTo(controller)

    //Bed fade
    const bed = gsap.timeline()
    .to(".bed", {opacity: 1})
    .to(".bed-container p:last-child", {opacity: 1, scale: 1.3})

    new ScrollMagic.Scene({
      triggerElement: ".bed-container",
      triggerHook: 0,
      duration: 1200
    })
    .setTween(bed)
    .setPin(".bed-container")
    .addTo(controller)

    //Door break
    const breakDoor = gsap.timeline()
    .to('.door-break div:last-child', {opacity: 1})
    .to('.door-break .door-container', {opacity: 1})
    .to('.door-break .mallet', {opacity: 1, rotate: 0, right: "-23%"})

    new ScrollMagic.Scene({
      triggerElement: ".door-break",
      triggerHook: 0,
      duration: 1000
    })
    .setTween(breakDoor)
    .setPin(".door-break")
    .addTo(controller)

    //Whisper
    const whisper = gsap.timeline()
    .to(".whisper > p", {scale: 2}, "whisper")
    .to(".whisper > p", {opacity: 0, delay: .3}, "whisper")

    new ScrollMagic.Scene({
      triggerElement: ".whisper",
      triggerHook: 0,
      duration: 1000
    })
    .setTween(whisper)
    .setPin(".whisper")
    .addTo(controller)

  },
  methods: {
    resize() {
      this.height = window.innerHeight
    }
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
    <div class="first-text">
      <p>
        She reached the corner and pulled herself around it, using her hands to yank at the angle of the wall. 
        Her terror deepened—she would not have believed that possible, but it was. It was a hundred times worse not to be able to see him or know how close he was getting. 
        She tore out fistfuls of the carpet napping pulling herself along, and she was halfway down this short hall before she noticed the bedroom door was standing wide open.
      </p>
      <img src="~assets/the-shining/shining-divider-2.svg" alt="Divider">
    </div>
    <div class="text paragraph1">
      <div class="claw">
      <p data-offset="4300">
        (Danny! O Jesus)
        She forced herself to her knees and then clawed her way to her feet, fingers slipping over the silk wallpaper.
        Her nails pulled little strips of it loose.
      </p>
      <img class="scratch" src="~assets/the-shining/claw_nails.png" alt="Scratched surface">
      <p data-offset="4450">
        She ignored the pain and half-walked, half-shambled through the doorway as Jack came around the far corner and began to lunge his way down toward the open door, leaning on the roque mallet.
      </p>
      </div>
      <p data-offset="4500">
        She caught the edge of the dresser, held herself up against it, and grabbed the doorframe.
      </p>
      <p data-offset="4700" class="dont-shut-text">
        Jack shouted at her:<br>“Don't you shut that door! Goddam you, don't you dare shut it!”
      </p>
      <div class="door-text">
        <p data-offset="4900">
          She slammed it closed and shot the bolt.
          Her left hand pawed wildly at the junk on the dresser, knocking loose coins onto the floor where they rolled in every direction.
        </p>
        <p data-offset="4900">
          Her hand seized the key ring just as the mallet whistled down against the door, making it tremble in its frame.
        </p>
        <div class="door-container keyhole" data-offset="4900">
          <img src="~assets/the-shining/mallet.png" alt="Mallet" class="mallet">
          <img src="~assets/the-shining/door.svg" class="door" alt="Door" />
          <img src="~assets/the-shining/door-frame.svg" alt="Door frame" />
        </div>
      </div>
      <p data-offset="5400">
          She got the key into the lock on the second stab and twisted it to the right. At the sound of the tumblers falling, Jack screamed.
          The mallet came down against the door in a volley of booming blows that made her flinch and step back.
          How could he be doing that with a knife in his back? Where was he finding the strength?
          She wanted to shriek Why aren't you dead? at the locked door.
      </p>
      <p data-offset="7100" class="turn">
        Instead she turned around. 
      </p>
      <p data-offset="7300">
        She and Danny would have to go into the attached bathroom and lock that door, too, in case Jack actually could break through the bedroom door.
        The thought of escaping down the dumbwaiter shaft crossed her mind in a wild burst, and then she rejected it. Danny was small enough to fit into it, but she would be unable to control the rope pull.
        He might go crashing all the way to the bottom.
      </p>
      <div class="bed-container">
        <p data-offset="7400">
        The bathroom it would have to be. And if Jack broke through into there—
        But she wouldn't allow herself to think of it.
        “Danny, honey, you'll have to wake up n—”
       </p>
       <img src="~assets/the-shining/bed.svg" class="bed" alt="Empty bed">
      <p>
        But the bed was empty.
      </p>
      </div>
      <p data-offset="7600">
        When he had begun to sleep more soundly, she had thrown the blankets and one of the quilts over him. Now they were thrown back. 
      </p>
      <p data-offset="7700">
        “I'll get you!” Jack howled. “I'll get both of you!” Every other word was punctuated with a blow from the roque hammer, yet Wendy ignored both. All of her attention was focused on that empty bed.
      </p>
      <p data-offset="7800">
        “Come out here! Unlock this goddam door!”
      </p>
      <div class="whisper">
        <p>
          “Danny?”<br> she whispered.
        </p>
      </div>
      <p data-offset="8000">
        Of course… when Jack had attacked her. It had come through to him, as violent emotions always seemed to. Perhaps he'd even seen the whole thing in a nightmare. He was hiding.
      </p>
      <p data-offset="6600">
        She fell clumsily to her knees, enduring another bolt of pain from her swollen and bleeding leg, and looked under the bed. Nothing there but dustballs and Jack’s bedroom slippers.
      </p>
      <div class="door-break">
        <div class="door-container">
          <img src="~assets/the-shining/mallet-flipped.png" alt="Mallet" class="mallet">
          <img src="~assets/the-shining/door.svg" class="door" alt="Door" />
          <img src="~assets/the-shining/door-frame.svg" alt="Door frame" />
          <img src="~assets/the-shining/shining-door-break.png" class="door-hole" alt="Door hole">
          <img src="~assets/the-shining/door-mask2.png" class="door-mask">
        </div>
        <div>
        <p data-offset="9000">
          Jack screamed her name, and this time when he swung the mallet, a long splinter of wood jumped from the door and clattered off the hardwood planking, The next blow brought a sickening, splintering crack, the sound of dry kindling under a hatchet.
        </p>
        <p data-offset="9000">
          The bloody mallet head, now splintered and gouged in its own right, bashed through the new hole in the door, was withdrawn, and came down again, sending wooden shrapnel flying across the room.
        </p>
        </div>
      </div>
      <p data-offset="6800">
        Wendy pulled herself to her feet again using the foot of the bed, and hobbled across the room to the closet. Her broken ribs stabbed at her, making her groan.
        “Danny?”
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

.entry .door {
  will-change: transform;
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

.first-text {
  height: 100vh;
  margin-top: -100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.first-text > p {
  max-width: 30em;
  text-align: center;
  margin-bottom: 3em;
}

.first-text img {
  width: 10em;
}

.first-text > * {
  opacity: 0;
}

p {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  max-width: 30rem;
}

.text {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 2rem;
}

.text p {
  opacity: 0;
  margin-bottom: 5rem;
}

.claw {
  position: relative;
  width: 100%;
  margin-bottom: 5em;
}

.claw p {
  max-width: 30em;
}

.claw img {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 35%;
  right: 5%;
  top: -30%;
  transform-origin: 50% 0%;
  clip-path: inset(0% 0% 100% 0%);
}

.dont-shut-text {
  align-self: flex-end;
  text-align: right;
}

.door-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
}

.door-text > p {
  width: 30em;
}

.door-text .door-container {
  position: relative;
  width: 15em;
  margin-bottom: 5rem;
}

.door-text .door-container img {
  width: 100%;
  top: 0;
  left: 0;
}

.door-text .door-container img:not(.mallet) {
  position: absolute;
}

.door-text .door-container .mallet {
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: rotate(-45deg);
  top: 20%;
  left: -50%;
}

.door-text .door {
  transform: rotateY(70deg);
  transform-origin: 5% 50%;
}

.bed-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 2em;
}

.bed-container .bed {
  opacity: 0;
}

.bed-container p:last-child {
  font-size: 2rem;
  transform-origin: bottom left;
}

.door-break .door-container {
  width: 60%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
}

.door-break .door-container img {
  height: 110vh;
}

.door-break .door-container img:not(.mallet) {
  position: absolute;
  right: 0;
  top: 0;
}

.door-break .door-container .mallet {
  position: absolute;
  z-index: 2;
  width: 50vw;
  height: auto;
  top: 23%;
  right: -50%;
  opacity: 0;
  transform: rotate(90deg);
}

.door-break {
  width: 100%;
  height: 110vh;
}

.door-break div:last-child {
  width: 35%;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 5;
  opacity: 0;
}

.door-break .door-mask {
  z-index: 3;
}

.whisper {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.whisper > p {
  opacity: 1;
}
</style>