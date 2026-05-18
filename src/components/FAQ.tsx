import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'কলকাতা কল্পনা কী?',
    a: 'কলকাতা কল্পনা একটি সৃজনশীল মাধ্যম যা বাংলা অডিও গল্প, পডকাস্ট এবং সাহিত্যের নতুন রূপ শ্রোতাদের কাছে পৌঁছে দেয়।'
  },
  {
    q: 'আমি কীভাবে আমার গল্প বা কবিতা জমা দিতে পারি?',
    a: 'আমাদের "অডিয়েন্স (Audience)" সেকশনে গিয়ে আপনি আপনার সৃজনশীল লেখা সরাসরি জমা দিতে পারেন। আপনার প্রোফাইল তৈরি করার সুবিধাও শীঘ্রই আসছে।'
  },
  {
    q: 'গল্পগুলোর শব্দচিত্র (Sound Design) কারা তৈরি করে?',
    a: 'আমাদের ইন-হাউজ টিম এবং প্রতিষ্ঠাতা মধুসূদন দাসের নেতৃত্বে এই প্রফেশনাল অডিও পোস্ট-প্রডাকশন সম্পন্ন হয়।'
  },
  {
    q: 'আপনাদের পডকাস্ট কোথায় শোনা যাবে?',
    a: 'আমাদের পডকাস্টগুলো ইউটিউব, স্পটিফাই এবং এই ওয়েবসাইটে সরাসরি শুনতে পারবেন।'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 font-bengali">কিছু সাধারণ প্রশ্ন (FAQ)</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-slate-800 font-bengali group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <div className={`p-2 rounded-xl transition-all ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="p-6 pt-0 text-slate-500 font-bengali leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
