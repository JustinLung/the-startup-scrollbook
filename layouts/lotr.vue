<template>
  <main>
    <div class="background-color"></div>
    <div class="background-image"></div>
    <Nuxt />
  </main>
</template>

<style scoped>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~assets/lotr/scratched-surface-texture.jpg');
  background-size: 130%;
  background-position: 0% 50%;
  mix-blend-mode: color-burn;
  opacity: .4;
  z-index: -1;
}

.background-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--lotr-beige);
    z-index: -1;
}
</style>