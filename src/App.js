import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Aboutus from './components/Aboutus';
import WhyChooseUs from './components/WhyChooseUs';
import Mission from './components/Mission';
import LoginSuccess from './pages/LoginSuccess';

import Workouts from './pages/Workouts';

import './App.css';
import Dashboard from './pages/Dashboard';
import AIRecommendations from './pages/AIRecommendations';
import Settings from './pages/Settings';
import Nutrition from './pages/Nutrition';
import Progress from './pages/Progress';

function App() {
  const aboutRef = useRef(null);
  const aboutusRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const missionRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutus = () => {
    aboutusRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhyChooseUs = () => {
    whyChooseUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar 
              scrollToAbout={scrollToAbout}
              scrollToAboutus={scrollToAboutus}
              scrollToWhyChooseUs={scrollToWhyChooseUs}
              scrollToMission={scrollToMission}
            />
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={aboutusRef}>
              <Aboutus />
            </div>
            <div ref={whyChooseUsRef}>
              <WhyChooseUs />
            </div>
            <div ref={missionRef}>
              <Mission scrollToAbout={scrollToAbout} />
            </div>
          </>
        } />
        {/*<Route path="/login-success" element={<LoginSuccess />} />*/}
        <Route path="/dashboards" element={<Dashboard />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/ai-recommendations" element={<AIRecommendations />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;