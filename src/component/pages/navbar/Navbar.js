import React, { useState } from 'react';
import './Navbar.css'; // We'll add our custom CSS styles hereimport '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling,setScrolling]=useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const change=()=>{
    if(window.scrollY>=80){
      setScrolling(true);
    }
    else{
      setScrolling(false);
    }
  };

  window.addEventListener('scroll',change);

  return (
    <nav className={scrolling ? 'navbar scroll' : 'navbar'}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span>Hot</span>Stuffing
        </a>

        {/* Hamburger Icon */}
        <div className={`menu-icon ${isMobile ? 'active' : ''}`} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isMobile ? 'active' : ''} `}>
        <li><a href="/" className="nav-item">Home</a></li>
          <li><a href="/about" className="nav-item">About</a></li>
          <li><a href="/ourservice" className="nav-item">Services</a></li>
          <li><a href="/contactus" className="nav-item">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
