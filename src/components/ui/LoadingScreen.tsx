import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display italic text-white mb-4 tracking-widest">
              KOLKATA KOLPONA
            </h1>
            <div className="w-48 h-[1px] bg-neutral-800 mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <p className="mt-4 text-xs font-mono tracking-[0.3em] text-primary uppercase">
              Entering the Shadows...
            </p>
          </motion.div>
        
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-neutral-600 font-mono"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ESTD 2024 • BENGAL'S FINEST HORROR
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
