import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  storyTitle: string;
}

export default function TrailerModal({ isOpen, onClose, storyTitle }: TrailerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="trailer-modal"
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
          
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-dark-lighter rounded-lg overflow-hidden border border-white/10 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full h-full flex flex-col items-center justify-center group relative cursor-pointer">
              {/* This would be an iframe for YouTube/Spotify, but for now we'll show a placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <img 
                src={`https://picsum.photos/seed/${storyTitle}/1280/720?blur=2`} 
                className="w-full h-full object-cover opacity-50"
                alt="Trailer backdrop"
              />
              
              <div className="relative text-center p-8">
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-glow"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-10 h-10 text-white fill-current" />
                </motion.div>
                <h3 className="text-3xl font-display italic text-white mb-2">{storyTitle} Trailer</h3>
                <p className="text-neutral-400 max-w-md">The audio experience is best enjoyed with headphones. Tap to play teaser.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
