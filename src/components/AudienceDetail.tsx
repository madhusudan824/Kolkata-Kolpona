import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2, MessageSquare, Sparkles, Calendar, User } from 'lucide-react';
import { audienceData } from '../constants/audienceData';
import { useEffect } from 'react';

export default function AudienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = audienceData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 font-bengali">দুঃখিত, লেখাটি পাওয়া যায়নি।</h2>
          <button 
            onClick={() => navigate('/audience')}
            className="text-primary font-bold flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" /> ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] -ml-64 -mb-64" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Navigation */}
        <Link 
          to="/audience"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group"
        >
          <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest font-sans">Back to Audience Corner</span>
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${post.type === 'Poem' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
              {post.type === 'Poem' ? 'কবিতা' : 'ব্লগ'}
            </span>
            <div className="h-px flex-grow bg-slate-100" />
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 font-bengali leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Author</p>
                <p className="text-base font-bold text-slate-900 font-bengali">{post.author}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Date</p>
                <p className="text-base font-bold text-slate-900 font-mono tracking-tight">{post.date}</p>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-4">
               <button className="flex items-center gap-2 px-5 py-2.5 bg-rose-50 rounded-2xl text-rose-500 font-bold group hover:bg-rose-500 hover:text-white transition-all">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-mono">{post.likes}</span>
               </button>
               <button className="p-2.5 bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all">
                  <Share2 className="w-5 h-5" />
               </button>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none mb-20"
        >
          <div className="relative">
            <Sparkles className="absolute -left-12 top-0 w-8 h-8 text-primary/20 hidden lg:block" />
            <p className="text-xl md:text-2xl text-slate-700 leading-[1.8] font-bengali whitespace-pre-line italic opacity-90 first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-4 first-letter:float-left">
              {post.content}
            </p>
          </div>
        </motion.div>

        {/* Interaction Section */}
        <div className="p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
           
           <div className="relative z-10 text-center max-w-2xl mx-auto">
             <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
             <h3 className="text-2xl font-bold font-bengali mb-4">এই লেখাটি আপনার কেমন লাগলো?</h3>
             <p className="text-slate-400 font-bengali mb-8">আমাদের সাথে আপনার মূল্যবান মতামত শেয়ার করুন। সেরা ফিডব্যাকগুলো লেখকের কাছে পৌঁছে দেওয়া হবে।</p>
             
             <div className="flex bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-2">
                <input 
                  type="text" 
                  placeholder="আপনার মন্তব্য লিখুন..." 
                  className="flex-grow bg-transparent px-6 py-3 text-white placeholder:text-slate-600 focus:outline-none font-bengali"
                />
                <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors">
                  Submit
                </button>
             </div>
           </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 flex items-center justify-between pt-12 border-t border-slate-100">
           <Link to="/audience" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Previous Story
           </Link>
           <Link to="/audience" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              Next Story <ArrowLeft className="w-4 h-4 rotate-180" />
           </Link>
        </div>
      </div>
    </div>
  );
}
