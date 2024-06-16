import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Enroll from "./components/Courses/Enroll";
import { CoursePage } from "./pages/CoursePage";
import { Subscription } from "./pages/Subscription";
import CallbackForm from "./components/CallbackForm";
import Footer from "./components/Footer/Footer";
import FreeCourse from "./components/FreeCourse/FreeCourse";
import { AdminHome } from "./ashwin_components/AdminHome";

import "./App.css";
import ContactPage from "./components/Layout/ContactPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Router>
        <div
          className={`app-container ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
        >
          <Navbar theme={theme} setTheme={toggleTheme} />
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <Navigate to={user.isAdmin ? "/admin" : "/home"} />
                ) : (
                  <Home />
                )
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/free-course" element={<FreeCourse />} />

            <Route
              path="/subscription"
              element={
                <ChakraProvider>
                  <Subscription />
                </ChakraProvider>
              }
            />

            <Route path="/callback" element={<CallbackForm />} />
            <Route path="/enroll/:courseTitle" element={<Enroll />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route
              path="/admin"
              element={user?.isAdmin ? <AdminHome /> : <Navigate to="/home" />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
