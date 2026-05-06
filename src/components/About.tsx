import { motion } from 'motion/react';
import { Calendar, MapPin, Globe, Users, Star } from 'lucide-react';

const infoCards = [
  {
    icon: <Calendar className="text-gold" />,
    title: 'تاريخ التأسيس',
    text: '7 مايو 2013 – مشهرة برقم 3277 لسنة 2013 – نُقلت مركزياً برقم 1276 لسنة 2025',
  },
  {
    icon: <MapPin className="text-gold" />,
    title: 'المقر الرئيسي',
    text: 'برج العرب الجديدة – الحي السكني الأول – المجاورة الثامنة – القطعة 150 – فيلا دارا',
  },
  {
    icon: <Globe className="text-gold" />,
    title: 'النطاق الجغرافي',
    text: 'جمهورية مصر العربية – مجال العمل الرئيسي: التنمية الشاملة',
  },
  {
    icon: <Users className="text-gold" />,
    title: 'الهيكل الإداري',
    text: 'مجلس أمناء من 9 أعضاء – طاقم عمل متخصص من 243 موظفاً',
  },
  {
    icon: <Star className="text-gold" />,
    title: 'صفة المؤسسة',
    text: 'مؤسسة ذات نفع عام – معتمدة من الوحدة المركزية للجمعيات والعمل الأهلي',
  },
];

const branches = [
  'دار دارا لرعاية الأيتام – برج العرب الجديدة',
  'دار نادية إسماعيل – فرع القبارى',
  'دار نادية إسماعيل – فرع العجمى',
  'دار نادية إسماعيل – فرع زيزينيا',
  'مطعم جودى الخير – القبارى',
  'دار الهدايا للرعاية الاجتماعية – سيدي بشر',
];

export default function About() {
  return (
    <section id="about" className="py-24 px-[5%] bg-gradient-to-br from-[#0F2218] to-deep">
      <div className="text-center mb-16">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          معلومات المؤسسة
        </span>
        <h2 className="font-amiri text-[clamp(2.5rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          عن <span className="text-gold">مؤسسة أجاويد الخير</span>
        </h2>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto items-center">
        <div className="flex flex-col gap-5">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/3 border border-white/7 rounded-2xl p-6 flex items-start gap-4 hover:border-gold/30 hover:bg-gold/5 transition-all"
            >
              <div className="w-11 h-11 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <h4 className="text-gold text-[0.85rem] font-bold tracking-widest mb-1">{card.title}</h4>
                <p className="text-ivory/70 text-[0.9rem] leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/3 border border-white/7 rounded-3xl p-10">
          <h3 className="font-amiri text-[1.8rem] text-ivory mb-7 font-bold">فروع المؤسسة</h3>
          <ul className="space-y-4">
            {branches.map((branch, i) => (
              <li key={i} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div className="w-[30px] h-[30px] bg-gradient-to-br from-gold to-gold-dark rounded-full shrink-0 flex items-center justify-center text-deep text-[0.75rem] font-black mt-1">
                  {i + 1}
                </div>
                <p className="text-ivory/65 text-[0.88rem] leading-relaxed">
                  <strong className="text-ivory block mb-1">{branch.split(' – ')[0]}</strong>
                  {branch.split(' – ')[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
