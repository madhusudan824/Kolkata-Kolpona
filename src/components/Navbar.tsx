import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Ghost } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 50], [0, 8]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  const navLinks = [
    { name: 'হোম', href: '/' },
    { name: 'আমাদের কথা', href: '/#about' },
    { name: 'আপডেটস', href: '/#updates' },
    { name: 'প্রজেক্টস', href: '/#projects' },
    { name: 'ম্যাগাজিন', href: '/magazine' },
    { name: 'ক্রেডিট', href: '/credits' },
    { name: 'যোগাযোগ', href: '/#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity.get()})`,
        backdropFilter: `blur(${backdropBlur.get()}px)`,
        borderColor: `rgba(241, 245, 249, ${borderOpacity.get()})`,
      }}
      className="fixed top-0 inset-x-0 z-[500] h-16 md:h-20 border-b flex items-center justify-between px-6 md:px-12 transition-all duration-300"
    >
      <Link to="/" className="flex items-center gap-3 group">
        <Ghost className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
        <span className="text-lg md:text-xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors duration-500 tracking-tight">
          Kolkata Kolpona
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => handleLinkClick(link.href)}
            className={`text-[10px] font-bold tracking-widest transition-all duration-300 uppercase relative group ${
              location.hash === link.href.replace('/', '') || location.pathname === link.href ? 'text-primary' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
              location.hash === link.href.replace('/', '') || location.pathname === link.href ? 'w-full' : ''
            }`} />
          </Link>
        ))}
        <button className="px-5 py-2 bg-emerald-50 text-primary rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 border border-emerald-100">
          সাবস্ক্রাইব
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-slate-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 md:top-20 inset-x-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-6 md:hidden z-[1000] shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-base font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary w-full uppercase tracking-widest text-xs font-bold py-4">
            সাবস্ক্রাইব
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
