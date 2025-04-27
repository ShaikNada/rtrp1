import { ArrowLeft, ArrowRight, Settings, ThumbsUp, Volume2 } from "lucide-react";
import { useState } from "react";

const ActiveExercise = ({ 
  exercise, 
  onComplete, 
  onPrevious, 
  onNext,
  isFirst = false,
  isLast = false
}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    },
    image: {
      width: '100%',
      maxWidth: '20rem',
      height: 'auto',
      marginBottom: '2rem',
      borderRadius: '0.5rem',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
    },
    reps: {
      fontSize: '3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FF0000', // workout-red color
      marginBottom: '1.5rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
    },
    button: {
      borderRadius: '50%',
      padding: '0.75rem',
      backgroundColor: '#2c2c2c', // workout-darkGray color
    },
    buttonIcon: {
      color: 'white',
      fontSize: '1.5rem',
    },
    navigationButtons: {
      display: 'flex',
      gap: '1rem',
    },
    doneButton: {
      backgroundColor: '#FF0000', // workout-red color
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '1rem',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      marginTop: '1.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img 
          src={exercise.image} 
          alt={exercise.name} 
          style={styles.image}
        />
        
        <h2 style={styles.title}>{exercise.name}</h2>
        
        <div style={styles.reps}>
          {exercise.reps ? `x${exercise.reps}` : ''}
        </div>
        
        <div style={styles.buttonContainer}>
          <button style={styles.button}>
            <Settings style={styles.buttonIcon} />
          </button>
          <button style={styles.button}>
            <Volume2 style={styles.buttonIcon} />
          </button>
        </div>
        
        <div style={{ ...styles.navigationButtons, flexDirection: 'column', alignItems: 'center' }}>
          <div style={styles.navigationButtons}>
            {!isFirst && (
              <button 
                onClick={onPrevious}
                style={styles.button}
              >
                <ArrowLeft style={styles.buttonIcon} />
              </button>
            )}
            
            <button 
              onClick={onComplete}
              style={{ ...styles.button, backgroundColor: '#FF0000' }}
            >
              <ThumbsUp style={styles.buttonIcon} />
            </button>
            
            {!isLast && (
              <button 
                onClick={onNext}
                style={styles.button}
              >
                <ArrowRight style={styles.buttonIcon} />
              </button>
            )}
          </div>
          
          <button 
            onClick={onComplete}
            style={styles.doneButton}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveExercise;
