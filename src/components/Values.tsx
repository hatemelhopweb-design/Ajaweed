import { motion } from 'motion/react';

const valueCards = [
  {
    num: '01',
    title: 'المساواة والعدل',
    desc: 'عدم التحيز لطفل ضد آخر، والاهتمام بجميع الأطفال دون تفرقة، مع ترسيخ فكرة الانتماء للمكان وزرع روح الطمأنينة والجو الأسري.',
  },
  {
    num: '02',
    title: 'احترام الخصوصية',
    desc: 'الاهتمام بخصوصية كل طفل ومنحه الحرية الكافية، مع الحفاظ على سرية المعلومات وعدم إقحام الأطفال في المشاكل الشخصية.',
  },
  {
    num: '03',
    title: 'بناء الشخصية',
    desc: 'تعزيز السلوك الإيجابي ودعم الثقة بالنفس، وتعديل السلوكيات الخاطئة باستخدام أساليب تربوية، مع مراعاة الفروق الفردية.',
  },
  {
    num: '04',
    title: 'المشاركة الفعالة',
    desc: 'تعزيز قدرات الطفل وتوجيهه، وإعطاؤه مساحة مشاركة في تصميم البرامج والأنشطة عن طريق الحوار والنقاش البناء.',
  },
  {
    num: '05',
    title: 'الحماية الكاملة',
    desc: 'الحماية من الإهمال البدني والروحي، ووقايتهم من التعرض للانحراف، وعدم استخدامهم بأي شكل في جمع التبرعات.',
  },
  {
    num: '06',
    title: 'الإعداد للمستقبل',
    desc: 'وضع البرامج المناسبة لجعل الطفل قادراً على تحمل المسؤولية بالقدر الكافي لمواجهة متطلبات الحياة، مع تأمين مستقبله مادياً.',
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-[5%] bg-deep">
      <div className="text-center mb-16">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          ميثاق الشرف
        </span>
        <h2 className="font-amiri text-[clamp(2.5rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          مبادئنا في <span className="text-gold">التعامل مع الأطفال</span>
        </h2>
        <p className="text-[1.05rem] text-ivory/60 max-w-[600px] mx-auto leading-loose">
          وفق قانون الطفل رقم 126 لسنة 2008، نلتزم بميثاق السلوك الإيجابي الكامل
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {valueCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-9 bg-white/3 border border-white/7 rounded-2xl relative transition-all hover:translate-y-[-6px] hover:border-gold/20"
          >
            <div className="text-4xl font-black text-gold/15 mb-4 group-hover:text-gold/20 transition-colors">{card.num}</div>
            <h4 className="text-gold font-bold text-[1.05rem] mb-3">{card.title}</h4>
            <p className="text-ivory/60 text-[0.9rem] leading-loose">{card.desc}</p>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-b-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
