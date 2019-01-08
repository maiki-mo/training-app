import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts } from './../../redux/actions/workout-actions.js';

import Week from './../week';
import Tray from './../tray';

import './styles.scss';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: this.props.workouts,
    }
  }

  componentWillMount = () => {
    this.props.fetchWorkouts();
  }

  render() {
    const { weeks } = this.props.workouts;
    const title = () => {
      return (
        <pre className="app--week__container--title">workout weeks    --</pre>
      );
    }

    return (
      <div className="app">
        <div className="app--week__container">
          { title() }
          { weeks.map((week, i) => {
            return (
              <Week key={`${week} - ${i}`} week={week} />
            );
          }) }
        </div>
        <div className="app--tray__container">
          <Tray />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts.workouts,
});

export default connect(mapStateToProps, { fetchWorkouts })(MainApp);
