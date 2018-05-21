export default class Collision {

  private comparisonContext;
  private bulletSourceData;

  constructor(animationFactory) {
    let comparisonCanvas;
    let comparisonContext;
    let sourceCanvas;
    let sourceContext;
    let bulletSourceAnimation = animationFactory.getNewBulletAnimation();

    comparisonCanvas = document.createElement('canvas');
    comparisonCanvas.width = bulletSourceAnimation.width;
    comparisonCanvas.height = bulletSourceAnimation.height;
    this.comparisonContext = comparisonCanvas.getContext('2d');

    sourceCanvas = document.createElement('canvas');
    sourceCanvas.width = bulletSourceAnimation.width;
    sourceCanvas.height = bulletSourceAnimation.height;
    sourceContext = sourceCanvas.getContext('2d');

    bulletSourceAnimation.animation.draw(0, 0, sourceContext);

    this.bulletSourceData = sourceContext.getImageData(
      0, 0, bulletSourceAnimation.width, bulletSourceAnimation.height
    ).data;

  }

  public bulletCollidesWithOpponent(bullet, opponent): boolean {
    if(this.squareBoxCollision(bullet, opponent) && this.pixelCollision(bullet, opponent)) {
      return true;
    }
    return false;
  }

  private squareBoxCollision(bullet, opponent): boolean {
    let startThisX = bullet.x - bullet.animation.width / 2;
    let startThisY = bullet.y - bullet.animation.height / 2;
    let endThisX = startThisX + bullet.animation.width;
    let endThisY = startThisY + bullet.animation.height;

    let startOpponentX = opponent.x - opponent.animations.width / 2;
    let startOpponentY = opponent.y - opponent.animations.height / 2;
    let endOpponentX = startOpponentX + opponent.animations.width;
    let endOpponentY = startOpponentY + opponent.animations.height;

    if(
      (startThisX >= startOpponentX &&
      startThisX <= endOpponentX &&
      startThisY >= startOpponentY &&
      startThisY <= endOpponentY) ||

      (endThisX >= startOpponentX &&
      endThisX <= endOpponentX &&
      endThisY >= startOpponentY &&
      endThisY <= endOpponentY)
    ) {
      return true;
    }
    return false;
  }

  private pixelCollision(bullet, opponent): boolean {

    /* 1. Isolate the part where there is overlap */
    let bulletStartX = Math.floor(
      bullet.x - opponent.x + (opponent.animations.width / 2) - (bullet.animation.width / 2)
    );

    let bulletStartY = Math.floor(
      bullet.y - opponent.y + (opponent.animations.height / 2) - (bullet.animation.height / 2)
    );

    let bulletStopX = bullet.animation.width;
    let bulletStopY = bullet.animation.height;
    let width = bullet.animation.width;
    let opponentData;

    if(bulletStartX < 0) {
      bulletStartX = 0;
    }
    if(bulletStartY < 0) {
      bulletStartY = 0;
    }
    if(bulletStartX + bulletStopX > opponent.animations.width) {
      bulletStopX = opponent.animations.width - bulletStartX;
    }
    if(bulletStartY + bulletStopY > opponent.animations.height) {
      bulletStopY = opponent.animations.height - bulletStartY;
    }

    /* 2. Print the pixels of the opponent frame onto the comparison canvas */
    opponent.animations[opponent.state][opponent.direction].drawPart(
      bulletStartX,
      bulletStartY,
      bulletStopX,
      bulletStopY,
      this.comparisonContext
    );

    opponentData = this.comparisonContext.getImageData(0, 0, bullet.animation.width, bullet.animation.height).data;

    /* 3. Compare the comparison canvas to the copy of the bullet */
    for(let i = 0; i < bulletStopX; i++) {
      for(let j = 0; j < bulletStopY; j++) {
        let offset = (i * 4) + (j * width * 4);

        if(this.bulletSourceData[offset + 3] !== 0 && opponentData[offset + 3] !== 0) {
          return true;
        }
      }
    }

    return false;
  }
};
