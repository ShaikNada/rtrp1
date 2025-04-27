import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import TrainingPlan from './TrainingPlansPage';
import TrainingPlansPage from './TrainingPlansPage';

// Mock training plans data
const trainingPlans = [
  { id: 'build-muscle', title: 'Build muscle & strength', day: 1, difficulty: 4 },
  { id: 'lose-weight', title: 'Lose weight & Keep fit', day: 1, difficulty: 4 },
  { id: 'lose-belly-fat', title: 'Lose belly fat', day: 1, difficulty: 4 },
  { id: 'toned-arms', title: 'Get toned arms', day: 1, difficulty: 3 },
  { id: 'strong-core', title: 'Build a strong core', day: 1, difficulty: 4 },
  { id: 'better-sleep', title: 'Exercise for better sleep', day: 1, difficulty: 2 },
];

const AllWorkouts = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Navbar2 />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link to="/workouts" style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '16px', textDecoration: 'none' }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back
          </Link>
          <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Select Training Plan</h1>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '16px',
        }}>
          {trainingPlans.map((plan) => (
            <TrainingPlansPage
              key={plan.id}
              id={plan.id}
              title={plan.title}
              day={plan.day}
              difficulty={plan.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWorkouts;
