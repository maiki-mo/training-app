import React, { Component } from 'react';

import { Workout } from './../../components/workout/';

import './styles.scss';

class Week extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: this.props.week,
    };
  };

  render() {
    const { week, finished, workouts, date } = this.state.week;

    return(
      <div className="week--container">
        <h1>{ `week ${week}: ${date}` }</h1>
        <h4>{ finished.toString() }</h4>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          { workouts.map((workout) => {
            return <Workout workout={workout} />
          })}
        </ul>
      </div>
    )
  }
};

export default Week;
