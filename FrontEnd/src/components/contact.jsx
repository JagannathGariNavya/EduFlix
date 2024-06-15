

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../src/contact-page.css'; // Import the CSS file for styling

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qqoak2d', 'template_54vo3sp', form.current, '8n4ZAqKngGKpmq7ZR')
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-page-overlay">
        {/* <h2>Contact Us</h2> */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
