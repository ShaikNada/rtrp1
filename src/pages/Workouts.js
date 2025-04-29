import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, Flame, StretchHorizontal, Heart, Plus } from 'lucide-react';
import Navbar2 from '../components/Navbar2';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutCategory from '../components/WorkoutCategory';

const recommendedWorkouts = [
  {
    id: '1',
    title: 'FULL BODY STRENGTH',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    duration: 30,
    level: 'Intermediate',
  },
  {
    id: '2',
    title: 'MORNING HIIT CARDIO',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    duration: 20,
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'YOGA FOR FLEXIBILITY',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    duration: 25,
    level: 'All Levels',
  },
];

const categories = [
  { id: 'strength', title: 'Strength', icon: <Dumbbell size={24} /> },
  { id: 'cardio', title: 'Cardio', icon: <Activity size={24} /> },
  { id: 'yoga', title: 'Yoga', icon: <Heart size={24} /> },
  { id: 'hiit', title: 'HIIT', icon: <Flame size={24} /> },
  { id: 'pilates', title: 'Pilates', icon: <Activity size={24} /> },
  { id: 'stretching', title: 'Stretching', icon: <StretchHorizontal size={24} /> },
];

const exercisesByIntensity = {
  low: [
    { id: 'l1', name: 'Bodyweight Squats', reps: '10-12' },
    { id: 'l2', name: 'Wall Push-ups', reps: '8-10' },
    { id: 'l3', name: 'Seated Leg Raises', reps: '12-15' },
    { id: 'l4', name: 'Standing Calf Raises', reps: '15-20' },
  ],
  medium: [
    { id: 'm1', name: 'Push-ups', reps: '10-15' },
    { id: 'm2', name: 'Lunges', reps: '10-12 each leg' },
    { id: 'm3', name: 'Plank', reps: '30-45 seconds' },
    { id: 'm4', name: 'Dumbbell Rows', reps: '10-12' },
  ],
  high: [
    { id: 'h1', name: 'Burpees', reps: '10-12' },
    { id: 'h2', name: 'Jump Squats', reps: '12-15' },
    { id: 'h3', name: 'Mountain Climbers', reps: '20-30 seconds' },
    { id: 'h4', name: 'Pull-ups', reps: '6-8' },
  ],
};

const Workouts = () => {
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [selectedIntensity, setSelectedIntensity] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [customWorkoutName, setCustomWorkoutName] = useState('');
  const [customReps, setCustomReps] = useState({});
  const [customWorkouts, setCustomWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  useEffect(() => {
    const savedWorkouts = localStorage.getItem('customWorkouts');
    const savedCompleted = localStorage.getItem('completedWorkouts');
    
    if (savedWorkouts) setCustomWorkouts(JSON.parse(savedWorkouts));
    if (savedCompleted) setCompletedWorkouts(JSON.parse(savedCompleted));
  }, []);

  useEffect(() => {
    localStorage.setItem('customWorkouts', JSON.stringify(customWorkouts));
  }, [customWorkouts]);

  const handleAddExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
  };

  const handleRemoveExercise = (exerciseId) => {
    setSelectedExercises(selectedExercises.filter(ex => ex.id !== exerciseId));
  };

  const handleRepsChange = (exerciseId, reps) => {
    setCustomReps({
      ...customReps,
      [exerciseId]: reps
    });
  };

  const handleSaveWorkout = () => {
    if (customWorkoutName.trim() === '' || selectedExercises.length === 0) {
      alert('Please enter a workout name and select at least one exercise');
      return;
    }

    const newWorkout = {
      id: `custom-${Date.now()}`,
      title: customWorkoutName,
      exercises: selectedExercises.map(ex => ({
        ...ex,
        customReps: customReps[ex.id] || ex.reps
      })),
      isCustom: true,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      duration: selectedExercises.length * 3,
      level: "Custom"
    };

    setCustomWorkouts([...customWorkouts, newWorkout]);
    setCustomWorkoutName('');
    setSelectedExercises([]);
    setCustomReps({});
    setSelectedIntensity(null);
    setShowCustomizeModal(false);
  };

  const handleDeleteWorkout = (id) => {
    const updatedWorkouts = customWorkouts.filter(workout => workout.id !== id);
    setCustomWorkouts(updatedWorkouts);
    
    const updatedCompleted = completedWorkouts.filter(wId => wId !== id);
    setCompletedWorkouts(updatedCompleted);
    localStorage.setItem('completedWorkouts', JSON.stringify(updatedCompleted));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Navbar2 />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>
          Workouts
        </h1>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ color: '#ff4d4d', fontSize: '20px', fontWeight: 'bold' }}>
              RECOMMENDED FOR YOU
            </h2>
            <Link
              to="/workouts/all"
              style={{ color: 'white', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff4d4d')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              View All
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {recommendedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                id={workout.id}
                title={workout.title}
                image={workout.image}
                duration={workout.duration}
                level={workout.level}
              />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ color: '#ff4d4d', fontSize: '20px', fontWeight: 'bold' }}>
              YOUR CUSTOM WORKOUTS
            </h2>
            <button
              onClick={() => setShowCustomizeModal(true)}
              style={{
                color: 'white',
                backgroundColor: '#ff4d4d',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Plus size={16} />
              Create New
            </button>
          </div>

          {customWorkouts.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
            }}>
              {customWorkouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  id={workout.id}
                  title={workout.title}
                  image={workout.image}
                  duration={workout.duration}
                  level={workout.level}
                  isCustom={true}
                  isCompleted={completedWorkouts.includes(workout.id)}
                  onDelete={() => handleDeleteWorkout(workout.id)}
                />
              ))}
            </div>
          ) : (
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              borderRadius: '8px', 
              padding: '40px', 
              textAlign: 'center',
              color: 'white'
            }}>
              <p>You haven't created any custom workouts yet</p>
              <button
                onClick={() => setShowCustomizeModal(true)}
                style={{
                  marginTop: '16px',
                  color: 'white',
                  backgroundColor: '#ff4d4d',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Create Your First Workout
              </button>
            </div>
          )}
        </div>

        <div>
          <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
            Workout Categories
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '16px',
          }}>
            {categories.map((category) => (
              <WorkoutCategory
                key={category.id}
                id={category.id}
                title={category.title}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {showCustomizeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            padding: '24px',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Create Custom Workout</h2>
              <button 
                onClick={() => {
                  setShowCustomizeModal(false);
                  setSelectedIntensity(null);
                  setSelectedExercises([]);
                  setCustomWorkoutName('');
                }}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '24px' }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: 'white', marginBottom: '8px' }}>Workout Name</label>
              <input
                type="text"
                value={customWorkoutName}
                onChange={(e) => setCustomWorkoutName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '4px',
                  border: '1px solid #333',
                  backgroundColor: '#333',
                  color: 'white'
                }}
                placeholder="Enter workout name"
              />
            </div>

            {!selectedIntensity ? (
              <div>
                <h3 style={{ color: 'white', marginBottom: '16px' }}>Select Exercise Intensity</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr))', gap: '16px' }}>
                  {['low', 'medium', 'high'].map((intensity) => (
                    <button
                      key={intensity}
                      onClick={() => setSelectedIntensity(intensity)}
                      style={{
                        padding: '16px',
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        fontSize: '16px'
                      }}
                    >
                      {intensity}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ color: 'white' }}>{selectedIntensity.toUpperCase()} Intensity Exercises</h3>
                  <button
                    onClick={() => setSelectedIntensity(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff4d4d',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Back to intensities
                  </button>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  {exercisesByIntensity[selectedIntensity].map((exercise) => (
                    <div
                      key={exercise.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        backgroundColor: '#333',
                        borderRadius: '4px',
                        marginBottom: '8px'
                      }}
                    >
                      <div>
                        <div style={{ color: 'white', fontWeight: 'bold' }}>{exercise.name}</div>
                        <div style={{ color: '#aaa' }}>Default: {exercise.reps}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="text"
                          placeholder="Custom reps"
                          value={customReps[exercise.id] || ''}
                          onChange={(e) => handleRepsChange(exercise.id, e.target.value)}
                          style={{
                            padding: '8px',
                            width: '100px',
                            backgroundColor: '#222',
                            border: '1px solid #444',
                            color: 'white',
                            borderRadius: '4px'
                          }}
                        />
                        {selectedExercises.some(ex => ex.id === exercise.id) ? (
                          <button
                            onClick={() => handleRemoveExercise(exercise.id)}
                            style={{
                              backgroundColor: '#ff4d4d',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '8px 12px',
                              cursor: 'pointer'
                            }}
                          >
                            Remove
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAddExercise(exercise)}
                            style={{
                              backgroundColor: '#4CAF50',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '8px 12px',
                              cursor: 'pointer'
                            }}
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedExercises.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ color: 'white', marginBottom: '16px' }}>Selected Exercises ({selectedExercises.length})</h3>
                <div style={{ backgroundColor: '#333', borderRadius: '8px', padding: '16px' }}>
                  {selectedExercises.map((exercise) => (
                    <div
                      key={exercise.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: '1px solid #444'
                      }}
                    >
                      <div style={{ color: 'white' }}>{exercise.name}</div>
                      <div style={{ color: '#ff4d4d' }}>{customReps[exercise.id] || exercise.reps}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
              <button
                onClick={() => {
                  setShowCustomizeModal(false);
                  setSelectedIntensity(null);
                  setSelectedExercises([]);
                  setCustomWorkoutName('');
                }}
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid #ff4d4d',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveWorkout}
                disabled={selectedExercises.length === 0 || customWorkoutName.trim() === ''}
                style={{
                  padding: '12px 24px',
                  backgroundColor: selectedExercises.length === 0 || customWorkoutName.trim() === '' ? '#666' : '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: selectedExercises.length === 0 || customWorkoutName.trim() === '' ? 'not-allowed' : 'pointer'
                }}
              >
                Save Workout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workouts;