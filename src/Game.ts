import Canvas from './Canvas';
import Sound from './Sound';
import EventHandlers from './EventHandlers';
import AnimationFactory from './AnimationFactory';
import NextAnimationFrameFactory from './NextAnimationFrameFactory';
import KeyboardInput from './KeyboardInput';
import Stars from './Stars';
import LinkedList from './LinkedList';
import Cowboy from './Cowboy';
import { COWBOY_TYPES, CONTROL_CONFIG, DIRECTIONS } from './constants';

const MAX_WIDTH = 900;
const MAX_HEIGHT = 563;
const INITIAL_DIRECTION = 0;
const RED = 'red';
const BLUE = 'blue';
const NUMBER_OF_STARS_IN_THE_SKY = 1000;
const TIME_TO_NEXT_GAME = 500;

export default class Game {

  private canvas: Canvas;
  private context: any;
  private sound: Sound;
  private animationFactory: AnimationFactory;
  private things: LinkedList;
  private request: any;
  private keyboardInput: KeyboardInput;
  private activeTank: number;
  private toggle: boolean;
  private sky: Stars;
  private gameOver: boolean;
  private timeGameEnded: Date;
  private score: { red: number, blue: number };

  constructor() {
    this.canvas = new Canvas(MAX_WIDTH, MAX_HEIGHT);
    this.context = this.canvas.getContext();
    this.sound = new Sound();
    this.animationFactory = new AnimationFactory();
    this.things = null;
    this.request = new NextAnimationFrameFactory();
    this.keyboardInput = new KeyboardInput();
    this.activeTank = 0;
    this.toggle = false;
    this.sky = new Stars(MAX_WIDTH, MAX_HEIGHT, NUMBER_OF_STARS_IN_THE_SKY);
    this.gameOver = false;
    this.timeGameEnded = new Date();
    this.score = {
      red: 0,
      blue: 0
    };

    this.initiate();
  }

  private initiate(): void {
    EventHandlers.attach(this.score, this.newGame.bind(this));
    this.animationFactory.getLoadingPromise().then(() => {
      this.sound.getLoadingPromise().then(() => {
        this.newGame();
        this.loop();
      });
    });
  }

  private loop(): void {

    this.canvas.clearCanvas();
    this.sky.draw(this.context);
    this.moveAndDrawObjects();
    if(!this.gameOver) this.detectCollision();
    this.canvas.drawScore(this.score.red, this.score.blue);

    if(this.checkGameNeedsToBeReset()) {
      this.newGame();
    }

    this.request.call(window, this.loop.bind(this));

  }

  private moveAndDrawObjects(): void {
    for(let thing = this.things.first(); thing !== null; thing = thing.next) {
      if(thing.element.isAlive() === false) {
        this.things.remove(thing.element);
      }
      else {
        if(!this.gameOver) thing.element.progress();
        thing.element.draw(this.context);
      }
    }
  }

  private detectCollision(): void {
    for(let thing = this.things.first(); thing !== null; thing = thing.next) {
      if(!thing.element.canShoot()) {
        let collider = thing.element.detectCollision(this.things);
        if(collider !== null) {
          this.handleCollision(collider, thing);
        }
      }
    }
  }

  private handleCollision(collider, thing): void {
    let otherPlayerColor;

    this.gameOver = true;
    this.timeGameEnded = new Date();
    otherPlayerColor = (collider.element.getColorId() == 'red' ? 'blue' : 'red');
    this.score[otherPlayerColor]++;
    collider.element.die();
  }

  private newGame(): void {

    this.things = new LinkedList();
    let tanks = [ new Cowboy(
      MAX_WIDTH / 6,
      MAX_HEIGHT / 2,
      DIRECTIONS.right,
      RED,
      MAX_WIDTH,
      MAX_HEIGHT,
      this.keyboardInput.state,
      CONTROL_CONFIG[0],
      this.things,
      this.sound,
      this.animationFactory,
      COWBOY_TYPES.yellow
    ), new Cowboy(
      MAX_WIDTH / 6 * 5,
      MAX_HEIGHT / 2,
      DIRECTIONS.left,
      BLUE,
      MAX_WIDTH,
      MAX_HEIGHT,
      this.keyboardInput.state,
      CONTROL_CONFIG[1],
      this.things,
      this.sound,
      this.animationFactory,
      COWBOY_TYPES.brown
    ) ];
    for(let tank in tanks) this.things.push(tanks[tank]);
    this.gameOver = false;
  }

  private checkGameNeedsToBeReset(): boolean {
    if(this.gameOver === true) {
      let now = new Date();
      if( (+now) - (+this.timeGameEnded) >= TIME_TO_NEXT_GAME) {
        return true;
      }
    }
    return false;
  }

};
