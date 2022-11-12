import React from 'react';
import timeSignature from '../images/4-4.png';
import percussion from '../images/percussion.png';
import questionMark from '../images/questionMark.png';
import inFrame from '../images/inFrame.png';
import instructions from '../images/instructions.png';
import keyboard from '../images/keyboard.jpg';
import listenOrStart from '../images/listenOrStart.png';
import metronome from '../images/metronome.png';
import noRefresh from '../images/noRefresh.jpeg';
import noteColors from '../images/noteColors.png';
import notes from '../images/notes.jpg';
import popUp from '../images/popUp.png';
import sheetMusic from '../images/sheetMusic.png';
import sound from '../images/sound.jpeg';
import start from '../images/start.jpg';

// 15
const textArray = ['In this experiment, you will be taught drum music notation. You will learn note lengths and different drums.',

  ' For each lesson, you will learn either a new note, a new instrument, or learn at a faster tempo (Tempo is just the speed at which the music is played).',

  'During each activity in the lesson, you will play instruments using the keys on your keyboard. Your accuracy and your timing will be measured.',

  `
During these activities, the next note to play will be highlighted in blue.
Notes that are played on time and with the right instrument will be highlighted in green. Notes that are played with the incorrect
instrument or too early or late will be highlighted in red.
`,

  `
For each activity, you will have the option to Listen or Start the activity. Listening will play the activity for you once first, and starting the activity will start your attempt.
There is no penalty for listening first.
`,

  `
When the activity starts, a metronome will count out four beats first. Then, you will play along to the metronome.`,

  `
Other notes:`,

  `Please enable microphone and camera access.
`,

  '                Please ensure your face is always in the frame of the camera.',

  '                Turn your sound on. If you experience difficulty with bluetooth headphones, try wired headphones or play sounds on your computer speakers.',

  '                Do not refresh the page or press the back button at any time.',
  '              Please read each lesson and instructions carefully.',
  `                  Each lesson is taught in 4/4 time. This is called the time signature. 4/4 time means that each measure will have four beats in it, and that a
  quarter note will correspond to one beat (you'll learn what a quarter note is later.)`,

  '                  Each lesson is taught on the percussion clef, as per drum notation.',

  'Ready to start? Click down below to start the lessons.',

];
const imageArray = [questionMark,
  sheetMusic,
  keyboard,
  noteColors,
  listenOrStart,
  metronome,
  notes,
  popUp,
  inFrame,
  sound,
  noRefresh,
  instructions,
  timeSignature,
  percussion,
  start,
];
const altArray = ['alt1', 'alt2', 'alt3'];

const IntroText = ({ page }) => {
  return (
    <div className="infinity-text-holder-component">
      <img className="infinity-instructions-image" alt={altArray[page]} src={imageArray[page]} />
      <div className="infinity-text-holder-text">{textArray[page]}</div>

    </div>
  );
};

export default IntroText;
