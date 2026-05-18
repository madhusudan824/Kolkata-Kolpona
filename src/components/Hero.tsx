import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Headphones, Youtube, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import Magnetic from './ui/Magnetic';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);
  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);

  const translateX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const translateY = useTransform(mouseY, [-500, 500], [-15, 15]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section id="home" className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: translateX, y: translateY }}
          className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[140px]" 
        />
        <motion.div 
          style={{ x: useTransform(translateX, (v) => -v), y: useTransform(translateY, (v) => -v) }}
          className="absolute bottom-[-15%] left-[-5%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]" 
        />
        
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#10b981 0.4px, transparent 0.4px)', 
          backgroundSize: '35px 35px',
          opacity: 0.2
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX, rotateY }}
        >
          <AnimatePresence>
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 border border-emerald-100/50 shadow-sm shadow-emerald-100">
                  <Sparkles className="w-3 h-3" /> সৃজনশীলতার নতুন ঠিকানায় আপনাকে স্বাগত
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display text-slate-900 mb-8 leading-[1.1] tracking-tight">
            কলকাতা <span className="text-primary font-bengali italic relative">
              কল্পনা
              <motion.svg 
                viewBox="0 0 100 20" 
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-emerald-200/60"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                <motion.path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="2" />
              </motion.svg>
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium mb-6 max-w-lg font-bengali leading-relaxed"
          >
            সৃজনশীল গল্প, নতুন চিন্তাধারা এবং নিরন্তর অগ্রগতি
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm md:text-base leading-relaxed mb-12 max-w-md font-bengali text-slate-400"
          >
            আমরা একদল নিবেদিত গল্পকার এবং ভয়েস আর্টিস্ট, যারা বাংলা গল্পকে ডিজিটাল যুগের উপযোগী করে তুলে ধরছি।
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Magnetic>
              <motion.a
                href="https://www.youtube.com/@KolkataKolponaofficial"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
              >
                <Headphones className="w-5 h-5" />
                Listen Now
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="https://www.youtube.com/@KolkataKolponaofficial"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
              >
                <Youtube className="w-5 h-5 text-red-600" />
                Channel
              </motion.a>
            </Magnetic>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-10">
            <div>
              <p className="text-3xl font-bold text-slate-900 font-bengali">৫০K+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black font-bengali">শ্রোতা সদস্য</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-100" />
            <div>
              <p className="text-3xl font-bold text-slate-900 font-bengali">১০০+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black font-bengali">অডিও প্রডাকশন</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: useTransform(translateX, (v) => -v * 0.5), y: useTransform(translateY, (v) => -v * 0.5) }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
                alt="Creative workspace"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating Glass Card */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white/70 backdrop-blur-xl p-8 rounded-[28px] shadow-2xl z-20 max-w-[240px] border border-white"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] font-bengali">নতুন খবরাখবর</span>
              </div>
              <p className="text-sm font-bold text-slate-900 leading-snug font-bengali">এই সপ্তাহান্তে নতুন গল্পের এপিসোড প্রকাশিত হচ্ছে!</p>
            </motion.div>

            {/* Static Badge */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-50 rotate-12 group-hover:rotate-0 transition-transform duration-700">
               <div className="text-center">
                 <p className="text-xs font-bold font-mono text-primary leading-none">100%</p>
                 <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Original</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
