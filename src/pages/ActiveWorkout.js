import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ActiveExercise from '../components/ActiveExercise';
import { toast } from 'sonner';

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

const ActiveWorkout = () => {
  const { id, day, exerciseId } = useParams();
  const navigate = useNavigate();
  
  const trainingId = id || 'build-muscle';
  const dayNumber = day ? parseInt(day) : 1;
  
  const exercises = exercisesData[trainingId]?.[dayNumber] || [];
  
  const currentExerciseIndex = exercises.findIndex(ex => ex.id === exerciseId);
  const currentExercise = exercises[currentExerciseIndex];
  
  const handleComplete = () => {
    if (currentExercise) {
      exercises[currentExerciseIndex].completed = true;
      
      // Get current workout stats from localStorage or initialize
      const today = new Date().toISOString().split('T')[0];
      const workoutStats = JSON.parse(localStorage.getItem('workoutStats')) || {
        [today]: {
          completedExercises: 0,
          totalCaloriesBurned: 0
        }
      };
      
      // Initialize today's data if it doesn't exist
      if (!workoutStats[today]) {
        workoutStats[today] = {
          completedExercises: 0,
          totalCaloriesBurned: 0
        };
      }
      
      // Update stats
      workoutStats[today].completedExercises += 1;
      workoutStats[today].totalCaloriesBurned += 50; // Assuming 50 calories per exercise
      
      // Save back to localStorage
      localStorage.setItem('workoutStats', JSON.stringify(workoutStats));
    }
    
    toast.success('Exercise completed!');
    
    if (currentExerciseIndex === exercises.length - 1) {
      navigate(`/training/${trainingId}/day/${dayNumber}/exercises`);
    } else {
      navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex + 1].id}`);
    }
  };
  
  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex - 1].id}`);
    }
  };
  
  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex + 1].id}`);
    }
  };

  if (!currentExercise) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'white' }}>Exercise not found</p>
        <Link 
          to={`/training/${trainingId}/day/${dayNumber}/exercises`} 
          style={{ color: '#ff4040', marginLeft: '8px', textDecoration: 'none', marginTop: '8px' }}
        >
          Go back to exercises
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px' }}>
        <Link to={`/training/${trainingId}/day/${dayNumber}/exercises`} style={{ color: 'white', textDecoration: 'none' }}>
          <ArrowLeft size={20} />
        </Link>
      </div>
      
      <ActiveExercise
        exercise={currentExercise}
        onComplete={handleComplete}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isFirst={currentExerciseIndex === 0}
        isLast={currentExerciseIndex === exercises.length - 1}
      />
      
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderTop: '1px solid #333' }}>
        <div style={{ width: '24px' }}></div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid white', backgroundColor: 'transparent' }}></button>
          <button style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', border: 'none' }}></button>
          <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid white', backgroundColor: 'transparent' }}></button>
        </div>
        <div style={{ width: '24px' }}></div>
      </nav>
    </div>
  );
};

export default ActiveWorkout;