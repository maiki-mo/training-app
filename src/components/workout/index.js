import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';

import Edit from './images/edit.png';
import View from './images/view.png';

import './styles.scss';

class Workout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collapsed: false,
    };
  };

  handleEditToggle = () => {
    const collapsed = !this.state.collapsed;

    this.setState({
      collapsed,
    });
  };

  handleViewToggle = () => {
    const collapsed = !this.state.collapsed; 

    this.setState({
      collapsed,
    });
  };

  showCollapsableElements = () => {
    return (
      <form style={{ animationName: 'expand', animationDuration: '.5s', animationFillMode: 'forwards' }}>
        <label name="completed">{ 'completed' }</label><br />
        <input type="text"></input>
      </form>
    );
  };

  hideCollapsableElements = () => {
    return (
      <form className="workout--container__collapsed">
      </form>
    );
  }

  render(){
    const { workout } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="workout--container">
      <div className="workout--container__title-container">
        <h2 className="workout--container__title">{ workout.day }</h2>
        <div style={{ textAlign: 'right' }} className="workout--container__icons">
          <img src={Edit} alt="edit" onClick={ () => { this.handleEditToggle() } } />
          <img src={View} alt="view" onClick={ () => { this.handleViewToggle() } } />
        </div>
      </div>
      { collapsed ? this.showCollapsableElements() : this.hideCollapsableElements() }
      </div>
    );
  };
};

export default Workout;
