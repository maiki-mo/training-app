import React from 'react';

import './styles.scss';

const Tray = ({workouts}) => {
  return (
    <div className="tray--container">
      { JSON.stringify(workouts) }
    </div>
  );
}

export default Tray;
