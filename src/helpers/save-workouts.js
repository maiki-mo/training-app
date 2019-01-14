import axios from 'axios';

export const saveWorkoutData = async (workouts) => {
  await axios({
    url: 'http://localhost:3001/workouts',
    method: 'POST',
    data: workouts,
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log('Err:', err);
  });
}
