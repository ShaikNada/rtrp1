import Navbar2 from '../components/Navbar2';
import D1 from '../components/D1';

const Dashboard = () => {
  // Example dynamic data for a user — you can fetch this from an API
  const userData = {
    name: "Alex",
    steps: 8245,
    stepsGoal: 10000,
    calories: 385,
    caloriesPercent: 47,
    heartRate: 88,
    workouts: 2,
    workoutsGoal: 5,
    weeklyGoalPercent: 60,
  };

  return (
    <div className="dashboard">
      <Navbar2 />
      <div className="dashboard-content px-8 py-6">
        <D1 data={userData} />
      </div>
    </div>
  );
};

export default Dashboard;
