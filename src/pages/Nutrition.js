import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MealCard from '../components/MealCard';
import DietSelector from '../components/DietSelector';
import MealTypeSelector from '../components/MealTypeSelector';
import { meals, dietOptions, mealTypes } from '../data/meals.';
import Navbar2 from '../components/Navbar2'; // Adjust import path as needed
import './Nutrition.css';

const Nutrition = () => {
  const [selectedDiet, setSelectedDiet] = useState(dietOptions[0]);
  const [selectedMealType, setSelectedMealType] = useState(mealTypes[0]);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = meals.filter(
      (meal) =>
        meal.dietType.toLowerCase() === selectedDiet.name.toLowerCase() &&
        meal.mealType === selectedMealType
    );
    setFilteredMeals(filtered);
  }, [selectedDiet, selectedMealType]);

  return (
    <div>
      <Navbar2 />
      <div className="nutrition-container">
      <div className="animate-slide-up">
        <h1 className="nutrition-title">MEALS</h1>
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
        </div>
        <MealTypeSelector
          types={mealTypes}
          selectedType={selectedMealType}
          onChange={setSelectedMealType}
        />

        <div className="meal-list">
          {filteredMeals.map((meal, index) => (
            <div 
              key={meal.id} 
              className={`fade-in stagger-${index + 1}`}
              onClick={() => navigate(`/recipe/${meal.id}`)} // Added click handler
              style={{ cursor: 'pointer' }} // Visual cue that it's clickable
            >
              <MealCard
                id={meal.id}
                title={meal.title}
                calories={meal.calories}
                time={meal.time}
                image={meal.image}
                isFavorite={meal.isFavorite}
              />
            </div>
          ))}

          {filteredMeals.length === 0 && (
            <div className="no-meals-text">
              <p>No meals found for this selection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;