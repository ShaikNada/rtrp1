import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rbgImage from '../images/rbg.png';

const About = ({ showSignUpForm, setShowSignUpForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Remove useEffect to prevent automatic form switching on page load
  useEffect(() => {
    // Clear any initial success/error messages
    setSuccess('');
    setError('');
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail === email) {
        setError("User already registered! Please login.");
        setShowSignUpForm(false);
        return;
      }
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", username);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password); // Store password for login validation
      setSuccess("Successfully registered! Please login.");
      setShowSignUpForm(false);
      setEmail('');
      setUsername('');
      setPassword('');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
      if (storedUsername === username && storedPassword === password) {
        setSuccess("Successfully logged in!");
        setTimeout(() => {
          navigate('/dashboards');
        }, 2000);
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
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
      {/* KEEPING ORIGINAL HEADER STYLES */}
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

      {/* COMPACT FORM STYLES */}
      <form onSubmit={showSignUpForm ? handleSignUp : handleLogin} style={{
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

        {success && (
          <div style={{
            color: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            padding: '8px',
            borderRadius: '4px',
            textAlign: 'center',
            fontSize: '12px',
            marginBottom: '5px'
          }}>
            {success}
          </div>
        )}

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

        {showSignUpForm ? (
          <>
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
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              style={inputStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

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
  transition: "border 0.2s ease",
  ':focus': {
    border: "1px solid rgba(255,255,255,0.4)"
  }
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
  transition: "background-color 0.2s ease",
  ':hover': {
    backgroundColor: "#d40000"
  }
};

export default About;