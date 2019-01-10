import { FETCH_WORKOUTS, COMPLETE_WORKOUT, UPDATE_MILES, SAVE_WORKOUT } from './../actions/types';

const initialState = {
  workouts: {
    weeks: [],
  },
}

export const workoutsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case FETCH_WORKOUTS:
      return {
        ...state,
        workouts: action.payload
      }
    case UPDATE_MILES:
      newState = {...state};
      newState.workouts.weeks[action.payload.week].workouts[action.payload.day].completedDistance = action.payload.miles;

      return newState;
    case COMPLETE_WORKOUT:
      newState = {...state};
      newState.workouts.weeks[action.payload.week].workouts[action.payload.day].completed = true;
      
      return newState;
    case SAVE_WORKOUT:
      return state;
    default:
      return state;  
  }
}
