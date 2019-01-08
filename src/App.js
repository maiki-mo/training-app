import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainApp from './components/application/'

import store from './redux/store';

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

export default Application;
