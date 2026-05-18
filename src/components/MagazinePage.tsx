import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, FileText } from 'lucide-react';

const editions = [
  {
    title: 'বসন্ত সংখ্যা ২০২৪',
    date: 'মার্চ ২০২৪',
    description: 'নববর্ষের বিশেষ আয়োজন এবং বসন্তের গান ও গল্পের সংকলন।',
    link: 'https://drive.google.com/open?id=YOUR_DOCUMENT_ID_1',
    cover: 'https://picsum.photos/seed/magazine-spring/600/800',
  },
  {
    title: 'শীতকালীন বিশেষ সংখ্যা ২০২৪',
    date: 'জানুয়ারি ২০২৪',
    description: 'রহস্য এবং ভৌতিক ছোটগল্পের এক অনন্য সংগ্রহ।',
    link: 'https://drive.google.com/open?id=YOUR_DOCUMENT_ID_2',
    cover: 'https://picsum.photos/seed/magazine-winter/600/800',
  },
  {
    title: 'শারদীয়া ২০২৩',
    date: 'অক্টোবর ২০২৩',
    description: 'উৎসবের আমেজে ভরা কলকাতা কল্পনার বিশেষ সংস্করণ।',
    link: 'https://drive.google.com/open?id=YOUR_DOCUMENT_ID_3',
    cover: 'https://picsum.photos/seed/magazine-puja/600/800',
  },
];

export default function MagazinePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-primary mb-12 group font-bold text-[10px] uppercase tracking-widest font-bengali"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          হোমে ফিরে যান
        </motion.button>

        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4 block font-bengali">ই-ম্যাগাজিন আর্কাইভ</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 font-bengali">কলকাতা কল্পনা পত্রিকা</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed font-bengali">
            আমাদের ডিজিটাল সাহিত্যের সংকলন। এখানে আপনি আমাদের প্রকাশিত সব ই-ম্যাগাজিন ফ্রিতে পড়তে পারবেন।
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {editions.map((edition, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg md:rounded-3xl overflow-hidden border border-slate-100 shadow-sm md:shadow-xl shadow-slate-200/50 group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={edition.cover} 
                  alt={edition.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1 md:p-8">
                   <a 
                    href={edition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 md:py-4 bg-white text-slate-900 rounded-md md:rounded-xl font-bold text-[7px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-1 md:gap-3"
                  >
                    <BookOpen className="w-2.5 h-2.5 md:w-4 h-4" />
                    <span className="hidden sm:inline">পড়ুন</span>
                  </a>
                </div>
              </div>
              
              <div className="p-1.5 md:p-8">
                <div className="flex items-center gap-1 text-primary text-[5px] md:text-[10px] font-bold uppercase tracking-widest mb-1 md:mb-2 font-bengali">
                  <FileText className="w-1.5 h-1.5 md:w-3 md:h-3" />
                  <span className="hidden md:inline">প্রকাশকাল: </span>{edition.date}
                </div>
                <h3 className="text-[9px] md:text-2xl font-bold text-slate-900 mb-0.5 md:mb-3 font-bengali truncate">{edition.title}</h3>
                <p className="hidden md:block text-sm text-slate-500 leading-relaxed font-bengali mb-6">
                  {edition.description}
                </p>
                <a 
                  href={edition.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-0.5 text-primary hover:text-secondary text-[7px] md:text-xs font-bold uppercase tracking-widest transition-colors font-bengali"
                >
                  <span className="hidden md:inline">বিস্তারিত দেখুন </span><ExternalLink className="w-1.5 h-1.5 md:w-3 md:h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
