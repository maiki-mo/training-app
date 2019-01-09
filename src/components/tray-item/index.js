import React from 'react';

import './styles.scss';

const TrayItem = ({week}) => {
  const { date, finished, expected } = week;

  return (
    <div className="tray-item--container">
      <h4>{ date }</h4>
      <p>{ `finished: ${finished}` }</p>
      <p>{ `expected miles: ${expected}` }</p>
      <p>{ `completed: `}</p>
    </div>
  );
}

export default TrayItem;
