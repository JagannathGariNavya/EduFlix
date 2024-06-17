import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../../src/Courses.css";
import CourseCard from "../components/Courses/CourseCard";
import Testimonials from "./Testimonial/Testimonials";
import Contact from "./contact";
import { querycontext } from "./Navbar";

const Courses = () => {
  const { query } = useContext(querycontext);
  const [coursesData, setCoursesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 16; // 4 rows * 4 columns = 16 courses per page
  const [filter, setFilter] = useState({
    level: "",
    instructor: "",
    badge: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://eduschool-2.onrender.com/card_data"
        );
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

  // Filter courses based on query and filter state
  const filteredItems = coursesData.filter((item) => {
    // Filter by query
    const queryFilter = item.name.toLowerCase().includes(query.toLowerCase());

    // Filter by sidebar selections
    const levelFilter =
      filter.level === "" || item.level.toLowerCase() === filter.level;
    const instructorFilter =
      filter.instructor === "" || item.name.toLowerCase().includes(filter.instructor.toLowerCase());
    const badgeFilter =
      filter.badge === "" || item.badge.toLowerCase() === filter.badge.toLowerCase();

    return queryFilter && levelFilter && instructorFilter && badgeFilter;
  });

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredItems.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="3" md="4"  >
          <h4 className="ftr-h4">Filter Options</h4>
            <div className="sidebar">
              
              
              <div className="filter">
                <label>Level:</label>
                <select
                  value={filter.level}
                  onChange={(e) => handleFilterChange("level", e.target.value)}
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="filter">
                <label>Instructor:</label>
                <input
                  type="text"
                  value={filter.instructor}
                  onChange={(e) =>
                    handleFilterChange("instructor", e.target.value)
                  }
                />
              </div>
              <div className="filter">
                <label>Badge:</label>
                <select
                  value={filter.badge}
                  onChange={(e) => handleFilterChange("badge", e.target.value)}
                >
                  <option value="">All</option>
                  <option value="bestseller">Bestseller</option>
                </select>
              </div>
            </div>
          </Col>
          <Col lg="9" md="8">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className="popular-courses">Our Popular Courses</h2>
                {/* <p className="p-tagd">
                  Anytime Anywhere Learn on your Suitable Schedule ..Designed to
                  transform you into a highly skilled Software
                  Professional..1700+ Companies have hired EduSchool learners
                </p> */}
              </div>
              <div className="w-50 text-end">
                <nav>
                  <ul className="pagination">
                    {Array.from(
                      {
                        length: Math.ceil(
                          filteredItems.length / coursesPerPage
                        ),
                      },
                      (_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            onClick={() => paginate(index + 1)}
                            className="page-link"
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </div>

            {currentCourses.length > 0 ? (
              <Row className="course__card__row">
                {currentCourses.map((item) => (
                  <Col lg="3" md="6" sm="6" key={item.id} className="mb-4">
                    <CourseCard item={item} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Col lg="12">
                <p>No courses available with the current filters.</p>
              </Col>
            )}

            <Col lg="12" className="mt-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {Array.from(
                    {
                      length: Math.ceil(
                        filteredItems.length / coursesPerPage
                      ),
                    },
                    (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(index + 1)}
                          className="page-link"
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                  <li
                    className={`page-item ${
                      currentPage ===
                      Math.ceil(filteredItems.length / coursesPerPage)
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </Col>
          </Col>
        </Row>
      </Container>
      <Testimonials />
      <Contact />
    </section>
  );
};

export default Courses;
