import DashboardLayout from '../pages/DashboardLayout';

const D1 = () => {
  const data = {
    name: "Alex",
    steps: 8245,
    stepsGoal: 10000,
    calories: 385,
    caloriesPercent: 47,
    heartRate: 88,
    workouts: 2,
    workoutsGoal: 5,
    weeklyGoalPercent: 60,
    workoutsList: [
      { title: "Morning HIIT Cardio", duration: "20 min", level: "Beginner", image: "your_image1.jpg" },
      { title: "Full Body Strength", duration: "30 min", level: "Intermediate", image: "your_image2.jpg" },
      { title: "Yoga for Flexibility", duration: "20 min", level: "All Levels", image: "your_image3.jpg" }
    ],
    progress: [
      { label: "WORKOUT COMPLETION", percent: 62, value: "5/8" },
      { label: "CALORIE GOAL", percent: 36, value: "1260 / 3500" },
      { label: "WATER INTAKE", percent: 82, value: "5/6" }
    ],
    meals: [
      { name: "Protein Oatmeal", calories: 320, protein: "24g", type: "Breakfast" },
      { name: "Grilled Chicken Salad", calories: 420, protein: "35g", type: "Lunch" },
      { name: "Protein Smoothie", calories: 280, protein: "32g", type: "Snack" },
      { name: "Salmon & Vegetables", calories: 520, protein: "42g", type: "Dinner" }
    ]
  };

  return <DashboardLayout data={data} />;
};

export default D1;