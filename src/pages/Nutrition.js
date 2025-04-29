import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MealCard from '../components/MealCard';
import DietSelector from '../components/DietSelector';
import MealTypeSelector from '../components/MealTypeSelector';
import { meals, dietOptions, mealTypes } from '../data/meals.';
import Navbar2 from '../components/Navbar2';
import './Nutrition.css';

const Nutrition = () => {
  const [selectedDiet, setSelectedDiet] = useState(dietOptions[0]);
  const [selectedMealType, setSelectedMealType] = useState(mealTypes[0]);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'your'
  const [favoriteMeals, setFavoriteMeals] = useState({});
  const navigate = useNavigate();

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteMeals')) || {};
    setFavoriteMeals(savedFavorites);
  }, []);

  // Filter meals based on selections
  useEffect(() => {
    const filtered = meals.filter(
      (meal) =>
        meal.dietType.toLowerCase() === selectedDiet.name.toLowerCase() &&
        (activeTab === 'all' || favoriteMeals[meal.id]) &&
        (activeTab === 'all' ? meal.mealType === selectedMealType : true)
    );
    setFilteredMeals(filtered);
  }, [selectedDiet, selectedMealType, activeTab, favoriteMeals]);

  const handleMealClick = (meal) => {
    // Get current nutrition stats from localStorage or initialize
    const today = new Date().toISOString().split('T')[0];
    const nutritionStats = JSON.parse(localStorage.getItem('nutritionStats')) || {
      [today]: {
        caloriesConsumed: 0,
        mealsLogged: 0
      }
    };
    
    // Initialize today's data if it doesn't exist
    if (!nutritionStats[today]) {
      nutritionStats[today] = {
        caloriesConsumed: 0,
        mealsLogged: 0
      };
    }
    
    // Update stats
    nutritionStats[today].caloriesConsumed += meal.calories;
    nutritionStats[today].mealsLogged += 1;
    
    // Save back to localStorage
    localStorage.setItem('nutritionStats', JSON.stringify(nutritionStats));
    
    navigate(`/recipe/${meal.id}`);
  };

  const handleFavoriteToggle = (mealId, isFavorite) => {
    const updatedFavorites = { ...favoriteMeals };
    if (isFavorite) {
      updatedFavorites[mealId] = true;
    } else {
      delete updatedFavorites[mealId];
    }
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem('favoriteMeals', JSON.stringify(updatedFavorites));
  };

  // Group favorite meals by their meal type
  const groupedFavoriteMeals = meals.reduce((acc, meal) => {
    if (favoriteMeals[meal.id]) {
      if (!acc[meal.mealType]) {
        acc[meal.mealType] = [];
      }
      acc[meal.mealType].push(meal);
    }
    return acc;
  }, {});

  return (
    <div>
      <Navbar2 />
      <div className="nutrition-container">
        <div className="animate-slide-up">
          <h1 className="nutrition-title">MEALS</h1>
          
          {/* Tab selector */}
          <div className="meal-tabs">
            <button
              className={`meal-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Meals
            </button>
            <button
              className={`meal-tab ${activeTab === 'your' ? 'active' : ''}`}
              onClick={() => setActiveTab('your')}
            >
              Your Meals
            </button>
          </div>
          
          {activeTab === 'all' ? (
            <>
              <div className="nutrition-header">
                <div className="diet-selector-container">
                  <DietSelector
                    selectedDiet={selectedDiet}
                    options={dietOptions}
                    onChange={setSelectedDiet}
                  />
                  <span className="meal-plan-text">MEAL PLAN</span>
                </div>
                <div className="action-buttons">
                  <button className="icon-button">
                    <span className="icon">≡</span>
                  </button>
                  <button className="primary-icon-button">
                    <span className="icon">♡</span>
                  </button>
                </div>
              </div>
              
              <MealTypeSelector
                types={mealTypes}
                selectedType={selectedMealType}
                onChange={setSelectedMealType}
              />
            </>
          ) : (
            <div className="your-meals-header">
              <h2>Your Saved Meals</h2>
            </div>
          )}
        </div>

        {activeTab === 'all' ? (
          <div className="meal-list">
            {filteredMeals.map((meal, index) => (
              <div 
                key={meal.id} 
                className={`fade-in stagger-${index + 1}`}
                onClick={() => handleMealClick(meal)}
                style={{ cursor: 'pointer' }}
              >
                <MealCard
                  id={meal.id}
                  title={meal.title}
                  calories={meal.calories}
                  time={meal.time}
                  image={meal.image}
                  isFavorite={!!favoriteMeals[meal.id]}
                  onFavoriteToggle={(isFavorite) => handleFavoriteToggle(meal.id, isFavorite)}
                />
              </div>
            ))}

            {filteredMeals.length === 0 && (
              <div className="no-meals-text">
                <p>No meals found for this selection.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="your-meals-container">
            {mealTypes.map(mealType => {
              const mealsOfType = groupedFavoriteMeals[mealType] || [];
              return mealsOfType.length > 0 ? (
                <div key={mealType} className="meal-type-section">
                  <h3 className="meal-type-title">{mealType}</h3>
                  <div className="meal-list">
                    {mealsOfType.map((meal, index) => (
                      <div 
                        key={meal.id} 
                        className={`fade-in stagger-${index + 1}`}
                        onClick={() => handleMealClick(meal)}
                        style={{ cursor: 'pointer' }}
                      >
                        <MealCard
                          id={meal.id}
                          title={meal.title}
                          calories={meal.calories}
                          time={meal.time}
                          image={meal.image}
                          isFavorite={true}
                          onFavoriteToggle={(isFavorite) => handleFavoriteToggle(meal.id, isFavorite)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null;
            })}

            {Object.keys(groupedFavoriteMeals).length === 0 && (
              <div className="no-meals-text">
                <p>You haven't saved any meals yet. Click the heart icon on meals to save them here.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nutrition;