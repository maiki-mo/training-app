import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts, saveWorkouts } from './../../redux/actions/workout-actions.js';
import { Button } from 'semantic-ui-react';

import { workoutReduce } from './../../helpers/workout-reducer';

import Week from './../week';
import Tray from './../tray';

import './styles.scss';

class MainApp extends Component {
  componentWillMount = async () => {
    await this.props.fetchWorkouts();
  }

  render() {
    const { weeks } = this.props.workouts;

    const trayTitle = () => <pre className="app--week__container--title">weeks    --</pre>;
    const weekTitle = () => <pre className="app--week__container--title">workout    --</pre>;

    return (
      <div className="app">
        <div className="app--week__container">
          <div className="app--week__container--header">
            { weekTitle() }
            <Button
              size={'mini'}
              style={{ height: '50px', marginTop: '10px', backgroundColor: 'white', border: "1px solid lightblue" }}
              onClick={() => saveWorkouts(this.props.workouts)}
            >
              { 'save workouts' }
            </Button>
          </div>
          { weeks.map((week, i) => {
            return (
              <Week weekNumber={i} key={`${week} - ${i}`} week={week} />
            );
          }) }
        </div>
        <div className="app--tray__container">
          { trayTitle() }
          <Tray weeks={weeks} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts.workouts,
});

export default connect(mapStateToProps, { fetchWorkouts, saveWorkouts })(MainApp);
