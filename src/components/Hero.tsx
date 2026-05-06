import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: 'موظف متخصص', target: 243 },
  { label: 'وجبة سنوياً', target: 93330 },
  { label: 'دارس قرآن كريم', target: 2530 },
  { label: 'نزيل تحت الرعاية', target: 143 },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target]);

  return <span>{count.toLocaleString('ar-EG')}</span>;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#0A1A12] z-0">
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(27,107,69,0.3)_0%,transparent_70%)]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(201,168,76,0.1)_0%,transparent_60%)]" 
        />
      </div>

      {/* Pattern Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3Cpath d='M50 10 L90 50 L50 90 L10 50 Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          y: y1,
          opacity: 0.04
        }}
      />

      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="relative z-20 text-center max-w-[900px] px-[5%] py-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8 text-[0.85rem] text-gold-light tracking-widest"
        >
          ✦ كن جزءاً من الخير.. عطاؤك يصنع فارقاً ✦
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-quran text-[clamp(1.1rem,2.5vw,1.6rem)] text-gold-light mb-6 leading-[2]"
        >
          ﴿ مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ ﴾
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-amiri text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-tight mb-4 bg-gradient-to-br from-ivory via-gold-light to-ivory bg-clip-text text-transparent"
        >
          مؤسسة أجاويد الخير<br />للأعمال الخيرية
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[clamp(0.9rem,2vw,1.2rem)] text-ivory/70 max-w-[600px] mx-auto mb-12 leading-loose"
        >
          منذ عام 2013، نسعى لبناء مجتمع متعلم مثقف واعٍ منتج، من خلال تقديم الخدمات الإنسانية والاجتماعية والتعليمية لأهلنا الأكثر احتياجاً
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 sm:gap-16 mb-12 flex-wrap"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-gold block leading-none">
                <Counter target={stat.target} />
              </span>
              <div className="text-[0.8rem] text-ivory/50 mt-1 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#donate"
            className="bg-gradient-to-br from-gold to-gold-dark text-deep px-10 py-4 rounded-full text-base font-bold shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:translate-y-[-3px] hover:shadow-[0_16px_40px_rgba(201,168,76,0.5)] transition-all"
          >
            تبرع الآن 💛
          </a>
          <a
            href="#sectors"
            className="bg-transparent text-ivory px-10 py-3.5 rounded-full text-base font-semibold border border-ivory/30 hover:border-gold hover:text-gold hover:translate-y-[-3px] transition-all"
          >
            اكتشف عملنا
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40 text-[0.75rem]"
      >
        <span>اسحب للأسفل</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
