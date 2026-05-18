import { motion } from 'motion/react';
import { Megaphone, Bell, Info } from 'lucide-react';

const notices = [
  {
    icon: Bell,
    title: 'মার্চেন্ডাইজ স্টোর আসছে শিগগিরই',
    message: 'আমরা আমাদের দর্শকদের জন্য বিশেষ কলকাতা কল্পনা থিমযুক্ত টি-শার্ট এবং পোস্টার নিয়ে কাজ করছি।',
    type: 'আপডেট',
  },
  {
    icon: Megaphone,
    title: 'সিজন ৩-এর অডিশন',
    message: 'আমরা নতুন কণ্ঠস্বর খুঁজছি! যোগাযোগের বিভাগে আমাদের ইমেলে আপনার কণ্ঠের নমুনা পাঠান।',
    type: 'নোটিশ',
  },
  {
    icon: Info,
    title: 'নতুন এপিসোড প্রকাশের সময়সূচী',
    message: 'জুন মাস থেকে, আমরা প্রতি শুক্রবার দুপুর ১টায় নতুন গল্প প্রকাশ করবো।',
    type: 'ঘোষণা',
  },
];

export default function Announcements() {
  return (
    <section id="announcements" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <span className="meta-label">বুলেটিন</span>
            <h2 className="text-4xl font-display text-slate-900 mb-6 font-bengali">গুরুত্বপূর্ণ ঘোষণা</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-bengali">
              আমাদের সর্বশেষ সিদ্ধান্ত, আগামী সুযোগ এবং কমিউনিটির নানা ঘোষণা সম্পর্কে অবগত থাকুন।
            </p>
            <div className="p-6 md:p-8 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                <Megaphone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-bengali">বার্তা</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic font-bengali">
                  "আপনার মতামত আমাদের কাছে অতি মূল্যবান এবং আমরা আপনার পরামর্শ অনুযায়ী গল্প বলার মান উন্নত করার চেষ্টা করছি।"
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4 w-full">
            {notices.map((notice, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-slate-100 flex items-center gap-6 hover:border-primary/30 transition-all group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <notice.icon className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div>
                  <span className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-widest font-bengali">{notice.type}</span>
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 font-bengali">{notice.title}</h3>
                  <p className="text-[11px] md:text-xs text-slate-500 mt-1 font-bengali">{notice.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
