import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './TeamRegistration.css';

const TeamRegistration = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('event');
  
  const [team, setTeam] = useState({
    teamName: '',
    captain: { name: '', mobile: '', age: '' },
    viceCaptain: { name: '', mobile: '', age: '' },
    members: [{ name: '', mobile: '', age: '' }]
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  // Mock event data - in real app, fetch from Firebase
  const events = {
    1: { title: "Summer Cricket Championship 2024", id: 1 },
    2: { title: "Corporate Cricket League", id: 2 },
    3: { title: "Youth Cricket Tournament", id: 3 },
    4: { title: "Women's Cricket Championship", id: 4 }
  };

  useEffect(() => {
    if (eventId && events[eventId]) {
      setEventInfo(events[eventId]);
    }
  }, [eventId]);

  const handleChange = (e, field, role, index) => {
    if (role === 'captain' || role === 'viceCaptain') {
      setTeam({
        ...team,
        [role]: { ...team[role], [field]: e.target.value }
      });
    } else if (role === 'members') {
      const updatedMembers = [...team.members];
      updatedMembers[index][field] = e.target.value;
      setTeam({ ...team, members: updatedMembers });
    } else {
      setTeam({ ...team, [field]: e.target.value });
    }
  };

  const addMember = () => {
    setTeam({
      ...team,
      members: [...team.members, { name: '', mobile: '', age: '' }]
    });
  };

  const removeMember = (index) => {
    if (team.members.length > 1) {
      const updatedMembers = team.members.filter((_, i) => i !== index);
      setTeam({ ...team, members: updatedMembers });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add registration timestamp and event info
      const teamData = {
        ...team,
        registrationDate: new Date(),
        eventId: eventId || 'summer-championship-2024',
        eventTitle: eventInfo?.title || 'Summer Cricket Championship 2024'
      };

      await addDoc(collection(db, 'teams'), teamData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving team:', error);
      alert('Error saving team. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="team-registration">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2>Team Registered Successfully!</h2>
            <p>Your team has been registered for the tournament. We'll contact you soon with further details.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn btn-primary"
            >
              Register Another Team
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="team-registration">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Team Registration</h1>
          {eventInfo ? (
            <p className="page-subtitle">
              Register your team for: <strong>{eventInfo.title}</strong>
            </p>
          ) : (
            <p className="page-subtitle">
              Fill out the form below to register your team for the tournament
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-section">
            <h3>Team Information</h3>
            <div className="form-group">
              <label htmlFor="teamName">Team Name *</label>
              <input
                type="text"
                id="teamName"
                value={team.teamName}
                onChange={(e) => handleChange(e, 'teamName')}
                required
                placeholder="Enter your team name"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Captain Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="captainName">Name *</label>
                <input
                  type="text"
                  id="captainName"
                  value={team.captain.name}
                  onChange={(e) => handleChange(e, 'name', 'captain')}
                  required
                  placeholder="Captain's full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="captainMobile">Mobile *</label>
                <input
                  type="tel"
                  id="captainMobile"
                  value={team.captain.mobile}
                  onChange={(e) => handleChange(e, 'mobile', 'captain')}
                  required
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="captainAge">Age *</label>
                <input
                  type="number"
                  id="captainAge"
                  value={team.captain.age}
                  onChange={(e) => handleChange(e, 'age', 'captain')}
                  required
                  min="16"
                  max="50"
                  placeholder="Age"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Vice Captain Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="viceCaptainName">Name *</label>
                <input
                  type="text"
                  id="viceCaptainName"
                  value={team.viceCaptain.name}
                  onChange={(e) => handleChange(e, 'name', 'viceCaptain')}
                  required
                  placeholder="Vice Captain's full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="viceCaptainMobile">Mobile *</label>
                <input
                  type="tel"
                  id="viceCaptainMobile"
                  value={team.viceCaptain.mobile}
                  onChange={(e) => handleChange(e, 'mobile', 'viceCaptain')}
                  required
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="viceCaptainAge">Age *</label>
                <input
                  type="number"
                  id="viceCaptainAge"
                  value={team.viceCaptain.age}
                  onChange={(e) => handleChange(e, 'age', 'viceCaptain')}
                  required
                  min="16"
                  max="50"
                  placeholder="Age"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header">
              <h3>Team Members</h3>
              <button type="button" onClick={addMember} className="add-member-btn">
                + Add Member
              </button>
            </div>
            
            {team.members.map((member, index) => (
              <div key={index} className="member-row">
                <div className="member-number">Member {index + 1}</div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`memberName${index}`}>Name *</label>
                    <input
                      type="text"
                      id={`memberName${index}`}
                      value={member.name}
                      onChange={(e) => handleChange(e, 'name', 'members', index)}
                      required
                      placeholder="Member's full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`memberMobile${index}`}>Mobile *</label>
                    <input
                      type="tel"
                      id={`memberMobile${index}`}
                      value={member.mobile}
                      onChange={(e) => handleChange(e, 'mobile', 'members', index)}
                      required
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`memberAge${index}`}>Age *</label>
                    <input
                      type="number"
                      id={`memberAge${index}`}
                      value={member.age}
                      onChange={(e) => handleChange(e, 'age', 'members', index)}
                      required
                      min="16"
                      max="50"
                      placeholder="Age"
                    />
                  </div>
                  {team.members.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="remove-member-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register Team'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamRegistration;
