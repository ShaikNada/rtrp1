import { Check } from "lucide-react";

const ExerciseItem = (props) => {
  const {
    id,
    name,
    image,
    tags,
    reps,
    completed = false,
  } = props;

  return (
    <div style={{ borderBottom: '1px solid #333', padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={image}
          alt={name}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '8px',
            objectFit: 'cover',
            marginRight: '16px',
          }}
        />
        <div style={{ flex: 1 }}>
          <h3 style={{ color: 'white', fontWeight: 500, fontSize: '18px', marginBottom: '4px' }}>
            {name}
            {completed && (
              <Check style={{ display: 'inline-block', marginLeft: '8px', color: 'green' }} size={20} />
            )}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#444',
                  color: '#fff',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div style={{ color: '#ff4d4d', fontWeight: 'bold', fontSize: '20px' }}>
          {reps && <span>x{reps}</span>}
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
