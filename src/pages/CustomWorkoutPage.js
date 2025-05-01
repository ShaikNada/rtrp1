import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import squatsImage from '../images/squatvid.gif';
import pushupImage from '../images/pushupvid.gif';
import wallpush from '../images/wallpush.gif';
import lungesvid from '../images/lungesvid.gif';
import planksvid from '../images/planksvid.gif';
import dumbellrow from '../images/dumbellrow.gif';
import sit from '../images/seatedlift.gif'
const exerciseGifs = {
  'Bodyweight Squats': squatsImage,
  'Wall Push-ups': wallpush,
  'Seated Leg Raises': 'https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif',
  'Push-ups':pushupImage,
  'Lunges': lungesvid,
  'Plank': planksvid,
  'Burpees': 'https://media.giphy.com/media/3o6Zt6KHxJTpJiDg7S/giphy.gif',
  'Jump Squats': 'https://media.giphy.com/media/3o6Zt6KHxJTpJiDg7S/giphy.gif',
  'Dumbbell Rows': dumbellrow,
  'Seated Leg Raises':sit,
  'default': 'https://media.giphy.com/media/3o7TKsrf4eB3ctXvUQ/giphy.gif'
};

const CustomWorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('customWorkouts')) || [];
    const foundWorkout = savedWorkouts.find(w => w.id === id);
    setWorkout(foundWorkout);
  }, [id]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleExerciseComplete = () => {
    const currentExercise = workout.exercises[currentExerciseIndex];
    setCompletedExercises([...completedExercises, currentExercise.id]);
    
    if (currentExerciseIndex < workout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      handleCompleteWorkout();
    }
  };

  const handleCompleteWorkout = () => {
    const completedWorkouts = JSON.parse(localStorage.getItem('completedWorkouts')) || [];
    if (!completedWorkouts.includes(id)) {
      localStorage.setItem(
        'completedWorkouts',
        JSON.stringify([...completedWorkouts, id])
      );
    }
    setIsTimerRunning(false);
    navigate('/workouts');
  };

  if (!workout) {
    return <div style={{ color: 'white', textAlign: 'center', padding: '40px' }}>Workout not found</div>;
  }

  if (!workoutStarted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'black', padding: '24px' }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={20} /> Back
        </button>

        <h1 style={{ color: 'white', fontSize: '28px', marginBottom: '24px' }}>{workout.title}</h1>
        
        <div style={{ 
          backgroundColor: '#1a1a1a', 
          borderRadius: '8px', 
          padding: '16px',
          marginBottom: '24px'
        }}>
          <h2 style={{ color: '#ff4d4d', marginBottom: '12px' }}>Exercises ({workout.exercises.length})</h2>
          {workout.exercises.map((exercise, index) => (
            <div key={exercise.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              borderBottom: '1px solid #333',
              color: 'white'
            }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{index + 1}. {exercise.name}</div>
                <div style={{ color: '#aaa' }}>Reps: {exercise.customReps || exercise.reps}</div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => {
            setWorkoutStarted(true);
            setIsTimerRunning(true);
          }}
          style={{
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            padding: '16px 24px',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: 'bold'
          }}
        >
          Start Workout
        </button>
      </div>
    );
  }

  const currentExercise = workout.exercises[currentExerciseIndex];
  const isCompleted = completedExercises.includes(currentExercise.id);
  const gifSource = exerciseGifs[currentExercise.name] || exerciseGifs['default'];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'black', 
      padding: '24px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{ color: '#ff4d4d', fontSize: '18px' }}>
          {formatTime(timer)}
        </div>
        <div style={{ 
          backgroundColor: '#333',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '14px'
        }}>
          {currentExerciseIndex + 1} / {workout.exercises.length}
        </div>
      </div>

      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '24px', marginBottom: '8px' }}>
          {currentExercise.name}
        </h1>
        <p style={{ 
          color: '#ff4d4d', 
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          {currentExercise.customReps || currentExercise.reps}
        </p>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '24px',
          boxShadow: '0 8px 16px rgba(255, 77, 77, 0.2)'
        }}>
          <img
            src={gifSource}
            alt={currentExercise.name}
            style={{ 
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          width: '100%',
          maxWidth: '500px'
        }}>
          <h3 style={{ color: '#ff4d4d', marginBottom: '8px' }}>Instructions:</h3>
          <p style={{ color: 'white' }}>
            {getExerciseInstructions(currentExercise.name)}
          </p>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '12px',
        width: '100%',
        margin: '0 auto'
      }}>
        <button
          onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
          disabled={currentExerciseIndex === 0}
          style={{
            flex: 1,
            padding: '16px',
            backgroundColor: '#222',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: currentExerciseIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: currentExerciseIndex === 0 ? 0.5 : 1
          }}
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={handleExerciseComplete}
          style={{
            flex: 2,
            padding: '16px',
            backgroundColor: isCompleted ? '#4CAF50' : '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isCompleted ? (
            <>
              <Check size={20} /> Completed
            </>
          ) : 'Mark as Done'}
        </button>
        
        <button
          onClick={() => setCurrentExerciseIndex(prev => Math.min(workout.exercises.length - 1, prev + 1))}
          disabled={currentExerciseIndex === workout.exercises.length - 1}
          style={{
            flex: 1,
            padding: '16px',
            backgroundColor: '#222',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: currentExerciseIndex === workout.exercises.length - 1 ? 'not-allowed' : 'pointer',
            opacity: currentExerciseIndex === workout.exercises.length - 1 ? 0.5 : 1
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const getExerciseInstructions = (exerciseName) => {
  const instructions = {
    'Bodyweight Squats': 'Stand with feet shoulder-width apart. Lower your body by bending your knees. Keep your chest up and push through your heels to return up.',
    'Wall Push-ups': 'Stand facing a wall about arms length away. Place your hands on the wall at shoulder height. Bend your elbows to bring your chest toward the wall, then push back to the starting position.',
    'Seated Leg Raises': 'Sit on a chair with your back straight. Extend one leg straight out in front of you, hold for a second, then lower it back down. Alternate legs.',
    'Push-ups': 'Start in a plank position with hands slightly wider than shoulder-width. Lower your body until your chest nearly touches the floor, then push back up.',
    'Lunges': 'Stand tall, step forward with one leg and lower your hips until both knees are bent at 90 degrees. Push back up to the starting position and alternate legs.',
    'Plank': 'Begin in a push-up position but with your weight on your forearms. Keep your body straight from head to heels, engaging your core muscles.',
    'Burpees': 'From standing, drop into a squat position with hands on the ground. Kick your feet back into a push-up position, then return to squat and jump up.',
    'Jump Squats': 'Perform a regular squat, then explosively jump up from the squatting position. Land softly and immediately go into the next squat.'
  };
  
  return instructions[exerciseName] || 'Perform the exercise with proper form for the specified reps. Focus on controlled movements and full range of motion.';
};

export default CustomWorkoutPage;