import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { PenTool, Heart, Sparkles, MessageSquare } from 'lucide-react';
import { audienceData } from '../constants/audienceData';

export default function AudiencePage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All' ? audienceData : audienceData.filter(p => p.type === filter);

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/"; // Placeholder URL

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full bg-emerald-50 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 inline-block font-bengali"
            >
              অডিয়েন্স কর্নার
            </motion.span>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 font-bengali leading-tight">আপনার কলম, <br /><span className="text-primary italic">আমাদের গল্প</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed font-bengali max-w-xl">
              কলকাতা কল্পনা পরিবারের শ্রোতা ও পাঠকদের সৃজনশীলতার এক যৌথ আস্তানা। কবিতা বা ছোট ব্লগ — আপনার মনের কথা আমাদের সাথে শেয়ার করুন।
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              {['All', 'Poem', 'Blog'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === type ? 'bg-white text-primary shadow-xl shadow-emerald-900/5' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {type === 'All' ? 'সব' : type === 'Poem' ? 'কবিতা' : 'ব্লগ'}
                </button>
              ))}
            </div>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:scale-105 hover:bg-secondary transition-all flex items-center gap-3 whitespace-nowrap"
            >
              <PenTool className="w-4 h-4" /> আপনার লেখা দিন
            </a>
          </div>
        </div>

        {/* Writing Community Benefit (Re-added & Attractively Styled) */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 group transition-all"
           >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                 <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-bengali mb-3">উন্মুক্ত প্ল্যাটফর্ম</h4>
              <p className="text-sm text-slate-500 font-bengali leading-relaxed">আপনার লেখা পৌঁছাবে হাজারো শ্রোতার কাছে। আমরা প্রতিটি লেখাকে গুরুত্ব সহকারে দেখি।</p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 group transition-all"
           >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-500 mb-6 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                 <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-bengali mb-3">কৃতিত্বে আমাদের সাথ</h4>
              <p className="text-sm text-slate-500 font-bengali leading-relaxed">সেরা লেখাগুলো কলকাতা কল্পনার পডকাস্টে অভিনয়ের মাধ্যমে অডিও রুপে প্রকাশ করা হয়।</p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 group transition-all"
           >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-500 mb-6 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                 <PenTool className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-bengali mb-3">নিয়মিত ওয়ার্কশপ</h4>
              <p className="text-sm text-slate-500 font-bengali leading-relaxed">লেখকদের উন্নতির জন্য আমরা মাঝে মাঝে অনলাইন রাইটিং ওয়ার্কশপ আয়োজন করি।</p>
           </motion.div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/audience/${post.id}`)}
                className="group p-8 flex flex-col h-full bg-white rounded-[32px] relative overflow-hidden cursor-pointer border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-emerald-50 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-all duration-700 group-hover:scale-150" />
                
                <div className="flex items-center justify-between mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${post.type === 'Poem' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                    {post.type === 'Poem' ? 'কবিতা' : 'ব্লগ'}
                  </span>
                  <span className="text-slate-300 text-[10px] font-mono font-bold tracking-tighter">{post.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-bengali group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-bengali whitespace-pre-line mb-8 flex-grow italic line-clamp-3">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 font-bengali">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-rose-500 transition-colors text-xs font-black">
                      <Heart className="w-4 h-4 fill-current" /> {post.likes}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
