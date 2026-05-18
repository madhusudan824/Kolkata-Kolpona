import { motion } from 'motion/react';
import { Instagram, Youtube, Twitter, Facebook, ExternalLink } from 'lucide-react';

const socialItems = [
  {
    type: 'youtube',
    title: 'New Episode: ছেলেধরা',
    value: '45K Views',
    color: 'bg-red-500',
    icon: Youtube,
    link: 'https://youtube.com',
    span: 'col-span-2 row-span-2'
  },
  {
    type: 'instagram',
    title: 'Behind the Scenes',
    value: '1.2K Likes',
    color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
    icon: Instagram,
    link: 'https://instagram.com',
    span: 'col-span-1 row-span-1'
  },
  {
    type: 'twitter',
    title: 'Story Thread',
    value: '234 Retweets',
    color: 'bg-slate-900',
    icon: Twitter,
    link: 'https://twitter.com',
    span: 'col-span-1 row-span-1'
  },
  {
    type: 'facebook',
    title: 'Community Update',
    value: '500+ Shares',
    color: 'bg-blue-600',
    icon: Facebook,
    link: 'https://facebook.com',
    span: 'col-span-1 row-span-1'
  },
  {
    type: 'podcast',
    title: 'Listen on Platforms',
    value: 'Top #10 Art',
    color: 'bg-emerald-500',
    icon: ExternalLink,
    link: '#',
    span: 'col-span-1 row-span-1'
  }
];

export default function SocialShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">সামাজিক যোগাযোগ (Social)</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 font-bengali">আমাদের সাথে যুক্ত থাকুন</h2>
          </div>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">
            Join the community
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:h-[500px]">
          {socialItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`${item.span} relative rounded-[32px] overflow-hidden group cursor-pointer`}
            >
              <div className={`absolute inset-0 ${item.color} transition-transform duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">{item.type}</p>
                  <h3 className="text-xl md:text-2xl font-bold font-bengali leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm font-bold bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full">{item.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
