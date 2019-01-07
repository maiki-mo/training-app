import React from 'react';

import './styles.scss';

export const Workout = (props) => {
  return (
    <div className="workout--container" >
      <h2>{ props.workout.day }</h2>
    </div>
  )
};
