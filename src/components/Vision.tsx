import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Heart, Scale } from 'lucide-react';
import { useRef } from 'react';

const visionCards = [
  {
    icon: <Target className="w-10 h-10 text-gold" />,
    title: 'رؤيتنا',
    description: 'الريادة في تقديم الخدمات الإنسانية وتحقيق أفضل النتائج لتلبية احتياجات المجتمع والمساعدة على بناء مجتمع متعلم مثقف واعٍ منتج يشارك في صناعة المستقبل.',
  },
  {
    icon: <Heart className="w-10 h-10 text-gold" />,
    title: 'رسالتنا',
    description: 'نعمل على تمتع أهالي المجتمع وخاصة الأكثر احتياجاً بحقوقهم الاقتصادية والاجتماعية من خلال تنفيذ مجموعة من التدخلات الإنسانية والاجتماعية والتعليمية والثقافية.',
  },
  {
    icon: <Scale className="w-10 h-10 text-gold" />,
    title: 'قيمنا',
    description: 'العمل بالمعايير الأخلاقية والإنسانية بأمانة وكفاءة عالية، مع الحفاظ على خصوصية الحالات وسرية المعلومات، والمساواة بين جميع المستفيدين دون تفرقة.',
  },
];

export default function Vision() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      id="vision" 
      className="py-24 px-[5%] bg-gradient-to-b from-deep via-[#0F2218] to-deep relative overflow-hidden"
    >
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          هويتنا
        </span>
        <h2 className="font-amiri text-[clamp(2rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          رؤيتنا · رسالتنا · <span className="text-gold">قيمنا</span>
        </h2>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-gold/10">
        {visionCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 p-12 text-center relative group transition-all duration-400 hover:bg-gold/5"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
            <div className="mb-6 flex justify-center">{card.icon}</div>
            <h3 className="font-amiri text-2xl text-gold mb-4 font-bold">{card.title}</h3>
            <p className="text-ivory/65 leading-loose text-[0.95rem]">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
