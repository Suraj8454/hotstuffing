// src/components/MenuSection.js
import React from 'react';
import './Menu.css'; // Add styles later
import { motion } from 'framer-motion';
import { fadeIn } from '../../../Motion';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2>Our Top Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Pasta Carbonara</h3>
            <p>A classic Italian dish with creamy sauce, pancetta, and parmesan.</p>
            <span>Rs.499</span>
          </div>
          <div className="menu-item">
            <h3>Grilled Salmon</h3>
            <p>Freshly grilled salmon with a side of vegetables.</p>
            <span>Rs.190</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
