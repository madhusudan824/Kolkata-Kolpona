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
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-slate-900 mb-6 tracking-wide">
              KOLKATA KOLPONA
            </h1>
            <div className="w-32 h-[2px] bg-emerald-50 mx-auto relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-mono tracking-widest uppercase font-bengali"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            প্রগতি • কমিউনিটি • গল্প
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
