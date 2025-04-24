import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const styles = {
  appContainer: {
    minHeight: '100vh',
    backgroundColor: '#0c0c0c',
    color: 'white',
    fontFamily: 'sans-serif',
  },
  trainingHeader: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '8px',
  },
  trainingTitle: {
    fontSize: '24px',
    fontWeight: '600',
  },
  plansContainer: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  card: {
    backgroundColor: '#ffeef2',
    borderRadius: '16px',
    padding: '24px',
    color: 'black',
    position: 'relative',
  },
  difficulty: {
    display: 'flex',
    gap: '4px',
    marginBottom: '16px',
  },
  bolt: {
    color: '#ddd',
  },
  boltActive: {
    color: '#ea384c',
  },
  planTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  planDay: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  planButton: {
    backgroundColor: '#ea384c',
    color: 'white',
    borderRadius: '50px',
    padding: '12px 24px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '600',
    width: '100%',
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

const TrainingPlansPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/training-plans');
        // if (!response.ok) throw new Error('Failed to fetch plans');
        // const data = await response.json();
        
        // Mock data - replace with real API response
        const data = [
          {
            id: 'strength',
            title: 'Build muscle & strength',
            difficulty: 4, // 1-4 scale
            duration: '8 weeks',
            description: 'Compound movements for maximum gains',
            image: '/images/strength.jpg'
          },
          {
            id: 'weight-loss',
            title: 'Lose weight & Keep fit',
            difficulty: 2,
            duration: '12 weeks',
            description: 'Fat burning HIIT and cardio',
            image: '/images/cardio.jpg'
          },
          {
            id: 'belly-fat',
            title: 'Lose belly fat',
            difficulty: 3,
            duration: '6 weeks',
            description: 'Core-focused workouts',
            image: '/images/core.jpg'
          }
        ];
        
        setPlans(data);
      } catch (err) {
        setError('Failed to load training plans. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <div style={styles.appContainer}>
        <div style={styles.trainingHeader}>
          <button style={styles.backButton} onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <h1 style={styles.trainingTitle}>Training Plans</h1>
        </div>
        <div style={styles.loadingContainer}>
          <p>Loading plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.appContainer}>
        <div style={styles.trainingHeader}>
          <button style={styles.backButton} onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <h1 style={styles.trainingTitle}>Training Plans</h1>
        </div>
        <p style={styles.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.trainingHeader}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h1 style={styles.trainingTitle}>Select Training Plan</h1>
      </div>

      <div style={styles.plansContainer}>
        {plans.map((plan) => (
          <div key={plan.id} style={styles.card}>
            <div style={styles.difficulty}>
              {[...Array(4)].map((_, i) => (
                <span 
                  key={i} 
                  style={i < plan.difficulty ? styles.boltActive : styles.bolt}
                >
                  ⚡
                </span>
              ))}
            </div>
            <h2 style={styles.planTitle}>{plan.title}</h2>
            <p style={{ color: '#666', marginBottom: '8px' }}>{plan.description}</p>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '16px' }}>
              Duration: {plan.duration}
            </p>
            <Link 
              to={`/workout/${plan.id}`}
              style={styles.planButton}
            >
              SELECT PLAN <ChevronRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPlansPage;