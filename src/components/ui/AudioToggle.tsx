import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Hidden ambient audio element
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'); // Placeholder ambient music
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {
        console.log("Audio playback blocked by browser. User must interact first.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      id="audio-toggle"
      onClick={toggleAudio}
      className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:border-primary transition-colors group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 group-hover:text-primary transition-colors" />
      ) : (
        <VolumeX className="w-5 h-5 opacity-50 group-hover:text-primary transition-colors" />
      )}
      
      {isPlaying && (
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 scale-150 -z-10" />
      )}
    </motion.button>
  );
}
