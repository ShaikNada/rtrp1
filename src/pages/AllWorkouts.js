import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import TrainingPlansPage from './TrainingPlansPage';

// Mock training plans data
const trainingPlans = [
  {
    id: 'build-muscle',
    title: 'Build muscle & strength',
    day: 1,
    difficulty: 4,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
  },
  {
    id: 'lose-weight',
    title: 'Lose weight & Keep fit',
    day: 1,
    difficulty: 4,
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e',
  },
  {
    id: 'lose-belly-fat',
    title: 'Lose belly fat',
    day: 1,
    difficulty: 4,
    image: 'https://images.ctfassets.net/eoy59ml1klsi/1VhvuDmCBp3kOQq0l5oQjH/7225a6f8168036ce178174124e566e0e/woman-doing-bicycle-crunches.jpeg',
  },
  {
    id: 'toned-arms',
    title: 'Get toned arms',
    day: 1,
    difficulty: 3,
    image: 'https://i.ytimg.com/vi/p2-FPCR0Q04/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBc_IkhLaFxSzxEK_B4GWs8QD3okg',
  },
  {
    id: 'strong-core',
    title: 'Build a strong core',
    day: 1,
    difficulty: 4,
    image: 'https://hips.hearstapps.com/hmg-prod/images/muscular-hispanic-man-doing-plank-on-the-beach-at-royalty-free-image-1680697280.jpg',
  },
  {
    id: 'better-sleep',
    title: 'Exercise for better sleep',
    day: 1,
    difficulty: 2,
    image: 'https://www.saatva.com/blog/wp-content/uploads/2024/02/pilates-for-sleep.jpg',
  },
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
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          {trainingPlans.map((plan) => (
            <TrainingPlansPage
              key={plan.id}
              id={plan.id}
              title={plan.title}
              day={plan.day}
              difficulty={plan.difficulty}
              image={plan.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWorkouts;
