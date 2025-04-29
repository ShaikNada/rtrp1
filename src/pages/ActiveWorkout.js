import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

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
        image: 'https://www.dmoose.com/cdn/shop/articles/MicrosoftTeams-image_7.jpg?v=1691501915',
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
        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '18px',
          }}
        >
          Exercise not found
        </p>
        <Link
          to={`/training/${trainingId}/day/${dayNumber}/exercises`}
          style={{
            color: 'red',
            textDecoration: 'underline',
            display: 'block',
            textAlign: 'center',
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
      <div
        style={{
          padding: '16px',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Link
          to={`/training/${trainingId}/day/${dayNumber}/exercises`}
          style={{
            color: '#ffffff',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={24} color="#ffffff" />
        </Link>
      </div>

      {/* Main Exercise */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            margin: '0',
          }}
        >
          {currentExercise.name}
        </h2>
        <p
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'red',
            margin: '0',
          }}
        >
          {currentExercise.reps}
        </p>
        <img
          src={currentExercise.image}
          alt={currentExercise.name}
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
        <div
          style={{
            backgroundColor: '#1a1a1a',
            padding: '16px',
            borderRadius: '8px',
            maxWidth: '300px',
            width: '100%',
          }}
        >
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Instructions:
          </h3>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            Start in a plank position with hands slightly wider than shoulder-width.
            Lower your body until your chest nearly touches the floor, then push back up.
          </p>
        </div>
      </div>

      {/* Footer with Navigation and Button */}
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
          <ArrowLeft
            size={24}
            color={currentExerciseIndex === 0 ? '#666' : '#ffffff'}
          />
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

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: '#ffffff',
            }}
          >
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