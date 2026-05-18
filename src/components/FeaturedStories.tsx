import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Tag, ChevronRight } from 'lucide-react';
import TrailerModal from './ui/TrailerModal';

const stories = [
  {
    id: 1,
    title: 'Cheledhora',
    bengali: 'ছেলেধরা',
    description: 'A chilling urban legend comes to life in the heart of Kolkata. When children start disappearing, one man must face his darkest fears.',
    genre: 'Horror',
    image: 'https://picsum.photos/seed/horror-kid-shadow/800/600',
    color: 'border-primary',
  },
  {
    id: 2,
    title: 'System Fail',
    bengali: 'সিস্টেম ফেইল',
    description: 'In a near-future Kolkata controlled by AI, a digital glitch starts manifesting physical consequences. Is it a bug, or something else?',
    genre: 'Techno Thriller',
    image: 'https://picsum.photos/seed/cyber-glitch-dark/800/600',
    color: 'border-secondary',
  },
  {
    id: 3,
    title: 'Ontorale',
    bengali: 'অন্তরালে',
    description: 'A family secret hidden for three generations begins to unravel when an old letter is found in the attic of a mansion in Shobhabazar.',
    genre: 'Mystery',
    image: 'https://picsum.photos/seed/mansion-mystery-shadow/800/600',
    color: 'border-orange-500',
  },
];

export default function FeaturedStories() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <section id="stories" className="py-24 px-6 md:px-12 bg-dark-lighter relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-secondary font-mono tracking-widest uppercase text-xs mb-4 block">Selection</span>
          <h2 className="section-title mb-0">Featured Stories</h2>
        </div>
        
        <button className="flex items-center gap-2 group text-neutral-400 hover:text-white transition-colors">
          Browse All <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <StoryCard 
            key={story.id} 
            {...story} 
            onPlay={() => setSelectedStory(story.title)}
          />
        ))}
      </div>

      <TrailerModal 
        isOpen={!!selectedStory} 
        onClose={() => setSelectedStory(null)} 
        storyTitle={selectedStory || ''} 
      />
    </section>
  );
}

function StoryCard({ title, bengali, description, genre, image, color, onPlay }: any) {
  return (
    <motion.div
      className={`group relative aspect-[3/4] rounded-2xl overflow-hidden glass border-2 ${color} transition-all duration-500`}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={title}
        referrerPolicy="no-referrer"
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
          <Tag className="w-3 h-3 text-secondary" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">
            {genre}
          </span>
        </div>
        
        <h3 className="text-3xl font-display italic text-white">{title}</h3>
        <p className="text-xl font-bengali text-primary-light mb-4">{bengali}</p>
        
        <p className="text-sm text-neutral-400 font-light line-clamp-2 mb-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {description}
        </p>
        
        <motion.button
          onClick={onPlay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-white text-dark rounded-xl font-bold flex items-center justify-center gap-2 group/btn"
        >
          <Play className="w-4 h-4 fill-current group-hover/btn:animate-pulse" />
          Launch Trailer
        </motion.button>
      </div>
    </motion.div>
  );
}
