import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../../src/Layout.css"



const Layout = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    alert('Opening contact form');
    navigate('/contact');
  };

  return (
    <div className="layout-container">
      <div className="layout-box">
        <h1>Welcome to Our Website</h1>
        <p>If you have any concerns, please contact us.</p>
        <button onClick={handleContactClick} className="contact-button">Contact</button>
      </div>
    </div>
  );
};

export default Layout;
