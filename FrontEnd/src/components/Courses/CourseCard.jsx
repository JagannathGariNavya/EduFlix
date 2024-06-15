import React from "react";
import { Link } from "react-router-dom";
import "../../../src/CourseCard.css";

const CourseCard = (props) => {
  const { image, title, lecture_count, review_count, rating_num, price } = props.item;

  return (
    <div className="course-card">
      <div className="course-card-body">
        <img src={image} alt={title} className="course-card-img" />
        <div className="course-card-content">
          <h4 className="course__title mb-4" data-title={title}>{title}</h4>
          <p className="course-card-text">
            This course is perfect for students.
          </p>
          <div className="course-card-info">
            <p className="course-card-detail">
              <i className="ri-book-open-line"></i> {lecture_count} Lectures
            </p>
            <p className="course-card-detail">
              <i className="ri-user-line"></i> <b>Reviews:</b> {review_count}
            </p>
            <p className="course-card-detail">
              <span className="stars">
                ★★★★☆
              </span>
              {rating_num}
            </p>
          </div>
          <p className="course-card-price">${price}</p>
        </div>
      </div>
      <div className="course-card-footer">
        <Link to={`/enroll/${encodeURIComponent(title)}`} className="btn btn-solid">Enroll Now</Link> {/* Use encodeURIComponent to handle special characters in URL */}
        <Link to={`/course/${encodeURIComponent(title)}`} className="btn btn-ghost">View Course</Link> {/* Similarly encode the course title for View Course */}
      </div>
    </div>
  );
};

export default CourseCard;
