import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import FreeCourseCard from "../FreeCourse/FreeCourseCard"; 
import courseImg01 from "../../assets/web-development.png";
import courseImg02 from "../../assets/kids-learning.png";
import courseImg03 from "../../assets/seo.png";
import courseImg04 from "../../assets/ui-ux.png";
import "../../../src/Free-Course.css"; 

const secretKey = "12345"; // This is your secret key

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
    
  ];

  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : initialCourseData;
  });
  const [newCourse, setNewCourse] = useState({
    id: "",
    title: "",
    imgUrl: courseImg01,
    students: 0,
    rating: 0,
  });
  const [key, setKey] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const checkSecretKey = () => {
    if (key === secretKey) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect secret key!");
    }
  };

  const addNewCourse = () => {
    setCourses([...courses, { ...newCourse, id: (courses.length + 1).toString() }]);
    setNewCourse({
      id: "",
      title: "",
      imgUrl: courseImg01,
      students: 0,
      rating: 0,
    });
  };

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
        {!isAuthorized ? (
          <Form className="mt-5 form-container">
            <FormGroup>
              <Label for="secretKey">Enter Secret Key</Label>
              <Input
                type="password"
                name="key"
                id="secretKey"
                value={key}
                onChange={handleKeyChange}
              />
            </FormGroup>
            <Button onClick={checkSecretKey}>Submit</Button>
          </Form>
        ) : (
          <Form className="mt-5 form-container">
            <FormGroup>
              <Label for="courseTitle">Course Title</Label>
              <Input
                type="text"
                name="title"
                id="courseTitle"
                value={newCourse.title}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="courseStudents">Number of Students</Label>
              <Input
                type="number"
                name="students"
                id="courseStudents"
                value={newCourse.students}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="courseRating">Rating</Label>
              <Input
                type="number"
                name="rating"
                id="courseRating"
                value={newCourse.rating}
                onChange={handleInputChange}
                step="0.1"
              />
            </FormGroup>
            <Button onClick={addNewCourse}>Add Course</Button>
          </Form>
        )}
      </Container>
    </section>
  );
};

export default FreeCourse;
