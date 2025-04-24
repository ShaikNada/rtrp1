import React from 'react';
import { Link } from 'react-router-dom';

const GetStartedCard = ({ title, type, description, linkUrl }) => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      padding: '24px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '12px',
      height: '100%'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: type === 'workout' ? 'rgba(234, 56, 76, 0.1)' : 'rgba(16, 185, 129, 0.1)'
      }}>
        {type === 'workout' ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            style={{
              height: '32px',
              width: '32px',
              color: '#ea384c'
            }} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            style={{
              height: '32px',
              width: '32px',
              color: '#10b981'
            }} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </div>
      <h3 style={{
        fontWeight: 'bold',
        fontSize: '18px'
      }}>{title}</h3>
      <p style={{
        color: '#888',
        fontSize: '14px'
      }}>{description}</p>
      <Link 
        to={linkUrl} 
        style={{
          marginTop: '12px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '8px 16px',
          borderRadius: '4px',
          color: 'white',
          backgroundColor: type === 'workout' ? '#ea384c' : '#10b981',
          textDecoration: 'none'
        }}
      >
        Get Started
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          style={{
            height: '16px',
            width: '16px'
          }} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default GetStartedCard;