import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const images = [
    "https://via.placeholder.com/600x300?text=Image+1",
    "https://via.placeholder.com/600x300?text=Image+2",
    "https://via.placeholder.com/600x300?text=Image+3",
    "https://via.placeholder.com/600x300?text=Image+4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToImage = (index) => {
    setCurrentIndex(index);
  };


  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </div>

       {/* Navigation buttons at the bottom */}
       <div className="carousel-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-nav-btn ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
