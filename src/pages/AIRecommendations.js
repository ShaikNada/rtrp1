import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import { Zap, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const AIRecommendations = () => {
  const [selectedPreference, setSelectedPreference] = useState(null);
  const [askingQuestion, setAskingQuestion] = useState(false);
  const [question, setQuestion] = useState('');
  
  const preferences = [
    { id: 'weight-loss', title: 'Weight Loss', icon: '⚖️' },
    { id: 'muscle-gain', title: 'Muscle Gain', icon: '💪' },
    { id: 'nutrition', title: 'Nutrition', icon: '🥗' },
    { id: 'fitness-plan', title: 'Fitness Plan', icon: '📋' },
  ];
  
  const recommendations = [
    {
      title: "Add more protein to your diet",
      description: "Based on your goals and current diet, increasing protein intake can help build muscle and support recovery.",
      tips: ["Aim for 1.6-2.2g of protein per kg of bodyweight", "Include protein in every meal", "Consider a post-workout protein shake"]
    },
    {
      title: "Optimize your workout split",
      description: "Your current workout routine could be improved for better muscle growth and recovery.",
      tips: ["Try a push/pull/legs split", "Ensure at least 48 hours of rest for muscle groups", "Include progressive overload in your routine"]
    },
    {
      title: "Improve your sleep quality",
      description: "Quality sleep is essential for muscle recovery and overall health.",
      tips: ["Aim for 7-9 hours of sleep each night", "Avoid screen time 1 hour before bed", "Create a consistent sleep schedule"]
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
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '4px'
          }}>AI Recommendations</h1>
          <p style={{
            color: '#888',
            marginTop: '4px'
          }}>Get personalized advice based on your fitness data</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <Zap style={{
                backgroundColor: 'rgba(234, 56, 76, 0.1)',
                padding: '8px',
                borderRadius: '50%'
              }} color="#ea384c" />
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600'
              }}>Personalized Recommendations</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginBottom: '24px'
            }}>
              {preferences.map((pref) => (
                <div 
                  key={pref.id}
                  style={{
                    backgroundColor: selectedPreference === pref.id ? '#ea384c' : '#333',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setSelectedPreference(pref.id)}
                >
                  <div style={{ fontSize: '24px' }}>{pref.icon}</div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>{pref.title}</div>
                </div>
              ))}
            </div>
            
            <button style={{
              backgroundColor: '#ea384c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 16px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Generate Recommendations
              <ArrowRight size={18} />
            </button>
          </div>
          
          {askingQuestion ? (
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <Sparkles style={{
                  backgroundColor: 'rgba(234, 56, 76, 0.1)',
                  padding: '8px',
                  borderRadius: '50%'
                }} color="#ea384c" />
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '600'
                }}>Ask Me Anything</h2>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <textarea 
                  style={{
                    width: '100%',
                    height: '120px',
                    backgroundColor: '#333',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    color: 'white',
                    resize: 'none',
                    marginBottom: '12px'
                  }}
                  placeholder="Ask a fitness, nutrition, or wellness question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button style={{
                  backgroundColor: '#ea384c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Ask</button>
              </div>
              
              <button style={{
                background: 'none',
                border: 'none',
                color: '#ea384c',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginTop: '16px'
              }} onClick={() => setAskingQuestion(false)}>
                View Recommendations Instead
              </button>
            </div>
          ) : (
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <Sparkles style={{
                  backgroundColor: 'rgba(234, 56, 76, 0.1)',
                  padding: '8px',
                  borderRadius: '50%'
                }} color="#ea384c" />
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '600'
                }}>Your AI Recommendations</h2>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {recommendations.map((rec, index) => (
                  <div key={index} style={{
                    backgroundColor: '#333',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600'
                      }}>{rec.title}</h3>
                      <ChevronDown size={20} />
                    </div>
                    <p style={{
                      color: '#bbb',
                      marginBottom: '16px',
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}>{rec.description}</p>
                    <div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>Tips:</h4>
                      <ul style={{
                        listStyleType: 'disc',
                        paddingLeft: '24px'
                      }}>
                        {rec.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} style={{
                            fontSize: '14px',
                            color: '#bbb',
                            marginBottom: '6px'
                          }}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <button style={{
                background: 'none',
                border: 'none',
                color: '#ea384c',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginTop: '16px'
              }} onClick={() => setAskingQuestion(true)}>
                Ask a Specific Question Instead
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;