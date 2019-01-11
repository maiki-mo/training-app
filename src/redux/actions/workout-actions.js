import { FETCH_WORKOUTS, UPDATE_MILES, COMPLETE_WORKOUT, SAVE_WORKOUT } from './types';
import axios from 'axios';

export const fetchWorkouts = () => {
  return async (dispatch) => {
    let workouts;
  
    await axios.get('http://localhost:3001/workouts/')
      .then((res) => {
        workouts = res.data;
      });
      
    dispatch({
      type: FETCH_WORKOUTS,
      payload: JSON.parse(JSON.stringify(workouts)),
    });
  };
}

export const completeWorkout = (week, day) => {
  return (dispatch) => {
    dispatch({
      type: COMPLETE_WORKOUT,
      payload: {
        week,
        day,
      },
    });
  };
}

export const updateMiles = (week, day, miles) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_MILES,
      payload: {
        week,
        day,
        miles,
      },
    });
  };
}

export const saveWorkouts = (week) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_MILES,
      payload: {
        week,
      },
    });
  };
}
