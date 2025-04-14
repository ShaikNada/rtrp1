import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import WorkoutCard from '../components/WorkoutCard';
import SectionHeader from '../components/SectionHeader';

const Workouts = () => {
  // State for hover effects
  const [hoveredPlan1, setHoveredPlan1] = React.useState(false);
  const [hoveredPlan2, setHoveredPlan2] = React.useState(false);
  const [hoveredCategory, setHoveredCategory] = React.useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: 'white'
    }}>
      <Navbar2 />
      
      <div style={{
        padding: '24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Workouts</h1>
        </div>
        
        {/* Recommended Workouts Section */}
        <div style={{ marginBottom: '40px' }}>
          <SectionHeader 
            title="RECOMMENDED FOR YOU" 
            linkText="View All" 
            linkUrl="/workouts/recommended" 
          />
          
          <div style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            <WorkoutCard
              title="MORNING HIT CARDIO"
              duration={20}
              level="Beginner"
              imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/workout/cardio"
            />
            <WorkoutCard
              title="FULL BODY STRENGTH"
              duration={30}
              level="Intermediate"
              imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/workout/strength"
            />
            <WorkoutCard
              title="YOGA FOR FLEXIBILITY"
              duration={20}
              level="All Levels"
              imageUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80"
              link="/workout/yoga"
            />
          </div>
        </div>
        
        {/* Training Plans Section */}
        <div style={{ marginBottom: '40px' }}>
          <SectionHeader 
            title="TRAINING PLANS" 
            linkText="View All" 
            linkUrl="/workout/strength/plans" 
          />
          
          <div style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {/* Plan 1 */}
            <div 
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                overflow: 'hidden',
                minWidth: '300px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                transform: hoveredPlan1 ? 'translateY(-5px)' : 'none',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={() => setHoveredPlan1(true)}
              onMouseLeave={() => setHoveredPlan1(false)}
            >
              <div style={{
                width: '100%',
                height: '160px',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
                  alt="Build Muscle" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hoveredPlan1 ? 'scale(1.05)' : 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '16px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>Build Muscle & Strength</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  marginBottom: 'auto'
                }}>8-week program to build muscle mass</p>
                <Link 
                  to="/workout/strength/plans" 
                  style={{
                    backgroundColor: hoveredPlan1 ? '#ff4757' : '#ea384c',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    marginTop: '16px',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontWeight: '500',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  View Plan
                </Link>
              </div>
            </div>
            
            {/* Plan 2 */}
            <div 
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                overflow: 'hidden',
                minWidth: '300px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                transform: hoveredPlan2 ? 'translateY(-5px)' : 'none',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={() => setHoveredPlan2(true)}
              onMouseLeave={() => setHoveredPlan2(false)}
            >
              <div style={{
                width: '100%',
                height: '160px',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                  alt="Weight Loss" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hoveredPlan2 ? 'scale(1.05)' : 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '16px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>Weight Loss Challenge</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  marginBottom: 'auto'
                }}>12-week program for losing weight</p>
                <Link 
                  to="/workout/weight-loss/plans" 
                  style={{
                    backgroundColor: hoveredPlan2 ? '#ff4757' : '#ea384c',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    marginTop: '16px',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontWeight: '500',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  View Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Categories Section */}
        <div style={{ marginBottom: '40px' }}>
          <SectionHeader 
            title="WORKOUT CATEGORIES" 
            linkText="" 
            linkUrl="" 
          />
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '16px',
            marginTop: '16px'
          }}>
            {['💪 Strength', '🏃 Cardio', '🧘 Yoga', '🤸 Stretching', '🏋️ HIIT', '🏊 Swimming'].map((category, index) => {
              const emoji = category.split(' ')[0];
              const name = category.split(' ')[1];
              return (
                <Link 
                  key={index}
                  to={`/workout/${name.toLowerCase()}`} 
                  style={{
                    backgroundColor: hoveredCategory === index ? '#2a2a2a' : '#1a1a1a',
                    borderRadius: '8px',
                    padding: '24px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{emoji}</div>
                  <div style={{ fontWeight: '500' }}>{name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;