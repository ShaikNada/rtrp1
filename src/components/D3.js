import DashboardLayout from '../pages/DashboardLayout';

const D3 = ({ userName }) => {
  const data = {
    name: userName || "User", // Use the provided username or fallback to "User"
    steps: 0,
    stepsGoal: 10000,
    calories: 0,
    caloriesPercent: 0,
    heartRate: 0,
    workouts: 0,
    workoutsGoal: 5,
    weeklyGoalPercent: 0,
    workoutsList: [
      { title: "No workouts yet", duration: "0 min", level: "Beginner" },
      { title: "Start your fitness journey", duration: "0 min", level: "Beginner" },
      { title: "Try a beginner workout", duration: "0 min", level: "Beginner" }
    ],
    progress: [
      { label: "WORKOUT COMPLETION", percent: 0, value: "0/8" },
      { label: "CALORIE GOAL", percent: 0, value: "0 / 3500" },
      { label: "WATER INTAKE", percent: 0, value: "0/6" }
    ],
    meals: [
      { name: "No meals logged", calories: 0, protein: "0g", type: "Breakfast" },
      { name: "Add your meals", calories: 0, protein: "0g", type: "Lunch" },
      { name: "Track your nutrition", calories: 0, protein: "0g", type: "Snack" },
      { name: "See meal plans", calories: 0, protein: "0g", type: "Dinner" }
    ]
  };

  return <DashboardLayout data={data} />;
};

export default D3;