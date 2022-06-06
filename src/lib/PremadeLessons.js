/** **
 *
 * {
 *  info: {
 *          activity_type: "Rhythm-Sensing",
 *          lesson_id: 0-n,
 *          page_type: "random_activity",
 *          r: {
 *              answer_count: 0,
 *              bpm: #,
 *              cleftype: "treble",
 *              instructions: Press the "b" key...
 *              keys: [],
 *              notes: [],
 *              time_signature: "4/4",
 *              }
 *         }
 * }
 *
 */

const BPM_CONSTANTS = {
  SLOW: 60,
  MEDIUM: 75,
  FAST: 100,
};

// lesson1: quarter notes only: DONE
const lesson1r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
  ],
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4',
  // 'f/4', 'f/4', 'f/4', 'f/4'],
  notes: ['q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
  ],
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q',
  // 'q', 'q', 'q', 'q'],
  time_signature: '4/4',
};

// lesson2: half notes - DONE
const lesson2r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'f/4',
    'f/4', 'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4'],
  notes: [
    'h', 'h',
    'h', 'h',
    'h', 'q', 'q',
    'h', 'q', 'q',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'q', 'q', 'h',
    'q', 'q', 'h',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'h', 'q', 'q',
    'q', 'q', 'h',
  ],
  time_signature: '4/4',
};

// lesson3: whole notes - DONE
const lesson3r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4',
    'f/4',
    'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4',
    'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4',
    'f/4', 'f/4', 'f/4',
    'f/4'],
  notes: [
    'w',
    'w',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    'w',
    'q', 'q', 'q', 'q',
    'w',
    'q', 'q', 'h',
    'w',
    'h', 'q', 'q',
    'w',
  ],
  time_signature: '4/4',
};

// lesson4: eighth notes - Done
const lesson4r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4'],
  notes: [
    '8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    'h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
  ],
  time_signature: '4/4',
};

// lesson5: medium speed
const lesson5r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.MEDIUM,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4'],
  notes: [
    'h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
  ],
  time_signature: '4/4',
};

// lesson6: fast speed
// const lesson6r = {
//   answer_count: 0,
//   bpm: BPM_CONSTANTS.FAST,
//   cleftype: 'treble',
//   instructions: '',
//   keys: ['f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4'],
//   notes: [
//     'h', '8', '8', '8', '8',
//     'q', 'h', '8', '8',
//     'h', '8', '8', 'q',
//     '8', '8', 'q', '8', '8', 'q',
//     'h', '8', '8', '8', '8',
//     '8', '8', '8', '8', 'h',
//     '8', '8', '8', '8', '8', '8', '8', '8',
//     'q', 'q', '8', '8', '8', '8',
//     '8', '8', '8', '8', 'q', 'q',
//     'q', 'q', 'q', 'q',
//     'h', 'h',
//     '8', '8', '8', '8', '8', '8', '8', '8',
//   ],
//   time_signature: '4/4',
// };

// lesson7: space/f and just quarter notes, slow speed
const lesson7r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'f/4', 'f/4', 'f/4',
    'a/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'a/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'f/4', 'a/4', 'a/4',
    'f/4', 'f/4', 'a/4', 'a/4',
    'a/4', 'a/4', 'f/4', 'f/4',
    'a/4', 'a/4', 'f/4', 'f/4',
    'a/4', 'f/4', 'a/4', 'f/4',
    'a/4', 'f/4', 'a/4', 'f/4',
    'f/4', 'a/4', 'f/4', 'a/4',
    'f/4', 'a/4', 'f/4', 'a/4',
  ],
  notes: ['q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q',
    'q', 'q', 'q', 'q'],
  time_signature: '4/4',
};

// lesson8: space/f and half
const lesson8r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['a/4', 'a/4',
    'f/4', 'f/4',
    'a/4', 'f/4', 'f/4',
    'a/4', 'f/4', 'f/4',
    'a/4', 'a/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'a/4',
    'f/4', 'f/4', 'a/4',
    'a/4', 'f/4',
    'a/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'a/4', 'f/4',
    'f/4', 'f/4', 'a/4',
  ],
  notes: ['h', 'h',
    'h', 'h',
    'h', 'q', 'q',
    'h', 'q', 'q',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'q', 'q', 'h',
    'q', 'q', 'h',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'h', 'q', 'q',
    'q', 'q', 'h',
  ],
  time_signature: '4/4',
};

// lesson9: space/f and whole
const lesson9r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4',
    'a/4',
    'a/4', 'f/4',
    'a/4', 'a/4', 'f/4', 'f/4',
    'f/4', 'f/4',
    'a/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'a/4',
    'f/4', 'f/4', 'a/4',
    'a/4',
    'a/4', 'f/4', 'f/4',
    'a/4',
  ],
  notes: ['w',
    'w',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    'w',
    'q', 'q', 'q', 'q',
    'w',
    'q', 'q', 'h',
    'w',
    'h', 'q', 'q',
    'w',
  ],
  time_signature: '4/4',
};

// lesson10: space/f and eighth
const lesson10r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'f/4', 'f/4', 'f/4', 'a/4', 'a/4', 'a/4', 'a/4',
    'a/4', 'a/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'a/4', 'a/4', 'f/4', 'f/4', 'a/4', 'a/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'a/4', 'a/4', 'f/4',
    'f/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'f/4', 'a/4', 'f/4', 'f/4', 'a/4',
    'f/4', 'f/4', 'a/4', 'f/4', 'a/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'a/4',
    'f/4', 'f/4', 'f/4', 'f/4',
    'a/4', 'a/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'f/4', 'a/4',
  ],
  notes: ['8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    'h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
  ],
  time_signature: '4/4',
};

// lesson11: space/f and medium
const lesson11r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.MEDIUM,
  cleftype: 'treble',
  instructions: '',
  keys: ['a/4', 'a/4', 'a/4', 'f/4', 'f/4',
    'f/4', 'a/4', 'f/4', 'f/4',
    'a/4', 'f/4', 'f/4', 'f/4',
    'a/4', 'a/4', 'a/4', 'a/4', 'a/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'f/4', 'a/4', 'a/4', 'a/4', 'a/4',
    'a/4', 'a/4', 'a/4', 'a/4', 'f/4', 'f/4',
    'a/4', 'a/4', 'f/4', 'a/4', 'a/4', 'f/4',
    'a/4', 'f/4', 'f/4', 'f/4', 'f/4',
    'f/4', 'f/4', 'f/4', 'f/4', 'a/4',
    'a/4', 'a/4', 'a/4', 'f/4',
    'a/4', 'a/4',
    'f/4', 'a/4', 'f/4', 'a/4', 'f/4', 'a/4', 'f/4', 'a/4',
  ],
  notes: ['h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
  ],
  time_signature: '4/4',
};

// lesson12: space/f and fast
// const lesson12r = {
//   answer_count: 0,
//   bpm: BPM_CONSTANTS.FAST,
//   cleftype: 'treble',
//   instructions: '',
//   keys: ['f/4', 'a/4', 'a/4', 'a/4', 'a/4',
//     'f/4', 'a/4', 'f/4', 'f/4',
//     'f/4', 'a/4', 'a/4', 'f/4',
//     'a/4', 'a/4', 'f/4', 'a/4', 'a/4', 'f/4',
//     'f/4', 'a/4', 'a/4', 'a/4', 'a/4',
//     'f/4', 'a/4', 'a/4', 'a/4', 'f/4',
//     'f/4', 'a/4', 'f/4', 'a/4', 'a/4', 'f/4', 'f/4', 'a/4',
//     'f/4', 'a/4', 'f/4', 'f/4', 'f/4', 'f/4',
//     'f/4', 'f/4', 'f/4', 'f/4', 'a/4', 'f/4',
//     'f/4', 'a/4', 'f/4', 'f/4',
//     'f/4', 'a/4',
//     'f/4', 'a/4', 'f/4', 'a/4', 'f/4', 'f/4', 'a/4', 'a/4',
//   ],
//   notes: ['h', '8', '8', '8', '8',
//     'q', 'h', '8', '8',
//     'h', '8', '8', 'q',
//     '8', '8', 'q', '8', '8', 'q',
//     'h', '8', '8', '8', '8',
//     '8', '8', '8', '8', 'h',
//     '8', '8', '8', '8', '8', '8', '8', '8',
//     'q', 'q', '8', '8', '8', '8',
//     '8', '8', '8', '8', 'q', 'q',
//     'q', 'q', 'q', 'q',
//     'h', 'h',
//     '8', '8', '8', '8', '8', '8', '8', '8',
//   ],
//   time_signature: '4/4',
// };

// lesson13: space/f/j and quarter, half
const lesson13r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['c/5', 'c/5',
    'f/4', 'f/4',
    'a/4', 'f/4', 'c/5',
    'c/5', 'f/4', 'f/4',
    'c/5', 'c/5',
    'c/5', 'c/5', 'f/4', 'c/5',
    'c/5', 'c/5', 'a/4',
    'c/5', 'c/5', 'a/4',
    'c/5', 'f/4',
    'a/4', 'a/4', 'a/4', 'c/5',
    'c/5', 'a/4', 'a/4',
    'c/5', 'a/4', 'a/4',
  ],
  notes: ['h', 'h',
    'h', 'h',
    'h', 'q', 'q',
    'h', 'q', 'q',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'q', 'q', 'h',
    'q', 'q', 'h',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'h', 'q', 'q',
    'q', 'q', 'h'],
  time_signature: '4/4',
};

// lesson14: space/f/j and quarter, half, whole
const lesson14r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['c/5',
    'c/5',
    'f/4', 'c/5',
    'f/4', 'c/5', 'c/5', 'c/5',
    'a/4', 'c/5',
    'c/5',
    'c/5', 'c/5', 'f/4', 'c/5',
    'f/4',
    'a/4', 'a/4', 'c/5',
    'f/4',
    'c/5', 'a/4', 'a/4',
    'f/4',

  ],
  notes: ['w',
    'w',
    'h', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    'w',
    'q', 'q', 'q', 'q',
    'w',
    'q', 'q', 'h',
    'w',
    'h', 'q', 'q',
    'w'],
  time_signature: '4/4',
};

// lesson15: space/f/j and eighth
const lesson15r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: ['c/5', 'c/5', 'c/5', 'c/5', 'c/5', 'c/5', 'c/5', 'c/5',
    'f/4', 'f/4', 'c/5', 'c/5', 'c/5', 'c/5',
    'c/5', 'c/5', 'c/5', 'c/5', 'f/4', 'f/4',
    'a/4', 'c/5', 'c/5', 'c/5', 'c/5',
    'f/4', 'a/4', 'c/5', 'c/5',
    'f/4', 'c/5', 'c/5', 'a/4',
    'c/5', 'c/5', 'a/4', 'c/5', 'c/5', 'a/4',
    'f/4', 'c/5', 'c/5', 'c/5', 'c/5',
    'c/5', 'c/5', 'c/5', 'c/5', 'f/4',
    'a/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'f/4',
    'c/5', 'c/5', 'a/4', 'f/4', 'a/4', 'c/5', 'f/4', 'c/5',
  ],
  notes: ['8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    'h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8'],
  time_signature: '4/4',
};

// lesson16: space/f/j and medium
const lesson16r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.MEDIUM,
  cleftype: 'treble',
  instructions: '',
  keys: ['f/4', 'c/5', 'c/5', 'c/5', 'c/5',
    'a/4', 'f/4', 'c/5', 'c/5',
    'f/4', 'c/5', 'c/5', 'f/4',
    'a/4', 'c/5', 'c/5', 'c/5', 'f/4', 'c/5', 'c/5', 'c/5',
    'f/4', 'f/4', 'c/5', 'c/5', 'c/5', 'a/4',
    'a/4', 'c/5', 'a/4', 'a/4', 'f/4', 'f/4',
    'c/5', 'c/5', 'f/4', 'c/5', 'f/4', 'c/5',
    'c/5', 'f/4', 'f/4', 'f/4', 'f/4',
    'c/5', 'f/4', 'c/5', 'a/4', 'f/4',
    'f/4', 'c/5', 'f/4', 'c/5',
    'a/4', 'a/4',
    'a/4', 'c/5', 'f/4', 'f/4', 'c/5', 'c/5', 'a/4', 'c/5',
  ],
  notes: ['h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
  ],
  time_signature: '4/4',
};

// lesson17: space/f/j and fast
const lesson17r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.FAST,
  cleftype: 'treble',
  instructions: '',
  keys: ['a/4', 'f/4', 'c/5', 'c/5', 'c/5',
    'c/5', 'a/4', 'f/4', 'f/4',
    'f/4', 'a/4', 'c/5', 'a/4',
    'c/5', 'c/5', 'a/4', 'c/5', 'c/5', 'a/4',
    'f/4', 'c/5', 'a/4', 'a/4', 'f/4',
    'a/4', 'a/4', 'a/4', 'c/5', 'a/4',
    'f/4', 'c/5', 'c/5', 'f/4', 'a/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'a/4', 'c/5', 'f/4', 'a/4', 'c/5',
    'c/5', 'c/5', 'f/4', 'a/4', 'a/4', 'a/4',
    'f/4', 'a/4', 'a/4', 'f/4',
    'a/4', 'c/5',
    'c/5', 'c/5', 'f/4', 'c/5', 'f/4', 'a/4', 'c/5', 'c/5',

  ],
  notes: ['h', '8', '8', '8', '8',
    'q', 'h', '8', '8',
    'h', '8', '8', 'q',
    '8', '8', 'q', '8', '8', 'q',
    'h', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
    'q', 'q', '8', '8', '8', '8',
    '8', '8', '8', '8', 'q', 'q',
    'q', 'q', 'q', 'q',
    'h', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8'],
  time_signature: '4/4',
};

// lesson18: rhythmic complexity
const lesson18r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: [
    'f/4', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4',
    'c/5', 'c/5', 'f/4', 'a/4', 'c/5',
    'f/4', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4',
    'c/5', 'c/5', 'f/4', 'a/4', 'c/5',

    'f/4', 'c/5', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4', 'a/4',
    'c/5', 'a/4', 'f/4', 'a/4', 'c/5',
    'f/4', 'c/5', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4', 'a/4',
    'c/5',

    'f/4', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4',
    'c/5', 'c/5', 'f/4', 'a/4', 'c/5',
    'f/4', 'c/5', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4', 'a/4',
    'c/5', 'a/4', 'f/4', 'a/4', 'c/5',
  ],
  notes: [
    '8', '8', 'q', 'q', '8', '8',
    'q', '8', '8', 'q', 'q',
    '8', '8', 'q', 'q', '8', '8',
    'q', '8', '8', 'q', 'q',

    '8', '8', '8', '8', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
    '8', '8', '8', '8', '8', '8', '8', '8',
    'w',

    '8', '8', 'q', 'q', '8', '8',
    'q', '8', '8', 'q', 'q',
    '8', '8', '8', '8', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',
  ],
  time_signature: '4/4',
};

// lesson19: rhythmic complexity
const lesson19r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: [
    'f/4', 'c/5', 'a/4', 'c/5', 'c/5',
    'c/5', 'c/5', 'f/4', 'a/4', 'f/4', 'c/5', 'c/5',
    'f/4', 'c/5', 'a/4', 'c/5', 'c/5',
    'c/5', 'f/4', 'f/4', 'a/4',

    'f/4', 'c/5', 'c/5', 'f/4', 'a/4', 'c/5',
    'f/4', 'a/4', 'c/5', 'c/5',
    'a/4', 'a/4', 'c/5', 'c/5', 'f/4',
    'f/4', 'c/5',

    'c/5',
    'a/4', 'f/4', 'f/4', 'a/4',
    'c/5', 'c/5', 'a/4', 'c/5', 'c/5', 'a/4',
    'f/4', 'c/5', 'a/4', 'c/5',

  ],
  notes: [
    'q', 'q', 'q', '8', '8',
    '8', '8', 'q', '8', '8', '8', '8',
    'q', 'q', 'q', '8', '8',
    'h', '8', '8', 'q',

    'q', '8', '8', 'q', '8', '8',
    'q', 'h', '8', '8',
    'q', 'q', '8', '8', 'q',
    'h', 'h',

    'w',
    'h', 'q', '8', '8',
    '8', '8', 'q', '8', '8', 'q',
    'h', 'q', '8', '8',
  ],
  time_signature: '4/4',
};

// lesson19: rhythmic complexity
const lesson20r = {
  answer_count: 0,
  bpm: BPM_CONSTANTS.SLOW,
  cleftype: 'treble',
  instructions: '',
  keys: [
    'f/4', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4',
    'c/5', 'c/5', 'f/4', 'a/4', 'c/5',
    'f/4', 'c/5', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4', 'a/4',
    'c/5', 'a/4', 'f/4', 'a/4', 'c/5',

    'f/4', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4',
    'c/5', 'c/5', 'f/4', 'a/4', 'c/5',
    'f/4', 'c/5', 'f/4', 'c/5', 'a/4', 'c/5', 'f/4', 'a/4',
    'c/5', 'a/4', 'f/4', 'a/4', 'c/5',

    'f/4', 'c/5', 'a/4', 'c/5', 'c/5',
    'c/5', 'c/5', 'f/4', 'a/4', 'f/4', 'c/5', 'c/5',
    'c/5', 'c/5', 'a/4', 'c/5', 'c/5', 'a/4',
    'f/4', 'c/5', 'a/4', 'c/5',
  ],
  notes: [
    '8', '8', 'q', 'q', '8', '8',
    'q', '8', '8', 'q', 'q',
    '8', '8', '8', '8', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',

    '8', '8', 'q', 'q', '8', '8',
    'q', '8', '8', 'q', 'q',
    '8', '8', '8', '8', '8', '8', '8', '8',
    '8', '8', '8', '8', 'h',

    'q', 'q', 'q', '8', '8',
    '8', '8', 'q', '8', '8', '8', '8',
    '8', '8', 'q', '8', '8', 'q',
    'h', 'q', '8', '8',
  ],
  time_signature: '4/4',
};

const lessons = [lesson1r,
  // lesson2r, lesson3r, lesson4r, lesson5r, lesson6r, lesson7r,
  lesson2r, lesson3r, lesson4r, lesson5r, lesson7r,
  // lesson8r, lesson9r, lesson10r, lesson11r, lesson12r, lesson13r, lesson14r,
  lesson8r, lesson9r, lesson10r, lesson11r, lesson13r, lesson14r,
  lesson15r, lesson16r, lesson17r, lesson18r, lesson19r, lesson20r];

const iPage1 = {
  title: 'Quarter Notes',
  text1: `
  The 
  first lesson is about quarter notes. 
  A quarter note looks like the image to the right: 
  its notehead is completely filled in, 
  and it has a straight stem. 
  `,
  text2: `A quarter note takes up one beat in a measure.
  For our exercises, four quarter notes fill up one measure,
  since there are four beats in a measure in our exercises.`,

  text3: `For now, press the "b" key on your keyboard when there is a quarter note. 
  Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it. Notes will light up green if you got them correct,
  and notes will light up red if you pressed the "b" key too early or late. 

  Remember to press the "b" key to the beat! `,
  hasImage: true,
  image: '../images/quarter.png',
};

const iPage2 = {
  title: 'Half Notes',
  text1: `
  The 
  second lesson is about half notes. 
  A half note looks like the image to the right: 
  its notehead is not filled in, 
  and it has a straight stem. 
  `,
  text2: `A half note takes up two beats in a measure.
  For our exercises, two half notes fill up one measure,
  since there are four beats in a measure in our exercises.`,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key to the beat! `,
  hasImage: true,
  image: '../images/half.png',
};

const iPage3 = {
  title: 'Whole Notes',
  text1: `
  The 
  third lesson is about whole notes. 
  A whole note looks like the image to the right: 
  its notehead is not filled in, 
  and it does not have a stem. 
  `,
  text2: `A whole note takes up four beats in a measure.
  For our exercises, one whole note fills up one measure,
  since there are four beats in a measure in our exercises.`,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and then press start attempt when you're ready to try it.

  Remember to press the "b" key to the beat! `,
  hasImage: true,
  image: '../images/whole.png',
};

const iPage4 = {
  title: 'Eighth Notes',
  text1: `
  The 
  first lesson is about eighth notes. 
  An eighth note looks like the image to the right: 
  its notehead is completely filled in, 
  and it has a straight stem with a flag that comes off of the stem. 
  `,
  text2: `An eighth note takes up half of a beat in a measure.
  For our exercises, eight eighth notes fill up one measure,
  since there are four beats in a measure in our exercises.`,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key to the beat! `,
  hasImage: true,
  image: '../images/eighth.png',
};

const iPage5 = {
  title: 'Medium Speed',
  text1: `
  Now that you know what a quarter, half, whole, and eighth note are, let's keep
  trying to put it all together. The speed of the metronome will be a bit faster here.
  `,
  text2: `Remember that a quarter note takes up 1 beat,
  a half note takes up 2 beats, 
  a whole note takes up 4 beats,
  and an eighth note takes up half of a beat.`,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key to the beat! `,
  hasImage: false,
  image: '',
};

// const iPage6 = {
//   title: 'Fast Speed',
//   text1: `
//   The speed of the metronome is at max speed for our exercises now.
//   `,
//   text2: `Remember that a quarter note takes up 1 beat,
//   a half note takes up 2 beats,
//   a whole note takes up 4 beats,
//   and an eighth note takes up half of a beat.`,

//   text3: `Scroll down for the activity; press the listen button to listen
//   first, and press start attempt when you're ready to try it.

//   Remember to press the "b" key to the beat! `,
//   hasImage: false,
//   image: '',
// };

const iPage7 = {
  title: 'Introducing the Floor Tom',
  text1: `
  So far, we have just been pressing the "b" key for each note. This plays your bass drum.
  Now, let's add in another instrument: the floor tom. The floor tom correpsonds to the "F" key on your keyboard.
  `,
  text2: `The floor tom corresponds to notes that are in the second space
  on our staff. The bass drum corresponds to notes that are in the bottom space 
  on our staff. 
  
  In the picture example, you would press your "b" key for the first and third quarter notes, 
  and your "F" key for the second and fourth quarter notes. 
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, and your "F" key for 
  the second space notes. `,
  hasImage: true,
  image: '../images/f-key.png',
};

const iPage8 = {
  title: 'Floor Tom - Half Notes',
  text1: `
Continue playing notes with the bass drum and floor tom. Remember that the bass drum (the bottom space notes) corresponds
to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
  `,
  text2: `
  In the picture example, you would press your "F" key for the first half note, 
  and your "b" key for the second half notes. 
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, and your "F" key for 
  the second space notes. `,
  hasImage: true,
  image: '../images/f-key-half.png',
};

const iPage9 = {
  title: 'Floor Tom - Whole Notes',
  text1: `
Continue playing notes with the bass drum and floor tom. Remember that the bass drum (the bottom space notes) corresponds
to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
  `,
  text2: `
  This time, you will have quarter, half, and whole notes in your measures. Remember that a
  quarter note takes up one beat, a half note takes up two beats, and a whole note 
  takes up four beats.
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, and your "F" key for 
  the second space notes. `,
  hasImage: false,
  image: '',
};

const iPage10 = {
  title: 'Floor Tom - Eighth Notes',
  text1: `
Continue playing notes with the bass drum and floor tom. Remember that the bass drum (the bottom space notes) corresponds
to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
  `,
  text2: `
  This time, you will have quarter, half, whole, and eighth notes in your measures. Remember that a
  quarter note takes up one beat, a half note takes up two beats, a whole note 
  takes up four beats, and an eighth note takes up half of a beat.
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, and your "F" key for 
  the second space notes. `,
  hasImage: false,
  image: '',
};

const iPage11 = {
  title: 'Floor Tom - Medium Speed',
  text1: `
The speed has now increased slightly. Remember that the bass drum (the bottom space notes) corresponds
to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
  `,
  text2: `
  This time, you will have quarter, half, whole, and eighth notes in your measures. Remember that a
  quarter note takes up one beat, a half note takes up two beats, a whole note 
  takes up four beats, and an eighth note takes up half of a beat.
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, and your "F" key for 
  the second space notes. `,
  hasImage: false,
  image: '',
};

// const iPage12 = {
//   title: 'Floor Tom - Fast Speed',
//   text1: `
// The speed is now even faster! Remember that the bass drum (the bottom space notes) corresponds
// to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
//   `,
//   text2: `
//   This time, you will have quarter, half, whole, and eighth notes in your measures. Remember that a
//   quarter note takes up one beat, a half note takes up two beats, a whole note
//   takes up four beats, and an eighth note takes up half of a beat.
//   `,

//   text3: `Scroll down for the activity; press the listen button to listen
//   first, and press start attempt when you're ready to try it.

//   Remember to press the "b" key for the bottom space notes, and your "F" key for
//   the second space notes. `,
//   hasImage: false,
//   image: '',
// };

const iPage13 = {
  title: 'Introducing the Hi-Hat',
  text1: `
Now we will introduce your final instrument: the hi-hat. The hi-hat corresponds to the "J" key on your keyboard. 
Remember that the bass drum (the bottom space notes) corresponds
to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
  `,
  text2: `
  You should play the hi-hat key when the note appears in the third space on the staff. This is how 
  hi-hat notation is written for drum sheet music. 
  In the picture example, you would press the "F" key (bass drum) for the half note, the 
  "b" key (floor tom) for the first quarter note, and the "J" key (hi-hat) for the second quarter note.
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, your "F" key for 
  the second space notes, and the "J" key for the third space notes. `,
  hasImage: true,
  image: '../images/j-key.png',
};

const iPage14 = {
  title: 'Hi-hat - Whole Notes',
  text1: `
Continue playing with your three instruments, now with quarter, half, and whole notes. The hi-hat corresponds to the "J" key on your keyboard. 
Remember that the bass drum (the bottom space notes) corresponds
to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
  `,
  text2: `
  You should play the hi-hat key when the note appears in the third space on the staff. This is how 
  hi-hat notation is written for drum sheet music. 
  In the picture example, you would press the "b" key (bass drum) for the first quarter note, then
  press the "J" key for the second, third, and fourth quarter notes. 
  `,

  text3: `Scroll down for the activity; press the listen button to listen
  first, and press start attempt when you're ready to try it.

  Remember to press the "b" key for the bottom space notes, your "F" key for 
  the second space notes, and the "J" key for the third space notes. `,
  hasImage: true,
  image: '../images/j-key-two.png',
};

const iPage15 = {
  title: 'Hi-hat - Eighth Notes',
  text1: `
  Continue playing with your three instruments, now with quarter, half, whole, and eighth notes. The hi-hat corresponds to the "J" key on your keyboard. 
  Remember that the bass drum (the bottom space notes) corresponds
  to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
    `,
  text2: `
    You should play the hi-hat key when the note appears in the third space on the staff. This is how 
    hi-hat notation is written for drum sheet music. 
    `,

  text3: `Scroll down for the activity; press the listen button to listen
    first, and press start attempt when you're ready to try it.
  
    Remember to press the "b" key for the bottom space notes, your "F" key for 
    the second space notes, and the "J" key for the third space notes. `,
  hasImage: false,
  image: '',
};

const iPage16 = {
  title: 'Hi-hat - Medium Speed',
  text1: `
  The speed has now been slightly increased. Remember that the hi-hat corresponds to the "J" key on your keyboard,
  the bass drum (the bottom space notes) corresponds
  to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
    `,
  text2: `
    You should play the hi-hat key when the note appears in the third space on the staff. This is how 
    hi-hat notation is written for drum sheet music. 
    `,

  text3: `Scroll down for the activity; press the listen button to listen
    first, and press start attempt when you're ready to try it.
  
    Remember to press the "b" key for the bottom space notes, your "F" key for 
    the second space notes, and the "J" key for the third space notes. `,
  hasImage: false,
  image: '',
};

const iPage17 = {
  title: 'Hi-hat - Fast Speed',
  text1: `
  The speed is now even faster. Remember that the hi-hat corresponds to the "J" key on your keyboard,
  the bass drum (the bottom space notes) corresponds
  to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
    `,
  text2: `
    You should play the hi-hat key when the note appears in the third space on the staff. This is how 
    hi-hat notation is written for drum sheet music. 
    `,

  text3: `Scroll down for the activity; press the listen button to listen
    first, and press start attempt when you're ready to try it.
  
    Remember to press the "b" key for the bottom space notes, your "F" key for 
    the second space notes, and the "J" key for the third space notes. `,
  hasImage: false,
  image: '',
};

const iPage18 = {
  title: 'Rhythmic Complexity 1',
  text1: `
Now we will try some rhythms to apply all of your knowledge. Remember that
a quarter note takes up one beat, a half note takes up two beats, a whole note takes up three beats,
and an eighth note takes up half of a beat. 
    `,
  text2: `
  Remember that the hi-hat corresponds to the "J" key on your keyboard,
  the bass drum (the bottom space notes) corresponds
  to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
    `,

  text3: `Scroll down for the activity; press the listen button to listen
    first, and press start attempt when you're ready to try it.
  
    Remember to press the "b" key for the bottom space notes, your "F" key for 
    the second space notes, and the "J" key for the third space notes. `,
  hasImage: false,
  image: '',
};

const iPage19 = {
  title: 'Rhythmic Complexity 2',
  text1: `
Let's do another rhythm. Remember that
a quarter note takes up one beat, a half note takes up two beats, a whole note takes up three beats,
and an eighth note takes up half of a beat. 
    `,
  text2: `
  Remember that the hi-hat corresponds to the "J" key on your keyboard,
  the bass drum (the bottom space notes) corresponds
  to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
    `,

  text3: `Scroll down for the activity; press the listen button to listen
    first, and press start attempt when you're ready to try it.
  
    Remember to press the "b" key for the bottom space notes, your "F" key for 
    the second space notes, and the "J" key for the third space notes. `,
  hasImage: false,
  image: '',
};

const iPage20 = {
  title: 'Rhythmic Complexity 3',
  text1: `
This is your last activity. Remember that
a quarter note takes up one beat, a half note takes up two beats, a whole note takes up three beats,
and an eighth note takes up half of a beat. 
    `,
  text2: `
  Remember that the hi-hat corresponds to the "J" key on your keyboard,
  the bass drum (the bottom space notes) corresponds
  to your "b" key, and the floor tom (second space notes) corresponds to your "F" key.
    `,

  text3: `Scroll down for the activity; press the listen button to listen
    first, and press start attempt when you're ready to try it.
  
    Remember to press the "b" key for the bottom space notes, your "F" key for 
    the second space notes, and the "J" key for the third space notes. `,
  hasImage: false,
  image: '',
};

const instructionPages = [iPage1, iPage2, iPage3, iPage4, iPage5,
  iPage7, iPage8, iPage9, iPage10, iPage11,
  // iPage1, iPage2, iPage3, iPage4, iPage5, iPage6,
  // iPage7, iPage8, iPage9, iPage10, iPage11, iPage12,
  iPage13, iPage14, iPage15, iPage16, iPage17,
  iPage18, iPage19, iPage20,
];

const premadeLessons = [];
for (let i = 0; i < lessons.length; i += 1) {
  const lesson = {
    lesson_id: i,
    instructionPage: instructionPages[i],
    page_type: 'random_activity',
    info: {
      r: lessons[i],
      activity_type: 'Rhythm-Sensing',
    },
  };

  premadeLessons.push(lesson);
}

export default premadeLessons;
