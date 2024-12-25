// ImageCarousel.js
import React, { useEffect, useState } from 'react';
import './Carousel.css'; // Import the CSS file for styling

const Carousel = () => {
  // Image data (URLs or paths)
  const images = [
    'https://via.placeholder.com/1200x400/ff7b7b/333333?text=Image+1',
    'https://via.placeholder.com/1200x400/ffb84d/333333?text=Image+2',
    'https://via.placeholder.com/1200x400/4dffb8/333333?text=Image+3',
    'https://via.placeholder.com/1200x400/7b8bff/333333?text=Image+4',
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to set a specific image by index
  const goToImage = (index) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Auto transition every 3 seconds
    return () => clearInterval(interval);
  }, []);
  


  return (
    <div className="carousel-container">
      {/* Display the current image */}
      <div className="carousel-images">
        <img
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      {/* Navigation buttons at the bottom */}
      <div className="carousel-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-nav-btn ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          >
           {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Carousel;
