import { Ghost, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-dark-lighter border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <Ghost className="w-6 h-6 text-primary" />
            <span className="text-xl font-display italic tracking-[0.2em] text-white uppercase">
              Kolkata Kolpona
            </span>
          </div>
          <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.3em]">
            Every story hides a shadow.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-8 mb-6 text-neutral-400 text-xs font-mono tracking-widest uppercase">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">RSS Feed</a>
          </div>
          <p className="text-neutral-600 text-[10px] font-mono tracking-widest flex items-center gap-2 uppercase">
            © 2024 Kolkata Kolpona. Crafted with <Heart className="w-2 h-2 text-primary fill-current" /> in Bengal.
          </p>
        </div>
      </div>
    </footer>
  );
}
