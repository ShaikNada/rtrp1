import Navbar2 from '../components/Navbar2';

const Meals = () => {
  return (
    <div className="dashboard">
      <Navbar2 />
      <div className="dashboard-content">
        <h1>Meal Plans</h1>
        <p>Customized nutrition plans tailored to your fitness goals.</p>
      </div>
    </div>
  );
};

export default Meals;