import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronRight, MessageSquareCode, AlertCircle } from 'lucide-react';

const templates = [
  { id: 1, label: '💰 استفسار عن التبرع', message: 'السلام عليكم، أرغب في الاستفسار عن طرق التبرع المتاحة للمؤسسة.' },
  { id: 2, label: '🤝 الرغبة في التطوع', message: 'مرحباً، أود التطوع في أنشطة المؤسسة، كيف يمكنني الانضمام؟' },
  { id: 3, label: '👶 كفالة يتيم', message: 'أرغب في الاستفسار عن كفالة يتيم، هل يمكن تزويدي بالتفاصيل؟' },
  { id: 5, label: '🏠 معلومات عن الدار', message: 'السلام عليكم، أود الحصول على معلومات أكثر عن دار الأيتام والخدمات التي تقدمها المؤسسة.' },
  { id: 6, label: '📍 زيارة المؤسسة', message: 'مرحباً، أود ترتيب زيارة لمقر المؤسسة/دار الأيتام، ما هي المواعيد المتاحة؟' },
  { id: 4, label: '📢 تقديم شكوى رسمية', message: '', isExternal: true, url: 'https://complaints.ajaweed-eg.com' },
];

export default function DraggableWhatsApp() {
  const phoneNumber = "201223845157";
  const complaintsUrl = "https://complaints.ajaweed-eg.com";
  const [showTemplates, setShowTemplates] = useState(false);
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        left: -window.innerWidth + 80,
        right: 20,
        top: -window.innerHeight + 80,
        bottom: 20
      });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const openWhatsApp = (msg: string = '') => {
    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${phoneNumber}${msg ? `?text=${encodedMsg}` : ''}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      drag
      dragConstraints={constraints}
      dragElastic={0.1}
      className="fixed bottom-6 left-6 z-[1500] cursor-move flex items-end gap-3"
      initial={{ x: 0, y: 0 }}
    >
      <div className="relative flex flex-col items-start gap-2">
        <AnimatePresence>
          {showTemplates && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              className="bg-deep border border-gold/30 rounded-2xl p-2 w-48 shadow-2xl overflow-hidden mb-2 ml-1"
            >
              <div className="text-[0.65rem] text-gold/60 px-2 py-1 font-bold uppercase tracking-wider mb-1 border-b border-gold/10">
                اختر رسالة سريعة
              </div>
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    if (t.isExternal && t.url) {
                      window.open(t.url, '_blank');
                    } else {
                      openWhatsApp(t.message);
                    }
                    setShowTemplates(false);
                  }}
                  className="w-full text-right p-2.5 rounded-xl text-ivory/80 text-[0.75rem] hover:bg-gold/10 hover:text-gold transition-all flex items-center justify-between group"
                >
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          {/* Complaints Portal Link */}
          <motion.a
            href={complaintsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600/20 border border-red-500/30 text-red-500 backdrop-blur-sm shadow-xl"
            title="الشكاوى المباشرة للإدارة"
          >
            <AlertCircle size={18} />
          </motion.a>

          {/* Templates Trigger */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowTemplates(!showTemplates)}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              showTemplates ? 'bg-gold border-gold text-deep shadow-[0_0_15px_rgba(201,168,76,0.5)]' : 'bg-deep/80 border-gold/30 text-gold backdrop-blur-sm'
            }`}
          >
            <MessageSquareCode size={18} />
          </motion.button>

          {/* Main WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => openWhatsApp()}
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-xl transition-shadow hover:shadow-[#25D366]/50"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.623 1.432h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
