import { combineReducers } from 'redux';
import lessonReducer from './lessonReducer';
import correctnessReducer from './CorrectnessReducer';

const rootReducer = combineReducers({
  lesson: lessonReducer,
  correctness: correctnessReducer,
});

export default rootReducer;
