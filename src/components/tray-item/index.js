import React from 'react';
import { workoutReduce } from './../../helpers/workout-reducer';

import './styles.scss';

const TrayItem = ({week}) => {
  const { date, finished, workouts } = week;
  const totalMiles = workoutReduce(workouts);
  return (
    <div style={{ borderColor: finished && 'lightgreen' }} className="tray-item--container">
      <h4>{ date }</h4>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <p>{ `finished: ${finished}` }</p>
        <p>{ `expected miles: ${totalMiles}` }</p>
        <p>{ `runs: ${workouts.length}`}</p>
      </div>
    </div>
  );
}

export default TrayItem;
