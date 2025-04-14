import { Link } from 'react-router-dom';

const Navbar = ({ scrollToAbout, scrollToAboutus, scrollToWhyChooseUs, scrollToMission }) => {
  return (
    <nav style={{
      width: "100%",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      position: "fixed",
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        color: "red",
        fontSize: "24px",
        fontWeight: "bold",
        marginLeft: "15px"
      }}>THE FITNESS HUB</div>
      
      <ul style={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        margin: 0,
        padding: 0,
        marginRight: "40px"
      }}>
        <li>
          <button 
            onClick={scrollToAboutus}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.3s ease",
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = "#ccc"}
            onMouseLeave={(e) => e.target.style.color = "white"}
          >
            About Us
          </button>
        </li>
        <li>
          <button 
            onClick={scrollToWhyChooseUs}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.3s ease",
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = "#ccc"}
            onMouseLeave={(e) => e.target.style.color = "white"}
          >
            Why Choose Us
          </button>
        </li>
        <li>
          <button 
            onClick={scrollToMission}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.3s ease",
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = "#ccc"}
            onMouseLeave={(e) => e.target.style.color = "white"}
          >
            Our Mission
          </button>
        </li>
        <li>
          <button 
            onClick={scrollToAbout}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "15px",
              transition: "background-color 0.3s ease"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#d40000"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "red"}
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;