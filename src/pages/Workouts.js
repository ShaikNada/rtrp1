import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, Flame, StretchHorizontal, Heart } from 'lucide-react';
import Navbar2 from '../components/Navbar2';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutCategory from '../components/WorkoutCategory';

// Mock workout data
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

// Workout categories
const categories = [
  { id: 'strength', title: 'Strength', icon: <Dumbbell size={24} /> },
  { id: 'cardio', title: 'Cardio', icon: <Activity size={24} /> },
  { id: 'yoga', title: 'Yoga', icon: <Heart size={24} /> },
  { id: 'hiit', title: 'HIIT', icon: <Flame size={24} /> },
  { id: 'pilates', title: 'Pilates', icon: <Activity size={24} /> },
  { id: 'stretching', title: 'Stretching', icon: <StretchHorizontal size={24} /> },
];

const Workouts = () => {
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
    </div>
  );
};

export default Workouts;
