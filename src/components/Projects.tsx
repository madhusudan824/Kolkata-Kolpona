import { motion } from 'motion/react';
import { Play, Layers, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../constants/projectsData';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-2 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="meta-label mx-auto font-bengali">পোর্টফোলিও</span>
          <h2 className="text-4xl font-display text-slate-900 mb-4 font-bengali">আমাদের সৃজনশীল কাজ</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed font-bengali">
            রক্ত জল করা পডকাস্ট থেকে শুরু করে ভবিষ্যতের ভয়েস-অ্যাক্টিং প্রজেক্ট—আমরা গল্প বলার সীমানা ছাড়িয়ে যাওয়ায় বিশ্বাসী।
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-10">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/story/${project.id}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] rounded-xl md:rounded-3xl overflow-hidden mb-2 md:mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                    <Play className="w-3 h-3 md:w-6 md:h-6 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 md:gap-2 text-primary font-mono text-[7px] md:text-[10px] uppercase font-bold tracking-widest font-bengali">
                  <Layers className="w-2 h-2 md:w-3 md:h-3" />
                  <span className="truncate">{project.type}</span>
                </div>
                <h3 className="text-[10px] md:text-xl font-display text-slate-900 flex items-center justify-between group-hover:text-primary transition-colors font-bengali truncate">
                  {project.title}
                  <ExternalLink className="hidden md:block w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </h3>
                <p className="hidden md:block font-sans text-slate-400 text-xs mb-1">{project.bengali}</p>
                <p className="hidden md:block text-slate-500 text-xs leading-relaxed font-bengali">{project.description}</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://www.youtube.com/@KolkataKolponaofficial', '_blank');
                  }}
                  className="mt-4 px-4 py-2 bg-slate-50 text-[10px] font-bold text-primary uppercase tracking-widest rounded-lg border border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-2"
                >
                  <Play className="w-3 h-3 fill-current" /> Listen Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
