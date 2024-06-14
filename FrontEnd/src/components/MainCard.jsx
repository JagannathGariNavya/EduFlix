import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/MainCard.css'; 

const MainCard = () => {
  return (
    <>
    
    

    <div className="card">
      <h2>Launch your career powerfully with EduSchool Academy</h2>
      <p>Build skills to get a high paid software job</p>
      <ul>
        <pre>POST 12TH / INTERMEDIATE</pre>
        <pre>1ST, 2ND, 3RD YEAR</pre>
        <li>Learn like top IITians and achieve high-paid software jobs</li>
      </ul>
      <div className="batch-info">
        <p>Best Offer</p>
        <p>Starts soon</p>
        <p>Limited Seats Available</p>
      </div>
      <Link to="/callback" className="request-callback-button">Request Callback</Link>
    </div>
    </>
  );
};

export default MainCard;
