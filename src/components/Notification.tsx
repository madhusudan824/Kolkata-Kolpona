import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X, CheckCircle } from 'lucide-react';

export default function Notification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          className="fixed top-24 right-6 z-[1002] w-80"
        >
          <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-5 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            
            <button 
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                <Bell className="w-5 h-5" />
              </div>
              <div className="space-y-1 pr-6">
                <h4 className="text-sm font-bold text-slate-900 font-bengali">নতুন ম্যাগাজিন আউট!</h4>
                <p className="text-xs text-slate-500 font-bengali leading-relaxed">
                  আমাদের বসন্ত সংস্করণ এখন উপলব্ধ। এখনই পড়ে দেখুন!
                </p>
                <button 
                  onClick={() => {
                    window.location.href = '/magazine';
                    setShow(false);
                  }}
                  className="pt-2 text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                >
                  পড়ুন <CheckCircle className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
