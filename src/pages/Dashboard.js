import Navbar2 from '../components/Navbar2';
import D1 from '../components/D1';
import D2 from '../components/D2';
import D3 from '../components/D3';

const Dashboard = () => {
  const userEmail = localStorage.getItem("userEmail"); 
  const userName = localStorage.getItem("userName"); // This was already set in the About component
  
  let DashboardComponent = D3; // Default to D3

  if (userEmail === "alex@example.com") {
    DashboardComponent = D1;
  } else if (userEmail === "tony@example.com") {
    DashboardComponent = D2;
  }

  return (
    <div className="dashboard">
      <Navbar2 />
      <div className="dashboard-content">
        <DashboardComponent userName={userName} />
      </div>
    </div>
  );
};

export default Dashboard;