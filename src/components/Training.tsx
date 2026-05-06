import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function Training() {
  return (
    <section id="training" className="py-24 px-[5%] bg-gradient-to-b from-deep to-[#0F2218]">
      <div className="text-center mb-16">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          تطوير الكوادر
        </span>
        <h2 className="font-amiri text-[clamp(2.5rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          تدريب <span className="text-gold">العاملين</span>
        </h2>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-emerald/20 to-gold/10 border border-gold/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
      >
        <BookOpen className="absolute -right-10 top-1/2 -translate-y-1/2 w-48 h-48 text-ivory/5 rotate-[15deg] pointer-events-none" />
        
        <h3 className="font-amiri text-[2.2rem] text-ivory mb-5 font-bold">الاستثمار في كوادرنا البشرية</h3>
        <p className="text-ivory/70 text-lg leading-loose max-w-2xl mx-auto mb-10">
          تهتم المؤسسة بتدريب العاملين ورفع كفاءتهم على أحدث التقنيات التي تهدف إلى تحقيق الجودة المطلوبة وتطوير الأداء وتقديم أفضل خدمة في دور الرعاية لكافة العاملين بالمؤسسة بكل فروعها وأنشطتها من خلال عقد تدريبات بصفة دورية.
        </p>

        <div className="inline-flex items-center gap-4 bg-gold/10 border border-gold/20 rounded-full px-8 py-3.5 shadow-lg">
          <span className="text-4xl font-black text-gold">243</span>
          <div className="text-right text-[0.9rem] text-ivory/70 leading-tight">
            موظف متخصص<br />يعملون بكفاءة واحترافية
          </div>
        </div>
      </motion.div>
    </section>
  );
}
