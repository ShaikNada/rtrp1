import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';

const Navbar2 = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">THE FITNESS HUB</div>

      <div className="navbar-links">
        <Link to="/dashboards" className={`nav-link ${location.pathname === '/dashboards' ? 'active' : ''}`}>Dashboard</Link>
        <Link to="/workouts" className="nav-link">Workouts</Link>
        <Link to="/nutrition" className="nav-link">Nutrition</Link>
        <Link to="/progress" className="nav-link">Progress</Link>
        <Link to="/ai-recommendations" className="nav-link">AI Recommendations</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </div>

      <div className="navbar-actions">
        <div className="notification-icon">
          <Bell className="icon" />
          <span className="notification-badge">2</span>
        </div>
        <div className="profile-icon">
          <img src="/path-to-profile.jpg" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
