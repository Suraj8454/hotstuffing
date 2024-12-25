// src/OurServices.js
import React from 'react';
import './OurService.css';
import Footer from '../component/pages/footer/Footer';
import Servicestop from './Servicestop';
const OurService = () => {
  return (
    <>
  <Servicestop/>
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We offer a variety of services to meet your needs.</p>
      </header>

      <section className="services-content">
        <div className="service-card">
          <h3>Disposal</h3>
          <p>
          empty internal waste bins every two or three hours. .
          </p>
        </div>
        <div className="service-card">
          <h3>food</h3>
          <p>
          health conscious diet,etc.
          </p>
        </div>
        <div className="service-card">
          <h3>Equipments</h3>
          <p>
          all equipment like spoons,forks,plates,etc.
          </p>
        </div>
        <div className="service-card">
          <h3>Personal Hygine</h3>
          <p>
          the staff shouls be in the proper uniforms and wearing caps.
          </p>
        </div>
        <div className="service-card">
          <h3>waste</h3>
          <p>
          keep food waste and debris to a minimum in the kitchen.
          </p>
        </div>
        <div className="service-card">
          <h3>Raw Material</h3>
          <p>
          we always use food items from known and reliable sources.
          </p>
        </div>
      </section>

      
    </div>
    <Footer/>
    </>
  );
};

export default OurService;
