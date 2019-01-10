import { FETCH_WORKOUTS, UPDATE_MILES, COMPLETE_WORKOUT } from './types';
import Workouts from './../../data/workouts.json';

export const fetchWorkouts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WORKOUTS,
      payload: JSON.parse(JSON.stringify(Workouts)),
    });
  };
}

export const completeWorkout = (week, day) => {
  return (dispatch) => {
    dispatch(({
      type: COMPLETE_WORKOUT,
      payload: {
        week,
        day,
      },
    }));
  };
}

export const updateMiles = (week, day, miles) => {
  return (dispatch) => {
    dispatch(({
      type: UPDATE_MILES,
      payload: {
        week,
        day,
        miles,
      },
    }));
  };
}
