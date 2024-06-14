import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../../src/Courses.css";
import CourseCard from "../components/Courses/CourseCard";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 16; // 4 rows * 4 columns = 16 courses per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://eduschool-2.onrender.com/card_data");
        if (response.data && Array.isArray(response.data)) {
          setCoursesData(response.data);
        } else {
          console.error("Unexpected response structure", response);
        }
      } catch (error) {
        console.error("Error fetching the courses data", error);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = coursesData.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate number of columns per row
  const columnsPerRow = 4;

  return (
    <section>
      <Container >
        <Row >
          <Col lg="12" className="mb-5" >
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>
              <div className="w-50 text-end">
                {/* Pagination buttons */}
                <nav>
                  <ul className="pagination">
                    {Array.from({ length: Math.ceil(coursesData.length / coursesPerPage) }, (_, index) => (
                      <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} >
                        <button onClick={() => paginate(index + 1)} className="page-link">
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </Col>

          {/* Display course cards */}
          {currentCourses.length > 0 ? (
            <Row className="course__card__row">
              {currentCourses.map((item, index) => (
                <Col lg="3" md="6" sm="6" key={index} className="mb-4">
                  <CourseCard item={item} />
                </Col>
              ))}
            </Row>
          ) : (
            <Col lg="12">
              <p>No courses available at the moment.</p>
            </Col>
          )}

          {/* Pagination navigation buttons */}
          <Col lg="12" className="mt-3">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                </li>
                {Array.from({ length: Math.ceil(coursesData.length / coursesPerPage) }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button onClick={() => paginate(index + 1)} className="page-link">
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(coursesData.length / coursesPerPage) ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
