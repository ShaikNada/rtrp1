import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkoutCard = ({ title, image, duration, level, id }) => {
  return (
    <div
      style={{
        backgroundColor: '#111',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #333',
        marginBottom: '16px',
      }}
    >
      <div style={{ height: '192px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'white', marginRight: '4px' }}>🔥</span> {duration} min
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'white', marginRight: '4px' }}>💪</span> {level}
          </span>
        </div>
        <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
          {title}
        </h3>
        <Link
          to={`/training/${id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff4d4d',
            color: 'white',
            padding: '10px 16px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Start <ArrowRight size={16} style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
