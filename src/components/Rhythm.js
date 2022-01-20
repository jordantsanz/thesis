/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { TAP_VOLUME, METRONOME_VOLUME } from '../lib/constants';
import NextButton from './Exercises/NextButton';
import VexNotes from './Vex';
// eslint-disable-next-line no-unused-vars

class Rhythm extends Component {
  constructor() {
    super();
    this.state = {
      notes: null,
      vexNotes: null,
      bps: null,
      durationArray: null,
      correctTimes: null,
      playing: false,
      userAttempting: false,
      metronomeAudio: new Audio('https://aptitune.s3.amazonaws.com/metronomeClick.wav'),
      tapAudio: new Audio('https://aptitune.s3.amazonaws.com/click2.wav'),
      clickTimes: null,
      baselineTime: null,
      date: new Date(),
      errorArray: null,
      success: null,
      correctnessArray: [],
      rerender: false,
      foundIndexes: [],
      rightAdjust: '12vw',
      countDownNumber: null,
      timeDelay: 0,
      attempts: 0,
      sentCompleted: false,
    };
  }

  componentDidMount = () => {
    this.initializeRhythmExercise(this.props.notes);
  }

  initializeRhythmExercise = (noteArray) => {
    let notes = noteArray;
    if (notes === null || notes === undefined) {
      notes = this.props.notes;
    }

    // format notes for vexflow
    const vexNotes = this.formatForVex(notes);
    this.setState({ vexNotes });

    // prep for exercise start
    const bps = this.props.bpm / 60;
    this.setState({ bps });

    const durationArray = this.createDurationArray(notes, bps, vexNotes);
    this.setState({ durationArray });
    console.log('duration array', durationArray);
  }

  determineKeyPress = (note) => {
    return note.keys[0].charAt(0);
  }

  createDurationArray = (noteArray, beatsPerSecond, vexNotesArray) => {
    let notes = noteArray;
    console.log('notesArr:', notes);
    if (notes === null || notes === undefined) {
      notes = this.props.notes;
    }

    let bps = beatsPerSecond;
    if (bps === null || bps === undefined) {
      bps = this.state.bps;
    }
    const correctTimes = [];
    const durationArray = [];
    const keyArray = [];
    const beatValue = this.getTimeSignatureDenominator();
    let timeDelay = 0;

    let firstNoteFound = false;
    for (let i = 0; i < notes.length; i += 1) {
      const duration = this.calculateDuration(notes[i], beatValue, bps);
      // eslint-disable-next-line no-unused-vars
      const keyPress = this.determineKeyPress(vexNotesArray[i]);
      if (this.isRest(notes[i])) {
        console.log('i', i, 'isRest!');
        if (durationArray.length > 0) {
          durationArray[durationArray.length - 1] += duration;
        }
        if (!firstNoteFound) {
          timeDelay += duration;
        }

        // correctTimes[correctTimes.length - 1] = cumulativeTime; // replace last entry with cumulative time
      } else if (durationArray.length < notes.length && i < notes.length - 1) {
        firstNoteFound = true;
        durationArray.push(duration);
        keyArray.push(keyPress);
      } else if (durationArray.length < notes.length && i === notes.length - 1) {
        firstNoteFound = true;
        durationArray.push(duration);
        keyArray.push(keyPress);
      }
    }

    // calculate correct times separately
    let j = 0;
    let found = false;
    let cumulativeTime = 0;
    while (j < notes.length && !found) {
      if (!this.isRest(notes[j])) {
        found = true;
      } else {
        cumulativeTime += this.calculateDuration(notes[j], beatValue, bps) * 1000;
        j += 1;
      }
    }

    for (let i = 0; i < durationArray.length; i += 1) {
      correctTimes.push({ cumulativeTime, key: keyArray[i] });
      cumulativeTime += durationArray[i] * 1000;
    }
    console.log('durationArray', durationArray, 'correctTimes', correctTimes, 'timeDelay', timeDelay);
    this.setState({ correctTimes, timeDelay });
    return durationArray;
  }

  isRest = (note) => {
    if (note.includes('r')) {
      return true;
    } else {
      return false;
    }
  }

  calculateDuration = (noteCode, beatValue, bps) => {
    const noteDuration = this.getNoteDurationAsNumber(noteCode);
    console.log('noteDuration:', noteDuration, 'beatValue', beatValue);
    const duration = noteDuration / (beatValue * bps);
    return duration;
  }

  getTimeSignatureDenominator = () => {
    const arr = this.props.timeSignature.split('/');
    const denom = parseInt(arr[1], 10);
    return 4 / denom;
  }

  getNoteDurationAsNumber = (duration) => {
    let noteValue = 0;

    if (duration === '16' || duration === '16r') {
      noteValue = 0.25;
    } else if (duration === '8' || duration === '8r') {
      noteValue = 0.5;
    } else if (duration === '8d' || duration === '8dr') {
      noteValue = 0.75;
    } else if (duration === '8dd' || duration === '8ddr') {
      noteValue = 0.875;
    } else if (duration === '8ddd' || duration === '8dddr') {
      noteValue = 0.9375;
    } else if (duration === 'q' || duration === 'qr') {
      noteValue = 1;
    } else if (duration === 'qd' || duration === 'qdr') {
      noteValue = 1.5;
    } else if (duration === 'qdd' || duration === 'qddr') {
      noteValue = 1.75;
    } else if (duration === 'qddd' || duration === 'qdddr') {
      noteValue = 1.875;
    } else if (duration === 'h' || duration === 'hr') {
      noteValue = 2;
    } else if (duration === 'hd' || duration === 'hdr') {
      noteValue = 3;
    } else if (duration === 'hdd' || duration === 'hddr') {
      noteValue = 3.5;
    } else if (duration === 'hddd' || duration === 'hdddr') {
      noteValue = 3.75;
    } else if (duration === 'w' || duration === 'wr') {
      noteValue = 4;
    } else if (duration === '1/2' || duration === '1/2r') {
      noteValue = 8;
    }
    const value = noteValue;
    return value;
  }

  formatForVex = (noteArray) => {
    let notes = noteArray;
    if (notes === null || notes === undefined) {
      notes = this.props.notes;
    }
    const vexNotes = [];
    for (let i = 0; i < notes.length; i += 1) {
      const vexNote = { clef: 'treble', keys: ['f/4'], duration: notes[i] };
      vexNotes.push(vexNote);
    }
    return vexNotes;
  }

  renderVexNotes = () => {
    // eslint-disable-next-line no-unused-vars
    const colorArray = ['blue', 'green', 'red', 'purple'];
    const rand = parseInt(4 * Math.random(), 10);
    const color = colorArray[rand];
    this.getPixelDimensions();
    if (this.state.vexNotes === null) {
      return (
        <div />
      );
    } else {
      console.log('vexNotes rendering', this.state.correctnessArray);
      // style={{ position: 'relative', right: this.state.rightAdjust }}
      return (
        <div>
          <VexNotes
            notes={this.state.vexNotes}
            timeSignature={this.props.timeSignature}
            clef="treble"
            keySignature="C"
            divId="rhythm-stave"
            mode="rhythm"
            color={color}
            correctnessArray={this.state.correctnessArray}
            rerender={this.state.rerender}
            rerenderComplete={() => { this.setState({ rerender: false }); }}
            setMeasureCount={this.setMeasureCount}
          />
        </div>
      );
    }
  }

  getPixelDimensions = () => {
    console.log('window resizing');
    const win = window;
    const doc = document;
    const docElem = doc.documentElement;
    const body = doc.getElementsByTagName('body')[0];
    const x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    const y = win.innerHeight || docElem.clientHeight || body.clientHeight;
    console.log('window x:', x);
    console.log('window y:', y);
  }

  setMeasureCount = (count) => {
    console.log('setMeasureCount called');
    const adjust = count * 6;
    let adjustAmount = adjust.toString();
    adjustAmount = adjustAmount.concat('vw');
    console.log('setting rightAdjust to ', adjustAmount, 'adjust');
    this.setState({ rightAdjust: adjustAmount });
  }

  renderArray = (arr) => {
    if (arr !== null) {
      return (
        <ul>
          {arr.map((element) => {
            return (
              <li>{element}</li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }

  getBeatsPerMeasure = () => {
    const arr = this.props.timeSignature.split('/');
    return parseInt(arr[0], 10);
  }

  calculateBaselineTimes = (intervalTime, bpm) => {
    /*
    We're calculating this before the first click should happen --> otherwise the timing of the first click can't be assessed
    */

    const d = new Date();
    const baselineTime = d.getTime() + (intervalTime * (bpm + 1));
    this.setState({ baselineTime });
  }

  playMetronome = (playAnswer) => {
    if (!playAnswer) {
      window.addEventListener('keydown', this.handleKeyDown);
    }
    this.setState({ clickTimes: null, baselineTime: null, playing: true });
    console.log('playing metronome');
    const intervalTime = 1000 / this.state.bps;
    const bpm = this.getBeatsPerMeasure();
    const introTime = intervalTime * bpm;
    const totalTime = this.getTotalTime() * 1000 + introTime;
    this.calculateBaselineTimes(intervalTime, bpm);
    console.log('totalTime:', totalTime, 'intervalTime:', intervalTime);
    let timeElapsed = 0;

    console.log('totalTime', totalTime);
    if (this.state.countDownNumber === null) {
      this.setState({ countDownNumber: bpm });
    }

    let countDownNumber = bpm + 1;
    if (!playAnswer) {
      console.log('listening for student feedback');
    }

    /* Set interval */
    const interval = setInterval(() => {
      if (countDownNumber > 0) {
        countDownNumber -= 1;
        this.setState({ countDownNumber });
      }
      if (this.state.baselineTime !== null) {
        const date = new Date();
        console.log('click at ', date.getTime() - this.state.baselineTime);
      } else {
        console.log('click ');
      }
      this.state.metronomeAudio.volume = METRONOME_VOLUME;
      this.state.metronomeAudio.pause();
      this.state.metronomeAudio.play();

      if (timeElapsed === introTime && playAnswer) {
        console.log('playing answer clicks with timeDelay', this.state.timeDelay);
        setTimeout(() => {
          this.playAnswerClicks(0);
        }, this.state.timeDelay * 1000);
      }
      timeElapsed += intervalTime;
      if (timeElapsed >= totalTime) {
        console.log('exiting interval');
        setTimeout(() => {
          this.setState({ playing: false, userAttempting: false });
          this.checkAnswers(this.state.clickTimes, '', true, playAnswer);
          this.setState({ countDownNumber: null, playing: false });
          if (!playAnswer) {
            window.removeEventListener('keydown', this.handleKeyDown);
          }
        }, 1000);

        if (!playAnswer) {
          this.setState((prevState) => {
            return (
              { attempts: prevState.attempts + 1 }
            );
          });
        }
        clearInterval(interval);
      }
    }, intervalTime);
  }

  checkAnswers = (cTimes, optionalKey, final, playAnswer) => {
    let clickTimes = cTimes;
    if (clickTimes === null) {
      clickTimes = this.state.clickTimes;
    }

    if (clickTimes === null && this.state.correctTimes.length === 0) {
      this.setState({ success: true });
    }
    if (clickTimes !== null) {
      const errorArray = [];
      let success = true;
      const correctnessArray = [];
      const foundIndexes = [];

      console.log('click times', clickTimes, 'correctTimes', this.state.correctTimes);
      // if (clickTimes.length === 1) {
      //   correctnessArray.push(1);
      //   this.setState({ correctnessArray });
      // } else {
      // simple checking algorithm -- checks each note in order
      for (let i = 0; i < clickTimes.length; i += 1) {
        const userTime = clickTimes[i];
        const correctTime = this.state.correctTimes[i].cumulativeTime;
        const correctKey = this.state.correctTimes[i].key;
        const error = Math.abs(correctTime - userTime);
        errorArray.push(error);
        if (error > 350 || correctKey !== optionalKey) {
          console.log('note ', i + 1, 'off by error', error);
          success = false;
          correctnessArray.push(0);
        } else {
          correctnessArray.push(1);
        }
      }
      console.log('correctnessArray in checkAnswers', correctnessArray);

      if (final && !success) {
        // this.props.registerFailure();
      } else if (final && success && !this.state.sentCompleted) {
        this.setState({ sentCompleted: true });
      }
      this.setState({
        success, errorArray, correctnessArray, rerender: true, foundIndexes,
      });
      // }
    } else if (final && !playAnswer) {
      // this.props.registerFailure();
    }
  }

  getUpperBound = (i, foundIndexes) => {
    for (let j = i; j < foundIndexes.length; j += 1) {
      if (foundIndexes[j] !== null) {
        return j;
      }
    }
    return null;
  }

  getLowerBound = (i, foundIndexes) => {
    for (let j = i; j >= 0; j -= 1) {
      if (foundIndexes[j] !== null) {
        return j;
      }
    }
    return 0;
  }

  handleKeyDown = (event) => {
    console.log('handling keydown', event.code);
    event.preventDefault();
    let { clickTimes } = this.state;
    const d = new Date();
    if (clickTimes === null) {
      clickTimes = [];
    }

    // spacebar click
    if (event.code === 'Space' && this.state.userAttempting) {
      this.lightSpaceBar();
      this.state.tapAudio.volume = TAP_VOLUME;
      this.state.tapAudio.pause();
      this.state.tapAudio.play();
      const timeClicked = d.getTime();
      clickTimes.push(timeClicked);
      clickTimes = this.processUserInput(clickTimes);
      this.checkAnswers(clickTimes, 'a');
      console.log('correctnessArray', this.state.correctnessArray);
      this.setState({ clickTimes });
    }

    // f-key click
    if (event.code === 'KeyF' && this.state.userAttempting) {
      this.lightSpaceBar();
      this.state.tapAudio.volume = TAP_VOLUME;
      this.state.tapAudio.pause();
      this.state.tapAudio.play();
      const timeClicked = d.getTime();
      clickTimes.push(timeClicked);
      clickTimes = this.processUserInput(clickTimes);
      this.checkAnswers(clickTimes, 'f');
      console.log('correctnessArray', this.state.correctnessArray);
      this.setState({ clickTimes });
    }

    if (event.code === 'KeyJ' && this.state.userAttempting) {
      this.lightSpaceBar();
      this.state.tapAudio.volume = TAP_VOLUME;
      this.state.tapAudio.pause();
      this.state.tapAudio.play();
      const timeClicked = d.getTime();
      clickTimes.push(timeClicked);
      clickTimes = this.processUserInput(clickTimes);
      this.checkAnswers(clickTimes, 'e');
      console.log('correctnessArray', this.state.correctnessArray);
      this.setState({ clickTimes });
    }

    // j-key click
  }

  lightSpaceBar = () => {
    const spacebar = document.getElementById('rhythm-spacebar');
    spacebar.style.backgroundColor = '#FFC300';
    setTimeout(() => {
      spacebar.style.backgroundColor = '#FF9400';
    }, 100);
  }

  processClick = () => {
    let { clickTimes } = this.state;
    const d = new Date();
    if (clickTimes === null) {
      clickTimes = [];
    }
    this.state.tapAudio.pause();
    this.state.tapAudio.play();
    const timeClicked = d.getTime();
    clickTimes.push(timeClicked);
  }

  processUserInput = (clickTimes) => {
    if (this.state.baselineTime !== null && clickTimes !== null) {
      const processedClickTimes = [];
      // eslint-disable-next-line array-callback-return
      clickTimes.map((click) => {
        let time = click;
        if (click > 1000000) {
          time -= this.state.baselineTime;
        }
        processedClickTimes.push(time);
      });
      return processedClickTimes;
    } else {
      return clickTimes;
    }
  }

  playAnswerClicks = (i) => {
    console.log('durationArray', this.state.durationArray);
    if (i < this.state.durationArray.length) {
      console.log('playing click', i, 'of', this.state.correctTimes.length);
      const interval = this.state.durationArray[i] * 1000;
      console.log('playing answer with interval', interval);
      this.state.tapAudio.pause();
      this.state.tapAudio.play();
      this.lightSpaceBar();
      setTimeout(() => {
        this.playAnswerClicks(i + 1);
      }, interval);
    }
  }

  getTotalTime = () => {
    let totalTime = this.state.timeDelay / 1000;
    for (let i = 0; i < this.state.durationArray.length; i += 1) {
      totalTime += this.state.durationArray[i];
    }

    console.log('totalTime', totalTime, 'vs other', (this.state.correctTimes[this.state.correctTimes.length - 1]) / 1000);
    // const tTime = this.state.correctTimes[this.state.correctTimes.length - 1] / 1000 + 2;
    return totalTime;
  }

  playAnswer = () => {
    console.log('playing answer');
    this.setState({ playing: true });
    this.playMetronome(true);
  }

  attemptExercise = () => {
    console.log('playing answer');
    this.setState({
      userAttempting: true, clickTimes: null, rerender: true, correctnessArray: [],
    });
    this.playMetronome(false);
  }

  renderPlayButton = () => {
    if (this.state.playing) {
      return (
        <div>Playing...</div>
      );
    } else if (this.state.userAttempting) {
      return (
        <div />
      );
    } else {
      return (
        <button type="button" onClick={this.playAnswer}>play answer</button>
      );
    }
  }

  renderGoButton = () => {
    if (this.state.playing) {
      return (
        <div />
      );
    } else if (this.state.userAttempting) {
      return (
        <div>Press the space bar to the beat...</div>
      );
    } else {
      return (
        <button type="button" onClick={this.attemptExercise}>try it</button>
      );
    }
  }

  renderSuccessMessage = () => {
    if (this.state.success === null) {
      return (
        <div />
      );
    } else if (this.state.success) {
      return (
        <div>Success!</div>
      );
    } else {
      return (
        <div>Failure :(</div>
      );
    }
  }

  renderCountDown = () => {
    if (this.state.countDownNumber === null) {
      return (<div />);
    } else if (this.state.countDownNumber === 0) {
      return (
        <div className="countdown-text">GO!!</div>
      );
    } else {
      return (<div className="countdown-text">{this.state.countDownNumber}</div>);
    }
  }

  renderButtonsOrSpaceBar = () => {
    if (this.state.playing && !(this.state.success && this.state.correctnessArray.length === this.state.durationArray.length)) {
      return (
        <div>
          <div className="rhythm-spacebar" id="rhythm-spacebar" />
        </div>
      );
    } else if (!this.state.success) {
      return (
        <div className="rhythm-buttons" id="rhythm-buttons">
          <button type="submit" className="rhythm-attempt-button" onClick={this.playAnswer}>Listen</button>
          <button type="submit" className="rhythm-play-answer-button" onClick={this.attemptExercise}>Start Attempt</button>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }

  goToNext = () => {
    console.log('going to next in rhythms');
    this.props.goToNext(this.state.attempts, 'Rhythm-Sensing');
  }

  renderNextButton = () => {
    if (this.state.success && this.state.correctnessArray.length === this.state.durationArray.length) {
      return (
        <NextButton goToNext={this.goToNext} />
      );
    } else {
      return (
        <div />
      );
    }
  }

  render() {
    console.log('re-rendering');
    let boxShadow = '';
    if (this.state.success && this.state.correctnessArray.length === this.state.durationArray.length) {
      boxShadow = '0 0 50px 30px #9ef509';
    }
    return (
      <div>
        <div className="rhythmPage">
          <div className="instructions">
            {this.props.instructions}
            <br />
            <div style={{ fontSize: '0.7em' }}>If you&apos;re experiencing lag, try switching to wire headphones or playing audio out loud. When you’re ready to try it, click start attempt!</div>
          </div>
          <div className="countdown-holder">{this.renderCountDown()}</div>
          <div className="rhythm-vex-container" style={{ boxShadow }}>{this.renderVexNotes()}</div>
          {this.renderButtonsOrSpaceBar()}
          {/* <div className="rhythm-spacebar" id="rhythm-spacebar" />
        <div className="rhythm-buttons">
          <div>{this.renderPlayButton()}</div>
          <div>{this.renderGoButton()}</div>
        </div> */}
          {/* <div>{this.renderSuccessMessage()}</div> */}
          {this.renderNextButton()}
        </div>
      </div>
    );
  }
}

export default (Rhythm);