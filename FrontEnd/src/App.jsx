import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Subscription from './components/Subscription';
import './App.css'; // Assuming you have a CSS file for general styles

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <div className='nav-container'>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
