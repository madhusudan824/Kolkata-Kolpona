import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'অর্ণব ঘোষ',
    role: 'নিয়মিত শ্রোতা',
    content: 'কলকাতা কল্পনার গল্পগুলো শুনলে মনে হয় যেন এক এক করে দৃশ্যকল্প চোখের সামনে ভেসে উঠছে। অসামান্য সাউন্ড ডিজাইন!',
    image: 'https://i.pravatar.cc/150?u=arnab'
  },
  {
    name: 'সায়নী দত্ত',
    role: 'পডকাস্ট অনুরাগী',
    content: 'ছেলেধরা সিরিজটি আমার প্রিয়। রহস্য আর রোমাঞ্চের এত সুন্দর মিশেল বাংলা পডকাস্ট জগতে খুব কমই দেখা যায়।',
    image: 'https://i.pravatar.cc/150?u=sayani'
  },
  {
    name: 'প্রীতম রায়',
    role: 'লেখক',
    content: 'সৃজনশীল মানুষের জন্য এক অনন্য প্ল্যাটফর্ম। আমি আমার কবিতাও পাঠিয়েছি অডিয়েন্স কর্নারে। দারুণ উদ্যোগ!',
    image: 'https://i.pravatar.cc/150?u=pritam'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">শ্রোতাদের কথা (Testimonials)</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 font-bengali">আপনিই আমাদের অনুপ্রেরণা</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col hover:shadow-2xl hover:shadow-emerald-50 transition-all group"
            >
              <div className="mb-8 p-3 bg-white rounded-2xl w-fit shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Quote className="w-6 h-6" />
              </div>
              
              <p className="text-lg text-slate-700 font-bengali leading-relaxed mb-8 flex-grow">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.image} className="w-12 h-12 rounded-full border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500" alt={t.name} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-bengali">{t.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
