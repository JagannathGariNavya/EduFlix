import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Enroll from "./components/Courses/Enroll"; // Correct import path
import CourseDescription from "./components/Courses/CourseDescription";
import Subscription from './components/Subscription';
import CallbackForm from './components/CallbackForm';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <div className={`app-container ${theme === 'black' ? 'dark-theme' : 'light-theme'}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/callback" element={<CallbackForm />} />
          <Route path="/enroll/:courseTitle" element={<Enroll />} /> {/* Updated path */}
          <Route path="/course/:courseTitle" element={<CourseDescription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
