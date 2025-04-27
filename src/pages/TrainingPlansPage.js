import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import WorkoutDay from '../components/WorkoutDay';

// Mock training plan data
const trainingPlansData = {
  'build-muscle': {
    title: 'Build muscle & strength',
    days: [
      { day: 1, exercises: 12, completed: false },
      { day: 2, exercises: 10, completed: false },
      { day: 3, exercises: 15, completed: false },
      { day: 4, exercises: 0, completed: false },
      { day: 5, exercises: 12, completed: false },
      { day: 6, exercises: 8, completed: false },
      { day: 7, exercises: 0, completed: false },
    ]
  },
  'lose-weight': {
    title: 'Lose weight & Keep fit',
    days: [
      { day: 1, exercises: 10, completed: false },
      { day: 2, exercises: 12, completed: false },
      { day: 3, exercises: 8, completed: false },
      { day: 4, exercises: 14, completed: false },
      { day: 5, exercises: 0, completed: false },
      { day: 6, exercises: 12, completed: false },
      { day: 7, exercises: 6, completed: false },
    ]
  },
  'lose-belly-fat': {
    title: 'Lose belly fat',
    days: [
      { day: 1, exercises: 12, completed: false },
      { day: 2, exercises: 10, completed: false },
      { day: 3, exercises: 15, completed: false },
      { day: 4, exercises: 0, completed: false },
      { day: 5, exercises: 12, completed: false },
      { day: 6, exercises: 8, completed: false },
      { day: 7, exercises: 0, completed: false },
    ]
  }
};

const TrainingPlansPage = ({ id, title, day, difficulty } = {}) => {
  const params = useParams();
  const planId = id || (params?.id && trainingPlansData[params.id] ? params.id : 'build-muscle');
  const plan = trainingPlansData[planId];

  // If rendered as a card (with props), show the card view
  if (id && title && day && difficulty) {
    return (
      <div style={{
        backgroundColor: 'black',
        border: '1px solid #2c2c2c',
        borderRadius: '12px',
        padding: '16px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            {Array.from({ length: difficulty }).map((_, i) => (
              <span key={i} style={{ color: '#ff4d4d' }}>⚡</span>
            ))}
          </div>
          <p style={{ color: '#aaaaaa', marginBottom: '8px' }}>{title}</p>
          <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
            DAY {day}
          </h3>
          <Link
            to={`/training/${id}`}
            style={{
              marginTop: '8px',
              backgroundColor: '#ff4d4d',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            START
          </Link>
        </div>
      </div>
    );
  }

  // Otherwise show the full training plan view
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Navbar2 />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link
            to="/workouts/all"
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '16px', textDecoration: 'none' }}
          >
            <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back
          </Link>

          <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>{plan.title}</h1>
          <p style={{ color: '#aaaaaa' }}>
            <span style={{ color: '#ff4d4d' }}>Week 1</span>
          </p>
        </div>

        <div style={{ marginTop: '32px' }}>
          {plan.days.map((day, index) => (
            <WorkoutDay
              key={day.day}
              day={day.day}
              exerciseCount={day.exercises}
              completed={day.completed}
              trainingId={planId}
              active={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPlansPage;
