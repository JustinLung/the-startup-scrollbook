class Particle {
  constructor(ctx) {
    this.ctx = ctx
    this.x = Math.random() * window.innerWidth
    this.y = window.innerHeight + (Math.random() * 300)
    this.speed = random(2,4)
    this.size = random(3,4.5, false) 
    this.opacity = .4
    this.frequency = random(1,2, false)
  }

  update() {
    if(this.y < window.innerHeight * .2 || this.opacity <= 0) {
      this.opacity -= 0.01
    }
    if(this.y <= 0) {
      return
    }
    this.y -= this.speed
    this.x += 2*Math.sin(this.frequency*(this.y/window.innerHeight)*2*Math.PI)
  }

  draw() {
    this.ctx.fillStyle = `rgba(253, 106, 2, ${this.opacity})`
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill()
  }
}

function random(min, max, floor) {
  return floor ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min + 1) + min
}
export default Particle