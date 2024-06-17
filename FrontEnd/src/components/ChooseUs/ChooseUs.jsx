import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/why-choose-us.png";
import "../../../src/choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const shortText = `
    Choosing the right platform for your learning journey is crucial, and here's why we stand out:
    1. Expert-Led Courses
    2. Comprehensive Curriculum
    3. Flexible Learning
    4. Interactive Learning Experience
    5. Community Support
  `;

  const fullText = `
    Choosing the right platform for your learning journey is crucial, and here's why we stand out from the rest:
    1. Expert-Led Courses: Our courses are crafted and delivered by industry experts who bring real-world experience to the classroom. Learn from professionals who know what it takes to succeed.
    2. Comprehensive Curriculum: We offer a wide range of courses that cover everything from foundational skills to advanced specializations. Our curriculum is designed to be thorough and up-to-date with the latest industry trends.
    3. Flexible Learning: Learn at your own pace with our flexible scheduling options. Whether you prefer a fast-tracked intensive program or a more gradual approach, we accommodate your needs.
    4. Interactive Learning Experience: Our platform is built to engage. Participate in interactive lessons, live Q&A sessions, and hands-on projects to reinforce your learning and gain practical skills.
    5. Community Support: Join a vibrant community of learners and professionals. Share knowledge, collaborate on projects, and grow together. Our forums and community events provide ample networking opportunities.
    6. Career Guidance: We don’t just teach you the skills; we guide you on how to apply them in the real world. Benefit from career coaching, resume building workshops, and interview preparation sessions.
    7. Certification and Recognition: Earn certificates that are recognized by top companies in the industry. Show off your achievements and stand out in the job market with credentials from our esteemed platform.
    8. Affordable Pricing: Quality education should be accessible. We offer competitive pricing and various subscription plans to ensure that you can pursue your learning goals without financial strain.
    9. Continuous Improvement: We are committed to excellence. Our courses are regularly updated to reflect the latest advancements and feedback from learners, ensuring you always get the best learning experience.
    10. Satisfaction Guaranteed: We are confident in the quality of our courses. That’s why we offer a satisfaction guarantee. If you’re not happy with your course, let us know and we’ll make it right.
  `;

  return (
    <section className="choose-us-section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us?</h2>
              <p >{showFullText ? fullText : shortText}</p>
              {shortText.length < fullText.length && (
                <button
                  className="see-more-button"
                  onClick={() => setShowFullText(!showFullText)}
                >
                  {showFullText ? "See Less" : "See More"}
                </button>
              )}
            </div>
          </Col>

          <Col lg="6" md="6" className="text-center">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;