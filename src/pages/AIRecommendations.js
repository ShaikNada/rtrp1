import React, { useState, useEffect } from 'react';
import './AIRecommendations.css';
import axios from 'axios';
import Navbar2 from '../components/Navbar2';
// Import or define your data
import { mealPlans, workoutPlans } from '../data/airecData';

const AIRecommendations = () => {
  const [showResults, setShowResults] = useState(false);
  const [goals, setGoals] = useState('');
  const [intensity, setIntensity] = useState('Medium');
  const [diet, setDiet] = useState('');
  const [equipment, setEquipment] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to generate recommendations based on inputs
  const generateRecommendations = () => {
    // Determine the goal type (simplified)
    const goalType = goals.toLowerCase().includes('weight loss') ? 'weightLoss' :
                    goals.toLowerCase().includes('muscle gain') ? 'muscleGain' :
                    goals.toLowerCase().includes('endurance') ? 'endurance' :
                    'generalFitness';

    // Determine diet type
    const dietType = diet.toLowerCase().includes('vegan') ? 'vegan' :
                    diet.toLowerCase().includes('vegetarian') ? 'vegetarian' :
                    diet.toLowerCase().includes('keto') ? 'keto' :
                    diet.toLowerCase().includes('lactose') ? 'lactoseFree' :
                    'standard';

    // Get appropriate meal plan
    const selectedMealPlan = mealPlans[goalType]?.[dietType] || 
                            mealPlans[goalType]?.standard || 
                            mealPlans.generalFitness.standard;

    // Get appropriate workout plan based on equipment and intensity
    const equipmentKey = equipment || 'None';
    const intensityKey = intensity.toLowerCase();
    
    const selectedWorkoutPlan = workoutPlans[goalType]?.[equipmentKey]?.[intensityKey] || 
                               workoutPlans.generalFitness[equipmentKey]?.[intensityKey] || 
                               workoutPlans.generalFitness.None.medium;

    return {
      mealPlan: selectedMealPlan,
      workoutPlan: selectedWorkoutPlan
    };
  };

  const handleGenerate = async () => {
    if (!goals.trim()) {
      setError('Please enter your fitness goals');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // For demo purposes, we'll use local data generation
      // In a real app, you might still want to call your API
      const recommendations = generateRecommendations();
      
      setMealPlan(recommendations.mealPlan);
      setWorkoutPlan(recommendations.workoutPlan);
      setShowResults(true);
      
      // Optional: Also send to your backend for logging/processing
      await axios.post('http://localhost:5000/api/ai/log', {
        goals,
        intensity,
        diet,
        equipment
      });
      
    } catch (err) {
      setError('Failed to generate recommendations. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    setShowResults(false);
    setMealPlan(null);
    setWorkoutPlan(null);
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/api/ai/save', {
        goals,
        intensity,
        diet,
        equipment,
        mealPlan,
        workoutPlan
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Plan saved successfully!');
    } catch (err) {
      alert('Failed to save plan. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar2 />
    
    <div className="ai-rec-container">
      <h1 className="title">AI Fitness Recommendations</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="input-card">
        <label>Fitness Goals:</label>
        <input
          type="text"
          value={goals}
          onChange={(e) => {
            const onlyChars = e.target.value.replace(/[^a-zA-Z\s]/g, '');
            setGoals(onlyChars);
          }}
          placeholder="Weight loss, Muscle Gain, Endurance..."
          disabled={isLoading}
        />

        <label>Workout Intensity:</label>
        <div className="intensity-group">
          {['Low', 'Medium', 'High'].map((level) => (
            <button
              key={level}
              className={`intensity-btn ${intensity === level ? 'active' : ''}`}
              onClick={() => setIntensity(level)}
              disabled={isLoading}
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
          placeholder="Vegan, Vegetarian, Keto, Lactose intolerance..."
          disabled={isLoading}
        />

        <label>Equipment Available:</label>
        <select 
          value={equipment} 
          onChange={(e) => setEquipment(e.target.value)}
          disabled={isLoading}
        >
          <option value="">Select Option</option>
          <option value="None">None</option>
          <option value="Dumbbells">Dumbbells</option>
          <option value="Resistance Bands">Resistance Bands</option>
          <option value="Full Gym">Full Gym</option>
        </select>

        {!showResults && (
          <button 
            className="generate-btn" 
            onClick={handleGenerate}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Get Recommendations'}
          </button>
        )}
      </div>

      {showResults && (
        <>
          <div className="plan-card">
            <h2>Meal Plan 🍽</h2>
            {mealPlan ? (
              <div className="meal-section">
                {Object.entries(mealPlan).map(([mealType, items]) => (
                  <div key={mealType}>
                    <h3>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading meal plan...</p>
            )}
            <button className="swap-btn" onClick={handleRegenerate}>
              Regenerate Meal Plan
            </button>
          </div>

          <div className="plan-card">
            <h2>Workout Plan 📋</h2>
            {workoutPlan ? (
              <div className="workout-section">
                <div>
                  <h3>Exercises:</h3>
                  <ul>
                    {workoutPlan.exercises.map((exercise, index) => (
                      <li key={index}>{exercise}</li>
                    ))}
                  </ul>
                  <h3>Schedule:</h3>
                  <ul>
                    {workoutPlan.schedule.map((session, index) => (
                      <li key={index}>{session}</li>
                    ))}
                  </ul>
                  <p><em>Intensity: {intensity}</em></p>
                  <p><em>Equipment: {equipment || 'None'}</em></p>
                </div>
              </div>
            ) : (
              <p>Loading workout plan...</p>
            )}
            <div className="btn-row">
              <button className="save-btn" onClick={handleSave}>
                Save Plan
              </button>
              <button className="regen-btn" onClick={handleRegenerate}>
                Regenerate All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default AIRecommendations;