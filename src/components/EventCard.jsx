import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const currentDate = new Date();
  const registrationDeadline = new Date(event.registrationDeadline);
  const isRegistrationOpen = registrationDeadline > currentDate;
  const isEventActive = event.status === 'active' && isRegistrationOpen;

  return (
    <div className={`event-card ${event.status === 'active' ? 'active-event' : ''}`}>
      <div className="event-header">
        <h3 className="event-title">{event.title}</h3>
        <div className="status-container">
          {event.status === 'active' && (
            <span className="active-badge">🔥 LIVE</span>
          )}
          <span className={`event-status ${isRegistrationOpen ? 'open' : 'closed'}`}>
            {isRegistrationOpen ? 'Registration Open' : 'Registration Closed'}
          </span>
        </div>
      </div>
      
      <div className="event-details">
        <p className="event-description">{event.description}</p>
        
        <div className="event-info">
          <div className="info-item">
            <span className="info-label">📅 Registration Deadline:</span>
            <span className="info-value">{formatDate(event.registrationDeadline)}</span>
            {isRegistrationOpen && (
              <span className="days-remaining">
                ({Math.ceil((registrationDeadline - currentDate) / (1000 * 60 * 60 * 24))} days left)
              </span>
            )}
          </div>
          
          <div className="info-item">
            <span className="info-label">🏆 Prize Pool:</span>
            <span className="info-value">{event.prizePool}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">👥 Teams Registered:</span>
            <span className="info-value">{event.teamsRegistered}/{event.maxTeams}</span>
          </div>
        </div>
      </div>
      
      <div className="event-actions">
        {isRegistrationOpen ? (
          <Link 
            to={`/team-registration/${event.id}`} 
            className={`register-btn ${isEventActive ? 'active-register' : ''}`}
          >
            {isEventActive ? '🔥 Register Now' : 'Register for this Event'}
          </Link>
        ) : (
          <button className="register-btn disabled" disabled>
            Registration Closed
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
