import { motion } from 'motion/react';
import { ChevronLeft, User, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projectCredits = [
  {
    title: 'Cheledhora (ছেলেধরা)',
    director: 'Sarindhri',
    cast: [
      { name: 'Sarindhri', role: 'Main Lead' },
      { name: 'Deep', role: 'Supporting' },
      { name: 'Indro', role: 'Antagonist' },
      { name: 'Anwesha', role: 'Narrator' },
    ],
  },
  {
    title: 'System Fail (সিস্টেম ফেইল)',
    director: 'Indro',
    cast: [
      { name: 'Srijan', role: 'Lead' },
      { name: 'Samadrita', role: 'AI Voice' },
      { name: 'Sarindhri', role: 'Supporting' },
    ],
  },
  {
    title: 'Ontorale (অন্তরালে)',
    director: 'Sarindhri',
    cast: [
      { name: 'Anwesha', role: 'Protagonist' },
      { name: 'Samadrita', role: 'Lead' },
      { name: 'Indro', role: 'Supporting' },
      { name: 'Deep', role: 'Narrator' },
    ],
  },
];

export default function CreditsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <motion.button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-slate-400 hover:text-primary mb-12 group font-bold text-[10px] uppercase tracking-widest font-bengali"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        হোমে ফিরে যান
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4 block text-center font-bengali">ডকুমেন্টেশন ও আর্কাইভ</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 text-center mb-16 tracking-tight font-bengali">প্রজেক্ট ক্রেডিট</h1>

        <div className="space-y-8">
          {projectCredits.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-2 font-bengali">{project.title}</h2>
              <div className="flex items-center gap-2 mb-8 text-primary font-bold text-[10px] uppercase tracking-widest bg-emerald-50 w-fit px-3 py-1 rounded-full font-bengali">
                <User className="w-3 h-3" />
                পরিচালক: {project.director}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.cast.map((actor, j) => (
                  <div key={j} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 group hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-bold font-bengali">{actor.name}</p>
                      <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest font-bengali">{actor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
