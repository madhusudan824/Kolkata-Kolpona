import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { teamData } from '../constants/teamData';

export default function Team() {
  const navigate = useNavigate();

  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-white">
      <div className="text-center mb-16">
        <span className="meta-label mx-auto font-bengali">আর্কিটেক্টস</span>
        <h2 className="text-4xl font-display text-slate-900 mb-4 font-bengali">পর্দার পেছনের কারিগর</h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto font-bengali">সেইসব প্রতিভাবান মানুষদের সাথে পরিচিত হন যারা তাদের কণ্ঠ এবং সৃজনশীলতা দিয়ে আমাদের গল্পগুলো জীবন্ত করে তোলেন।</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6 max-w-7xl mx-auto">
        {teamData.map((member, i) => (
          <motion.div
            key={member.id}
            className="group text-center cursor-pointer"
            onClick={() => navigate(`/team/${member.id}`)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
              <div className="absolute inset-0 rounded-full border border-slate-100 group-hover:border-primary transition-all duration-500 group-hover:scale-110" />
              <img
                src={member.image}
                className="w-full h-full object-cover rounded-full transition-all duration-500 shadow-lg group-hover:shadow-primary/20"
                alt={member.name}
              />
            </div>
            
            <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-400 uppercase tracking-widest">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
