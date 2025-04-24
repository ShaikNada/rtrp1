import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';

function Navbar2() {
  const location = useLocation();

  function getLinkClass(path) {
    return 'nav-link' + (location.pathname === path ? ' active' : '');
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">THE FITNESS HUB</div>

      <div className="navbar-links">
        <Link to="/dashboards" className={getLinkClass('/dashboards')}>Dashboard</Link>
        <Link to="/workouts" className={getLinkClass('/workouts')}>Workouts</Link>
        <Link to="/nutrition" className={getLinkClass('/nutrition')}>Nutrition</Link>
        <Link to="/bmicalculator" className={getLinkClass('/bmicalculator')}>BMI Calculator</Link>
        <Link to="/myth-busters" className={getLinkClass('/myth-busters')}>Myth Busters</Link>
        <Link to="/ai-recommendations" className={getLinkClass('/ai-recommendations')}>AI Recommendations</Link>
        <Link to="/settings" className={getLinkClass('/settings')}>Settings</Link>
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
}

export default Navbar2;