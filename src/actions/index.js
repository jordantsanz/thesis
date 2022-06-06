import axios from 'axios';

import { calculateAccuracyPercent, calculateErrorPercent, calculateAffectPercent } from './CalculatePercentages';
import premadeLessons from '../lib/PremadeLessons';
// url for face detection
// LOCAL:
// const VIDEO_URL = 'http://10.135.166.47:8080';
const VIDEO_URL = 'https://jsanz-thesis-new-backend-2rfzh6lqca-uk.a.run.app';

// LOCAL:
// const ROOT_URL_DATABASE = 'http://localhost:9090/api';
// PROD:
const ROOT_URL_DATABASE = 'https://jsanz-thesis-database.herokuapp.com/api';
const ROOT_URL_DATABASE_VIDEOUPLOAD = 'https://jsanz-thesis-database.herokuapp.com';

// action types
export const ActionTypes = {
  GET_LESSON: 'GET_LESSON',
  GET_LESSONS: 'GET_LESSONS',
  GET_AFFECT: 'GET_AFFECT',
  RESET_ALL_CORRECTNESS: 'RESET_ALL_CORRECTNESS',
  GET_ACCURACY_AND_ERROR_PERCENT: 'GET_ACCURACY_AND_ERROR_PERCENT',
  GET_ERROR_PERCENT: 'GET_ERROR_PERCENT',
  SET_USER_HASH: 'SET_USER_HASH',
  SET_MTURK_ID: 'SET_MTURK_ID',
  SET_FINAL_STRING: 'SET_FINAL_STRING',
};

export function registerClick(clickType) {
  return ((dispatch) => {
    console.log('register click');
    axios.post(`${ROOT_URL_DATABASE}/click`, { clickType })
      .then((res) => {
        console.log('response from click: ', res);
      })

      .catch((err) => {
        console.log('error doing click call: ', err);
      });
  });
}

export function sendVideo(video, id) {
  console.log('actions send video', id);
  return ((dispatch) => {
    const formData = new FormData();
    formData.append('video', video);
    console.log(video, 'video');
    console.log('sending video');
    try {
      axios.post(`${VIDEO_URL}/video`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res data', res.data);
        registerClick('videoResultsReturned');
        const percent = calculateAffectPercent(res.data);
        // axios.put(`${ROOT_URL_DATABASE}/createAttempt`, {
        //   percent, id, lesson_id, attempt, dataframe: res.data,
        // }).then((res2) => {
        //   console.log('res 2 from affect:', res2);
        dispatch({ type: ActionTypes.GET_AFFECT, payload: { affectPercent: percent, affectDataframe: res.data } });
      });
    } catch {
      console.log('dispatching');
      dispatch({ type: ActionTypes.GET_AFFECT, payload: { affectPercent: -2, affectDataframe: {} } });
    }
  });
}

export function uploadVideo(video) {
  const formData = new FormData();
  formData.append('video', video);
  console.log('Sending video to google upload');
  axios.post(`${ROOT_URL_DATABASE_VIDEOUPLOAD}/video`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((error) => {
      console.log('google upload error: ', error);
    });
}

export function setUserMTurkID(id) {
  return ((dispatch) => {
    dispatch({ type: ActionTypes.SET_MTURK_ID, payload: { MTurkID: id } });
  });
}

export function submitFinalTimeResults(id, timerStats, stopwatchStats, string) {
  console.log('final submit called: ', id, stopwatchStats, timerStats, string);

  axios.put(`${ROOT_URL_DATABASE}/final`, {
    id, stopwatchStats, timerStats, string,
  });
}

export function setUserHash(hash) {
  axios.post(`${ROOT_URL_DATABASE}/newSubject`, { id: hash, isControl: true });
  return ((dispatch) => {
    dispatch({ type: ActionTypes.SET_USER_HASH, payload: { id: hash, isControl: true } });
  });
}

export function resetAllCorrectness() {
  console.log('reset all correctness in actions');
  return ((dispatch) => {
    dispatch({ type: ActionTypes.RESET_ALL_CORRECTNESS, payload: {} });
  });
}

// eslint-disable-next-line camelcase
export function getErrorPercent(errorArray, id, lesson_id, attempt) {
  console.log('get error percent in actions', id);
  const percent = calculateErrorPercent(errorArray);
  axios.put(`${ROOT_URL_DATABASE}/error`, {
    percent, id, lesson_id, attempt,
  });
  return ((dispatch) => {
    console.log('dispatch error');
    dispatch({ type: ActionTypes.GET_ERROR_PERCENT, payload: { errorPercent: percent } });
  });
}

// eslint-disable-next-line camelcase
export function submitAttempt(userId, lesson_id, attempt, accuracyPercent, accuracyArray, errorPercent, errorArray, affectPercent, affectDataframe, bpm) {
  console.log('before dispatch submit: ', accuracyPercent, accuracyArray, errorPercent, errorArray, affectDataframe, affectPercent);
  return ((dispatch) => {
    console.log('submit attempt called');
    axios.post(`${ROOT_URL_DATABASE}/submitattempt`,
      {
        id: userId,
        lesson_id,
        attempt,
        accuracyPercent,
        accuracyArray,
        errorPercent,
        errorArray,
        affectPercent,
        affectDataframe,
        bpm,
      });
  });
}

export function getAccuracyPercentAndErrorPercent(accuracyArray, errorArray, id) {
  console.log('get accuracy in actions', id);
  const percent = calculateAccuracyPercent(accuracyArray);
  const errorPercent = calculateErrorPercent(errorArray);

  // axios.put(`${ROOT_URL_DATABASE}/percents`, {
  //   percent, errorPercent, id, lesson_id, attempt, errorArray, accuracyArray,
  // });
  return ((dispatch) => {
    console.log('dispatch accuracy');
    dispatch({
      type: ActionTypes.GET_ACCURACY_AND_ERROR_PERCENT,
      payload: {
        accuracyPercent: percent, errorPercent, accuracyArray, errorArray,
      },
    });
  });
}

/*
Parameters: User id.
Function: Adds a class to the database and maps the new class to the teacher's classes in the redux state.
*/

export function getRandomLesson(history, types, clef) {
  // call createRandomActivity 100 times and store in []
  // console.log('getRandomLesson called');
  // const arr = [];
  // for (let i = 0; i < 100; i += 1) {
  //   arr.push(generateRhythmActivity(i, 'easy'));
  // }
  // const json = { pages: arr, title: 'random' };
  // console.log('json created,', json);

  const arr2 = premadeLessons;
  console.log({ arr2 });
  const json = { pages: arr2, title: 'random' };

  return (dispatch) => {
    console.log('dispatch run');
    dispatch({ type: ActionTypes.GET_LESSON, payload: json });
  };
}
