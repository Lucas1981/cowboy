import Thing from "./Thing";
import Bullet from './Bullet';
import { COWBOY_STATES, DIRECTIONS, POINTS } from './constants';

const TIME_TO_NEXT_SHOT = 600;
const TIME_TO_NEXT_EXPLOSION = 500;
const FRAMES_PER_SECOND = 60;
const PIXELS_PER_FPS = 200 / FRAMES_PER_SECOND;
const PIXELS_PER_THOUSAND_MILISECONDS = PIXELS_PER_FPS * FRAMES_PER_SECOND / 1000;
const DEBUG = false;

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

export default class Cowboy extends Thing {

  private momentLastFired;
  private dying: boolean;
  private lastProgressMoment;
  private animations;
  private state;
  private stateChanged: boolean;
  private previousState;

  constructor(
    x, y, direction, color,
    private maxWidth,
    private maxHeight,
    private controls,
    private controlsMap,
    private things,
    private sound,
    private animationFactory,
    private cowboyType
  ) {
    super(x, y, direction, color);
    this.momentLastFired = (+new Date()) - TIME_TO_NEXT_SHOT;
    this.dying = false;
    this.lastProgressMoment = new Date();
    this.animations = animationFactory.getNewCowboyAnimations(cowboyType);
    this.state = COWBOY_STATES.walking;
    this.stateChanged = false;
    this.previousState = this.state;
  }

  public draw(ctx) {
    if(this.stateChanged === true) {
      this.stateChanged = false;
      this.animations[this.state][this.direction].reset();
    }
    let rotatedPoints = null;

    this.animations[this.state][this.direction].draw(this.x, this.y, ctx);

    if(DEBUG) {
      let offsetX = this.x - this.animations.width / 2;
      let offsetY = this.y - this.animations.height / 2;
      ctx.rect(offsetX, offsetY, this.animations.width, this.animations.height);
      ctx.stroke();
    }

  }

  public progress() {
    let now = new Date();
    let elapsedTime = (+now) - (+this.lastProgressMoment);

    if(this.noWalkingKeyPressed()) this.state = COWBOY_STATES.standing;
    else this.state = COWBOY_STATES.walking;

    this.checkStateChanged();

    if(this.controls[this.controlsMap.left]) {
      this.direction = DIRECTIONS.left;
      this.moveLeft(elapsedTime);
    }
    if(this.controls[this.controlsMap.right]) {
      this.direction = DIRECTIONS.right;
      this.moveRight(elapsedTime);
    }
    if(this.controls[this.controlsMap.up]) {
      this.direction = DIRECTIONS.up;
      this.moveUp(elapsedTime);
    }
    if(this.controls[this.controlsMap.down]) {
      this.direction = DIRECTIONS.down;
      this.moveDown(elapsedTime);
    }
    if(this.controls[this.controlsMap.fire]) {
      this.shoot();
    }
    this.lastProgressMoment = now;
  }

  public shoot() {
    if(this.allowedToShoot()) {
      let bullet = new Bullet(this.x, this.y, this.direction, this.animationFactory, this);
      this.things.push(bullet);
      this.sound.playGunshotSound();
      this.momentLastFired = new Date();
    }
  }

  public die() {
    this.sound.playDyingHumanSound();
    this.dying = true;
    this.state = COWBOY_STATES.standing;
  }

  public setControls(controls) {
    this.controls = controls;
  }

  public allowedToShoot(): boolean {
    let now = new Date();
    return (+now) - (+this.momentLastFired) >= TIME_TO_NEXT_SHOT;
  }

  public deathInProgress(): boolean {
    return this.dying;
  }

  public getTip() {
    let newX = POINTS[0].x * this.cos(this.direction) - POINTS[0].y * this.sin(this.direction);
    let newY = POINTS[0].y * this.cos(this.direction) + POINTS[0].x * this.sin(this.direction);
    return {
      x: this.x + newX,
      y: this.y + newY
    };
  }

  public getColorId() {
    return this.color;
  }

  public shouldDie() {
    return false;
  }

  public canShoot(): boolean {
    return true;
  }

  public getPoints() {
    return POINTS;
  }

  private checkStateChanged() {
    if(this.state !== this.previousState) {
      this.stateChanged = true;
      this.previousState = this.state;
    }
  }

  private noWalkingKeyPressed() {
    return !(
      this.controls[this.controlsMap.left] ||
      this.controls[this.controlsMap.right] ||
      this.controls[this.controlsMap.up] ||
      this.controls[this.controlsMap.down]
    );
  }

  private moveUp(timeDelta) {
    let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
    this.y -= step;
  }

  private moveDown(timeDelta) {
    let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
    this.y += step;
  }

  private moveLeft(timeDelta) {
    let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
    this.x -= step;
  }

  private moveRight(timeDelta) {
    let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
    this.x += step;
  }

};
