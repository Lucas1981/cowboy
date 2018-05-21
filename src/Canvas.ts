const BACKGROUND = '#e2b973';

export default class Canvas {

  private canvasPointer;
  private context;

  constructor(maxWidth, maxHeight, background = BACKGROUND) {
    this.canvasPointer = document.getElementById('canvas');
    this.context = this.canvasPointer.getContext("2d");
    this.canvasPointer.width = maxWidth;
    this.canvasPointer.height = maxHeight;
  }

  public getContext() {
    return this.context;
  }

  public clearCanvas() {
    this.context.fillStyle = BACKGROUND;
    this.context.fillRect(0, 0, this.canvasPointer.width, this.canvasPointer.height);
  }

  public drawScore(red, blue) {
    this.context.font = "bold 32px 'Courier New'";
    this.context.textAlign = "center";

    this.context.fillStyle = "red";
    this.context.fillText(red, this.canvasPointer.width / 2 - 100, 50);

    this.context.fillStyle = "blue";
    this.context.fillText(blue, this.canvasPointer.width / 2 + 100, 50);
  }

};
