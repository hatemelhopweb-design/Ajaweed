import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Send, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin />,
    title: 'المقر الرئيسي',
    text: 'برج العرب الجديدة – الحي السكني الأول – المجاورة الثامنة – القطعة 150 – فيلا دارا',
  },
  {
    icon: <MapPin />,
    title: 'مقر الإسكندرية',
    text: 'شارع مصطفى كامل – عمارة ميامي رويال – اسكوت – الدور السادس',
  },
  {
    icon: <Clock />,
    title: 'ساعات العمل',
    text: 'السبت – الخميس: 9 صباحاً – 5 مساءً (مجلس الأمناء متاح 24 ساعة)',
  },
  {
    icon: <Phone />,
    title: (
      <span>
        رقم التواصل و
        <a href="https://complaints.ajaweed-eg.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          الشكاوى
        </a>
      </span>
    ),
    text: '01223845157 (0020)',
    link: 'https://wa.me/201223845157'
  },
  {
    icon: <AlertCircle />,
    title: (
      <a href="https://complaints.ajaweed-eg.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
        الشكاوى المباشرة للإدارة
      </a>
    ),
    text: (
      <span>
        للبلاغات و
        <a href="https://complaints.ajaweed-eg.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
          الشكاوى
        </a>
        العاجلة مباشرة للإدارة المختصة
      </span>
    ),
    link: 'https://complaints.ajaweed-eg.com',
    isPortal: true
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-[5%] bg-gradient-to-br from-[#071510] to-deep">
      <div className="text-center mb-16">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          تواصل معنا
        </span>
        <h2 className="font-amiri text-[clamp(2rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          نحن هنا <span className="text-gold">لمساعدتك</span>
        </h2>
        <p className="text-[1.05rem] text-ivory/60 max-w-[600px] mx-auto leading-loose">
          سواء كنت مستفيداً أو متبرعاً أو متطوعاً، تواصل معنا وسنرد في أقرب وقت
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        <div className="flex flex-col gap-6">
          {contactInfo.map((info, i) => (
            <div 
              key={i} 
              className={`flex gap-4 p-5 rounded-2xl transition-all duration-300 ${
                info.isPortal ? 'bg-red-500/5 border border-red-500/20 shadow-lg shadow-red-500/5' : 'border-b border-white/5'
              }`}
            >
              <div className={`w-12 h-12 border rounded-2xl flex items-center justify-center shrink-0 ${
                info.isPortal ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-gold/10 border-gold/20 text-gold'
              }`}>
                {info.icon}
              </div>
              <div>
                <h4 className={`text-[0.85rem] font-bold tracking-widest mb-1 ${
                  info.isPortal ? 'text-red-500' : 'text-gold'
                }`}>{info.title}</h4>
                <p className="text-ivory/65 text-[0.9rem] leading-relaxed mb-2">{info.text}</p>
                {info.link && (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[0.75rem] font-bold hover:underline ${
                      info.isPortal ? 'text-red-500' : 'text-gold'
                    }`}
                  >
                    {info.title === contactInfo[3].title ? 'تواصل معنا عبر واتساب' : 'انقر هنا للتوجه لبوابة الشكاوى'}
                    <Send size={12} className="rotate-180" />
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[0.8rem] font-bold text-ivory/80 hover:border-gold hover:text-gold hover:-translate-y-1 transition-all">
              فيسبوك
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[0.8rem] font-bold text-ivory/80 hover:border-gold hover:text-gold hover:-translate-y-1 transition-all">
              إنستجرام
            </a>
            <a href="https://wa.me/201223845157" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[0.8rem] font-bold text-ivory/80 hover:border-gold hover:text-gold hover:-translate-y-1 transition-all">
              واتساب
            </a>
          </div>
        </div>

        <div className="bg-white/3 border border-white/7 rounded-[2rem] p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[0.8rem] font-bold text-ivory/40 mr-1 tracking-widest">الاسم الكامل *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 focus:border-gold outline-none transition-all"
                      placeholder="اسمك الكريم"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.8rem] font-bold text-ivory/40 mr-1 tracking-widest">رقم الهاتف *</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 focus:border-gold outline-none transition-all"
                      placeholder="01X XXXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.8rem] font-bold text-ivory/40 mr-1 tracking-widest">موضوع الرسالة</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 focus:border-gold outline-none transition-all appearance-none cursor-pointer">
                    <option value="general" className="bg-deep">استفسار عام</option>
                    <option value="help" className="bg-deep">طلب مساعدة</option>
                    <option value="volunteer" className="bg-deep">التطوع</option>
                    <option value="complaint" className="bg-deep">تقديم شكوى أو اقتراح</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.8rem] font-bold text-ivory/40 mr-1 tracking-widest">رسالتك *</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 focus:border-gold outline-none transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-gradient-to-br from-emerald to-emerald-dark p-4.5 rounded-xl font-bold text-white shadow-lg hover:translate-y-[-2px] hover:shadow-emerald/30 transition-all flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  إرسال الرسالة
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center py-10"
              >
                <div className="text-6xl mb-6">✅</div>
                <h3 className="font-amiri text-2xl text-ivory mb-2 font-bold">تم الإرسال بنجاح!</h3>
                <p className="text-ivory/60 leading-loose">شكراً لتواصلك مع مؤسسة أجاويد الخير. سيقوم فريقنا بالرد عليك في أقرب وقت.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-gold font-bold hover:underline"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
