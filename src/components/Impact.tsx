import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const impactStats = [
  { label: 'وجبة غذائية صُنعت ووزعت', target: 93330 },
  { label: 'مستفيد من التدخلات الاجتماعية', target: 59974 },
  { label: 'دارس تحفيظ القرآن الكريم', target: 2530 },
  { label: 'مستفيد من التدخلات الصحية', target: 1141 },
  { label: 'نزيل تحت الرعاية الكاملة', target: 143 },
  { label: 'طفل في دار الأيتام', target: 47 },
  { label: 'مستفيد من التدخلات التعليمية', target: 231 },
  { label: 'قطعة منتجة من الأسر المنتجة', target: 178 },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, isInView]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
    >
      {count.toLocaleString('ar-EG')}
    </motion.span>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={sectionRef}
      id="impact" 
      className="py-24 px-[5%] bg-gradient-to-tr from-deep via-[#0D2318] to-deep relative overflow-hidden"
    >
      {/* Decorative Glow with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" 
      />

      <motion.div 
        style={{ y: y2 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
            أرقام 2025
          </span>
          <h2 className="font-amiri text-[clamp(2rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
            أثرنا بالأرقام
          </h2>
          <p className="text-[1.05rem] text-ivory/60 max-w-[600px] mx-auto leading-loose">
            ما حققناه خلال عام 2025 من خدمات وتدخلات إنسانية متكاملة
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-gold/15 border border-gold/15 rounded-3xl overflow-hidden">
          {impactStats.map((stat, i) => (
            <div key={i} className="bg-deep/90 p-10 text-center relative group transition-all hover:bg-emerald/15">
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-[clamp(2rem,5vw,3.5rem)] font-black text-gold block leading-none mb-3">
                <Counter target={stat.target} />
              </span>
              <div className="text-ivory/60 text-[0.85rem] leading-relaxed line-clamp-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
