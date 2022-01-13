<template>
  <section>
    <h1>Choose A Book To Preview</h1>
    <figure>
      <NuxtLink to="/lotr" class="link"><img src="~assets/Bookcover-thelordoftherings.png" alt="The Lord of the Rings Bookcover" /></NuxtLink>
      <NuxtLink to="/the-shining" class="link"><img src="~assets/Bookcover-theshining.png" alt="The Shining Bookcover" /></NuxtLink>
    </figure>
    <img src="~assets/scrollbook-logo.svg" alt="">
  </section>
</template>

<style scoped>
section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2em;
}

section > figure {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;
}

img {
  width: 15em;
}

figure .link {
  transition: .3s ease;
}

figure .link:hover {
  transform: scale(1.1);
}

section > img {
  position: absolute;
  bottom: 2em;
  left: 2em;
  width: 7em;
}
</style>
