import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Enroll from "./components/Courses/Enroll"; // Correct import path
import CourseDescription from "./components/Courses/CourseDescription";
import Subscription from './components/Subscription';
import CallbackForm from './components/CallbackForm';
import Footer from './components/Footer/Footer';
import FreeCourse from './components/FreeCourse/FreeCourse';

import './App.css';
import ContactPage from './components/Layout/ContactPage';
import Login from './components/Login'; // Import Login component
import SignUp from './components/SignUp'; // Import SignUp component
import { AllRoutes } from './pages/AllRoutes';
import { BrowserRouter} from "react-router-dom";
import { ChakraProvider} from '@chakra-ui/react'
import { CoursePage } from './pages/CoursePage';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [user, setUser] = useState(null); // Define user state

  return (
    <Router>
      <div className={`app-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <Navbar theme={theme} setTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/free-course" element={<FreeCourse />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/callback" element={<CallbackForm />} />
          <Route path="/enroll/:courseTitle" element={<Enroll />} />
          <Route path="/course/:courseTitle" element={<CourseDescription />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} /> 
          
        </Routes>
        <Footer />
      </div>
    </Router>
    <div>
      <ChakraProvider>
      <BrowserRouter>
        <AllRoutes/>
        </BrowserRouter>
        </ChakraProvider>
        
    </div>
  );
};


export default App;
