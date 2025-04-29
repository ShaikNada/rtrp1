import { ArrowRight, X, Check } from "lucide-react";
import { Link } from "react-router-dom";

const WorkoutCard = ({ id, title, image, duration, level, isCustom, isCompleted, onDelete }) => {
  return (
    <div style={{
      backgroundColor: isCompleted ? '#1a2e1a' : '#111',
      borderRadius: '8px',
      overflow: 'hidden',
      border: isCompleted ? '1px solid #4CAF50' : '1px solid #333',
      width: '100%',
      minHeight: '280px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.3s ease'
    }}>
      {isCustom && onDelete && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete();
          }}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2
          }}
        >
          <X size={16} />
        </button>
      )}

      {isCompleted && (
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '50%',
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}>
          <Check size={16} />
        </div>
      )}

      <Link 
        to={isCustom ? `/custom-workout/${id}` : `/training/${id}`}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ height: '140px', overflow: 'hidden' }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>

        <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            marginBottom: '8px',
            color: isCompleted ? '#88cc88' : '#aaa'
          }}>
            <span>🔥 {duration} min</span>
            <span>💪 {level}</span>
          </div>
          
          <h3 style={{ 
            color: isCompleted ? '#fff' : 'white', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            marginBottom: '12px',
            flex: 1
          }}>
            {title}
          </h3>

          <div style={{
            backgroundColor: isCompleted ? '#4CAF50' : '#ff4d4d',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            textAlign: 'center',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            {isCompleted ? 'Completed' : 'Start'}
            <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutCard;