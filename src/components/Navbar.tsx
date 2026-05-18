import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Ghost } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 10]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Stories', href: '#stories' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(10, 10, 10, ${backgroundOpacity.get()})`,
        backdropFilter: `blur(${backdropBlur.get()}px)`,
      }}
      className="fixed top-0 inset-x-0 z-[500] h-20 border-b border-white/5 flex items-center justify-between px-6 md:px-12"
    >
      <div className="flex items-center gap-2">
        <Ghost className="w-8 h-8 text-primary shadow-glow animate-pulse" />
        <span className="text-xl font-display italic tracking-widest text-white uppercase">
          Kolkata Kolpona
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-mono tracking-widest text-neutral-400 hover:text-primary transition-colors uppercase"
          >
            {link.name}
          </a>
        ))}
        <button className="btn-primary text-xs tracking-[0.2em] uppercase py-2">
          Subscribe
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 inset-x-0 bg-dark-lighter border-b border-white/10 p-6 flex flex-col gap-6 md:hidden z-[1000]"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display italic text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary w-full uppercase tracking-widest">
            Subscribe
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
