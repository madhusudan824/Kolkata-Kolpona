import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Headphones, Youtube } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "অন্ধকারের গল্প শুনতে প্রস্তুত তো?"; // Translation: Ready to hear stories of the dark?
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-dark/60 to-dark z-10" />
        <img
          src="https://picsum.photos/seed/kolkata-night-rain/1920/1080?blur=4"
          className="w-full h-full object-cover scale-110"
          alt="Kolkata night"
          referrerPolicy="no-referrer"
        />
        
        {/* Glowing Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-secondary font-mono tracking-[0.5em] text-xs uppercase mb-4 block">
            The Midnight Chronicles
          </span>
          <h1 className="text-6xl md:text-9xl font-display italic text-white mb-6 leading-tight drop-shadow-2xl">
            Kolkata <br />
            <span className="text-primary glow-text-red">Kolpona</span>
          </h1>
          
          <div className="h-12 overflow-hidden mb-12">
            <p className="text-xl md:text-2xl font-bengali text-neutral-300 font-light tracking-wide">
              {displayText}
              <span className="inline-block w-1 h-6 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Headphones className="w-5 h-5" />
              Listen on Spotify
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Youtube className="w-5 h-5 text-red-600" />
              YouTube Channel
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

      {/* Ambient Smoke/Fog Effect (simulated with CSS particles) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
