import { Link } from "react-router-dom";

const WorkoutCategory = ({ title, icon, id }) => {
  return (
    <Link
      to={`/category/${id}/exercises`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#222', // secondary background
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#222')}
    >
      <div style={{ color: '#ff4d4d', marginBottom: '8px' }}>{icon}</div>
      <span style={{ color: 'white', textAlign: 'center' }}>{title}</span>
    </Link>
  );
};

export default WorkoutCategory;
