import React from "react";
import "../../../src/Free-Course.css"; // Ensure correct path

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (

    <div className="freeCourse-card">
      <div className="freeCourse-card-img-wrapper">
        <img src={imgUrl} alt={title} className="freeCourse-card-img" />
        <button className=" free__btn">Free</button>

      </div>

      <div className="freeCourse-card-details">
        <h6 className="freeCourse-title">{title}</h6>

        <div className="d-flex align-items-center gap-5 freeCourse-card-info">
          <span className="d-flex align-items-center gap-2 freeCourse-card-detail">
            <i className="ri-user-line"></i><h3 className="free-h3"><b>Reviews :</b>{students}k</h3>
          </span>

          <span className="d-flex align-items-center gap-2 freeCourse-card-detail">
            <i className="ri-star-fill freeCourse-stars"></i><h4 className="free-h4"> Ratings :{rating}k</h4>
          </span>

        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
