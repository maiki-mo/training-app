import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts } from './../../redux/actions/workout-actions.js';

import { workoutReduce } from './../../helpers/workout-reducer';

import Week from './../week';
import Tray from './../tray';

import './styles.scss';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
    }
  }

  componentWillMount = async () => {
    await this.props.fetchWorkouts();

    this.setState({
      workouts: this.props.workouts,
    });
  }

  render() {
    const { weeks } = this.props.workouts;
    const { workouts } = this.props;

    const trayTitle = () => <pre className="app--week__container--title">weeks    --</pre>;
    const weekTitle = () => <pre className="app--week__container--title">workout    --</pre>;

    return (
      <div className="app">
        <div className="app--week__container">
          { weekTitle() }
          { weeks.map((week, i) => {
            return (
              <Week key={`${week} - ${i}`} week={week} />
            );
          }) }
        </div>
        <div className="app--tray__container">
          { trayTitle() }
          <Tray workouts={workouts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts.workouts,
});

export default connect(mapStateToProps, { fetchWorkouts })(MainApp);
