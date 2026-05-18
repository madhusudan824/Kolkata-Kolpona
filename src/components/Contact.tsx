import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Instagram, Youtube, Facebook, Music } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#10b981_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 max-w-7xl mx-auto">
        <div>
          <span className="meta-label">Connect</span>
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-6">Get in Touch</h2>
          
          <p className="text-slate-500 mb-12 max-w-sm text-sm leading-relaxed">
            Have a project in mind? Or want to collaborate on something creative? 
            Reach out to us through any of these channels.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white duration-300 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email</span>
                <p className="text-slate-900 font-medium tracking-tight">hello@kolkatakolpona.in</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-secondary transition-all group-hover:bg-secondary group-hover:text-white duration-300 shadow-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Collaborations</span>
                <p className="text-slate-900 font-medium tracking-tight">creators@kolkatakolpona.in</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-8">
            {[
              { icon: SpotifyIcon, color: 'hover:text-[#1DB954]', href: '#' },
              { icon: Youtube, color: 'hover:text-primary', href: 'https://www.youtube.com/@KolkataKolponaofficial' },
              { icon: Instagram, color: 'hover:text-primary', href: '#' },
              { icon: Facebook, color: 'hover:text-primary', href: '#' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`text-neutral-400 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[2rem] relative shadow-2xl border border-slate-50"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 font-bengali">আপনার নাম</span>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl text-slate-900 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300 text-sm font-bengali"
                  placeholder="এখানে আপনার নাম লিখুন"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 font-bengali">ইমেল ঠিকানা</span>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl text-slate-900 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300 text-sm"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 font-bengali">আপনার বার্তা</span>
              <textarea 
                rows={4}
                className="w-full bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl text-slate-900 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300 text-sm resize-none font-bengali"
                placeholder="আমরা কীভাবে আপনাকে সাহায্য করতে পারি?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-xs font-bold tracking-widest uppercase font-bengali"
            >
              বার্তা পাঠান
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
