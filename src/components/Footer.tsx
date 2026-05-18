import { Ghost, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <Ghost className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight">
              Kolkata Kolpona
            </span>
          </div>
          <p className="text-slate-400 font-medium text-xs italic font-bengali">
            “প্রতিটি প্রজেক্টের শুরু হয় কল্পনা দিয়ে।”
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-8 mb-6 text-slate-400 text-[10px] font-bold tracking-widest uppercase font-bengali">
            <a href="#" className="hover:text-primary transition-colors">আপডেট</a>
            <a href="#" className="hover:text-primary transition-colors">টিম</a>
            <a href="#" className="hover:text-primary transition-colors">গোপনীয়তা নীতি</a>
          </div>
          <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase font-bengali">
            © কলকাতা কল্পনা — সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </footer>
  );
}
