import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import TravelInfo from './components/TravelInfo';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-sand-50 to-coral-50 relative overflow-hidden">
        <WaveBackground />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Hero />
                <OurStory />
                <EventDetails />
                <Gallery />
                <TravelInfo />
                <RSVP />
              </motion.div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;