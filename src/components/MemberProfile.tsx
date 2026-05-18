import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Instagram, Linkedin, Twitter, Star, Award, Heart } from 'lucide-react';
import { teamData } from '../constants/teamData';

export default function MemberProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = teamData.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 font-bengali">দুঃখিত, সদস্যকে পাওয়া যায়নি!</h1>
        <button 
          onClick={() => navigate('/#team')}
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
          onClick={() => navigate('/#team')}
          className="flex items-center gap-2 text-slate-400 hover:text-primary mb-10 group font-bold text-[10px] uppercase tracking-widest font-bengali"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          টিমে ফিরে যান
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Avatar and Socials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-50 scale-110" />
              <img 
                src={member.image} 
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
                alt={member.name}
              />
            </div>
            
            <div className="flex justify-center gap-4">
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-primary hover:bg-emerald-50 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-primary hover:bg-emerald-50 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-primary hover:bg-emerald-50 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Info Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono mb-2 block">{member.role}</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">{member.name}</h1>
              <p className="text-lg text-slate-600 leading-relaxed font-bengali p-6 bg-slate-50 rounded-2xl border border-slate-100">
                {member.bio}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Star className="w-4 h-4" /> অবদান (Contributions)
              </h2>
              <div className="flex flex-wrap gap-3">
                {member.contributions.map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-900 shadow-sm font-bengali"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Top Performer</span>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-3">
                <Heart className="w-5 h-5 text-rose-500" />
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Deeply Creative</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
