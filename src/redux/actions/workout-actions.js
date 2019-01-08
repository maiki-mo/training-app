import { FETCH_WORKOUTS } from './types';
import Workouts from './../../data/workouts.json';

export const fetchWorkouts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WORKOUTS,
      payload: JSON.parse(JSON.stringify(Workouts)),
    })
  }
}

export const updateWorkouts = () => {
  return (dispatch) => {
    
  }
}
