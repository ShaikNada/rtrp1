import DashboardLayout from '../pages/DashboardLayout';

const D3 = () => {
  const data = {
    name: "New User",
    steps: 0,
    stepsGoal: 10000,
    calories: 0,
    caloriesPercent: 0,
    heartRate: 0,
    workouts: 0,
    workoutsGoal: 5,
    weeklyGoalPercent: 0,
    workoutsList: [
      { title: "Start a Workout", duration: "0 min", level: "All Levels" }
    ],
    progress: [
      { label: "WORKOUT COMPLETION", percent: 0, value: "0/5" },
      { label: "CALORIE GOAL", percent: 0, value: "0 / 3500" },
      { label: "WATER INTAKE", percent: 0, value: "0/6" }
    ],
    meals: [
      { name: "Start a Meal Plan", calories: 0, protein: "0g", type: "-" }
    ]
  };

  return <DashboardLayout data={data} />;
};

export default D3;