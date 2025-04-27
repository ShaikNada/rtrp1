import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ActiveExercise from '../components/ActiveExercise';
import { toast } from 'sonner';

// Same mock data
const categoryExercises = {
  strength: [
    { id: 'bench-press', name: 'Bench Press', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b', reps: 12, tags: ['chest', 'strength'], completed: false },
    { id: 'deadlift', name: 'Deadlift', image: 'https://images.unsplash.com/photo-1598971639058-fab03d95fde2', reps: 10, tags: ['back', 'strength'], completed: false },
    { id: 'squats', name: 'Squats', image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a', reps: 15, tags: ['legs', 'strength'], completed: false },
    { id: 'shoulder-press', name: 'Shoulder Press', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5', reps: 10, tags: ['shoulders', 'strength'], completed: false },
  ],
  cardio: [
    { id: 'running', name: 'Running', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b', reps: 30, tags: ['cardio', 'endurance'], completed: false },
    { id: 'jumping-jacks', name: 'Jumping Jacks', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3', reps: 40, tags: ['cardio', 'full body'], completed: false },
    { id: 'burpees', name: 'Burpees', image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e', reps: 15, tags: ['cardio', 'hiit'], completed: false },
  ],
  yoga: [
    { id: 'downward-dog', name: 'Downward Dog', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', reps: 60, tags: ['yoga', 'flexibility'], completed: false },
    { id: 'warrior-pose', name: 'Warrior Pose', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773', reps: 45, tags: ['yoga', 'balance'], completed: false },
  ],
  hiit: [
    { id: 'mountain-climbers', name: 'Mountain Climbers', image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d', reps: 30, tags: ['hiit', 'core'], completed: false },
    { id: 'box-jumps', name: 'Box Jumps', image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d', reps: 20, tags: ['hiit', 'legs'], completed: false },
    { id: 'kettlebell-swings', name: 'Kettlebell Swings', image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc', reps: 25, tags: ['hiit', 'full body'], completed: false },
  ],
  pilates: [
    { id: 'pilates-hundred', name: 'The Hundred', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a', reps: 1, tags: ['pilates', 'core'], completed: false },
    { id: 'rolling-like-a-ball', name: 'Rolling Like a Ball', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a', reps: 10, tags: ['pilates', 'balance'], completed: false },
  ],
  stretching: [
    { id: 'hamstring-stretch', name: 'Hamstring Stretch', image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776', reps: 60, tags: ['stretching', 'legs'], completed: false },
    { id: 'shoulder-stretch', name: 'Shoulder Stretch', image: 'https://images.unsplash.com/photo-1581122584612-713f89daa8eb', reps: 45, tags: ['stretching', 'upper body'], completed: false },
    { id: 'neck-stretch', name: 'Neck Stretch', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', reps: 30, tags: ['stretching', 'neck'], completed: false },
  ],
};

const CategoryWorkout = () => {
  const { categoryId, exerciseId } = useParams();
  const navigate = useNavigate();

  if (!categoryId) {
    return <div>Category not found</div>;
  }

  const exercises = categoryExercises[categoryId] || [];
  const currentExerciseIndex = exercises.findIndex(ex => ex.id === exerciseId);
  const currentExercise = exercises[currentExerciseIndex];

  const handleComplete = () => {
    if (currentExercise) {
      exercises[currentExerciseIndex].completed = true;
    }
    toast.success('Exercise completed!');
    if (currentExerciseIndex === exercises.length - 1) {
      navigate(`/category/${categoryId}/exercises`);
    } else {
      navigate(`/workout/${categoryId}/${exercises[currentExerciseIndex + 1].id}`);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      navigate(`/workout/${categoryId}/${exercises[currentExerciseIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      navigate(`/workout/${categoryId}/${exercises[currentExerciseIndex + 1].id}`);
    }
  };

  if (!currentExercise) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <p>Exercise not found</p>
        <Link to={`/category/${categoryId}/exercises`} style={{ color: 'red', marginLeft: '8px' }}>
          Go back to exercises
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px' }}>
        <Link to={`/category/${categoryId}/exercises`} style={{ color: 'white' }}>
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

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '16px',
        backgroundColor: 'black',
        borderTop: '1px solid #2c2c2c'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: 'white' }}>
            {currentExerciseIndex + 1} / {exercises.length}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {exercises.map((_, index) => (
              <div
                key={index}
                style={{
                  height: '8px',
                  width: '32px',
                  borderRadius: '9999px',
                  backgroundColor: index === currentExerciseIndex ? '#FF0000' : '#2c2c2c'
                }}
              />
            ))}
          </div>
          <div style={{ width: '40px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWorkout;
