import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import WorkoutCard from '../components/WorkoutCard';

const Workouts = () => {
  // Workout Categories
  const categories = [
    { name: "Strength", icon: "💪", id: "strength" },
    { name: "Cardio", icon: "🏃", id: "cardio" },
    { name: "Yoga", icon: "🧘", id: "yoga" },
    { name: "HIIT", icon: "🔥", id: "hiit" },
    { name: "Pilates", icon: "🤸", id: "pilates" },
    { name: "Stretching", icon: "🔄", id: "stretching" }
  ];

  // Recommended Workouts
  const recommendedWorkouts = [
    {
      id: 'strength',
      title: "FULL BODY STRENGTH",
      duration: 30,
      level: "Intermediate",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      link: "/workout/strength/day1"
    },
    {
      id: 'cardio',
      title: "MORNING HIIT CARDIO",
      duration: 20,
      level: "Beginner",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      link: "/workout/cardio/day1"
    },
    {
      id: 'yoga',
      title: "YOGA FOR FLEXIBILITY",
      duration: 25,
      level: "All Levels",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1520&q=80",
      link: "/workout/yoga/day1"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: 'white'
    }}>
      <Navbar2 />
      
      <div style={{
        padding: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '32px'
        }}>
          Workouts
        </h1>
        
        {/* Recommended Workouts Section */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#ea384c'
            }}>
              RECOMMENDED FOR YOU
            </h2>
            <Link 
              to="/workouts/recommended" 
              style={{
                color: '#ea384c',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              View All
            </Link>
          </div>
          <div style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            {recommendedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                title={workout.title}
                duration={workout.duration}
                level={workout.level}
                imageUrl={workout.imageUrl}
                link={workout.link}
              />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#ea384c'
          }}>
            Workout Categories
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '16px'
          }}>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/workout/${category.id}`}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  padding: '20px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.2s, background-color 0.2s',
                  ':hover': {
                    transform: 'translateY(-4px)',
                    backgroundColor: '#2a2a2a'
                  }
                }}
              >
                <span style={{ fontSize: '32px', marginBottom: '8px' }}>{category.icon}</span>
                <span style={{ fontWeight: '500' }}>{category.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workouts;