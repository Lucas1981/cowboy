import Star from './Star';

export default class Stars {

  private stars: Star[];

  constructor(maxWidth, maxHeight, amount) {
    this.stars = [];
    for(let i = 0; i < amount; i++) {
      let x = Math.round(Math.random() * maxWidth);
      let y = Math.round(Math.random() * maxHeight);
      let brightness = Math.round(Math.random() * 30) + 30;
      let radius = Math.round(Math.random() * 1) + 1;
      this.stars.push(new Star(x, y, brightness, radius));
    }
  }

  public draw(ctx) {
    this.stars.forEach((star) => {
      star.draw(ctx);
    });
  }

}
