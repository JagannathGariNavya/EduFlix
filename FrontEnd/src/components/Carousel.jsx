// Carousel.jsx
import React, { useState } from 'react';
import '../../src/Carousel.css'; // Import CSS for styling
import HomeImage from '../assets/Home.jpg';
import Homepage2Image from '../assets/homepage2.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [HomeImage, Homepage2Image];
  const altTexts = ['Home Image', 'Homepage 2 Image'];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <div className="carousel">
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className="slide">
          <img src={images[0]} alt={altTexts[0]} className="slide-img" />
        </div>
        <div className="slide2">
          <img src={images[1]} alt={altTexts[1]} className="slide-img2" />
        </div>
      </div>
      <button className="prev-btn" onClick={prevSlide}>Prev</button>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
