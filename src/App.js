import React, { Component } from 'react';
// import { Provider } from 'react-redux';

import Workouts from './data/workouts.json';
import Week from './components/week';
import Tray from './components/tray';

import './styles.scss';

// import Store from './Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.workouts = JSON.parse(JSON.stringify(Workouts))
    this.state = {
      workouts: this.workouts,
    };

  };

  render() {
    const { weeks } = this.state.workouts;

    return (
      <div className="app">
        <div className="app--container">
          { weeks.map((week, i) => {
            return (
              <Week key={`${week} - ${i}`} week={week} />
            );
          }) }
        </div>
        <div>
          <Tray />
        </div>
      </div>
    );
  }
}

export default App;
