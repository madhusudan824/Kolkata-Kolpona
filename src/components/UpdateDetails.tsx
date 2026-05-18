import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Tag, Share2, MessageSquare } from 'lucide-react';
import { updatesData } from '../constants/updatesData';

export default function UpdateDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const update = updatesData.find((u) => u.id === id);

  if (!update) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 font-bengali">দুঃখিত, খবরটি পাওয়া যায়নি!</h1>
        <button 
          onClick={() => navigate('/#updates')}
          className="btn-primary"
        >
          ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.button
          onClick={() => navigate('/#updates')}
          className="flex items-center gap-2 text-slate-400 hover:text-primary mb-10 group font-bold text-[10px] uppercase tracking-widest font-bengali"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          সব আপডেট দেখুন
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest font-bengali ${update.statusColor}`}>
              {update.status}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <Calendar className="w-4 h-4" />
              {update.date}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight font-bengali">
            {update.title}
          </h1>

          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mb-12">
            <img 
              src={update.image} 
              alt={update.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed font-bengali whitespace-pre-line mb-10">
              {update.fullContent}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-10 mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tags:</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg">#Production</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg">#Update</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" /> Comment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
