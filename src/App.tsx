import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import StoryDetails from './components/StoryDetails';
import UpdateDetails from './components/UpdateDetails';
import MemberProfile from './components/MemberProfile';
import AudiencePage from './components/AudiencePage';
import AudienceDetail from './components/AudienceDetail';
import AudioPlayer from './components/AudioPlayer';
import CustomCursor from './components/CustomCursor';
import Notification from './components/Notification';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SocialShowcase from './components/SocialShowcase';

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
        <SocialShowcase />
        <ProgressTimeline />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </motion.div>
    </main>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[1001] pointer-events-none">
      <motion.div 
        className="h-full bg-primary origin-left shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/story/:id" element={<StoryDetails />} />
          <Route path="/update/:id" element={<UpdateDetails />} />
          <Route path="/team/:id" element={<MemberProfile />} />
          <Route path="/audience" element={<AudiencePage />} />
          <Route path="/audience/:id" element={<AudienceDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <ScrollToHash />
        <LoadingScreen />
        
        <Navbar />
        <Notification />
        
        <AnimatedRoutes />

        <Footer />
        <AudioPlayer />
      </div>
    </Router>
  );
}
