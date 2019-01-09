import React from 'react';

import TrayItem from './../tray-item';

import './styles.scss';

const Tray = ({weeks}) => {
  return (
    <div className="tray--container">
      { weeks.map((week, i) => {
        return <TrayItem key={week.date + '-' + i} week={week} />
      })}
    </div>
  );
}

export default Tray;
