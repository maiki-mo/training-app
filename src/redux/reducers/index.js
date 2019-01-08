import { combineReducers } from 'redux';
import { workoutsReducer } from './workouts-reducer';

export default combineReducers({
  workouts: workoutsReducer,
});
