import React, { Component } from 'react';

import Title from './../title';
import WorkoutList from './../workout-list';

import './styles.scss';

class Week extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: this.props.week,
    };
  };

  render() {
    const { week, finished, workouts, date, expected } = this.state.week;
    const { weekNumber } = this.props;

    return(
      <div className="week--container">
        <Title week={week} date={date} finished={finished} expected={expected} />
        <WorkoutList weekNumber={weekNumber} workouts={workouts} />
      </div>
    )
  }
};

export default Week;
