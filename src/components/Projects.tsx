import { motion } from 'motion/react';
import { Play, Layers, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ছেলেধরা',
    bengali: 'Cheledhora',
    description: 'বাংলার ভৌতিক পরিবেশ নিয়ে আমাদের ফ্ল্যাগশিপ হরর সিরিজ। এটি একটি উচ্চমানের অডিও অভিজ্ঞতা।',
    type: 'পডকাস্ট সিরিজ',
    image: 'https://picsum.photos/seed/horror-kid-shadow/800/600',
  },
  {
    title: 'সিস্টেম ফেইল',
    bengali: 'System Fail',
    description: 'ভবিষ্যতের পটভূমিতে মানুষের আবেগ এবং কৃত্রিম বুদ্ধিমত্তার দ্বন্দ্ব নিয়ে আবর্তিত একটি থ্রিলার।',
    type: 'অডিও গল্প',
    image: 'https://picsum.photos/seed/cyber-glitch-dark/800/600',
  },
  {
    title: 'অন্তরালে',
    bengali: 'Ontorale',
    description: 'হারিয়ে যাওয়া স্মৃতি এবং লুকানো পারিবারিক গোপনীয়তা নিয়ে পরিচালিত একটি মনস্তাত্ত্বিক রহস্য সিরিজ।',
    type: 'ভয়েস অ্যাক্টিং প্রজেক্ট',
    image: 'https://picsum.photos/seed/mansion-mystery-shadow/800/600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="meta-label mx-auto font-bengali">পোর্টফোলিও</span>
          <h2 className="text-4xl font-display text-slate-900 mb-4 font-bengali">আমাদের সৃজনশীল কাজ</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed font-bengali">
            রক্ত জল করা পডকাস্ট থেকে শুরু করে ভবিষ্যতের ভয়েস-অ্যাক্টিং প্রজেক্ট—আমরা গল্প বলার সীমানা ছাড়িয়ে যাওয়ায় বিশ্বাসী।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase font-bold tracking-widest font-bengali">
                  <Layers className="w-3 h-3" />
                  {project.type}
                </div>
                <h3 className="text-xl md:text-2xl font-display text-slate-900 flex items-center justify-between group-hover:text-primary transition-colors font-bengali">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </h3>
                <p className="font-sans text-slate-400 text-sm mb-2">{project.bengali}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-bengali">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
