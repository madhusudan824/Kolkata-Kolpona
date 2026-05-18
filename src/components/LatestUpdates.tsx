import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { updatesData } from '../constants/updatesData';

export default function LatestUpdates() {
  const navigate = useNavigate();

  return (
    <section id="updates" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="meta-label">আপডেট</span>
            <h2 className="text-4xl font-display text-slate-900 font-bengali">সাম্প্রতিক খবরাখবর</h2>
          </div>
          <button className="flex items-center gap-2 group text-sm font-medium text-primary hover:text-secondary transition-colors font-bengali">
            সব খবর দেখুন <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {updatesData.map((update, i) => (
            <motion.div
              key={update.id}
              className="card-fresh p-6 md:p-8 flex flex-col h-full cursor-pointer group"
              onClick={() => navigate(`/update/${update.id}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  {update.date}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-bengali ${update.statusColor}`}>
                  {update.status}
                </span>
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors font-bengali">
                {update.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-bengali line-clamp-3">
                {update.description}
              </p>
              
              <button className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-2 font-bengali">
                আরও পড়ুন <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
