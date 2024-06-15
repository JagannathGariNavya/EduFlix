import React from "react";
import { useParams } from "react-router-dom";

const CourseDescription = () => {
  const { courseTitle } = useParams();

  return (
    <div>
      <h2>Course Description for {courseTitle}</h2>
      {/* Add detailed course description here */}
    </div>
  );
};

export default CourseDescription;
