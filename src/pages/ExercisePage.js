import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import ExerciseItem from '../components/ExerciseItem';

// Mock exercises data
const exercisesData = {
  'build-muscle': {
    1: [
      {
        id: 'push-ups',
        name: 'Push-Ups',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 12,
        tags: ['body weight', 'pectorals'],
        completed: false,
      },
      {
        id: 'pull-ups',
        name: 'Pull-Ups',
        image: 'https://images.unsplash.com/photo-1598971639058-fab03d95fde2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 12,
        tags: ['body weight', 'lats'],
        completed: false,
      },
      {
        id: 'squats',
        name: 'Squats',
        image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 15,
        tags: ['body weight', 'legs'],
        completed: false,
      },
      {
        id: 'lunges',
        name: 'Lunges',
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 12,
        tags: ['body weight', 'legs'],
        completed: false,
      },
      {
        id: 'planks',
        name: 'Planks',
        image: 'https://images.unsplash.com/photo-1566241134883-13eb2393a3cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 30,
        tags: ['body weight', 'core'],
        completed: false,
      },
    ],
  },
};

const ExercisePage = () => {
  const { id, day } = useParams();
  const navigate = useNavigate();

  const trainingId = id || 'build-muscle';
  const dayNumber = day ? parseInt(day) : 1;
  const exercises = exercisesData[trainingId]?.[dayNumber] || [];

  const startWorkout = () => {
    navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[0].id}`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Navbar2 />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link 
            to={`/training/${trainingId}`} 
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '16px', textDecoration: 'none' }}
          >
            <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back
          </Link>

          <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '4px', color: 'white' }}>
            Strength Training - Day {dayNumber}
          </h1>

          <p style={{ color: '#ff4d4d', textAlign: 'center' }}>
            {exercises.length} Exercises • {exercises.length * 2} min
          </p>
        </div>

        <div style={{ backgroundColor: 'black', borderRadius: '8px' }}>
          {exercises.map((exercise) => (
            <ExerciseItem
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              image={exercise.image}
              tags={exercise.tags}
              reps={exercise.reps}
              completed={exercise.completed}
            />
          ))}
        </div>

        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '16px',
          backgroundColor: 'black',
          borderTop: '1px solid #2c2c2c'
        }}>
          <button 
            onClick={startWorkout}
            style={{
              width: '100%',
              backgroundColor: '#ff4d4d',
              color: 'white',
              padding: '16px',
              borderRadius: '9999px', // full rounded
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
