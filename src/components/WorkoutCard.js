import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WorkoutCard = ({ title, duration, level, imageUrl, link }) => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.2s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
      }
    }}>
      <div style={{ 
        height: '160px', 
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          src={imageUrl} 
          alt={title} 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }} 
        />
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          padding: '8px 16px',
          color: 'white'
        }}>
          <span style={{ marginRight: '8px' }}>⏱️ {duration} min</span>
          <span>🏋️ {level}</span>
        </div>
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ 
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '8px',
          fontSize: '1.1rem'
        }}>
          {title}
        </h3>
        <Link 
          to={link}
          style={{
            backgroundColor: '#ea384c',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.2s ease',
            ':hover': {
              backgroundColor: '#ff4757'
            }
          }}
        >
          Start →
        </Link>
      </div>
    </div>
  );
};

WorkoutCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default WorkoutCard;