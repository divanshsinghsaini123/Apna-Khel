
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LiveEvents from './pages/LiveEvents';
import TeamRegistration from './pages/TeamRegistration';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live-events" element={<LiveEvents />} />
            <Route path="/team-registration" element={<TeamRegistration />} />
            <Route path="/team-registration/:event" element={<TeamRegistration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
