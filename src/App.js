import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef, useState } from 'react';

import Navbar from './components/Navbar';
import About from './pages/About';
import Aboutus from './components/Aboutus';
import WhyChooseUs from './components/WhyChooseUs';
import Mission from './components/Mission';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Nutrition from './pages/Nutrition';
import BMICalculator from './pages/BMICalculator';
import MythBusters from './pages/MythBusters';
import AIRecommendations from './pages/AIRecommendations';
import Settings from './pages/Settings';
import AllWorkouts from './pages/AllWorkouts';

import ActiveWorkout from './pages/ActiveWorkout';

// Newly added pages
import ExercisePage from './pages/ExercisePage';
import TrainingPlansPage from './pages/TrainingPlansPage';
import WorkoutDetailPage from './pages/WorkoutDetailPage';
import WorkoutDayPage from './pages/WorkoutDayPage';
import RecipeDetail from './pages/RecipeDetail';
import CategoryExercises from './pages/CategoryExercises';
import CategoryWorkout from './pages/CategoryWorkout';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const aboutusRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const missionRef = useRef(null);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAboutus = () => aboutusRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToWhyChooseUs = () => whyChooseUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToMission = () => missionRef.current?.scrollIntoView({ behavior: 'smooth' });

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
              setShowSignUpForm={setShowSignUpForm}
            />
            <div ref={aboutRef}>
              <About 
                showSignUpForm={showSignUpForm} 
                setShowSignUpForm={setShowSignUpForm}
              />
            </div>
            <div ref={aboutusRef}><Aboutus /></div>
            <div ref={whyChooseUsRef}><WhyChooseUs /></div>
            <div ref={missionRef}><Mission scrollToAbout={scrollToAbout} /></div>
          </>
        } />
        <Route path="/dashboards" element={<Dashboard />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/bmicalculator" element={<BMICalculator />} />
        <Route path="/myth-busters" element={<MythBusters />} />
        <Route path="/ai-recommendations" element={<AIRecommendations />} />
        <Route path="/settings" element={<Settings />} />

        {/* New dynamic workout routes */}
        <Route path="/workouts/all" element={<AllWorkouts />} />
          <Route path="/training/:id" element={<TrainingPlansPage />} />
          <Route path="/training/:id/day/:day/exercises" element={<ExercisePage />} />
          <Route path="/training/:id/day/:day/workout/:exerciseId" element={<ActiveWorkout />} />
          <Route path="/category/:categoryId/exercises" element={<CategoryExercises />} />
          <Route path="/workout/:categoryId/:exerciseId" element={<CategoryWorkout />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;