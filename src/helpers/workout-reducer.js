export const workoutReduce = (workouts) => {
  let sum = 0;

  workouts.forEach((workout) => {
    sum += workout.distance;
  });

  return sum;
}
