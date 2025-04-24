import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './Workouts';
import './Nutrition';

const DashboardLayout = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="greeting">Hi, {data.name}! Hope you're doing well!</h1>
        <p className="subtext">Your progress is looking good! Keep up the good work!</p>
      </div>

      <div className="summary-section">
        <div className="summary-card">
          <h2 className="summary-title">TODAY'S SUMMARY</h2>
          <div className="summary-stats">
            <div className="stat">
              <p className="stat-label">Steps</p>
              <h3 className="stat-value">{data.steps}</h3>
              <span className="stat-goal">Goal: {data.stepsGoal} remaining</span>
            </div>
            <div className="stat">
              <p className="stat-label">Calories Burned</p>
              <h3 className="stat-value">{data.calories}</h3>
              <span className="stat-goal">{data.caloriesPercent}% of daily goal</span>
            </div>
            <div className="stat">
              <p className="stat-label">Heart Rate</p>
              <h3 className="stat-value">{data.heartRate} BPM</h3>
              <span className="stat-goal">Resting</span>
            </div>
            <div className="stat">
              <p className="stat-label">Workouts</p>
              <h3 className="stat-value">{data.workouts}/{data.workoutsGoal}</h3>
              <span className="stat-goal">This week</span>
            </div>
          </div>
        </div>

        <div className="weekly-goal-card">
          <h2 className="weekly-goal-title">WEEKLY GOAL</h2>
          <div className="weekly-goal-circle">{data.weeklyGoalPercent}%</div>
          <p className="weekly-goal-text">You're on track to reach your weekly goal!</p>
        </div>
      </div>

      {/* Workouts */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">GET STARTED WITH A WORKOUT</h2>
          <button className="view-all-btn" onClick={() => navigate('/Workouts')}>View All</button>
        </div>
        <div className="workouts-grid">
          {data.workoutsList.map((w, i) => (
            <div className="workout-card" key={i}>
              {w.image && <img src={w.image} alt="Workout" className="workout-image" />}
              <h3 className="workout-title">{w.title}</h3>
              <p className="workout-meta">{w.duration} · {w.level}</p>
              <div className="workout-buttons">
                <button className="start-btn">Start</button>
                <button className="details-btn">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="section">
        <h2 className="section-title">TRACK YOUR PROGRESS</h2>
        <div className="progress-grid">
          {data.progress.map((item, i) => (
            <div className="progress-bar-container" key={i}>
              <h4 className="progress-label">{item.label}</h4>
              <div className="bar-background">
                <div className="bar-fill" style={{ width: item.percent + '%' }}></div>
              </div>
              <span className="progress-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">TODAY'S MEALS</h2>
          <button className="view-plan-btn" onClick={() => navigate('/Nutriton')}>View Plan</button>
        </div>
        <div className="meals-grid">
          {data.meals.map((meal, i) => (
            <div className="meal-card" key={i}>
              <div className="meal-info">
                <h4 className="meal-name">{meal.name}</h4>
                <p className="meal-meta">{meal.calories} kcal · {meal.protein} protein</p>
              </div>
              <span className="meal-type">{meal.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;