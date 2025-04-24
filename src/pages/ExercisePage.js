import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Settings } from 'lucide-react';
import { fetchExercisesByType } from '../api/exerciseDB';

const ExercisePage = () => {
  const { type, day } = useParams();
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        setLoading(true);
        const data = await fetchExercisesByType(type);
        setExercises(data);
        setError(null);
      } catch (err) {
        setError('Failed to load exercises. Using fallback data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadExercises();
  }, [type]);

  const getWorkoutTitle = () => {
    switch (type) {
      case 'strength': return 'Strength Training';
      case 'cardio': return 'Cardio Workout';
      case 'yoga': return 'Yoga Session';
      default: return 'Workout';
    }
  };

  const estimateDuration = () => {
    // 45 seconds per exercise estimate
    return Math.ceil(exercises.length * 0.75);
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="spinner"></div>
        <p>Loading exercises...</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: 'white',
      paddingBottom: '80px'
    }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: '#ffeef2',
        color: 'black',
        padding: '24px 16px',
        position: 'relative'
      }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'none',
            border: 'none',
            color: 'black',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          marginTop: '16px',
          textAlign: 'center'
        }}>
          {getWorkoutTitle()} - Day {day}
        </h1>
        <p style={{
          color: '#ea384c',
          fontSize: '14px',
          textAlign: 'center',
          marginTop: '8px'
        }}>
          {exercises.length} Exercises • {estimateDuration()} min
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div style={{
          backgroundColor: '#ffebee',
          color: '#c62828',
          padding: '12px',
          margin: '16px',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}

      {/* Exercises List */}
      <div style={{ marginTop: '16px' }}>
        {exercises.map((exercise, index) => (
          <div 
            key={`${exercise.id}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              borderBottom: '1px solid #333',
              transition: 'background-color 0.2s ease',
              ':hover': {
                backgroundColor: '#1f1f1f'
              }
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginRight: '16px',
              flexShrink: 0
            }}>
              <img 
                src={exercise.gifUrl || '/placeholder-exercise.gif'} 
                alt={exercise.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '4px',
                textTransform: 'capitalize'
              }}>
                {exercise.name.toLowerCase()}
              </h3>
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: '#333',
                  color: '#aaa',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  {exercise.equipment || 'Body Weight'}
                </span>
                <span style={{
                  backgroundColor: '#333',
                  color: '#aaa',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  {exercise.target || 'Full Body'}
                </span>
              </div>
            </div>
            <div style={{
              marginLeft: '8px',
              color: '#ea384c',
              fontWeight: 'bold'
            }}>
              {exercise.target === 'cardio' ? '30s' : 'x12'}
            </div>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '16px',
        backgroundColor: '#111',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.5)'
      }}>
        <button 
          style={{
            backgroundColor: '#ea384c',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '16px',
            width: '100%',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            ':hover': {
              backgroundColor: '#ff4757'
            }
          }}
          onClick={() => alert('Starting workout!')}
        >
          Start Workout
        </button>
      </div>
    </div>
  );
};

export default ExercisePage;