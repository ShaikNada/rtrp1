import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingPlanCard = ({ id, title, day, difficulty, image }) => {
  const renderDifficultyIcons = () => {
    const icons = [];
    for (let i = 0; i < difficulty; i++) {
      icons.push(<span key={i}>⚡</span>);
    }
    return icons;
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '16px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          {renderDifficultyIcons()}
        </div>
        <p style={{ color: '#aaa', marginBottom: '4px' }}>{title}</p>

        {/* Image Instead of Day */}
        <div style={{ marginBottom: '12px' }}>
          <img 
            src={image} 
            alt={title} 
            style={{
              width: '100%', 
              height: '180px', 
              objectFit: 'cover', 
              borderRadius: '8px'
            }} 
          />
        </div>

        <Link
          to={`/training/${id}/day/${day}/exercises`}
          style={{
            marginTop: '8px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
        >
          START <ArrowRight size={18} style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </div>
  );
};

export default TrainingPlanCard;
