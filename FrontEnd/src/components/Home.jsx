import React from 'react';
import MainCard from './MainCard'; // Ensure this path is correct
// Import Contact correctly
import Carousel from './Carousel';
import HeroSection from './HeroSection';
import FreeCourse from './FreeCourse/FreeCourse';
import ChooseUs from './ChooseUs/ChooseUs';
import Layout from './Layout/Layout';
import Testimonials from './Testimonial/Testimonials';
import Contact from './contact';
// import Footer from './Footer/Footer';
// import HeroSection from './HeroSection';


const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />


      <FreeCourse />
      <h2 style={{
        justifyContent: 'center',
        display: 'flex',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        marginTop: '30px',
        color: '#bf1757',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
      }}>Contact Us <pre> If you Want the Free Courses</pre></h2>
      <Contact />

      {/* <Carousel /> */}
      <MainCard />
      <ChooseUs />
      <Testimonials />
      <Layout />
      {/* <Footer/> */}
      {/* Add any other content for the Home page here */}
    </div>
  );
};

export default Home;