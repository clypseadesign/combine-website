import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all your page components
// import ProducerAlbum from './pages/ProducerAlbum';
import ProducerAlbum from './pages/ProducerAlbum_responsive';
import PresentCondition from './pages/PresentCondition';
import Highlights from './pages/Highlights';
import WhyNeeded from './pages/WhyNeeded';
import WhoParticipate from './pages/WhoParticipate';
import ParticipantRegistration from './pages/ParticipantRegistration';
import BecomeSponsor from './pages/BecomeSponsor';
import SupportMatters from './pages/SupportMatters';
import Credits from './pages/Credits';
import Testimonies from './pages/Testimonies';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        {/* Persistent Navbar at the top */}
        <Navbar />

        {/* Dynamic page content depending on the route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProducerAlbum />} />
            <Route path="/present-condition" element={<PresentCondition />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/why-needed" element={<WhyNeeded />} />
            <Route path="/who-participate" element={<WhoParticipate />} />
            <Route path="/participant-registration" element={<ParticipantRegistration />} />
            <Route path="/become-sponsor" element={<BecomeSponsor />} />
            <Route path="/support-matters" element={<SupportMatters />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/testimonies" element={<Testimonies />} />

          </Routes>
        </main>

        {/* Persistent Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;