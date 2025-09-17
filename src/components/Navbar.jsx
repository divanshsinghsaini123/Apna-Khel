// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

// Logo imports have been removed

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-container">
      {/* Top section with logos and branding */}
      <div className="navbar-top">
        <div className="navbar-top-content">
          <Link to="/" className="navbar-logo-main">
            {/* Image tag replaced with a span for text */}
            <span>T20CCL</span>
          </Link>
          <div className="navbar-branding">
            <h1>T20 CRICKET CHAMPIONS LEAGUE</h1>
            <p>SPONSORED BY ALL INDIA CRICKET ASSOCIATION (AICA)</p>
            <span>An ISO 9001 - 2015 Certified League</span>
          </div>
          <div className="navbar-logo-secondary">
            {/* Image tag replaced with a span for text */}
            <span>AICA</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar (no changes here) */}
      <nav className="navbar-main">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Trials & Selection ▼</span>
            <ul className="dropdown-menu">
              <li><Link to="/selection-process" onClick={toggleMobileMenu}>Selection Process</Link></li>
              <li><Link to="/trial-dates" onClick={toggleMobileMenu}>Upcoming Trial Dates</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Registration & Fees ▼</span>
            <ul className="dropdown-menu">
              <li><Link to="/register" onClick={toggleMobileMenu}>Register Now</Link></li>
              <li><Link to="/pay-trial-fees" onClick={toggleMobileMenu}>Pay Trial Fees</Link></li>
              <li><Link to="/pay-selection-fees" onClick={toggleMobileMenu}>Pay Selection Fees</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={toggleMobileMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;