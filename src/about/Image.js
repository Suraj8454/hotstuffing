// src/App.js
import React from 'react';
import './Images.css';

function Image() {
  return (
    <div className="Img">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Responsive"
          className="responsive-image"
        />
      </div>
    </div>
  );
}

export default Image;
