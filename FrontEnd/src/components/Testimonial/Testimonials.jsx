import React from "react";
// import "react-slick/slick/slick.css";
// import "react-slick/slick/slick-theme.css";
// import "../../src/testimonial.css"; // Adjust path as necessary
// import Slider from "react-slick";

// import img from "../../assets/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  // // Sample testimonial data
  // const testimonials = [
  //   {
  //     text: "Excellent course materials. I learned so much and it really helped me advance my career!",
  //     student: "John Doe",
  //     location: "California, United States",
  //   },
  //   {
  //     text: "The instructors are top-notch and the content is well-structured. Highly recommend!",
  //     student: "Jane Smith",
  //     location: "New York, United States",
  //   },
  //   {
  //     text: "This course exceeded my expectations. I feel more confident in my skills now!",
  //     student: "Alex Johnson",
  //     location: "Texas, United States",
  //   },
  // ];

  // return (
  //   <section className="testimonial__section">
  //     <div className="testimonial__wrapper">
  //       <div className="testimonial__img">
  //         <img src={img} alt="Testimonial" className="testimonial__image" />
  //       </div>
  //       <div className="testimonial__content">
  //         <h2 className="testimonial__title">Our Students' Voice</h2>
  //         <Slider {...settings}>
  //           {testimonials.map((testimonial, index) => (
  //             <div key={index}>
  //               <div className="single__testimonial">
  //                 <h6 className="testimonial__heading">"{testimonial.text}"</h6>
  //                 <p className="testimonial__text">
  //                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe
  //                   id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae neque!
  //                 </p>
  //                 <div className="student__info">
  //                   <h6 className="student__name">{testimonial.student}</h6>
  //                   <p className="student__location">{testimonial.location}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </Slider>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Testimonials;
