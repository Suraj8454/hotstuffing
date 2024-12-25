// OurServices.js
import React from 'react';
import './Servicehome.css'; // Import the CSS for styling

const Servicehome = () => {
  const services = [
    {
      title: 'Raw Material',
      description: 'we always use food items from known and reliable sources.',
      icon: '🌐',
    },
    {
      title: 'waste',
      description: 'keep food waste and debris to a minimum in the kitchen.',
      icon: '📱',
    },
    {
      title: 'Personal Hygine',
      description: 'the staff shouls be in the proper uniforms and wearing caps.',
      icon: '🎨',
    },
    {
      title: 'Equipments',
      description: 'all equipment like spoons,forks,plates,etc.',
      icon: '📈',
    },
    {
      title: 'Disposal',
      description: 'empty internal waste bins every two or three hours.',
      icon: '🔍',
    },
    {
      title: 'Food',
      description: 'health conscious diet,etc.',
      icon: '🛒',
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicehome;
