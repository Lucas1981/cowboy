export default class Sound {

  constructor() {

    this.audioContext;
    this.dyingSource;
    this.dyingSound;
    this.dyingFileBuffer;
    this.laserFileBuffer;
    this.loadingPromise;
    this.gunshotBuffer;

    let that = this;

    window.AudioContext = window.AudioContext || window.webkitAudioContext || {};
    this.audioContext = new AudioContext();
    this.dyingSource = null;
    this.dyingSound = null;
    this.dyingFileBuffer = null;
    this.gunshotBuffer = null;

    let dyingPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/dying.wav', (buffer) => {
        that.dyingFileBuffer = buffer;
        resolve();
      });
    });
    let gunshotPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/gunshot.wav', (buffer) => {
        that.gunshotBuffer = buffer;
        resolve();
      });
    });

    this.loadingPromise = Promise.all( [dyingPromise, gunshotPromise] );

  }

  getLoadingPromise() {
    return this.loadingPromise;
  }

  playGunshotSound() {
    this.playSoundFromFileBuffer(this.gunshotBuffer);
  }

  playDyingHumanSound() {
    this.playSoundFromFileBuffer(this.dyingFileBuffer);
  }

  playSoundFromFileBuffer(fileBuffer) {
    let source = this.audioContext.createBufferSource();
    source.buffer = fileBuffer;
    source.connect(this.audioContext.destination);
    source.start(0);
  }

  loadWavFile(filename, callback) {
    let request = new XMLHttpRequest();
    let thisBuffer = null;
    let that = this;
    request.open('GET', filename, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = () => {
      that.audioContext.decodeAudioData(request.response, (buffer) => {
        let source = that.audioContext.createBufferSource();
        source.buffer = buffer;
        callback(buffer);
      }, (err) => {
        console.log('There was an error');
        console.log(err);
      });
    };
    request.send();
  }

};
