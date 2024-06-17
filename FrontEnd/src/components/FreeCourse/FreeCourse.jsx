import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "../FreeCourse/FreeCourseCard"; 
import courseImg01 from "../../assets/web-development.png";
import courseImg02 from "../../assets/kids-learning.png";
import courseImg03 from "../../assets/seo.png";
import courseImg04 from "../../assets/ui-ux.png";
import courseImg05 from "../../assets/Homepage.jpg";
import courseImg06 from "../../assets/homepage2.jpg";
import courseImg07 from "../../assets/testimonial01.png";
import courseImg08 from "../../assets/why-choose-us.png";
import courseImg09 from "../../assets/co.jpg";

import "../../../src/Free-Course.css"; 

const FreeCourse = () => {
  const initialCourseData = [
    {
      id: "01",
      title: "Basic Web Development Course",
      imgUrl: courseImg01,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Coding for Junior Basic Course",
      imgUrl: courseImg02,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "03",
      title: "Search Engine Optimization",
      imgUrl: courseImg03,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "04",
      title: "Basic UI/UX Design - Figma",
      imgUrl: courseImg04,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "05",
      title: "Graphic Design Fundamentals",
      imgUrl: courseImg05,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "06",
      title: "Data Science Basics",
      imgUrl: courseImg06,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "07",
      title: "Digital Marketing Essentials",
      imgUrl: courseImg07,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "08",
      title: "Introduction to Cloud Computing",
      imgUrl: courseImg08,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "09",
      title: "Software Testing Fundamentals",
      imgUrl: courseImg09,
      students: 5.3,
      rating: 1.7,
    },
  ];

  const [courses, setCourses] = useState(initialCourseData);

  return (
    <section className="freeCourse-section">
      <Container>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Our Free Courses</h2>
        </Col>
        <Row>
          {courses.map((item) => (
            <Col lg="3" md="4" className="mb-45" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;