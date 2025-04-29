import DashboardLayout from '../pages/DashboardLayout';

const D3 = ({ userName }) => {
  // Get workout stats from localStorage
  const today = new Date().toISOString().split('T')[0];
  
  const getWorkoutStats = () => {
    const workoutStats = JSON.parse(localStorage.getItem('workoutStats')) || {};
    return workoutStats[today] || {
      completedExercises: 0,
      totalCaloriesBurned: 0
    };
  };

  const getNutritionStats = () => {
    const nutritionStats = JSON.parse(localStorage.getItem('nutritionStats')) || {};
    return nutritionStats[today] || {
      caloriesConsumed: 0,
      mealsLogged: 0
    };
  };

  const resetTodayStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const workoutStats = JSON.parse(localStorage.getItem('workoutStats')) || {};
    const nutritionStats = JSON.parse(localStorage.getItem('nutritionStats')) || {};
    
    // Reset workout stats
    workoutStats[today] = {
      completedExercises: 0,
      totalCaloriesBurned: 0
    };
    
    // Reset nutrition stats
    nutritionStats[today] = {
      caloriesConsumed: 0,
      mealsLogged: 0
    };
    
    localStorage.setItem('workoutStats', JSON.stringify(workoutStats));
    localStorage.setItem('nutritionStats', JSON.stringify(nutritionStats));
    
    // Return the reset data
    return {
      workoutStats: workoutStats[today],
      nutritionStats: nutritionStats[today]
    };
  };

  const todayWorkouts = getWorkoutStats();
  const todayNutrition = getNutritionStats();

  const data = {
    name: userName || "User",
    steps: 0,
    stepsGoal: 10000,
    calories: todayWorkouts.totalCaloriesBurned,
    caloriesPercent: Math.min(Math.round((todayWorkouts.totalCaloriesBurned / 500) * 100), 100),
    heartRate: 0,
    workouts: todayWorkouts.completedExercises,
    workoutsGoal: 5,
    weeklyGoalPercent: Math.min(Math.round((todayWorkouts.completedExercises / 5) * 100), 100),
    workoutsList: [
      { title: "Push-ups", duration: "5 min", level: "Beginner" },
      { title: "Pull-ups", duration: "5 min", level: "Beginner" },
      { title: "Squats", duration: "5 min", level: "Beginner" }
    ],
    progress: [
      { 
        label: "WORKOUT COMPLETION", 
        percent: Math.min(Math.round((todayWorkouts.completedExercises / 8) * 100), 100), 
        value: `${todayWorkouts.completedExercises}/8` 
      },
      { 
        label: "CALORIE GOAL", 
        percent: Math.min(Math.round((todayWorkouts.totalCaloriesBurned / 3500) * 100), 100), 
        value: `${todayWorkouts.totalCaloriesBurned} / 3500` 
      },
      { 
        label: "WATER INTAKE", 
        percent: 0, 
        value: "0/6" 
      }
    ],
    meals: [
      { name: "Breakfast", calories: 0, protein: "0g", type: "Breakfast" },
      { name: "Lunch", calories: 0, protein: "0g", type: "Lunch" },
      { name: "Snack", calories: 0, protein: "0g", type: "Snack" },
      { name: "Dinner", calories: todayNutrition.caloriesConsumed, protein: "0g", type: "Dinner" }
    ]
  };

  const handleResetSummary = () => {
    const resetStats = resetTodayStats();
    // You'll need to force a re-render here
    // In a real app, you might want to use state management
    window.location.reload(); // Simple solution for now
  };

  return <DashboardLayout data={data} onResetSummary={handleResetSummary} />;
};

export default D3;