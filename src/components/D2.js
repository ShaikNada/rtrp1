import DashboardLayout from '../pages/DashboardLayout';

const D2 = () => {
  const data = {
    name: "Tony",
    steps: 4532,
    stepsGoal: 10000,
    calories: 712,
    caloriesPercent: 78,
    heartRate: 92,
    workouts: 3,
    workoutsGoal: 6,
    weeklyGoalPercent: 50,
    workoutsList: [
      { title: "Strength Circuits", duration: "25 min", level: "Intermediate", image: "your_image4.jpg" },
      { title: "Box Fit", duration: "20 min", level: "Beginner", image: "your_image5.jpg" }
    ],
    progress: [
      { label: "WORKOUT COMPLETION", percent: 50, value: "3/6" },
      { label: "CALORIE GOAL", percent: 78, value: "2730 / 3500" },
      { label: "WATER INTAKE", percent: 66, value: "4/6" }
    ],
    meals: [
      { name: "Egg Toast", calories: 250, protein: "20g", type: "Breakfast" },
      { name: "Chicken Wrap", calories: 390, protein: "30g", type: "Lunch" }
    ]
  };

  return <DashboardLayout data={data} />;
};

export default D2;