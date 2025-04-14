import React from 'react';

const Aboutus = () => {
  return (
    <div id='aboutus' style={{
      fontFamily: 'Arial, sans-serif',
    
      margin: '0 auto',
      padding: '20px',
      
    }}>
      <section style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '45px',
          color: '#f9f9f9'
        }}>
          Fit for you, <span style={{ color: '#d9534f' }}>Built by you</span>
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#f9f9f9',
          lineHeight: '1.5'
        }}>
          At The Fitness Hub, we believe that every fitness journey is unique. That's why we've created a platform that adapts to your needs, goals, and lifestyle. Our team of experts has developed a system that evolves with you, providing personalized guidance every step of the way.
        </p>
      </section>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{
          flex: '1',
          margin: '10px',
          padding: '20px',
          background: '#fff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px'
        }}>
          <h3 style={{
            fontSize: '20px',
            color: '#333'
          }}>
            Innovative Approach
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Our technology combines cutting-edge fitness science with intuitive design, creating a seamless experience that makes achieving your goals easier than ever before.
          </p>
        </div>
        
        <div style={{
          flex: '1',
          margin: '10px',
          padding: '20px',
          background: '#fff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px'
        }}>
          <h3 style={{
            fontSize: '20px',
            color: '#333'
          }}>
            Expert Guidance
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Our team of certified fitness professionals, nutritionists, and wellness coaches work together to provide you with the most accurate and effective guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;