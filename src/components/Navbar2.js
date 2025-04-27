import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';

function Navbar2() {
  const location = useLocation();
  const [profilePic, setProfilePic] = useState('https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740');

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('fitnessSettings')) || {};
    if (savedSettings.profilePic) {
      setProfilePic(savedSettings.profilePic);
    }
    
    // Listen for changes across tabs too (optional but powerful)
    const handleStorageChange = () => {
      const updatedSettings = JSON.parse(localStorage.getItem('fitnessSettings')) || {};
      setProfilePic(updatedSettings.profilePic || 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
        <Link to="/ai-recommendations" className={getLinkClass('/ai-recommendations')}>AI Recommendations</Link>
        <Link to="/myth-busters" className={getLinkClass('/myth-busters')}>Myth Busters</Link>
      </div>

      <div className="navbar-actions">
        <div className="notification-icon">
          <Bell className="icon" />
          <span className="notification-badge">2</span>
        </div>
        <div className="profile-icon">
          <Link to="/settings">
            <img src={profilePic} alt="Profile" className="profile-img" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
