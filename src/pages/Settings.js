import React, { useState, useEffect } from 'react';
import Navbar2 from '../components/Navbar2';
import { Moon, Sun } from 'lucide-react';
import './Settings.css';

function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('fitnessSettings')) || {};
    setName(savedSettings.name || 'Alex Johnson');
    setHeight(savedSettings.height || 175);
    setWeight(savedSettings.weight || 68);
    setProfilePic(savedSettings.profilePic || 'https://randomuser.me/api/portraits/men/32.jpg');
    setSelectedGoal(savedSettings.goal || '');
    setDarkMode(savedSettings.darkMode ?? true);
  }, []);

  const handleGoalSelect = (goal) => setSelectedGoal(goal);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const settings = {
      name,
      height,
      weight,
      profilePic,
      goal: selectedGoal,
      darkMode,
    };
    localStorage.setItem('fitnessSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Navbar2 />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
        </div>

        <div className="settings-container">
          {/* Profile Info */}
          <div className="settings-section">
            <h2 className="section-title">Profile Information</h2>
            <div className="profile-info">
              <div className="profile-image">
                <img src={profilePic} alt="Profile" />
                <label className="edit-image-button">
                  Edit
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              <div className="profile-details">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Height</label>
                    <div className="input-with-unit">
                      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                      <span className="unit">cm</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Weight</label>
                    <div className="input-with-unit">
                      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                      <span className="unit">kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fitness Goals */}
          <div className="settings-section">
            <h2 className="section-title">Fitness Goals</h2>
            <div className="goals-container">
              {[
                { id: 'muscle', icon: '💪', label: 'Build Muscle' },
                { id: 'weightLoss', icon: '🏃', label: 'Lose Weight' },
                { id: 'flexibility', icon: '🧘', label: 'Improve Flexibility' },
                { id: 'heart', icon: '❤', label: 'Heart Health' },
              ].map((goal) => (
                <div
                  key={goal.id}
                  className={`goal-card ${selectedGoal === goal.id ? 'active' : ''}`}
                  onClick={() => handleGoalSelect(goal.id)}
                >
                  <div className="goal-icon">{goal.icon}</div>
                  <div className="goal-text">{goal.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="settings-section">
            <h2 className="section-title">App Settings</h2>
            <div className="theme-toggle">
              <span className="toggle-label">Theme</span>
              <div className="toggle-switch">
                <button
                  className={`theme-button ${!darkMode ? 'active' : ''}`}
                  onClick={() => setDarkMode(false)}
                >
                  <Sun size={16} /> Light
                </button>
                <button
                  className={`theme-button ${darkMode ? 'active' : ''}`}
                  onClick={() => setDarkMode(true)}
                >
                  <Moon size={16} /> Dark
                </button>
              </div>
            </div>
          </div>

          <button className="save-settings-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
