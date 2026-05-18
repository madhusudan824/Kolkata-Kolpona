import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, Headphones, Volume2, SkipForward, SkipBack } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [progress, setProgress] = useState(35);
  const [isVisible, setIsVisible] = useState(false);

  // Show player after 3 seconds for engagement
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-72 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden"
          >
            <div className="relative h-24 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/audio-cover/400/200" 
                className="w-full h-full object-cover blur-[2px] scale-110"
                alt="Album Art"
              />
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />
              <button 
                onClick={() => setIsMinimized(true)}
                className="absolute top-2 right-2 p-1.5 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Now Playing</p>
                <p className="text-sm font-bold font-bengali">ছেলেধরা: ইথার (S2 E04)</p>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <SkipBack className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-emerald-200 hover:scale-105 transition-all"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1">
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>12:45</span>
                  <span>45:20</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Volume2 className="w-3 h-3 text-slate-400" />
                <div className="h-1 flex-grow bg-slate-100 rounded-full">
                  <div className="h-full w-2/3 bg-slate-300 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        layout
        onClick={() => {
          if (isMinimized) {
            window.open('https://www.youtube.com/@KolkataKolponaofficial', '_blank');
          } else {
            setIsMinimized(true);
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-3 px-4 py-3 rounded-full shadow-xl transition-all ${
          isMinimized ? 'bg-primary text-white' : 'bg-white text-slate-900 border border-slate-100'
        }`}
      >
        <div className="relative">
          <Headphones className="w-5 h-5" />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          )}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest font-mono">
          {isMinimized ? 'Listen Now' : 'Minimize'}
        </span>
      </motion.button>
    </div>
  );
}
