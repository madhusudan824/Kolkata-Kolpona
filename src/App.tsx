import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LatestUpdates from './components/LatestUpdates';
import Projects from './components/Projects';
import ProgressTimeline from './components/ProgressTimeline';
import Team from './components/Team';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CreditsPage from './components/CreditsPage';
import LoadingScreen from './components/ui/LoadingScreen';
import MagazinePage from './components/MagazinePage';

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <LatestUpdates />
        <About />
        <Announcements />
        <Projects />
        <ProgressTimeline />
        <Team />
        <Contact />
      </motion.div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <ScrollToHash />
        <LoadingScreen />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
