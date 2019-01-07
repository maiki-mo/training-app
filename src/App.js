import React, { Component } from 'react';
// import { Provider } from 'react-redux';

import Workouts from './data/workouts.json';
import Week from './components/week';

// import Store from './Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.workouts = JSON.parse(JSON.stringify(Workouts))
    this.state = {
      workouts: this.workouts,
    };

    console.log(this.state);

  };

  render() {
    const { weeks } = this.state.workouts;

    return (
      <div className="App">
        { weeks.map((week) => {
          return (
            <Week week={week} />
          );
        }) }
      </div>
    );
  }
}

export default App;
