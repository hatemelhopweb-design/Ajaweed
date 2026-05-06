import VisitorCounter from './VisitorCounter';

export default function Footer() {
  return (
    <footer className="bg-[#050E09] border-t border-gold/15 pt-20 pb-10 px-[5%]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        <div className="flex flex-col gap-5">
          <h3 className="font-amiri text-2xl text-gold font-bold">مؤسسة أجاويد الخير</h3>
          <p className="text-ivory/50 text-[0.9rem] leading-loose">
            مؤسسة ذات نفع عام تأسست عام 2013، تعمل على تقديم الخدمات الإنسانية والاجتماعية والتعليمية لأهالي المجتمع الأكثر احتياجاً في الإسكندرية ومحيطها.
          </p>
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-[0.8rem] text-ivory/40 border border-white/10 rounded-full px-4 py-1.5 w-fit">
              ✦ منذ عام 2013 ✦
            </div>
            <VisitorCounter />
          </div>
        </div>

        <div>
          <h4 className="text-gold text-[0.85rem] font-bold tracking-widest uppercase mb-6">قطاعاتنا</h4>
          <ul className="space-y-3">
            {['قطاع الرعاية – دار دارا', 'القطاع الديني', 'دار الهدايا', 'قطاع التكامل', 'جودى الخير'].map((link) => (
              <li key={link}>
                <a href="#sectors" className="text-ivory/50 text-[0.88rem] hover:text-gold-light transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-[0.85rem] font-bold tracking-widest uppercase mb-6">روابط سريعة</h4>
          <ul className="space-y-3">
            {['تبرع الآن 💛', 'تواصل معنا ✉️', 'أرقام العام 2025', 'رؤية ورسالة', 'ميثاق الشرف'].map((link) => (
              <li key={link}>
                <a href={`#${link.includes('تبرع') ? 'donate' : link.includes('تواصل') ? 'contact' : link.includes('أرقام') ? 'impact' : link.includes('رؤية') ? 'vision' : 'values'}`} className="text-ivory/50 text-[0.88rem] hover:text-gold-light transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-[0.85rem] font-bold tracking-widest uppercase mb-6">تواصل معنا</h4>
          <ul className="space-y-3">
            <li className="text-ivory/50 text-[0.88rem]">برج العرب الجديدة</li>
            <li className="text-ivory/50 text-[0.88rem]">الإسكندرية، مصر</li>
            <li className="text-ivory/50 text-[0.88rem]">
              رقم التواصل و
              <a href="https://complaints.ajaweed-eg.com" target="_blank" rel="noopener noreferrer" className="text-ivory/50 hover:text-gold transition-colors underline decoration-gold/30">
                الشكاوى
              </a>: 01223845157 (0020)
            </li>
            <li className="font-bold text-[0.8rem] mt-4">
              <a href="https://complaints.ajaweed-eg.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                بوابة الشكاوى المباشرة للإدارة
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
        <p className="text-ivory/20 text-[0.8rem]">© 2025 مؤسسة أجاويد الخير للأعمال الخيرية – جميع الحقوق محفوظة</p>
        <div className="flex gap-4 bg-gold/5 border border-gold/15 rounded-full px-4 py-1.5 text-[0.75rem] text-gold/60">
          <span>رقم الشهرة: 3277 / 2013</span>
          <span className="opacity-30">|</span>
          <span>رقم مركزي: 1276 / 2025</span>
        </div>
      </div>
    </footer>
  );
}
