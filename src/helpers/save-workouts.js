import axios from 'axios';

export const saveWorkoutData = async (workouts) => {
  await axios({
    url: 'http://localhost:3001/save-workouts/',
    method: 'POST',
    data: workouts,
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((res) => {
    console.log('Err:', err);
  });
}
