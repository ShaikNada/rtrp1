import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rbgImage from '../images/rbg.png';

const About = ({ showSignUpForm, setShowSignUpForm }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validate inputs
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const endpoint = showSignUpForm ? '/signup' : '/login';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email: email.toLowerCase().trim(),
          password
        })
      });

      const data = await response.json();

      if (!data.message) {
        setError(data.message || 'Authentication failed');
        setIsLoading(false);
        return;
      }

      // On success
      localStorage.setItem('userEmail', data.user.email);
      localStorage.setItem('userName', data.user.username);
      navigate('/dashboards');
      
    } catch (err) {
      console.error('Auth error:', err);
      setError('Network error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: `url(${rbgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      padding: "20px"
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: "50px",
        maxWidth: "800px"
      }}>
        <h1 style={{
          color: 'white',
          fontSize: 'clamp(42px, 8vw, 82px)',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          margin: '0',
          paddingTop: '5px',
          lineHeight: '1.2'
        }}>
          THE FITNESS HUB
        </h1>
        <p style={{
          color: 'white',
          fontSize: 'clamp(18px, 4vw, 30px)',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          margin: '10px 0 0',
          fontStyle: 'italic'
        }}>
          move • nourish • thrive
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "20px",
        borderRadius: "6px",
        width: "100%",
        maxWidth: "320px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{
          color: "white",
          textAlign: "center",
          margin: "0 0 12px 0",
          fontSize: "18px"
        }}>
          {showSignUpForm ? "Sign Up" : "Login"}
        </h2>

        {error && (
          <div style={{
            color: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            padding: '8px',
            borderRadius: '4px',
            textAlign: 'center',
            fontSize: '12px',
            marginBottom: '5px'
          }}>
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="6"
        />

        <button
          type="submit"
          style={buttonStyle}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : (showSignUpForm ? "Sign Up" : "Login")}
        </button>

        <p style={{
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          margin: "10px 0 0",
          fontSize: "13px"
        }}>
          {showSignUpForm ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setShowSignUpForm(!showSignUpForm)}
            style={{
              color: 'red',
              cursor: 'pointer',
              marginLeft: '6px',
              fontWeight: "600"
            }}
          >
            {showSignUpForm ? "Login" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: "10px 12px",
  borderRadius: "4px",
  border: "1px solid rgba(255,255,255,0.2)",
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "white",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  transition: "border 0.2s ease"
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "red",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
  width: "100%",
  fontSize: "14px",
  transition: "background-color 0.2s ease"
};

export default About;
