import React, { useState, useEffect } from 'react';
import Navbar2 from '../components/Navbar2';

const allMyths = [
  {
    myth: "Protein supplements cause kidney damage.",
    truth: "For healthy individuals, research shows that high protein intake does not damage kidneys. However, those with pre-existing kidney conditions should consult their healthcare provider.",
  },
  {
    myth: "Carbs are bad for you and should be avoided.",
    truth: "Carbohydrates are an essential macronutrient that provides energy. The key is choosing complex carbs (whole grains, vegetables) over simple ones (processed foods, added sugars).",
  },
  {
    myth: "You need to eat every 2-3 hours to boost metabolism.",
    truth: "Meal frequency has minimal impact on metabolism. Total daily calorie intake matters more than how often you eat.",
  },
  {
    myth: "Women will get bulky if they lift heavy weights.",
    truth: "Women typically lack the testosterone levels needed to build large muscles. Strength training improves bone density and enhances fitness.",
  },
  {
    myth: "You can spot-reduce fat from specific body parts.",
    truth: "Fat loss occurs throughout the body with a calorie deficit, not just in targeted areas.",
  },
  {
    myth: "Eating fat makes you fat.",
    truth: "Healthy fats are essential for hormone production and brain health. Overeating any macronutrient leads to weight gain.",
  },
  {
    myth: "Crunches will give you abs.",
    truth: "Abs are revealed by lowering overall body fat. Full-body training and nutrition matter more than just crunches.",
  },
  {
    myth: "Sweating equals fat loss.",
    truth: "Sweating helps cool your body—it doesn't correlate directly with burning fat.",
  },
  {
    myth: "You have to be sore after every workout.",
    truth: "Soreness is not a sign of progress. Consistent training matters more.",
  },
  {
    myth: "You should avoid eating at night.",
    truth: "Calories matter more than timing. Late-night meals don’t automatically lead to weight gain.",
  },
];

const funFacts = [
  "Drinking water can temporarily increase your metabolism by up to 30%.",
  "Muscle burns more calories at rest than fat.",
  "Laughter can boost your immune system and lower stress hormones.",
  "Sleep deprivation can lead to weight gain.",
  "Regular stretching improves posture and flexibility.",
  "Music can enhance physical performance during workouts.",
  "Strength training boosts metabolism more than cardio.",
  "Chewing food slowly can help reduce calorie intake.",
  "Spending time in nature improves mood and mental health.",
  "Your heart gets a workout too—it beats over 100,000 times a day!",
];

const getRandomMyths = () => {
  const shuffled = [...allMyths].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
};

const getRandomFact = () => {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
};

const MythBusters = () => {
  const [myths, setMyths] = useState(getRandomMyths());
  const [funFact, setFunFact] = useState(getRandomFact());

  useEffect(() => {
    const interval = setInterval(() => {
      setFunFact(getRandomFact());
    }, 60000); // change every 60 seconds
    return () => clearInterval(interval);
  }, []);

  const refreshMyths = () => {
    setMyths(getRandomMyths());
  };

  return (
    <div style={{ backgroundColor: '#111', color: '#fff', minHeight: '100vh', paddingBottom: '2rem' }}>
      <Navbar2 />

      {/* Fun Fact */}
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Fun Facts</h2>
        <div style={{
          backgroundColor: '#1f1f1f',
          borderLeft: '5px solid #e11d48',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1rem'
        }}>
          <strong style={{ color: '#e11d48' }}>Did you know?</strong> {funFact}
        </div>
      </div>

      {/* Title */}
      <div style={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>
          <span style={{ color: '#fff' }}>Myth</span><span style={{ color: '#ef4444' }}>Busters</span>
        </h1>
      </div>

      {/* Myths */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '0 2rem'
      }}>
        {myths.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              {item.myth}
            </h3>
            <div style={{
              backgroundColor: '#f3f4f6',
              padding: '1rem',
              borderLeft: '4px solid #e11d48',
              borderRadius: '6px'
            }}>
              <p style={{ color: '#e11d48', fontWeight: 'bold', marginBottom: '0.5rem' }}>Truth</p>
              <p>{item.truth}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={refreshMyths}
          style={{
            backgroundColor: '#e11d48',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#be123c')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#e11d48')}
        >
          🔄 Refresh Myths
        </button>
      </div>
    </div>
  );
};

export default MythBusters;
