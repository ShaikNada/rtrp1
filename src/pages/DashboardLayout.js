import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ data, onResetSummary }) => {
  const navigate = useNavigate();
  const [showChallenges, setShowChallenges] = useState(false);
  const [challengeList, setChallengeList] = useState(() => {
    const challenges = [
      "Complete a 10-minute meditation session",
      "Write a 500-word journal entry",
      "Take a 30-minute walk outdoors",
      "Learn a new word and use it in a sentence",
      "Cook a healthy meal from scratch",
      "Read a chapter from a book",
      "Practice a new skill for 15 minutes",
      "Do a 20-minute workout"
    ];
    const shuffled = challenges.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 2) + 4;
    return shuffled.slice(0, count).map(text => ({ text, completed: false }));
  });

  const handleChallengeToggle = (index) => {
    setChallengeList(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], completed: !updated[index].completed };
      return updated;
    });
  };

  const handleReset = () => {
    if (onResetSummary) {
      onResetSummary({
        calories: 0,
        workouts: 0,
      });
    }
  };

  const weeklyGoalPercent = Math.min(Math.round(data.workouts * 0.4), 100); // 5 workouts = 2%

  return (
    <div style={{ padding: '2rem', color: 'white', backgroundColor: 'black', minHeight: '100vh' }}>
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Hi, {data.name}! Hope you're doing well!</h1>
        <p style={{ marginBottom: '1rem' }}>Your progress is looking good! Keep up the good work!</p>
        <button
          onClick={() => setShowChallenges(true)}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          Daily Challenges
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: '2', backgroundColor: '#222', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>TODAY'S SUMMARY</h2>
            <button onClick={handleReset} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Reset</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
            {[{ label: 'Steps', value: data.steps, goal: `Goal: ${data.stepsGoal} remaining` },
              { label: 'Calories Burned', value: data.calories, goal: `${data.caloriesPercent}% of daily goal` },
              { label: 'Heart Rate', value: `${data.heartRate} BPM`, goal: 'Resting' },
              { label: 'Workouts', value: `${data.workouts}`, goal: 'This week' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p>{item.label}</p>
                <h3>{item.value}</h3>
                <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{item.goal}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1', backgroundColor: '#333', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <h2>WEEKLY GOAL</h2>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            margin: '1rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            {weeklyGoalPercent}%
          </div>
          <p>You're on track to reach your weekly goal!</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>GET STARTED WITH A WORKOUT</h2>
          <button onClick={() => navigate('/workouts')} style={{ background: 'none', color: '#4CAF50', border: 'none', cursor: 'pointer' }}>View All</button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          {data.workoutsList.map((w, i) => (
            <div key={i} style={{ backgroundColor: '#222', padding: '1rem', borderRadius: '8px', width: '200px' }}>
              {w.image && <img src={w.image} alt="Workout" style={{ width: '100%', borderRadius: '8px' }} />}
              <h3>{w.title}</h3>
              <p>{w.duration} · {w.level}</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ flex: 1, backgroundColor: '#4CAF50', border: 'none', padding: '0.5rem', borderRadius: '4px', color: 'white' }}>Start</button>
                <button style={{ flex: 1, backgroundColor: '#555', border: 'none', padding: '0.5rem', borderRadius: '4px', color: 'white' }}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>TRACK YOUR PROGRESS</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          {data.progress.map((item, i) => (
            <div key={i}>
              <h4>{item.label}</h4>
              <div style={{ height: '10px', backgroundColor: '#444', borderRadius: '5px' }}>
                <div style={{ width: `${item.percent}%`, backgroundColor: '#4CAF50', height: '100%', borderRadius: '5px' }}></div>
              </div>
              <span style={{ fontSize: '0.8rem' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>TODAY'S MEALS</h2>
          <button onClick={() => navigate('/nutrition')} style={{ background: 'none', color: '#4CAF50', border: 'none', cursor: 'pointer' }}>View Plan</button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          {data.meals.map((meal, i) => (
            <div key={i} style={{ backgroundColor: '#222', padding: '1rem', borderRadius: '8px', width: '200px' }}>
              <h4>{meal.name}</h4>
              <p>{meal.calories} kcal · {meal.protein} protein</p>
              <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{meal.type}</span>
            </div>
          ))}
        </div>
      </div>

      {showChallenges && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ backgroundColor: '#222', padding: '2rem', borderRadius: '10px', width: '90%', maxWidth: '500px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Daily Challenges</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {challengeList.map((challenge, index) => (
                <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                    <input
                      type="checkbox"
                      checked={challenge.completed}
                      onChange={() => handleChallengeToggle(index)}
                      style={{ marginRight: '10px' }}
                    />
                    <span style={{
                      textDecoration: challenge.completed ? 'line-through' : 'none',
                      color: challenge.completed ? 'gray' : 'white'
                    }}>
                      {challenge.text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowChallenges(false)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
