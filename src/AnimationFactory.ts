import Animation from './Animation';
import { LOOP_TYPES, COWBOY_TYPES } from './constants';

const FRAMES_PER_SECOND = 8 / 1000;
const COWBOY_WIDTH = 48;
const COWBOY_HEIGHT = 48;
const NUMBER_OF_FRAMES = 96;
const FRAMES_PER_ROW = 4;

const BROWN_COWBOY_OFFSET = 2;
const YELLOW_COWBOY_OFFSET = 0;
const DOWN = 0;
const LEFT = 1;
const RIGHT = 2;
const UP = 3;

const BULLET_WIDTH = 10;
const BULLET_HEIGHT = 10;

export default class AnimationFactory {

  private animations;
  private image;
  private bulletImage;
  private loadingPromise;

  constructor() {
    let that = this;
    let spritesheetPromise = null;
    let bulletPromise = null;

    this.animations = null;
    this.image = new Image();
    this.image.src = './img/cowboy.png';
    spritesheetPromise = new Promise((resolve, reject) => {
      that.image.onload = () => {
        resolve();
      };
    });

    this.bulletImage = new Image();
    this.bulletImage.src = './img/bullet.png';
    bulletPromise = new Promise((resolve, reject) => {
      that.bulletImage.onload = () => {
        resolve();
      };
    });

    this.loadingPromise = Promise.all([ spritesheetPromise, bulletPromise ]);

  }

  public getLoadingPromise(){
    return this.loadingPromise;
  }

  public getNewBulletAnimation() {
    return {
      animation: new Animation(
        FRAMES_PER_SECOND,
        this.bulletImage,
        BULLET_WIDTH,
        BULLET_HEIGHT,
        1, 1, 0, 0, LOOP_TYPES.loop
      ),
      width: BULLET_WIDTH,
      height: BULLET_HEIGHT
    };
  }

  public getNewCowboyAnimations(cowboyType) {
    switch(cowboyType) {
      case COWBOY_TYPES.yellow:
        return this.getYellowCowboyAnimations();
      case COWBOY_TYPES.brown:
        return this.getBrownCowboyAnimations();
      default:
        return null;
    }
  }

  public getYellowCowboyAnimations() {
    return {
      walking: {
        down: this.initiateWalkingState(DOWN, YELLOW_COWBOY_OFFSET),
        left: this.initiateWalkingState(LEFT, YELLOW_COWBOY_OFFSET),
        right: this.initiateWalkingState(RIGHT, YELLOW_COWBOY_OFFSET),
        up: this.initiateWalkingState(UP, YELLOW_COWBOY_OFFSET)
      },
      standing: {
        down: this.initiateStandingState(DOWN, YELLOW_COWBOY_OFFSET),
        left: this.initiateStandingState(LEFT, YELLOW_COWBOY_OFFSET),
        right: this.initiateStandingState(RIGHT, YELLOW_COWBOY_OFFSET),
        up: this.initiateStandingState(UP, YELLOW_COWBOY_OFFSET)
      },
      width: COWBOY_WIDTH,
      height: COWBOY_HEIGHT
    };
  }

  public getBrownCowboyAnimations() {
    return {
      walking: {
        down: this.initiateWalkingState(DOWN, BROWN_COWBOY_OFFSET),
        left: this.initiateWalkingState(LEFT, BROWN_COWBOY_OFFSET),
        right: this.initiateWalkingState(RIGHT, BROWN_COWBOY_OFFSET),
        up: this.initiateWalkingState(UP, BROWN_COWBOY_OFFSET)
      },
      standing: {
        down: this.initiateStandingState(DOWN, BROWN_COWBOY_OFFSET),
        left: this.initiateStandingState(LEFT, BROWN_COWBOY_OFFSET),
        right: this.initiateStandingState(RIGHT, BROWN_COWBOY_OFFSET),
        up: this.initiateStandingState(UP, BROWN_COWBOY_OFFSET)
      },
      width: COWBOY_WIDTH,
      height: COWBOY_HEIGHT
    };
  }

  public initiateWalkingState(offsetRow, cowboyTypeOffset) {
    return new Animation(
      FRAMES_PER_SECOND,
      this.image,
      COWBOY_WIDTH,
      COWBOY_HEIGHT,
      3, 3, offsetRow, 0 + (cowboyTypeOffset * 3), LOOP_TYPES.loopBackAndForth
    );
  }

  public initiateStandingState(offsetRow, cowboyTypeOffset) {
    return new Animation(
      FRAMES_PER_SECOND,
      this.image,
      COWBOY_WIDTH,
      COWBOY_HEIGHT,
      1, 1, offsetRow, 1 + (cowboyTypeOffset * 3), LOOP_TYPES.loop
    );
  }

};
