import React from 'react';
import Workout from './../workout';

const WorkoutList = ({workouts}) => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'row', padding: '10px 0', overflow: 'auto' }}>
        { workouts.map((workout) => {
          return <Workout key={`${workout.day} - ${workout.data}` } workout={workout} />
        })}
    </ul>
  );
}

export default WorkoutList;
