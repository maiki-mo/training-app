import React from 'react';

export default function index({week, date, finished}) {
  return (
    <div className="week--container__title">
      <h1 className="week--container__title--week">{ `week ${week}: ${date}` }</h1>
      <h4 className="week--container__title--status">{ 'Completed: ' + finished.toString() }</h4>
    </div>
  );
};
