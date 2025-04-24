import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const styles = {
  container: {
    padding: '16px',
    color: 'white',
    backgroundColor: 'black',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  weekIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#bbb',
  },
  flag: {
    fontSize: '18px',
  },
  daysContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '16px',
  },
  dayItem: {
    display: 'flex',
    position: 'relative',
    marginBottom: '24px',
  },
  dayCircle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#333',
    marginRight: '16px',
    marginTop: '10px',
    zIndex: 2,
  },
  dayCircleActive: {
    backgroundColor: '#ea384c',
  },
  lineBefore: {
    content: '""',
    position: 'absolute',
    left: '10px',
    top: '20px',
    width: '2px',
    height: 'calc(100% - 10px)',
    backgroundColor: '#333',
    zIndex: 1,
  },
  dayContent: {
    flex: 1,
  },
  dayCard: {
    backgroundColor: '#222',
    borderRadius: '16px',
    padding: '16px',
    transition: 'all 0.3s ease',
  },
  dayCardActive: {
    backgroundColor: '#ea384c',
    padding: '24px',
  },
  dayTitle: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '4px',
  },
  exerciseCount: {
    color: '#bbb',
    marginBottom: '16px',
  },
  startButton: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50px',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    width: 'fit-content',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
  errorText: {
    color: '#ff6b6b',
    textAlign: 'center',
    padding: '20px',
  }
};

const WorkoutDayPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [workoutDays, setWorkoutDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkoutDays = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/workouts/${type}/days`);
        // if (!response.ok) throw new Error('Failed to fetch workout days');
        // const data = await response.json();
        
        // Mock data - replace with real API response
        const data = [
          { day: 1, exercises: 12, active: true },
          { day: 2, exercises: 10, active: false },
          { day: 3, exercises: 15, active: false },
          { day: 4, rest: true, active: false },
          { day: 5, exercises: 12, active: false },
          { day: 6, exercises: 8, active: false },
          { day: 7, rest: true, active: false }
        ];
        
        setWorkoutDays(data);
      } catch (err) {
        setError('Failed to load workout days. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutDays();
  }, [type]);

  const getWorkoutTitle = () => {
    switch (type) {
      case 'strength': return 'Build muscle & strength';
      case 'weight-loss': return 'Lose weight & Keep fit';
      case 'belly-fat': return 'Lose belly fat';
      case 'cardio': return 'Morning HIT Cardio';
      case 'yoga': return 'Yoga for Flexibility';
      default: return 'Workout Plan';
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <button style={styles.backButton} onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <div>
            <h1 style={styles.title}>Loading...</h1>
          </div>
        </div>
        <div style={styles.loadingContainer}>
          <p>Loading workout days...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <button style={styles.backButton} onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <div>
            <h1 style={styles.title}>{getWorkoutTitle()}</h1>
            <div style={styles.weekIndicator}>
              <span style={styles.flag}>🚩</span>
              <span>Week 1</span>
            </div>
          </div>
        </div>
        <p style={styles.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <div>
          <h1 style={styles.title}>{getWorkoutTitle()}</h1>
          <div style={styles.weekIndicator}>
            <span style={styles.flag}>🚩</span>
            <span>Week 1</span>
          </div>
        </div>
      </div>

      <div style={styles.daysContainer}>
        {workoutDays.map((dayData, index) => (
          <div key={index} style={{ ...styles.dayItem }}>
            <div
              style={{
                ...styles.dayCircle,
                ...(dayData.active ? styles.dayCircleActive : {}),
              }}
            />
            <div style={styles.dayContent}>
              <div
                style={{
                  ...styles.dayCard,
                  ...(dayData.active ? styles.dayCardActive : {}),
                }}
              >
                <h2 style={styles.dayTitle}>Day {dayData.day}</h2>
                <p style={styles.exerciseCount}>
                  {dayData.rest ? 'Rest' : `${dayData.exercises} Exercises`}
                </p>
                {dayData.active && (
                  <Link
                    to={`/workout/${type}/day${dayData.day}/exercise`}
                    style={styles.startButton}
                  >
                    Start <ChevronRight />
                  </Link>
                )}
              </div>
            </div>
            {index !== workoutDays.length - 1 && (
              <div style={styles.lineBefore}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutDayPage;