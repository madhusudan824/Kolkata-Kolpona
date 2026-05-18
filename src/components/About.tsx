import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-dark flex flex-col md:flex-row items-center gap-16 overflow-hidden">
      <motion.div 
        className="flex-1 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative aspect-square max-w-lg mx-auto">
          <div className="absolute inset-0 border-2 border-primary/30 translate-x-4 translate-y-4 rounded-lg" />
          <img
            src="https://picsum.photos/seed/old-kolkata-building/800/800"
            className="w-full h-full object-cover rounded-lg shadow-2xl grayscale"
            alt="Old Kolkata Building"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply rounded-lg" />
          
          <motion.div 
            className="absolute -bottom-10 -right-10 glass p-6 rounded-lg max-w-[240px]"
            whileInView={{ y: [-10, 0, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-secondary font-mono text-[10px] mb-2 uppercase tracking-widest">Atmosphere</p>
            <p className="text-sm font-display italic text-white">"Bringing back the forgotten echoes of the City of Joy."</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-mono tracking-widest uppercase text-xs mb-4 block">The Genesis</span>
        <h2 className="section-title">Where Stories Come Alive in the Dark</h2>
        
        <div className="space-y-6 text-neutral-400 leading-relaxed font-light">
          <p>
            Kolkata Kolpona is more than just a podcast; it's a sensory gateway into the arcane, the mysterious, and the profoundly human. 
            Rooted in the rich cultural tapestry of Bengal, we specialize in high-production audio storytelling that bridges the gap between imagination and reality.
          </p>
          <p className="font-bengali text-lg text-neutral-300">
            আমরা শুধু গল্প বলি না, আমরা এক অন্য জগতের অভিজ্ঞতা তৈরি করি যেখানে ভৌতিকতা, রহস্য আর আবেগ মিলেমিশে একাকার হয়ে যায়। 
          </p>
          <p>
            Our episodes feature immersive voice acting and cinematic sound design, meticulously crafted to transport you to the rain-soaked alleys of North Kolkata or the fog-filled mystery of the Sundarbans.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-display italic text-white mb-1">{stat.value}</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{stat.label}</p>
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
