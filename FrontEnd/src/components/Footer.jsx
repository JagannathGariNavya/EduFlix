// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { FaLocationDot } from 'react-icons/fa6';
// import axios from 'axios';
// import "../../../src/footer-css.css"; 

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubscribe = async () => {
//     if (email === '') {
//       setMessage('Please enter your email.');
//       return;
//     }
//     try {
//       // Send email to backend or email service
//       const response = await axios.post('https://your-backend-api/subscribe', { email });
//       if (response.status === 200) {
//         setMessage('Thank you for subscribing!');
//       } else {
//         setMessage('Thank you for subscribing!');
//       }
//     } catch (error) {
//       setMessage('Thank you for subscribing!');
//     }
//   };

//   return (
//     <div className="footer-container">
//       <div className="footer-content">
//         <div className="footer-sections">
//           <div className="footer-section">
//             <h2>What's up?</h2>
//             <p>Get updates about the programs, workshops, the latest developments, and community activities, straight to your inbox.</p>
//             <div className="footer-subscribe">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="footer-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button className="footer-button" onClick={handleSubscribe}>Subscribe</button>
//             </div>
//             {message && <p className="subscription-message">{message}</p>}
//           </div>

//           <div className="footer-section">
//             <h2>Product School</h2>
//             <Link to="/about-us" className="footer-link">About Us</Link>
//             <Link to="/case-studies" className="footer-link">Case Studies</Link>
//             <Link to="/contact-us" className="footer-link">Contact Us</Link>
//             <Link to="/refund-policy" className="footer-link">Refund Policy</Link>
//           </div>

//           <div className="footer-section">
//             <h2>Programs</h2>
//             <Link to="/crash-course" className="footer-link">Crash Course</Link>
//             <Link to="/masterclasses" className="footer-link">Masterclasses</Link>
//             <Link to="/intensive-programs" className="footer-link">Intensive Programs</Link>
//           </div>

//           <div className="footer-section">
//             <h2>More</h2>
//             <div className="footer-contact">
//               <FaPhoneAlt />
//               <span>(406) 555 -0120</span>
//             </div>
//             <div className="footer-contact">
//               <MdEmail />
//               <span>hi@growthschool.io</span>
//             </div>
//             <div className="footer-contact">
//               <FaLocationDot />
//               <span>2972 Westheimer Rd, Santa Ana, Illinois 85486</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;