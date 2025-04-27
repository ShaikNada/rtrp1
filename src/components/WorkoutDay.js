import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const WorkoutDay = ({ day, exerciseCount, completed, trainingId, active = false }) => {
  const borderColor = active ? '#ff4d4d' : '#333'; // Red for active, dark gray otherwise
  const circleBg = active ? '#ff4d4d' : '#333';
  const cardBg = active ? '#ff4d4d' : '#1a1a1a'; // Light black background when inactive
  const buttonBg = active ? 'white' : 'transparent';
  const buttonText = active ? '#ff4d4d' : 'white';
  const buttonBorder = active ? 'none' : '1px solid white';

  return (
    <div style={{ position: 'relative', borderLeft: `2px solid ${borderColor}`, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px' }}>
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '16px',
          transform: 'translateX(-50%)',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: circleBg,
        }}
      ></div>
      <div style={{ backgroundColor: cardBg, borderRadius: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <h3 style={{ color: 'white', fontWeight: 'bold' }}>Day {day}</h3>
          {completed && <Check size={18} style={{ color: 'limegreen' }} />}
        </div>
        <p style={{ color: '#ccc', marginBottom: '12px' }}>
          {exerciseCount > 0 ? `${exerciseCount} Exercises` : "Rest"}
        </p>
        {exerciseCount > 0 && (
          <Link
            to={`/training/${trainingId}/day/${day}/exercises`}
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '112px', // w-28 -> 7rem -> 112px
              border: buttonBorder,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Start <ArrowRight size={14} style={{ marginLeft: '4px' }} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkoutDay;
