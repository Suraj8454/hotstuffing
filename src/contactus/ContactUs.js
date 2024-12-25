
// src/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';
import Footer from '../component/pages/footer/Footer';

import Top from './Top';

const ContactUs = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple alert to simulate form submission (you can replace with actual logic)
    alert('Thank you for contacting us!');
  };

  return (
    <>
    <Top/>
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please fill out the form below.</p>
      </header>
      <div className="contact-content">
        <section className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <h3>Our Information</h3>
          <p><strong>Email:</strong> sharadlalg@gmail.com</p>
          <p><strong>Phone:</strong> +91 8767381818</p>
          <p><strong>Address:</strong> Andheri (W) Mumbai-400 104</p>
        </section>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
