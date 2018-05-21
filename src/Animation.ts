import { LOOP_TYPES } from './constants';

export default class Animation {

  private frame: number;
  private start: any;

  constructor(
    private framesPerSecond: number,
    private image,
    private frameWidth: number,
    private frameHeight: number,
    private numberOfFrames: number,
    private framesPerRow: number,
    private offsetRow: number,
    private offsetCol: number,
    private loopType: number
  ) {
    this.frame = 0;
    this.start = new Date();
  }

  public reset(): number {
    this.start = new Date();
    return this.start;
  }

  public draw(x: number, y: number, ctx: any): boolean {
    let offsetX, offsetY;

    this.frame = this.determineFrame();
    if(this.frame === -1) return false;

    offsetX = (this.frame % this.framesPerRow) + this.offsetCol;
    offsetY = Math.floor(this.frame / this.framesPerRow) + this.offsetRow;

    ctx.drawImage(
      this.image,
      offsetX * this.frameWidth,
      offsetY * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      x - this.frameWidth / 2,
      y - this.frameHeight / 2,
      this.frameWidth,
      this.frameHeight
    );
    return true;
  }

  public drawPart(
    startX: number,
    startY: number,
    stopX: number,
    stopY: number,
    ctx: any
  ): boolean {
    let offsetX: number;
    let offsetY: number;

    this.frame = this.determineFrame();
    if(this.frame === -1) return false;

    offsetX = (this.frame % this.framesPerRow) + this.offsetCol;
    offsetY = Math.floor(this.frame / this.framesPerRow) + this.offsetRow;

    ctx.drawImage(
      this.image,
      startX + offsetX * this.frameWidth,
      startY + offsetY * this.frameHeight,
      stopX,
      stopY,
      0,
      0,
      stopX,
      stopY
    );
    return true;
  }

  public determineFrame(): number {
    let now = new Date();
    let elapsedTime: number = (+now) - (+this.start);
    let frame: number = Math.round(this.framesPerSecond * elapsedTime);
    let compFrame: number;

    if(this.loopType == LOOP_TYPES.noLoop && frame > this.numberOfFrames) {
      frame = -1;
    }
    else if(this.loopType == LOOP_TYPES.loop) {
      frame %= this.numberOfFrames;
    }
    else if(this.loopType == LOOP_TYPES.loopBackAndForth) {
      let compFrame = frame % Math.floor(this.numberOfFrames * 1.5);
      if(compFrame >= this.numberOfFrames) {
        frame = Math.floor(this.numberOfFrames * 1.5) - compFrame;
      }
      else {
        frame = compFrame;
      }
    }
    else {
      frame = -1;
    }
    return frame;
  }
};
