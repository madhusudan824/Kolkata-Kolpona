import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Somnath Seal',
    role: 'Creator & Voice Artist',
    image: 'https://picsum.photos/seed/somnath/400/400',
  },
  {
    name: 'Ananya Dutta',
    role: 'Lead Voice Actor',
    image: 'https://picsum.photos/seed/ananya/400/400',
  },
  {
    name: 'Rohan Banerjee',
    role: 'Sound Designer',
    image: 'https://picsum.photos/seed/rohan/400/400',
  },
  {
    name: 'Ishani Roy',
    role: 'Script Writer',
    image: 'https://picsum.photos/seed/ishani/400/400',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-dark">
      <div className="text-center mb-16">
        <span className="text-primary font-mono tracking-widest uppercase text-xs mb-4 block">The Architects</span>
        <h2 className="section-title italic">Creative Minds</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="text-center group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors scale-110" />
              <img
                src={member.image}
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-glow group-hover:shadow-glow-red"
                alt={member.name}
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-transparent transition-colors" />
            </div>
            
            <h3 className="text-xl font-display italic text-white tracking-widest mb-1">{member.name}</h3>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">{member.role}</p>
            
            <div className="flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Instagram className="w-4 h-4 text-neutral-500 hover:text-white cursor-pointer" />
              <Twitter className="w-4 h-4 text-neutral-500 hover:text-white cursor-pointer" />
              <Linkedin className="w-4 h-4 text-neutral-500 hover:text-white cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
