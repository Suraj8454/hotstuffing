
// src/About.js
import React from 'react';
import './About.css';
import Footer from '../component/pages/footer/Footer';
import Image from './Image';
import ImageTop from './ImageTop';

const About = () => {
  return (
    <>
    <ImageTop/>
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our world of delicious experiences!</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            eget magna leo. Sed vitae erat vestibulum, sollicitudin turpis at,
            tempor libero. Aenean auctor augue ut malesuada tristique.
          </p>

          <h3>Our Mission</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            eget magna leo. Sed vitae erat vestibulum, sollicitudin turpis at,
            tempor libero. Aenean auctor augue ut malesuada tristique.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg0"
            alt="Our Story"
            className="image"
          />
        </div>
      </section>
     
    </div>
    <Footer/>
    </>
  );
};

export default About;
