import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeader = ({
  title,
  linkText,
  linkUrl
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    }}>
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '18px',
        textTransform: 'uppercase'
      }}>{title}</h2>
      
      {linkText && linkUrl && (
        <Link 
          to={linkUrl} 
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: isHovered ? '#ffffff' : '#888888',
            textDecoration: 'none',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {linkText}
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
      )}
    </div>
  );
};

export default SectionHeader;