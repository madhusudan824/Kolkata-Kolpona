import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Instagram, Youtube, Facebook, Music } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <span className="text-primary font-mono tracking-widest uppercase text-xs mb-4 block">Connect</span>
          <h2 className="section-title">Whisper to Us</h2>
          
          <p className="text-neutral-400 font-light mb-12 max-w-md">
            Have a story lurking in your mind? Or want to collaborate on something mysterious? 
            Drop us a message through the shadows.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:shadow-glow">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-white hover:text-primary transition-colors cursor-pointer">hello@kolkatakolpona.in</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center text-secondary border border-secondary/20 transition-all group-hover:shadow-glow-orange">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Collaborations</p>
                <p className="text-white hover:text-secondary transition-colors cursor-pointer">creators@kolkatakolpona.in</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-6">
            {[
              { icon: SpotifyIcon, color: 'hover:text-[#1DB954]' },
              { icon: Youtube, color: 'hover:text-red-600' },
              { icon: Instagram, color: 'hover:text-pink-500' },
              { icon: Facebook, color: 'hover:text-blue-600' }
            ].map((Social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`text-neutral-600 transition-colors ${Social.color}`}
              >
                <Social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          className="glass p-8 md:p-12 rounded-3xl relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-lighter border-b border-white/10 p-4 text-white focus:border-primary outline-none transition-colors rounded-lg"
                  placeholder="The Phantom"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-lighter border-b border-white/10 p-4 text-white focus:border-primary outline-none transition-colors rounded-lg"
                  placeholder="shadow@realm.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1">Your Message</label>
              <textarea 
                rows={4}
                className="w-full bg-dark-lighter border-b border-white/10 p-4 text-white focus:border-primary outline-none transition-colors rounded-lg resize-none"
                placeholder="What haunts you tonight?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-3 py-4"
            >
              Dispatch Message
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function SpotifyIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.217.356-.68.468-1.036.251-2.868-1.752-6.478-2.149-10.73-1.173-.408.093-.815-.164-.908-.572-.093-.408.163-.815.572-.908 4.654-1.064 8.643-.615 11.85 1.343.356.217.469.68.252 1.059zm1.47-3.255c-.273.443-.852.585-1.295.312-3.282-2.016-8.286-2.599-12.167-1.42-.497.15-1.023-.131-1.173-.628-.15-.497.131-1.023.628-1.173 4.437-1.347 9.948-.691 13.7 1.613.442.272.584.851.307 1.296zm.126-3.393c-3.937-2.338-10.436-2.553-14.218-1.405-.603.183-1.246-.164-1.429-.766-.183-.603.164-1.246.766-1.429 4.341-1.319 11.517-1.066 16.035 1.615.542.322.721 1.023.399 1.565-.322.541-1.023.721-1.553.399z"/>
    </svg>
  );
}
