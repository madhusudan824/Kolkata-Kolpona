import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedStories from './components/FeaturedStories';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/ui/LoadingScreen';
import AudioToggle from './components/ui/AudioToggle';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark">
      <LoadingScreen />
      <CustomCursor />
      <AudioToggle />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Ambient section transitions can go here */}
          <About />
          <FeaturedStories />
          <Team />
          <Gallery />
          <Contact />
        </motion.div>
      </main>

      <Footer />
      
      {/* Decorative SVG Pattern across the site */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
