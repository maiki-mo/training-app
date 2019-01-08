import React, { Component } from 'react';
import { Form, Transition } from 'semantic-ui-react';

import Edit from './images/edit.png';
import View from './images/view.png';

import './styles.scss';

class Workout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false,
    };
  };

  showCollapsableElements = () => {
    return (
      <Form>
        <Form.Input
          type="text"
          name="name"
          placeholder="name"
          value={'name'}
        />
      </Form>
    );
  };

  render(){
    const { workout } = this.props;
    const { visible } = this.state;

    return (
      <div className="workout--container">
      <div className="workout--container__title-container">
        <h2 className="workout--container__title">{ workout.day }</h2>
        <div style={{ textAlign: 'right' }} className="workout--container__icons">
          <img src={Edit} alt="edit" onClick={ () => { this.setState({ visible: !this.state.visible }) } } />
          <img src={View} alt="view" onClick={ () => { this.setState({}) } } />
        </div>
      </div>
      <Transition visible={visible}>
        { this.showCollapsableElements() }
      </Transition>
      </div>
    );
  };
};

export default Workout;
