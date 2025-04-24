import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rbgImage from '../images/rbg.png'; // Import the image

const About = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email); // Store email
    navigate('/dashboards');
  };
  

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: `url(${rbgImage})`, // Use imported image
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed"
    }}>
      {/* Rest of your component remains the same */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{
          color: 'white',
          fontSize: '82px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          margin: '0',
          paddingTop: '5px'
        }}>
          THE FITNESS HUB
        </h1>
        <p style={{
          color: 'white',
          fontSize: '30px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          margin: '0'
        }}>
          move • nourish • thrive
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          width: "330px"
        }}
      >
        <h2 style={{
          color: "white",
          textAlign: "center",
          marginBottom: "10px"
        }}>
          Login to Fitness Hub
        </h2>
        
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "250px"
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "250px"
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button 
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            width: "100%"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#d40000"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "red"}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default About;