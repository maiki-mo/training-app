import React from 'react';
import Edit from './images/edit.png';
import View from './images/view.png';

import './styles.scss';

const Workout = ({workout}) => {
  return (
    <div className="workout--container">
      <h2 className="workout--container__title">{ workout.day }</h2>
      <div className="workout--container__icons">
        <img src={Edit} alt="edit" />
        <img src={View} alt="view" />
      </div>
    </div>
  )
};

export default Workout;
