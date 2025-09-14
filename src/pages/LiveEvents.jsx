import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import './LiveEvents.css';

const LiveEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - in real app, this would fetch from Firebase
    const mockEvents = [
      {
        id: 1,
        title: "Apna Khel Premier League 2024",
        description: "The ultimate cricket championship is here! Join the most prestigious tournament with professional-level competition and massive prize money. Open to all cricket enthusiasts.",
        registrationDeadline: "2025-11-15",
        prizePool: "₹2,50,000",
        teamsRegistered: 18,
        maxTeams: 24,
        status: "active",
        startDate: "2024-12-01",
        endDate: "2025-03-15"
      },
      {
        id: 2,
        title: "Corporate Cricket League",
        description: "Exclusive tournament for corporate teams. Network while you play and win exciting corporate gifts.",
        registrationDeadline: "2024-11-15",
        prizePool: "₹50,000",
        teamsRegistered: 16,
        maxTeams: 20
      },
      {
        id: 3,
        title: "Youth Cricket Tournament",
        description: "Special tournament for players under 25. Showcase your talent and get noticed by scouts.",
        registrationDeadline: "2024-10-30",
        prizePool: "₹75,000",
        teamsRegistered: 8,
        maxTeams: 16
      },
      {
        id: 4,
        title: "Women's Cricket Championship",
        description: "Empowering women in cricket! Join this exclusive tournament designed for female cricket enthusiasts.",
        registrationDeadline: "2024-09-20",
        prizePool: "₹60,000",
        teamsRegistered: 12,
        maxTeams: 16
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="live-events">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="live-events">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Live Events</h1>
          <p className="page-subtitle">
            Discover exciting cricket tournaments and register your team for the tournament of your choice!
          </p>
        </div>

        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {events.length === 0 && (
          <div className="no-events">
            <div className="no-events-icon">📅</div>
            <h3>No Events Available</h3>
            <p>Check back later for upcoming tournaments!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveEvents;
