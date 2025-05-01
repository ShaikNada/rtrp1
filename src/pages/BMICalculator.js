import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import './BMICalculator.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const calculateBmi = () => {
    setError('');
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(age);

    if (!heightNum || !weightNum || !ageNum || !gender) {
      setError('Please fill in all fields.');
      return;
    }
    if (heightNum <= 0 || weightNum <= 0 || ageNum <= 0) {
      setError('Height, weight, and age must be positive numbers.');
      return;
    }
    if (!['Male', 'Female', 'Other'].includes(gender)) {
      setError('Please select a valid gender.');
      return;
    }

    const heightInMeters = heightNum / 100;
    const bmiValue = weightNum / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(2)));

    const isSenior = ageNum >= 65;
    if (isSenior) {
      if (bmiValue < 23) setStatus('Underweight');
      else if (bmiValue < 28) setStatus('Normal');
      else if (bmiValue < 32) setStatus('Overweight');
      else setStatus('Obese');
    } else {
      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue < 25) setStatus('Normal');
      else if (bmiValue < 30) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="app-container">
        <div className="main-content">
          <h1 className="page-title">BMI Calculator</h1>

          <div className="bmi-calculator">
            <div className="bmi-inputs">
              <div className="input-group">
                <label>Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bmi-input"
                  placeholder="Enter height in cm"
                  min="0"
                  step="0.1"
                  aria-label="Height in centimeters"
                />
              </div>
              <div className="input-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bmi-input"
                  placeholder="Enter weight in kg"
                  min="0"
                  step="0.1"
                  aria-label="Weight in kilograms"
                />
              </div>
              <div className="input-group">
                <label>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bmi-input"
                  placeholder="Enter age"
                  min="0"
                  step="1"
                  aria-label="Age in years"
                />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="bmi-input"
                  required
                  aria-label="Select gender"
                >
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {error && <p className="error-message">{error}</p>}

              <button className="calculate-btn" onClick={calculateBmi}>
                Calculate BMI
              </button>
            </div>

            {bmi !== null && (
              <div className="bmi-result">
                <div className="result-value">
                  <h3>Your BMI</h3>
                  <div className="bmi-number">{bmi}</div>
                  <div className={`bmi-status ${status.toLowerCase()}`}>
                    {status}
                  </div>
                  <div className="bmi-details">
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                  </div>
                </div>

                <div className="bmi-scale">
                  <div className="scale-container">
                    <div className="scale-labels">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                    <div className="scale-bar">
                      <div
                        className="scale-marker"
                        style={{
                          left: `${
                            Math.min(
                              Math.max((bmi - 10) / 30 * 100, 0),
                              100
                            )
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="scale-values">
                      <span>10</span>
                      <span>{parseInt(age) >= 65 ? '23' : '18.5'}</span>
                      <span>{parseInt(age) >= 65 ? '28' : '25'}</span>
                      <span>{parseInt(age) >= 65 ? '32' : '30'}</span>
                      <span>40</span>
                    </div>
                  </div>
                </div>

                <div className="bmi-description">
                  <h3>What your BMI means</h3>
                  <p>
                    {status === 'Underweight' &&
                      `Being underweight could indicate nutritional deficiencies or health issues. ${
                        gender === 'Female'
                          ? 'Women may face higher risks of fertility issues.'
                          : gender === 'Male'
                          ? 'Men may experience reduced muscle mass.'
                          : 'Consider your overall health.'
                      } Consult a healthcare professional for healthy weight gain strategies.`}
                    {status === 'Normal' &&
                      `Your BMI is within the healthy weight range. ${
                        gender === 'Female'
                          ? 'Women should maintain balanced nutrition for overall health.'
                          : gender === 'Male'
                          ? 'Men should continue regular exercise for muscle health.'
                          : 'Keep a balanced lifestyle.'
                      } Maintain a balanced diet and regular physical activity.`}
                    {status === 'Overweight' &&
                      `Being overweight may increase your risk of health problems. ${
                        gender === 'Female'
                          ? 'Women may have higher risks of joint issues.'
                          : gender === 'Male'
                          ? 'Men may face cardiovascular risks.'
                          : 'Consider your health risks.'
                      } Consider more physical activity and a balanced diet.`}
                    {status === 'Obese' &&
                      `Obesity increases your risk for various health conditions. ${
                        gender === 'Female'
                          ? 'Women may face higher risks of hormonal imbalances.'
                          : gender === 'Male'
                          ? 'Men may have increased heart disease risk.'
                          : 'Assess your health risks.'
                      } Consult a healthcare professional for weight management strategies.`}
                  </p>
                  <p>
                    Your age ({age}) {parseInt(age) >= 65 ? 'indicates you are a senior, and a slightly higher BMI may be healthier.' : 'is considered adult standard for BMI ranges.'} Gender ({gender}) can influence body composition and health recommendations. Consult a healthcare provider for personalized advice.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
