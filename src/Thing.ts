export default class Thing {

  private status;
  public timeCreated;
  public timer;

  constructor(
    public x,
    public y,
    public direction,
    public color
  ) {
    this.status = true;
    this.timeCreated = new Date();
    this.timer = new Date();
  }

  public cos(val: number): number {
    return Math.cos(val * Math.PI / 180);
  }

  public sin(val: number): number {
    return Math.sin(val * Math.PI / 180);
  }

  public destroy(): void {
    this.status = false;
  }

  public isAlive(): Boolean {
    return this.status;
  }

};
