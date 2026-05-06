import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Megaphone, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a brief delay for impact
    const timer = setTimeout(() => {
      const isDismissed = localStorage.getItem('announcement_dismissed_v1');
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement_dismissed_v1', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white overflow-hidden z-[60]"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex-1 flex items-center gap-3">
                <span className="flex p-1.5 bg-red-700/50 rounded-lg ring-1 ring-white/20">
                  <Megaphone className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
                <p className="font-bold text-[0.85rem] sm:text-[0.95rem] tracking-wide">
                  <span className="hidden md:inline">حملة عاجلة: </span>
                  نحتاج لدعمكم لتجهيز وجبات مطعم جودى الخير لهذا الشهر. عطاؤكم يغيث تلهفهم.
                </p>
              </div>
              
              <div className="order-3 mt-0 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#donate"
                  className="flex items-center justify-center px-4 py-1.5 border border-transparent rounded-full shadow-sm text-[0.8rem] font-black text-red-600 bg-white hover:bg-red-50 transition-all gap-1 group"
                >
                  تبرع الآن
                  <ArrowRight size={14} className="group-hover:translate-x-[-2px] transition-transform rotate-180" />
                </a>
              </div>
              
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="-mr-1 flex p-1.5 rounded-md hover:bg-red-700/50 focus:outline-none transition-colors"
                >
                  <span className="sr-only">إغلاق</span>
                  <X className="h-4 w-4 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Subtle animated shine effect */}
          <motion.div 
            initial={{ left: '-100%' }}
            animate={{ left: '200%' }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
