import React, { Component } from 'react';
import Edit from './images/edit.png';
import View from './images/view.png';

import './styles.scss';

class Workout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collapsed: true,
    };
  };

  handleEditToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleViewToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    const { workout } = this.props;

    return (
      <div className="workout--container">
        <h2 className="workout--container__title">{ workout.day }</h2>
        <div className="workout--container__icons">
          <img src={Edit} alt="edit" onClick={ () => { this.handleEditToggle() } } />
          <img src={View} alt="view" onClick={ () => { this.handleViewToggle() } } />
        </div>
        { !this.state.collapsed &&
          <form>
            <label></label>
            <input type="text"></input>
          </form>
        }
      </div>
    );
  };
};

export default Workout;
