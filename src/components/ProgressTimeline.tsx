import { motion } from 'motion/react';
import { Target, Milestone, Trophy, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '২০২৫',
    title: 'ভবিষ্যৎ লক্ষ্য',
    description: 'অডিও গল্পের পাশাপাশি শর্ট ফিল্ম এবং ভিজ্যুয়াল স্টোরিটেলিংয়ে নিজেদের বিস্তৃত করার পরিকল্পনা করছি।',
    icon: Rocket,
    color: 'bg-emerald-500',
  },
  {
    year: '২০২৪',
    title: 'পডকাস্ট মাইলফলক',
    description: 'ইউটিউব এবং স্পটিফাই মিলিয়ে আমাদের মাসিক শ্রোতা সংখ্যা ৫০,০০০ ছাড়িয়ে গেছে।',
    icon: Trophy,
    color: 'bg-amber-500',
  },
  {
    year: '২০২৪',
    title: 'নতুন বিষয়বস্তু',
    description: 'আমরা "সিস্টেম ফেইল" শুরু করেছি—যা ছিল আমাদের প্রথম মনস্তাত্ত্বিক থ্রিলার এবং কল্পনাপ্রসূত আখ্যান।',
    icon: Milestone,
    color: 'bg-blue-500',
  },
  {
    year: '২০২৪',
    title: 'উৎপত্তি',
    description: 'কলকাতা কল্পনার সৃজনশীল যাত্রা শুরু হয়েছিল "ছেলেধরা" অডিও গল্পের হাত ধরে।',
    icon: Target,
    color: 'bg-primary',
  },
];

export default function ProgressTimeline() {
  return (
    <section id="timeline" className="py-24 px-6 md:px-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="meta-label mx-auto font-bengali">ইতিহাস</span>
          <h2 className="text-4xl font-display text-slate-900 font-bengali">অগ্রগতির টাইমলাইন</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center justify-between group relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Dot in middle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary z-10 hidden md:block group-hover:scale-150 transition-transform">
                   <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                <div className="w-full md:w-[45%]">
                  <div className="card-fresh p-6 md:p-8 bg-white border-none">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white shadow-lg shadow-${item.color.split('-')[1]}/20`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-primary font-bengali">{item.year}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 font-bengali">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-bengali">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
