import { motion } from 'motion/react';

const images = [
  'https://picsum.photos/seed/kolkata-shakti/600/800',
  'https://picsum.photos/seed/horror-podcast-mic/800/600',
  'https://picsum.photos/seed/misty-forest-dark/600/600',
  'https://picsum.photos/seed/yellow-taxi-rain/800/1000',
  'https://picsum.photos/seed/storyteller-shadow/600/800',
  'https://picsum.photos/seed/studio-setup/800/600',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-dark-lighter">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
        <div>
          <span className="text-secondary font-mono tracking-widest uppercase text-xs mb-4 block">Visuals</span>
          <h2 className="section-title italic">Into the Shadows</h2>
        </div>
        <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest hidden md:block">
          Capturing the soul of Kolkata Kolpona
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden glass cursor-pointer border border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={src} 
              alt={`Gallery ${i}`} 
              className="w-full block filter grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity flex items-end p-6">
              <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Behind the Mic / {2024 + i}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
