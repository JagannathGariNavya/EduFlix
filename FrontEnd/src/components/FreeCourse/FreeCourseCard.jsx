
import "../../../src/Free-Course.css"; // Ensure correct path

import React, { useState } from 'react';
import CourseModal from './CourseModal'; // Adjust the import path as necessary
 // Create and style as needed

const FreeCourseCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="course-card">
        <img src={item.imgUrl} alt={item.title} />
        <br />
        <div className="course-info">
          <h5>{item.title}</h5>
          <button className="free-button" onClick={toggleModal}>Free</button>
          <br /> <br />
        </div>
      </div>
      <CourseModal isOpen={modalOpen} toggle={toggleModal} course={item} />
    </>
  );
};

export default FreeCourseCard;