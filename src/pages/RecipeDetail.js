import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { meals } from '../data/meals.';
import { ArrowLeft, Heart } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const meal = meals.find((m) => m.id === id);

  if (!meal) {
    return (
      <div style={{ 
        backgroundColor: '#111', 
        color: '#fff', 
        minHeight: '100vh', 
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2>Recipe not found</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#111', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Navbar2 />
      
      {/* Header with back and favorite buttons */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        position: 'sticky',
        top: '0',
        zIndex: '10',
        backgroundColor: '#111',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <button 
          onClick={() => navigate('/nutrition')}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={24} />
          <span style={{ fontSize: '16px' }}>Back</span>
        </button>
        
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          <Heart 
            size={24} 
            fill={isFavorite ? '#ef4444' : 'transparent'} 
            color={isFavorite ? '#ef4444' : '#fff'} 
          />
        </button>
      </div>

      {/* Main content container with max width */}
      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px 40px'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '28px', 
          marginBottom: '20px',
          padding: '0 20px'
        }}>
          {meal.title}
        </h2>

        <img 
          src={meal.image} 
          alt={meal.title} 
          style={{ 
            width: '100%', 
            borderRadius: '12px', 
            marginBottom: '20px', 
            maxHeight: '400px', 
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }} 
        />

        {/* Nutrition Facts */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px', 
          marginBottom: '20px' 
        }}>
          {[
            { label: 'Calories', value: meal.calories },
            { label: 'Prep Time', value: `${meal.time} min` },
            { label: 'Protein', value: `${meal.protein || '--'}g` },
            { label: 'Fat', value: `${meal.fat || '--'}g` },
            { label: 'Carbs', value: `${meal.carbs || '--'}g` },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1c1c1c',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center'
              }}
            >
              <p style={{ margin: '0', fontSize: '14px', color: '#aaa' }}>{item.label}</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '16px' }}>{item.value}</h4>
            </div>
          ))}
        </div>

        {/* Description */}
        {meal.description && (
          <div style={{ 
            backgroundColor: '#1c1c1c',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              margin: 0
            }}>
              {meal.description}
            </p>
          </div>
        )}

        {/* Ingredients */}
        {meal.ingredients && (
          <div style={{ 
            backgroundColor: '#1c1c1c',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              marginBottom: '16px',
              marginTop: 0
            }}>
              Ingredients
            </h3>
            <ul style={{ 
              paddingLeft: '20px',
              margin: 0,
              display: 'grid',
              gap: '8px'
            }}>
              {meal.ingredients.map((item, idx) => (
                <li 
                  key={idx} 
                  style={{ 
                    fontSize: '15px',
                    listStyleType: 'disc',
                    paddingLeft: '4px'
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions */}
        {meal.instructions && (
          <div style={{ 
            backgroundColor: '#1c1c1c',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              marginBottom: '16px',
              marginTop: 0
            }}>
              Instructions
            </h3>
            <ol style={{ 
              paddingLeft: '20px',
              margin: 0,
              display: 'grid',
              gap: '12px'
            }}>
              {meal.instructions.map((step, idx) => (
                <li 
                  key={idx} 
                  style={{ 
                    fontSize: '15px',
                    lineHeight: '1.5',
                    paddingLeft: '4px'
                  }}
                >
                  <span style={{ fontWeight: '600' }}>Step {idx + 1}:</span> {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;