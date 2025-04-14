import { FaDumbbell, FaUtensils, FaChartLine, FaTasks, FaInfoCircle, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaDumbbell size={24} style={{ color: "#ff4d4d" }} />, 
      title: "Personalized Fitness Plans", 
      description: "Tailored workout routines based on your goals, fitness level, and preferences that adapt as you progress."
    },
    {
      icon: <FaUtensils size={24} style={{ color: "#ff4d4d" }} />, 
      title: "Personalized Diet Plans", 
      description: "Nutrition programs customized to your dietary needs, preferences, and goals to fuel your workouts and recovery."
    },
    {
      icon: <FaChartLine size={24} style={{ color: "#ff4d4d" }} />, 
      title: "Smart Progress Tracking", 
      description: "Advanced analytics that monitor your improvements, celebrate milestones, and help you visualize your journey."
    },
    {
      icon: <FaTasks size={24} style={{ color: "#ff4d4d" }} />, 
      title: "Daily Challenges", 
      description: "Fun, motivating challenges that keep your routine fresh and help you push beyond your comfort zone."
    },
    {
      icon: <FaInfoCircle size={24} style={{ color: "#ff4d4d" }} />, 
      title: "Myth Busters", 
      description: "Evidence-based information that debunks common fitness and nutrition myths to help you make informed decisions."
    },
    {
      icon: <FaUsers size={24} style={{ color: "#ff4d4d" }} />, 
      title: "Community Support", 
      description: "Connect with like-minded individuals, share your journey, and get motivation from a supportive community."
    }
  ];

  return (
    <div id="whyus" style={{ 
      textAlign: "center", 
      padding: "3rem 1rem", 
      backgroundColor: "#f8f9fa" 
    }}>
      <h2 style={{ 
        fontSize: "2rem", 
        fontWeight: "bold", 
        color: "#212529" 
      }}>
        Why Choose Us?
      </h2>
      <p style={{ 
        color: "#6c757d", 
        marginTop: "0.5rem", 
        marginBottom: "1.5rem", 
        maxWidth: "600px", 
        marginInline: "auto" 
      }}>
        Discover how our innovative platform transforms your fitness journey with these powerful features designed to optimize your results.
      </p>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "1.5rem", 
        maxWidth: "1000px", 
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{ 
            backgroundColor: "#343a40", 
            color: "white", 
            padding: "1.5rem", 
            borderRadius: "8px", 
            textAlign: "left", 
            display: "flex", 
            flexDirection: "column", 
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
          }}>
            <div style={{ 
              backgroundColor: "#495057", 
              padding: "0.75rem", 
              borderRadius: "6px", 
              marginBottom: "1rem", 
              display: "inline-block" 
            }}>
              {feature.icon}
            </div>
            <h3 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              color: "#ff4d4d", 
              marginBottom: "0.5rem" 
            }}>
              {feature.title}
            </h3>
            <p style={{ color: "#adb5bd" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;