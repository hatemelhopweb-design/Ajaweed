import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'كيف يمكنني التبرع لمؤسسة أجاويد الخير؟',
    a: 'يمكنك التبرع عبر عدة طرق: بطاقة Visa / Mastercard، فوري، فودافون كاش، اتصالات كاش، أورنج كاش، InstaPay، أو التحويل البنكي المباشر. انتقل إلى قسم "تبرع الآن" في الموقع واختر الطريقة المناسبة لك.',
  },
  {
    q: 'هل المؤسسة معتمدة رسمياً من الجهات الحكومية؟',
    a: 'نعم، مؤسسة أجاويد الخير مؤسسة ذات نفع عام مشهرة برقم 3277 لسنة 2013، ومسجلة مركزياً برقم 1276 لسنة 2025 لدى الوحدة المركزية للجمعيات والعمل الأهلي. وتعمل تحت إشراف مباشر من مديرية التضامن الاجتماعي بالإسكندرية.',
  },
  {
    q: 'كيف أتقدم لكفالة يتيم؟',
    a: 'يمكنك التواصل معنا مباشرة عبر نموذج التواصل في الموقع أو الاتصال بنا لمعرفة تفاصيل برنامج كفالة الأيتام. تبدأ الكفالة من 1,000 جنيه شهرياً وتشمل التعليم والصحة والترفيه وتأمين المستقبل.',
  },
  {
    q: 'كيف يمكنني الالتحاق بدور تحفيظ القرآن مجاناً؟',
    a: 'لدينا أربعة فروع في الإسكندرية (القبارى، العجمى، زيزينيا، ومسجد الريان 2). التعليم مجاني تماماً ومتاح لجميع الأعمار. يمكنك معرفة المزيد من التفاصيل ومواعيد التسجيل عبر موقعنا المتخصص لدور التحفيظ: https://dar.ajaweed-eg.com',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-[5%] bg-gradient-to-b from-[#071510] to-deep">
      <div className="text-center mb-16">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          أسئلة شائعة
        </span>
        <h2 className="font-amiri text-[clamp(2rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          الأسئلة <span className="text-gold">الأكثر شيوعاً</span>
        </h2>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/3 border border-white/7 rounded-2xl overflow-hidden active:border-gold/30 transition-all">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 text-right flex justify-between items-center bg-transparent group"
            >
              <span className={`text-[0.98rem] font-bold transition-colors ${openIndex === i ? 'text-gold' : 'text-ivory'}`}>
                {faq.q}
              </span>
              <div className={`w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                <ChevronDown size={16} className="text-gold" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="p-6 pt-0 text-ivory/60 text-[0.9rem] leading-loose border-t border-white/5">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
