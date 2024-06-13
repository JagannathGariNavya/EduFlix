import React from 'react';
import MainCard from './MainCard'; // Ensure this path is correct
import Contact from './contact'; // Import Contact correctly
import Carousel from './Carousel';
import HeroSection from './HeroSection';
import FreeCourse from './FreeCourse/FreeCourse';
// import HeroSection from './HeroSection';


const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      
      
      <Carousel />
      <FreeCourse />
      <MainCard />
      <Contact />
      {/* Add any other content for the Home page here */}
    </div>
  );
};

export default Home;
