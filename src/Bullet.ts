import Thing from './Thing';
import { DIRECTIONS } from './constants';
import Collision from './Collision';

const MAX_AGE = 500;
const FRAMES_PER_SECOND = 60;
const PIXELS_PER_FPS = 500 / FRAMES_PER_SECOND;
const PIXELS_PER_THOUSAND_MILISECONDS = PIXELS_PER_FPS * FRAMES_PER_SECOND / 1000;
const COLOR = 'green';
const DEBUG = false;

export default class Bullet extends Thing {

  private speed;
  private animation;
  private collision;

  constructor(
    x, y, direction, animationFactory,
    private parent
  ) {
    super(x, y, direction, COLOR);
    this.speed = PIXELS_PER_THOUSAND_MILISECONDS;
    this.timeCreated = new Date();
    this.animation = animationFactory.getNewBulletAnimation();
    this.collision = new Collision(animationFactory);
  }

  public draw(ctx) {
    if(DEBUG) {
      let offsetX = this.x - this.animation.width / 2;
      let offsetY = this.y - this.animation.height / 2;
      ctx.rect(offsetX, offsetY, this.animation.width, this.animation.height);
      ctx.stroke();
    }
    this.animation.animation.draw(this.x, this.y, ctx);
  }

  public progress() {
    let now = new Date();
    let elapsedTime = (+now) - (+this.timer);
    let step = this.speed * elapsedTime;
    let increments = this.determineDirection();
    this.x += increments.x * step;
    this.y += increments.y * step;
    this.timer = now;
    if(this.shouldDie()) this.destroy();
  }

  public determineDirection() {
    switch(this.direction) {
      case DIRECTIONS.up:
        return { x: 0, y: -1 };
      case DIRECTIONS.down:
        return { x: 0, y: 1 };
      case DIRECTIONS.left:
        return { x: -1, y: 0 };
      case DIRECTIONS.right:
        return { x: 1, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  }

  public detectCollision(things) {
    for(let thing = things.first(); thing != null; thing = thing.next) {
      if(
        thing.element.canShoot() &&
        this.parent !== thing.element &&
        this.collision.bulletCollidesWithOpponent(this, thing.element)
      ) {
        return thing;
      }
    }
    return null;
  }

  public shouldDie() {
    let now = new Date();
    return ((+now) - (+this.timeCreated)) > MAX_AGE;
  }

  public canShoot() {
    return false;
  }

  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }

  public isParent(thing) {
    return thing == this.parent;
  }

  public getParent() {
    return this.parent;
  }

};
