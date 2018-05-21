export default class Star {

  constructor(
    private x,
    private y,
    private brightness,
    private radius
  ) {
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0 , 2 * Math.PI);
    ctx.fillStyle = '#858356';
    ctx.fill();
    ctx.closePath();
  }
}
