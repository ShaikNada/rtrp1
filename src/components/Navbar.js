import React from 'react';

const Navbar = ({ 
  scrollToAbout, 
  scrollToAboutus, 
  scrollToWhyChooseUs, 
  scrollToMission,
  setShowSignUpForm 
}) => {
  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    scrollToAbout();
  };

  return (
    <nav style={{
      width: "100%",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 5%",
      position: "fixed",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      <div style={{
        color: "red",
        fontSize: "clamp(18px, 4vw, 24px)",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        minWidth: "120px"
      }}>
        THE FITNESS HUB
      </div>

      <ul style={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        gap: "clamp(10px, 2vw, 20px)",
        margin: 0,
        padding: 0,
        flexWrap: "wrap",
        justifyContent: "flex-end"
      }}>
        <li>
          <button
            onClick={scrollToAboutus}
            style={{
              ...buttonStyle,
              fontSize: "clamp(12px, 2vw, 16px)"
            }}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            onClick={scrollToWhyChooseUs}
            style={{
              ...buttonStyle,
              fontSize: "clamp(12px, 2vw, 16px)"
            }}
          >
            Why Choose Us
          </button>
        </li>
        <li>
          <button
            onClick={scrollToMission}
            style={{
              ...buttonStyle,
              fontSize: "clamp(12px, 2vw, 16px)"
            }}
          >
            Our Mission
          </button>
        </li>
        <li>
          <button
            onClick={handleSignUpClick}
            style={{
              ...signupButtonStyle,
              fontSize: "clamp(12px, 2vw, 16px)",
              padding: "clamp(8px, 2vw, 10px) clamp(12px, 3vw, 24px)"
            }}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

const buttonStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",
  ':hover': {
    color: "#ccc"
  }
};

const signupButtonStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  ':hover': {
    backgroundColor: "#d40000",
    transform: "scale(1.05)"
  }
};

export default Navbar;