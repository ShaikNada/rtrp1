import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import './BMICalculator.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2)));

      if (bmiValue < 18.5) {
        setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setStatus('Normal');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
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
              />
            </div>
            </div>
            <div className="input-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bmi-input"
                placeholder="Enter weight in kg"
              />
            </div>

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
                        left: `${Math.min(Math.max((bmi - 10) * 2.5, 0), 100)}%`,
                      }}
                    ></div>
                  </div>
                  <div className="scale-values">
                    <span>10</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>
              </div>

              <div className="bmi-description">
                <h3>What your BMI means</h3>
                <p>
                  {status === 'Underweight' &&
                    'Being underweight could indicate nutritional deficiencies or other health issues. Consider consulting with a healthcare professional about healthy ways to gain weight.'}
                  {status === 'Normal' &&
                    'Your BMI is within the healthy weight range. Maintain a balanced diet and regular physical activity to stay healthy.'}
                  {status === 'Overweight' &&
                    'Being overweight may increase your risk of health problems. Consider incorporating more physical activity and a balanced diet to achieve a healthier weight.'}
                  {status === 'Obese' &&
                    "Obesity increases your risk for various health conditions. It's recommended to talk to a healthcare professional about strategies for weight management."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
