import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import pushupImage from '../images/pushupvid.gif'; 
import pullImage from '../images/pullupvid.gif';
import squatsImage from '../images/squatvid.gif';
import LungeImage from '../images/lungesvid.gif';
import plankImage from '../images/planksvid.gif';
const exercisesData = {
  'build-muscle': {
    1: [
      {
        id: 'push-ups',
        name: 'Push-Ups',
        image: pushupImage,
        reps: 12,
        tags: ['body weight', 'pectorals'],
        completed: false,
        instructions:
          'Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.',
      },
      {
        id: 'pull-ups',
        name: 'Pull-Ups',
        image: pullImage,
        reps: 12,
        tags: ['body weight', 'lats'],
        completed: false,
        instructions:
          'Grab the bar with palms facing away. Hang with arms fully extended. Pull yourself up until your chin clears the bar, then lower slowly.',
      },
      {
        id: 'squats',
        name: 'Squats',
        image: squatsImage,
        reps: 15,
        tags: ['body weight', 'legs'],
        completed: false,
        instructions:
          'Stand with feet shoulder-width apart. Lower your body by bending knees and pushing hips back. Keep chest up and knees over toes.',
      },
      {
        id: 'lunges',
        name: 'Lunges',
        image: LungeImage,
        reps: 12,
        tags: ['body weight', 'legs'],
        completed: false,
        instructions:
          'Step forward with one leg and lower hips until both knees are bent at 90 degrees. Push back up to starting position.',
      },
      {
        id: 'planks',
        name: 'Planks',
        image: plankImage,
        reps: 30,
        tags: ['body weight', 'core'],
        completed: false,
        instructions:
          'Hold a push-up position with weight on forearms. Keep body straight from head to heels. Engage core and hold position.',
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
  const currentExerciseIndex = exercises.findIndex((ex) => ex.id === exerciseId);
  const currentExercise = exercises[currentExerciseIndex];

  const handleComplete = () => {
    if (currentExercise) {
      exercises[currentExerciseIndex].completed = true;

      const today = new Date().toISOString().split('T')[0];
      const workoutStats = JSON.parse(localStorage.getItem('workoutStats')) || {};

      if (!workoutStats[today]) {
        workoutStats[today] = {
          completedExercises: 0,
          totalCaloriesBurned: 0,
        };
      }

      workoutStats[today].completedExercises += 1;
      workoutStats[today].totalCaloriesBurned += 50;

      localStorage.setItem('workoutStats', JSON.stringify(workoutStats));
    }

    toast.success('Exercise completed!');

    if (currentExerciseIndex === exercises.length - 1) {
      navigate(`/training/${trainingId}/day/${dayNumber}/exercises`);
    } else {
      navigate(
        `/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex + 1].id}`
      );
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      navigate(
        `/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex - 1].id}`
      );
    }
  };

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      navigate(
        `/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex + 1].id}`
      );
    }
  };

  if (!currentExercise) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          color: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>
          Exercise not found
        </p>
        <Link
          to={`/training/${trainingId}/day/${dayNumber}/exercises`}
          style={{
            color: 'red',
            textDecoration: 'underline',
            marginTop: '8px',
            fontSize: '16px',
          }}
        >
          Go back to exercises
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Back Button */}
      <div style={{ padding: '16px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        <Link to={`/training/${trainingId}/day/${dayNumber}/exercises`} style={{ color: '#ffffff' }}>
          <ArrowLeft size={24} color="#ffffff" />
        </Link>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
          flex: 1,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {currentExercise.name}
        </h2>
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: 'red' }}>
          {currentExercise.reps}
        </p>

        {/* Image */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#1a1a1a',
          }}
        >
          <img
            src={currentExercise.image}
            alt={currentExercise.name}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>

        {/* Instructions */}
        <div
          style={{
            backgroundColor: '#1a1a1a',
            padding: '16px',
            borderRadius: '8px',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            Instructions:
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{currentExercise.instructions}</p>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          width: '100%',
          backgroundColor: '#1a1a1a',
          borderTop: '1px solid #333',
        }}
      >
        <button
          onClick={handlePrevious}
          disabled={currentExerciseIndex === 0}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <ArrowLeft size={24} color={currentExerciseIndex === 0 ? '#666' : '#ffffff'} />
        </button>

        <button
          onClick={handleComplete}
          style={{
            backgroundColor: 'red',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          Mark as Done
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', color: '#ffffff' }}>
            {currentExerciseIndex + 1}/{exercises.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentExerciseIndex === exercises.length - 1}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <ArrowRight
              size={24}
              color={currentExerciseIndex === exercises.length - 1 ? '#666' : '#ffffff'}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveWorkout;
