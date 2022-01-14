<script>
export default {
  layout: "lotr",
  mounted: function () {
    gsap.to(
      "h2 span",
      { opacity: 1, duration: 0.75, stagger: 0.3, delay: 0.3 },
      "group"
    );
    gsap.to(
      "h2 span",
      { letterSpacing: "0", duration: 0.75, stagger: 0.3, delay: 0.3 },
      "group"
    );
  },
};
</script>

<template>
  <section>
    <h1><span>J.R.R.</span> Tolkien</h1>
    <p>1954</p>
    <div>
      <h2 class="botw">
        <span>THE</span><br /><span>FELLOWSHIP</span>
        <span>OF THE RING</span>
      </h2>
      <img src="~assets/lotr/ring.png" alt="Ring" class="ring" />
      <img
        src="~assets/lotr/Script-grunge.png"
        alt="Script Grunge"
        class="script"
      />
    </div>
    <ul>
      <li><span>4/5</span> goodreads</li>
      <li><span>97%</span> scrollreaders</li>
    </ul>
    <p class="summary">
      A meek Hobbit from the Shire and eight companions set out on a journey to
      destroy the powerful One Ring and save Middle-earth from the Dark Lord
      Sauron.
    </p>
    <NuxtLink to="lotr/book" class="cta">Try book preview</NuxtLink>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  padding-top: 2em;
}

p {
  font-size: 1.3rem;
}

h1 > span {
  font-weight: normal;
}

div {
  position: relative;
  top: -2em;
}

h2 {
  color: var(--lotr-red);
  font-family: "Botw";
  font-size: 5rem;
  position: absolute;
  left: 50%;
  top: 2.5em;
  transform: translate(-50%);
  z-index: 99;
}

h2 span {
  opacity: 0;
  color: var(--lotr-red);
  letter-spacing: 1rem;
}

h2 span:last-child {
  white-space: nowrap;
}

img {
  transform: translate(-50%);
  left: 50%;
}

.ring {
  position: absolute;
  width: 20em;
  top: 11em;
}
.script {
  position: relative;
  width: 30em;
  top: 0em;
  transform-origin: 0 55%;
  animation-name: spin;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.summary {
  font-size: 1.3rem;
  max-width: 30em;
}

ul {
  list-style: none;
  display: flex;
  gap: 2em;
  margin-bottom: 1em;
}

li {
  font-weight: 600;
  font-size: 1.3rem;
}

li > span {
  font-weight: 300;
  font-size: 1.5rem;
}

.cta {
  color: var(--white);
  background-color: var(--dark-grey);
  text-decoration: none;
  padding: 1em 2em;
  border-radius: 0.5em;
  margin: 2em 0 3em;
  transition: 0.3s ease-in-out;
}

.cta:hover {
  transform: scale(1.1);
}

@keyframes spin {
  from {
    transform: rotate(0deg) translateX(-50%);
  }
  to {
    transform: rotate(360deg) translateX(-50%);
  }
}

@media (orientation: landscape) {
  div {
    top: -2.5em;
  }
}
</style>
