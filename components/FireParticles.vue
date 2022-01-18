<script>
import Particle from "./Particle"
export default {
  data: ()=>{
    return {
      particles: [],
      particleAmount: 50,
      canvas: {},
      ctx: {},
      sizes: {width: 0, height: 0}
    }
  },
  mounted: function() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')

    this.resize()
    window.addEventListener("resize", this.resize)
    
    for (let i = 0; i < this.particleAmount; i++) {
      this.particles.push(new Particle(this.ctx))
    }
    this.draw()
  },
  methods: {
    draw() {
      requestAnimationFrame(this.draw)
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].draw(this.ctx)  
        this.particles[i].update()
        if(this.particles[i].opacity <= 0) {
          this.particles.splice(this.particles.indexOf(this.particles[i]), 1)
        }
        if(this.particles.length < this.particleAmount) {
          this.particles.push(new Particle(this.ctx))
        }
      }
      
    },
    resize() {
      this.sizes.width = window.innerWidth
      this.sizes.height = window.innerHeight
      this.canvas.width = this.sizes.width
      this.canvas.height = this.sizes.height
    }
  }
}
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
canvas {
  display: block;
  position: absolute;
  inset: 0;
}
</style>