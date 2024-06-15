import React from 'react';
// import '../../../src/FreeCourseModal.css';

const CourseModal = ({ isOpen, toggle, course }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={toggle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={toggle}>&times;</span>
        <h2>{course.title}</h2>
        <div className="modal-body">
          <p><strong>Number of Students:</strong> {course.students}K</p>
          <p><strong>Rating:</strong> {course.rating}</p>
          <p><strong>Course Details:</strong> This course covers {course.title}. It is designed for beginners to get a solid foundation.</p>
          <p><strong>Accessibility:</strong> The course is accessible online at any time.</p>
        </div>
        <button onClick={toggle}>Close</button>
      </div>
    </div>
  );
};

export default CourseModal;
