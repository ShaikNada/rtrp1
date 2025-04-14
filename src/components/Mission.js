import React from "react";

const Mission = ({ scrollToAbout }) => {
  return (
    <div style={{
      backgroundColor: "#1a1a2e",
      color: "white",
      textAlign: "center",
      padding: "40px 20px",
    }}>
      <span style={{
        backgroundColor: "#444",
        padding: "5px 10px",
        borderRadius: "10px",
        fontSize: "14px",
      }}>
        Our Vision
      </span>
      
      <h2 style={{ fontSize: "36px", marginTop: "10px" }}>Our Mission</h2>
      
      <p style={{ 
        maxWidth: "600px", 
        margin: "10px auto", 
        fontSize: "18px" 
      }}>
        We're dedicated to providing the best workouts and meals to keep you fit and healthy, making fitness accessible and enjoyable for everyone.
      </p>
      
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        <div style={{
          backgroundColor: "#222",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "350px",
          textAlign: "left"
        }}>
          <h3>Empowering Your Wellness Journey</h3>
          <ul style={{ 
            paddingLeft: "20px",
            listStyleType: "none"
          }}>
            <li style={{ marginBottom: "10px" }}>✅ Making fitness accessible to everyone regardless of experience level</li>
            <li style={{ marginBottom: "10px" }}>✅ Creating sustainable habits that last a lifetime</li>
            <li>✅ Promoting holistic wellness beyond just physical fitness</li>
          </ul>
        </div>
        
        <div style={{
          backgroundColor: "#222",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "350px",
          textAlign: "left"
        }}>
          <h3>Our Commitment to You</h3>
          <ul style={{ 
            paddingLeft: "20px",
            listStyleType: "none"
          }}>
            <li style={{ marginBottom: "10px" }}>✅ Continuously updating our platform with the latest fitness research</li>
            <li style={{ marginBottom: "10px" }}>✅ Ensuring privacy and security for all your personal data</li>
            <li>✅ Providing responsive support from our team of fitness experts</li>
          </ul>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "white",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#f0f0f0";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.transform = "scale(1)";
        }}
      >
        Join Now
      </button>
    </div>
  );
};

export default Mission;