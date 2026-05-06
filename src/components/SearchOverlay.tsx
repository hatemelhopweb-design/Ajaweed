import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, X, ArrowLeft } from 'lucide-react';
import { useState, useMemo } from 'react';

const searchableContent = [
  { title: 'رعاية الأيتام', keyword: 'أيتام طفل دار دارا', href: '#sectors' },
  { title: 'رعاية المسنين', keyword: 'مسنين كبار سن دار الهدايا', href: '#sectors' },
  { title: 'تحفيظ القرآن الكريم', keyword: 'قرآن تحفيظ دار نادية إسماعيل', href: 'https://dar.ajaweed-eg.com', isExternal: true },
  { title: 'إطعام الطعام', keyword: 'طعام وجبات مطعم جودى الخير', href: '#sectors' },
  { title: 'الأسر المنتجة', keyword: 'أسر إنتاج مشاريع', href: '#sectors' },
  { title: 'تبرع الآن', keyword: 'تبرع دعم صدقة زكاة', href: '#donate' },
  { title: 'اتصل بنا', keyword: 'تواصل شكاوي هاتف عنوان', href: '#contact' },
  { title: 'رؤية المؤسسة', keyword: 'رؤية رسالة قيم', href: '#vision' },
  { title: 'أرقام الإنجازات', keyword: 'إنجازات أرقام إحصائيات 2025', href: '#impact' },
  { title: 'تدريب العاملين', keyword: 'تدريب كادر موظفين تطوير', href: '#training' },
];

export default function SearchOverlay({ 
  query, 
  setQuery, 
  onClose 
}: { 
  query: string, 
  setQuery: (q: string) => void,
  onClose: () => void 
}) {
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return searchableContent.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.keyword.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  if (!query.trim()) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 mt-2 mx-[5%] lg:mx-0 lg:w-[300px] lg:left-auto lg:right-0 bg-deep border border-gold/20 rounded-2xl shadow-2xl overflow-hidden z-50 text-right"
    >
      <div className="p-2 max-h-[400px] overflow-y-auto">
        {results.length > 0 ? (
          results.map((res, i) => (
            <a
              key={i}
              href={res.href}
              target={res.isExternal ? "_blank" : undefined}
              rel={res.isExternal ? "noopener noreferrer" : undefined}
              onClick={() => {
                setQuery('');
                onClose();
              }}
              className="flex items-center justify-between p-3 hover:bg-gold/10 rounded-xl transition-colors group"
            >
              <ArrowLeft size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm font-medium text-ivory/80 group-hover:text-gold">{res.title}</span>
            </a>
          ))
        ) : (
          <div className="p-4 text-center text-ivory/40 text-xs">
            لا توجد نتائج مطابقة لبحثك
          </div>
        )}
      </div>
    </motion.div>
  );
}
