import React from 'react';

import './styles.scss';

const TrayItem = ({week}) => {
  const { date, finished, expected, workouts } = week;

  return (
    <div style={{ borderColor: finished && 'lightgreen' }} className="tray-item--container">
      <h4>{ date }</h4>
      <p>{ `finished: ${finished}` }</p>
      <p>{ `expected miles: ${expected}` }</p>
      <p>{ `runs: ${workouts.length}`}</p>
    </div>
  );
}

export default TrayItem;
