import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (  
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Apna Khel</span>
          </h1>
          <p className="hero-subtitle">
            Join the ultimate cricket tournament experience. View live events, 
            choose your tournament, and register your team to compete with the best!
          </p>
          <div className="hero-actions">
            <Link to="/live-events" className="btn btn-primary">
              View Live Events & Register
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="cricket-illustration">
            🏏⚾🏆
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Apna Khel?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Premium Tournaments</h3>
              <p>Participate in professionally organized cricket tournaments with exciting prize pools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Easy Registration</h3>
              <p>Browse live events, select your tournament, and register your team in minutes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Real-time Updates</h3>
              <p>Stay updated with live scores, match schedules, and tournament progress.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Teams Registered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Tournaments Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Players Participated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹2L+</div>
              <div className="stat-label">Prize Money Distributed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
