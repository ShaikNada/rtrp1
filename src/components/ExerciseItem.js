import React from 'react';

const ExerciseItem = ({ name, image, reps, duration }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderTop: '1px solid #222',
        backgroundColor: isHovered ? '#1a1a1a' : 'transparent',
        transition: 'background-color 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '8px',
          marginRight: '16px',
          objectFit: 'contain'
        }} 
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '4px',
          color: isHovered ? '#ea384c' : 'white',
          transition: 'color 0.2s ease'
        }}>{name}</h3>
        <p style={{
          color: isHovered ? '#aaa' : '#888',
          fontSize: '14px',
          transition: 'color 0.2s ease'
        }}>{reps || duration}</p>
      </div>
    </div>
  );
};

export default ExerciseItem;