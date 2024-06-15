import React from 'react';
import Contact from '../../components/contact'; // Import the Contact component
import "../../../src/contact-page.css"
// import "../../../src/contact-page.css"

const ContactPage = () => {
  return (
    <div className="contact-page1">
    <div className="contact-page-overlay1">
      <h2>Contact Us</h2>
      <Contact /> {/* Render the Contact component */}
    </div>
  </div>
  );
};

export default ContactPage;
