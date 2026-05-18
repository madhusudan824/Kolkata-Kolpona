import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, User, Mic, Music, PenTool, Radio, Info } from 'lucide-react';
import { projectsData } from '../constants/projectsData';

export default function StoryDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 font-bengali">দুঃখিত, প্রজেক্টটি পাওয়া যায়নি!</h1>
        <button 
          onClick={() => navigate('/#projects')}
          className="btn-primary"
        >
          ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 text-slate-400 hover:text-primary mb-10 group font-bold text-[10px] uppercase tracking-widest font-bengali"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          সব প্রজেক্ট দেখুন
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image & Synopsis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8 group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                  {project.type}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2 font-bengali">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-400 font-sans">{project.bengali}</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-4">
                  <Info className="w-4 h-4" />
                  সারসংক্ষেপ (Synopsis)
                </div>
                <p className="text-slate-600 leading-relaxed font-bengali text-base md:text-lg">
                  {project.fullSynopsis}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Cast & Crew */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Director */}
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Director</p>
                <p className="text-xl font-bold text-slate-900 font-bengali">{project.director}</p>
              </div>
            </div>

            {/* Cast List */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Mic className="w-4 h-4" />
                কণ্ঠশিল্পী (Cast)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.cast.map((actor, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 bg-white hover:border-primary/20 transition-colors shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-bold font-bengali">{actor.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{actor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crew List */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <PenTool className="w-4 h-4" />
                কারিগর (Crew)
              </h2>
              <div className="space-y-4">
                {project.crew.map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <Music className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-900 font-bengali">{member.name}</span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
