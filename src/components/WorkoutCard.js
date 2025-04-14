import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({
  title,
  duration,
  level,
  imageUrl,
  link
}) => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '160px',
        overflow: 'hidden'
      }}>
        <img 
          src={imageUrl} 
          alt={title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
        />
      </div>
      <div style={{
        padding: '16px'
      }}>
        <h3 style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>{title}</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#888888',
          fontSize: '14px',
          marginBottom: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              style={{
                width: '16px',
                height: '16px'
              }} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration} min</span>
          </div>
          <span>•</span>
          <span>{level}</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <Link 
            to={link} 
            style={{
              backgroundColor: '#ea384c',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            Start
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              style={{
                width: '16px',
                height: '16px',
                marginLeft: '4px'
              }} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link 
            to={`${link}/details`} 
            style={{
              color: '#ea384c',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;