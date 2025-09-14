import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/download.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Apna Khel" className="logo-image" />
          <span className="logo-text">Apna Khel</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/live-events" className="nav-link">
              Live Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
