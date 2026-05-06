import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

const newsItems = [
  { icon: '🏠', text: 'دار دارا ترعى', num: '47 طفلاً', rest: 'برعاية كاملة في الإسكندرية' },
  { icon: '🍽️', text: 'وُزِّعت', num: '93,330 وجبة', rest: 'خلال عام 2025 من مطعم جودى الخير' },
  { icon: '📖', text: '', num: '2,530 دارساً', rest: 'يتعلمون القرآن الكريم مجاناً في فروعنا الأربعة' },
  { icon: '🕌', text: 'افتتاح', num: 'مسجد الريان 2', rest: 'بكفر الدوار — البحيرة — سبتمبر 2025' },
  { icon: '❤️', text: 'دار الهدايا ترعى', num: '143 نزيلاً', rest: 'من كبار السن والمحتاجين' },
  { icon: '🤝', text: 'استفاد', num: '59,974 مستفيداً', rest: 'من التدخلات الإنسانية والاجتماعية' },
];

export default function Ticker() {
  return (
    <div className="bg-emerald-dark/90 border-b border-gold/20 py-2.5 overflow-hidden relative z-50">
      <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-emerald-dark via-emerald-dark/90 to-transparent px-5 flex items-center z-10">
        <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest">
          <Megaphone className="w-3 h-3" />
          <span>أخبار</span>
        </div>
      </div>
      
      <motion.div 
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...newsItems, ...newsItems].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-ivory/80 text-xs border-l border-gold/20 pl-12">
            <span>{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-gold font-bold">{item.num}</span>
            <span>{item.rest}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
