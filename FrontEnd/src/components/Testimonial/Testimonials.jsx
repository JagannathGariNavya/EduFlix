import React from "react";
import "../../../src/testimonial.css"; // Adjust path as necessary

import img from "../../assets/testimonial01.png";

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      text: "Excellent course materials. I learned so much and it really helped me advance my career!",
      student: "John Doe",
      location: "California, United States",
    },
    {
      text: "The instructors are top-notch and the content is well-structured. Highly recommend!",
      student: "Jane Smith",
      location: "New York, United States",
    },
    {
      text: "This course exceeded my expectations. I feel more confident in my skills now!",
      student: "Alex Johnson",
      location: "Texas, United States",
    },
    {
      text: "Excellent course materials. I learned so much and it really helped me advance my career!",
      student: "John Doe",
      location: "California, United States",
    },
  ];

  return (
    <section className="testimonial__section">
      <div className="testimonial__wrapper">
        <div className="testimonial__img">
          <img src={img} alt="Testimonial" className="testimonial__image" />
        </div>
        <div className="testimonial__content">
          <h2 className="testimonial__title">Our Students' Voice</h2>
          <div className="testimonial__cards">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial__card">
                <div className="testimonial__text">
                  <p className="testimonial__quote">"{testimonial.text}"</p>
                </div>
                <div className="student__info">
                  <h6 className="student__name">{testimonial.student}</h6>
                  <p className="student__location">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
