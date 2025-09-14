import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🏏 Apna Khel</h3>
          <p>Your premier destination for cricket tournaments and team registrations.</p>
        </div>
        
        <div className="footer-section">
          <h4>Sponsors</h4>
          <div className="sponsors">
            <div className="sponsor-item">🏆 Cricket World</div>
            <div className="sponsor-item">⚡ Sports Gear Pro</div>
            <div className="sponsor-item">🎯 Victory Sports</div>
            <div className="sponsor-item">🏅 Champion League</div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/live-events">Live Events</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Apna Khel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
