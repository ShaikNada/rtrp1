import { TrendingUp, Heart } from 'lucide-react';

const D1 = ({ data }) => {
  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '32px',
    minHeight: '100vh',
  };

  const sectionTitle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
  };

  const cardStyle = {
    backgroundColor: '#1a1a1a',
    padding: '24px',
    borderRadius: '12px',
    flex: 1,
    marginRight: '16px',
  };

  const statStyle = {
    marginBottom: '24px',
  };

  const weeklyGoalStyle = {
    backgroundColor: '#1a1a1a',
    padding: '24px',
    borderRadius: '12px',
    width: '320px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px' }}>
        Hi, {data.name}! Hope you're doing well!
      </h1>
      <p style={{ color: '#999', marginBottom: '32px' }}>
        Your progress is looking good! Keep up the good work!
      </p>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {/* Today's Summary */}
        <div style={cardStyle}>
          <div style={sectionTitle}>TODAY'S SUMMARY</div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div style={statStyle}>
              <p style={{ fontSize: '13px', color: '#ccc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Steps <TrendingUp size={14} color="#ea384c" />
              </p>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{data.steps.toLocaleString()}</h3>
              <p style={{ fontSize: '12px', color: '#777' }}>Goal: {data.stepsGoal.toLocaleString()} remaining</p>
            </div>

            <div style={statStyle}>
              <p style={{ fontSize: '13px', color: '#ccc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Calories Burned <TrendingUp size={14} color="#ea384c" />
              </p>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{data.calories}</h3>
              <p style={{ fontSize: '12px', color: '#777' }}>{data.caloriesPercent}% of daily goal</p>
            </div>

            <div style={statStyle}>
              <p style={{ fontSize: '13px', color: '#ccc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Heart Rate <Heart size={14} color="#ea384c" />
              </p>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{data.heartRate} BPM</h3>
              <p style={{ fontSize: '12px', color: '#777' }}>Resting</p>
            </div>

            <div style={statStyle}>
              <p style={{ fontSize: '13px', color: '#ccc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Workouts <TrendingUp size={14} color="#ea384c" />
              </p>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{data.workouts}/{data.workoutsGoal}</h3>
              <p style={{ fontSize: '12px', color: '#777' }}>This week</p>
            </div>
          </div>
        </div>

        {/* Weekly Goal */}
        <div style={weeklyGoalStyle}>
          <h2 style={sectionTitle}>WEEKLY GOAL</h2>
          <div style={{ position: 'relative', width: '128px', height: '128px', margin: '0 auto' }}>
            <svg width="128" height="128" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#333"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="#ea384c"
                strokeWidth="3"
                strokeDasharray={`${data.weeklyGoalPercent}, 100`}
              />
            </svg>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.weeklyGoalPercent}%</span>
              <span style={{ fontSize: '12px', color: '#888' }}>Completion</span>
            </div>
          </div>
          <p style={{ marginTop: '16px', color: '#aaa' }}>You're on track to reach your weekly goal!</p>
        </div>
      </div>
    </div>
  );
};

export default D1;
