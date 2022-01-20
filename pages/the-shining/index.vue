<script>
export default {
  layout: "the-shining",
  mounted: function () {
    gsap.to("h2 span", {
      opacity: 1,
      duration: 0.75,
      stagger: 0.3,
      delay: 0.3,
      y: 0,
    });
    gsap.to("img", {
      opacity: 1,
      duration: 0.75,
      delay: 1.4,
    });
  },
};
</script>

<template>
  <section>
    <h1><span>Stephen</span> King</h1>
    <p>1977</p>
    <div>
      <img
        src="~assets/the-shining/character-jack.svg"
        alt="Jack"
        class="jack"
      />
      <h2>
        <span>STEPHEN</span><br /><span>KING'S THE</span><br />
        <span>SHINING</span>
      </h2>
    </div>
    <ul>
      <li><span>4/5</span> goodreads</li>
      <li><span>93%</span> scrollreaders</li>
    </ul>
    <p class="summary">
      The Shining centers on the life of Jack Torrance, an aspiring writer and
      recovering alcoholic who accepts a position as the off-season caretaker of
      the historic Overlook Hotel.
    </p>
    <NuxtLink to="the-shining/book" class="cta">Try book preview</NuxtLink>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("~assets/the-shining/shining-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

p {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

h1 > span {
  font-weight: normal;
}

h2 {
  color: var(--black);
  font-family: "Frizquadratac";
  font-size: 7.5rem;
}

h2 > span {
  position: relative;
  z-index: 0;
  transform: translateY(2em);
  opacity: 0;
}

div {
  position: relative;
}

div > img {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;
  width: 15em;
  opacity: 0;
}

.summary {
  font-size: 1.3rem;
  max-width: 30em;
}

ul {
  list-style: none;
  display: flex;
  gap: 2em;
  margin: 1em;
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
</style>
