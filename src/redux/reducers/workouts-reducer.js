import { FETCH_WORKOUTS } from './../actions/types';

const initialState = {
  workouts: {
    weeks: [],
  },
}

export const workoutsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WORKOUTS:
      return {
        ...state,
        workouts: action.payload
      }
    default:
      return state;  
  }
}
