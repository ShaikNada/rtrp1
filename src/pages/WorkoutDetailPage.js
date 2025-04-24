import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'white',
    color: 'black'
  },
  header: {
    padding: '24px 16px',
    display: 'flex',
    alignItems: 'center'
  },
  backButton: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  backIcon: {
    width: 24,
    height: 24,
    color: 'black'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 1.2,
    margin: 0
  },
  weekSection: {
    padding: 16
  },
  weekHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24
  },
  flag: {
    marginRight: 8
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0
  },
  dayList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    position: 'relative'
  },
  dayItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    position: 'relative',
    zIndex: 1
  },
  dayDot: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    border: '2px solid #ddd',
    marginRight: 16,
    backgroundColor: 'white'
  },
  dayDotActive: {
    backgroundColor: '#ff4d6d',
    borderColor: '#ff4d6d'
  },
  dayContent: {
    flex: 1
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 0
  },
  dayInfo: {
    color: '#666',
    fontSize: 14,
    margin: 0
  },
  dayAction: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: 9999,
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  actionText: {
    marginRight: 8,
    fontWeight: 'bold'
  },
  actionIcon: {
    width: 16,
    height: 16
  },
  restIcon: {
    fontSize: 24
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px'
  },
  errorText: {
    color: '#ff6b6b',
    textAlign: 'center',
    padding: '20px'
  }
};

const WorkoutDetailPage = () => {
  const { type } = useParams();
  const [workoutDays, setWorkoutDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/workouts/${type}`);
        // if (!response.ok) throw new Error('Failed to fetch workout plan');
        // const data = await response.json();
        
        // Mock data - replace with real API response
        const data = [
          { day: 1, exercises: 12, isActive: true },
          { day: 2, exercises: 10, isActive: false },
          { day: 3, exercises: 15, isActive: false },
          { day: 4, exercises: 0, isRest: true, isActive: false },
          { day: 5, exercises: 12, isActive: false },
          { day: 6, exercises: 8, isActive: false },
          { day: 7, exercises: 0, isRest: true, isActive: false }
        ];
        
        setWorkoutDays(data);
      } catch (err) {
        setError('Failed to load workout plan. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutPlan();
  }, [type]);

  const getWorkoutTitle = () => {
    switch (type) {
      case 'strength': return 'Build muscle & strength';
      case 'weight-loss': return 'Lose weight & Keep fit';
      case 'belly-fat': return 'Lose belly fat';
      default: return 'Workout Plan';
    }
  };

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <Link to="/workouts" style={styles.backButton}>
            <svg xmlns="http://www.w3.org/2000/svg" style={styles.backIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div style={styles.titleContainer}>
            <h2 style={styles.title}>Loading...</h2>
          </div>
        </div>
        <div style={styles.loadingContainer}>
          <p>Loading workout plan...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <Link to="/workouts" style={styles.backButton}>
            <svg xmlns="http://www.w3.org/2000/svg" style={styles.backIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div style={styles.titleContainer}>
            <h2 style={styles.title}>{getWorkoutTitle()}</h2>
          </div>
        </div>
        <p style={styles.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <Link to="/workouts" style={styles.backButton}>
          <svg xmlns="http://www.w3.org/2000/svg" style={styles.backIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        <div style={styles.titleContainer}>
          <h2 style={styles.title}>{getWorkoutTitle()}</h2>
        </div>
      </div>

      <div style={styles.weekSection}>
        <div style={styles.weekHeader}>
          <div style={styles.flag}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff4d6d" viewBox="0 0 24 24">
              <path d="M4 24h-2v-24h2v24zm18-16l-16-6v12l16-6z" />
            </svg>
          </div>
          <h3 style={styles.weekTitle}>Week 1</h3>
        </div>

        <div style={styles.dayList}>
          {workoutDays.map(day => (
            <Link
              key={day.day}
              to={`/workout/${type}/${day.day}`}
              style={{
                ...styles.dayItem,
                ...(day.isActive && styles.dayItemActive)
              }}
            >
              <div style={{
                ...styles.dayDot,
                ...(day.isActive && styles.dayDotActive)
              }}></div>

              <div style={styles.dayContent}>
                <h3 style={styles.dayTitle}>Day {day.day}</h3>
                <p style={styles.dayInfo}>
                  {day.isRest ? 'Rest' : `${day.exercises} Exercises`}
                </p>
              </div>

              {day.isActive && (
                <div style={styles.dayAction}>
                  <span style={styles.actionText}>Start</span>
                  <svg xmlns="http://www.w3.org/2000/svg" style={styles.actionIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {day.isRest && (
                <div style={styles.restIcon}>☕</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;