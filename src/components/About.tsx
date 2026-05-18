import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden max-w-7xl mx-auto border-t border-slate-50">
      <motion.div 
        className="flex-1 relative w-full lg:w-auto"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="relative aspect-[4/5] max-w-md mx-auto">
          <div className="absolute inset-0 border border-primary/10 translate-x-3 translate-y-3 rounded-2xl" />
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
            alt="Creative Process"
            referrerPolicy="no-referrer"
          />
          
          <motion.div 
            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl max-w-[220px] shadow-2xl border border-slate-50"
            whileInView={{ y: [-10, 0, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="meta-label">লক্ষ্য</span>
            <p className="text-sm font-display italic text-slate-900 leading-relaxed font-bengali">"প্রতিটি প্রজেক্ট শুরু হয় কল্পনা দিয়ে, যা পূর্ণতা পায় আমাদের দর্শকদের অংশগ্রহণে।"</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="meta-label">আমাদের সম্পর্কে</span>
        <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-8 leading-tight font-bengali">আধুনিক যুগের জন্য <br /> গল্পের নতুন রূপায়ন</h2>
        
        <div className="space-y-6 text-slate-600 leading-relaxed font-normal text-xs md:text-base max-w-xl font-bengali">
          <p>
            কলকাতা কল্পনা একটি সৃজনশীল প্ল্যাটফর্ম যা বাংলা গল্প বলা, পডকাস্ট এবং অডিও ড্রামা তৈরিতে বিশেষজ্ঞ। আমাদের লক্ষ্য হলো গতানুগতিক আখ্যান এবং আধুনিক শব্দশৈলীর এক মেলবন্ধন ঘটানো।
          </p>
          <p className="font-bengali text-base md:text-xl text-primary border-l-2 border-primary/30 pl-4 md:pl-6 bg-emerald-50/30 py-3 md:py-4 rounded-r-xl">
            আমরা শুধু গল্প বলি না, আমরা নতুন চিন্তাধারা আর সৃজনশীলতার মেলবন্ধন ঘটাই। 
          </p>
          <p>
            ভয়েস অ্যাক্টিং ওয়ার্কশপ থেকে শুরু করে উচ্চমানের অডিও গল্প উৎপাদন পর্যন্ত—আমরা প্রতিনিয়ত নিজেদের ছাড়িয়ে যাওয়ার চেষ্টা করছি আমাদের দর্শকদের শ্রেষ্ঠ অভিজ্ঞতা উপহার দেওয়ার জন্য।
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-10 mt-12 pt-10 border-t border-slate-100">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-xl md:text-3xl font-display font-bold text-slate-900 mb-1 font-bengali">{stat.value}</p>
              <span className="meta-label !text-slate-400 !mb-0 font-bengali !text-[9px] md:!text-[10px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const stats = [
  { label: 'Episodes', value: '50+' },
  { label: 'Listeners', value: '10K+' },
  { label: 'Rating', value: '4.9' },
];
