import React, { Component } from 'react';
import { Form, Transition, Checkbox, Divider, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { completeWorkout, updateMiles } from './../../redux/actions/workout-actions';

import Edit from './images/edit.png';
import View from './images/view.png';

import './styles.scss';

class Workout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false,
      viewInfo: false,
    }
  }

  showCollapsableElements = (workout, week) => {
    const { distance, completedDistance } = workout;

    return (
      <Form style={{ marginBottom: '8px' }}>
        <Divider style={{ marginTop: '0', backgroundColor: 'lightblue', borderBottom: 0 }} />
        <Checkbox
          label={'completed'}
          onClick={() => this.props.completeWorkout(week, this.props.day)}
        />
        <div style={{ marginTop: '8px', marginBottom: '8px' }}>
          { `distance: ${distance} mi` }
        </div>
        <Form.Input
          type="text"
          name="name"
          placeholder="copmleted distance"
          value={completedDistance}
          size={'mini'}
          onChange={(e) => this.props.updateMiles(week, this.props.day, parseInt(e.target.value))}
        />
      </Form>
    )
  }

  render(){
    const { workout, weekNumber } = this.props;
    const { visible } = this.state;

    return (
      <div className="workout--container">
      <div className="workout--container__title-container">
        <h2 className="workout--container__title">{ workout.day }</h2>
        <div style={{ textAlign: 'right' }} className="workout--container__icons">
          <img src={Edit} alt="edit" onClick={ () => { this.setState({ visible: !this.state.visible }) } } />
          <img src={View} alt="view" onClick={ () => { this.setState({ viewInfo: !this.state.viewInfo }) } } />
        </div>
      </div>
      <Transition visible={visible}>
        { this.showCollapsableElements(workout, weekNumber) }
      </Transition>
      </div>
    );
  }
}

export default connect(null, { completeWorkout, updateMiles })(Workout);
