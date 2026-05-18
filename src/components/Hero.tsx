import { motion } from 'motion/react';
import { Headphones, Youtube } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-emerald-100/50 rounded-full blur-[100px]" />
        
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', 
          backgroundSize: '30px 30px',
          opacity: '0.1'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-primary text-[10px] font-bold uppercase tracking-wider mb-6">
            সৃজনশীলতার নতুন ঠিকানায় আপনাকে স্বাগত
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display text-slate-900 mb-6 leading-tight">
            কলকাতা <span className="text-primary font-bengali">কল্পনা</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 font-medium mb-4 max-w-lg font-bengali">
            সৃজনশীল গল্প, নতুন চিন্তাধারা এবং নিরন্তর অগ্রগতি
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-10 max-w-md font-bengali">
            আমরা একদল নিবেদিত গল্পকার এবং ভয়েস আর্টিস্ট, যারা বাংলা গল্পকে ডিজিটাল যুগের উপযোগী করে তুলে ধরছি। আমাদের নতুন প্রজেক্টগুলো দেখুন এবং আমাদের সাথে যুক্ত হন।
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 px-10"
            >
              <Headphones className="w-5 h-5" />
              Listen on Spotify
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@KolkataKolponaofficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <Youtube className="w-5 h-5 text-red-600" />
              YouTube Channel
            </motion.a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
            <div>
              <p className="text-2xl font-bold text-slate-900 font-bengali">৫০K+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-bengali">শ্রোতা</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-100" />
            <div>
              <p className="text-2xl font-bold text-slate-900 font-bengali">১০০+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-bengali">অডিও গল্প</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
              alt="Creative workspace"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter font-bengali">লাইভ আপডেট</span>
            </div>
            <p className="text-xs font-semibold text-slate-900 leading-tight font-bengali">এই সপ্তাহান্তে নতুন গল্পের এপিসোড প্রকাশিত হচ্ছে!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
