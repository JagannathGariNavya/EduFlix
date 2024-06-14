import React from "react";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "../FreeCourse/FreeCourseCard"; 
import courseImg01 from "../../assets/web-development.png";
import courseImg02 from "../../assets/kids-learning.png";
import courseImg03 from "../../assets/seo.png";
import courseImg04 from "../../assets/ui-ux.png";
import "../../../src/Free-Course.css"; 

// Course data
const freeCourseData = [
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
    title: "Search Engine Optimization ",
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
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "06",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section className="freeCourse-section">
      <Container>
      <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>
        <Row>
          
          {freeCourseData.map((item) => (
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
