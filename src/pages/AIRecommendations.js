import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2'; // Adjust path as needed
import './AIRecommendations.css';

const AIRecommendations = () => {
  const [showResults, setShowResults] = useState(false);
  const [goals, setGoals] = useState('');
  const [intensity, setIntensity] = useState('Medium');
  const [diet, setDiet] = useState('');
  const [equipment, setEquipment] = useState('');

  const handleGenerate = () => setShowResults(true);
  const handleRegenerate = () => setShowResults(false);
  const handleSave = () => alert('Plan Saved!');

  return (
    <>
      <Navbar2 />
      <div className="ai-rec-container">
        <h1 className="title">AI Fitness Recommendations</h1>

        <div className="input-card">
          <label>Fitness Goals:</label>
          <input
            type="text"
            value={goals}
            onChange={(e) => {
              const onlyChars = e.target.value.replace(/[^a-zA-Z\s]/g, '');
              setGoals(onlyChars);
            }}
            placeholder="Weight loss, Muscle Gain..."
          />

          <label>Workout Intensity:</label>
          <div className="intensity-group">
            {['Low', 'Medium', 'High'].map((level) => (
              <button
                key={level}
                className={`intensity-btn ${intensity === level ? 'active' : ''}`}
                onClick={() => setIntensity(level)}
              >
                {level}
              </button>
            ))}
          </div>

          <label>Dietary Restrictions:</label>
          <input
            type="text"
            value={diet}
            onChange={(e) => {
              const onlyChars = e.target.value.replace(/[^a-zA-Z\s]/g, '');
              setDiet(onlyChars);
            }}
            placeholder="Lactose intolerance, Vegan..."
          />

          <label>Equipment Available:</label>
          <select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
            <option value="" disabled>Select Option</option>
            <option>None</option>
            <option>Dumbbells</option>
            <option>Resistance Bands</option>
          </select>

          {!showResults && (
            <button className="generate-btn" onClick={handleGenerate}>
              Get Recommendations
            </button>
          )}
        </div>

        {showResults && (
          <>
            <div className="plan-card">
              <h2>Meal Plan 🍽</h2>
              <div className="meal-section">
                <div>
                  <h3>Breakfast</h3>
                  <ul><li>Fruit Juices</li><li>Eggs</li><li>Toast</li><li>Oats</li></ul>
                </div>
                <div>
                  <h3>Lunch</h3>
                  <ul><li>Salad</li><li>Roti</li><li>Rice</li><li>Soups</li></ul>
                </div>
                <div>
                  <h3>Dinner</h3>
                  <ul><li>Chapati</li><li>Fruit Juices</li></ul>
                </div>
              </div>
              <button className="swap-btn">Meal Swap</button>
            </div>

            <div className="plan-card">
              <h2>WorkOut Plan 📋</h2>
              <div className="workout-section">
                <div>
                  <ul><li>Warm Up - 10 min</li><li>Planks - 10 min, 20</li><li>Pushups - 20 min, 10</li></ul>
                  <p><em>Difficulty - Medium</em></p>
                </div>
                <div>
                  <ul><li>Warm Up - 10 min</li><li>Dumbbells - 5 min, 10</li><li>Bicycle crunch - 10 min, 10</li></ul>
                  <p><em>Difficulty - Easy</em></p>
                </div>
              </div>
              <div className="btn-row">
                <button className="save-btn" onClick={handleSave}>Save Plan</button>
                <button className="regen-btn" onClick={handleRegenerate}>Regenerate Recommendations</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AIRecommendations;
