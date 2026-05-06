import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Copy, CheckCircle2, Book } from 'lucide-react';

const causes = [
  { id: 'orphans', title: 'رعاية الأيتام' },
  { id: 'health', title: 'الرعاية الصحية' },
  { id: 'food', title: 'إطعام الطعام' },
  { id: 'quran', title: 'تحفيظ القرآن' },
  { id: 'general', title: 'المساعدات العامة' },
];

const amounts = [50, 100, 200, 500, 1000, 5000];

const paymentMethods = [
  { id: 'visa', name: 'Visa', desc: 'بطاقة ائتمانية' },
  { id: 'mastercard', name: 'Mastercard', desc: 'بطاقة ائتمانية' },
  { id: 'fawry', name: 'فوري', desc: 'Fawry Pay' },
  { id: 'vodafone', name: 'فودافون كاش', desc: '01223845157' },
  { id: 'orange', name: 'أورانج كاش', desc: 'Orange Cash' },
  { id: 'etisalat', name: 'اتصالات كاش', desc: 'Etisalat Cash' },
  { id: 'instapay', name: 'InstaPay', desc: 'إنستاباي' },
  { id: 'bank', name: 'تحويل بنكي', desc: 'Bank Transfer' },
];

export default function Donate() {
  const [selectedCause, setSelectedCause] = useState('orphans');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('visa');
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const currentTotal = selectedAmount === 'custom' ? (parseInt(customAmount) || 0) : selectedAmount;

  return (
    <section id="donate" className="py-24 px-[5%] bg-gradient-to-b from-deep via-[#071510] to-deep relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          ادعمنا
        </span>
        <h2 className="font-amiri text-[clamp(2rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          تبرّع الآن وكن <span className="text-gold">شريك الخير</span>
        </h2>
        <p className="text-[1.05rem] text-ivory/60 max-w-[600px] mx-auto leading-loose">
          تبرعك يصنع فارقاً حقيقياً في حياة أيتام وكبار السن والأسر المحتاجة
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Form */}
        <div className="flex flex-col gap-8">
          <p className="font-quran text-[1.4rem] text-gold-light opacity-90 leading-loose">
            ﴿ وَمَا تُنفِقُوا مِنْ خَيْرٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ ﴾
          </p>

          <div className="flex flex-wrap gap-2.5">
            {causes.map((cause) => (
              <button
                key={cause.id}
                onClick={() => setSelectedCause(cause.id)}
                className={`px-4.5 py-2 rounded-full text-[0.82rem] font-bold transition-all border ${
                  selectedCause === cause.id 
                    ? 'bg-gold text-deep border-gold shadow-lg' 
                    : 'bg-transparent text-ivory/60 border-gold/25 hover:bg-gold hover:text-deep hover:border-gold'
                }`}
              >
                {cause.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setSelectedAmount(amt)}
                className={`relative overflow-hidden p-4.5 rounded-2xl border transition-all text-center group ${
                  selectedAmount === amt 
                    ? 'border-gold bg-gold/10 shadow-[0_0_20px_rgba(201,168,76,0.2)] translate-y-[-2px]' 
                    : 'border-gold/20 bg-white/3 text-ivory/70 hover:border-gold/50'
                }`}
              >
                <span className="text-lg font-bold block">{amt.toLocaleString('ar-EG')}</span>
                <span className="text-[0.72rem] opacity-50 mt-1 block">جنيه</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <input 
              type="number"
              placeholder="أو أدخل مبلغاً آخر..."
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount('custom');
              }}
              className="w-full bg-white/5 border border-gold/20 rounded-2xl p-4.5 text-ivory focus:border-gold focus:outline-none placeholder:text-ivory/30"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-bold text-sm">ج.م</span>
          </div>

          <div>
            <p className="text-[0.82rem] font-bold tracking-widest text-ivory/40 mb-4">اختر وسيلة الدفع</p>
            <div className="grid grid-cols-2 gap-2.5">
              {paymentMethods.map((pm) => (
                <button
                  key={pm.id}
                  onClick={() => setSelectedPayment(pm.id)}
                  className={`p-4.5 rounded-2xl border transition-all text-right flex items-center gap-3 relative group overflow-hidden ${
                    selectedPayment === pm.id 
                      ? 'border-gold bg-gold/10 shadow-[0_0_15px_rgba(201,168,76,0.1)]' 
                      : 'border-white/10 bg-white/3 hover:border-gold/30'
                  }`}
                >
                  <div className={`w-10 h-7 rounded flex items-center justify-center text-[0.6rem] font-black uppercase transition-colors ${
                    selectedPayment === pm.id ? 'bg-gold text-deep' : 'bg-white/10 text-ivory/40'
                  }`}>
                    {pm.id.slice(0, 3)}
                  </div>
                  <div>
                    <div className="text-[0.82rem] font-bold text-ivory flex items-center gap-1.5">
                      {pm.name}
                      {selectedPayment === pm.id && <ShieldCheck size={12} className="text-gold" />}
                    </div>
                    <div className="text-[0.72rem] text-ivory/45">{pm.desc}</div>
                  </div>
                  
                  {selectedPayment === pm.id && (
                    <motion.div 
                      layoutId="security-glow"
                      className="absolute inset-0 bg-gold/5 pointer-events-none"
                    />
                  )}
                  
                  {selectedPayment === pm.id && <CheckCircle2 size={16} className="text-gold absolute top-2 left-2" />}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setShowSuccess(true)}
            className="group relative w-full bg-gradient-to-br from-gold to-gold-dark p-5 rounded-2xl font-black text-deep text-xl hover:translate-y-[-3px] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_16px_40px_rgba(201,168,76,0.5)] flex items-center justify-center gap-3"
          >
            تبرع الآن – {currentTotal.toLocaleString('ar-EG')} ج.م
          </button>

          <p className="flex items-center justify-center gap-2 text-[0.8rem] text-ivory/35">
            <ShieldCheck size={16} /> جميع المعاملات مشفرة وآمنة
          </p>
        </div>

        {/* Right Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-emerald/15 border border-emerald/30 rounded-3xl p-8 shadow-inner">
            <h4 className="text-gold text-[0.85rem] font-bold tracking-widest mb-6 uppercase">✦ تأثير تبرعك</h4>
            <div className="space-y-4">
              {[
                { icon: '🍽️', val: '50 جنيه', text: 'وجبة كاملة لأسرة محتاجة' },
                { icon: '📚', val: '100 جنيه', text: 'شهر تعليم لطفل في دار دارا' },
                { icon: '💊', val: '200 جنيه', text: 'دواء لنزيل في دار الهدايا' },
                { icon: '🕌', val: '500 جنيه', text: 'دعم دور تحفيظ القرآن' },
                { icon: '🏠', val: '1,000 جنيه', text: 'كفالة يتيم لشهر كامل' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center text-lg">{item.icon}</div>
                  <div className="flex-1">
                    <strong className="text-ivory text-[0.88rem] block mb-1">
                      {item.val} = {item.text}
                      {item.icon === '🕌' && (
                        <a href="https://dar.ajaweed-eg.com" target="_blank" rel="noopener noreferrer" className="inline-block mr-2 scale-75 origin-right">
                          <Book size={14} className="text-gold" />
                        </a>
                      )}
                    </strong>
                    <span className="text-ivory/50 text-[0.78rem]">من برامج المؤسسة المختلفة</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/3 border border-white/7 rounded-3xl p-8">
            <h4 className="text-gold text-[0.85rem] font-bold tracking-widest mb-6 uppercase">🏦 بيانات التحويل البنكي</h4>
            <div className="space-y-3">
              {[
                { label: 'اسم الحساب', val: 'مؤسسة أجاويد الخير', id: 'accName' },
                { label: 'رقم الحساب', val: '1234-5678-9012-34', id: 'accNum' },
                { label: 'IBAN', val: 'EG01 0200 0000 0000 0000 1234', id: 'iban' },
                { label: 'فودافون كاش', val: '01223845157 (0020)', id: 'vodafone' },
                { label: 'أورانج كاش', val: '01223845157 (0020)', id: 'orange' },
                { label: 'اتصالات كاش', val: '01223845157 (0020)', id: 'etisalat' },
              ].map((bank, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-[0.82rem] text-ivory/45">{bank.label}</span>
                  <button 
                    onClick={() => handleCopy(bank.val, bank.id)}
                    className="group bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-gold/30 transition-all flex items-center gap-2"
                  >
                    <span className="text-[0.85rem] font-mono font-medium text-ivory/80 group-hover:text-gold translate-y-[1px]">
                      {copiedField === bank.id ? 'تم النسخ!' : bank.val}
                    </span>
                    <Copy size={14} className={copiedField === bank.id ? 'text-emerald' : 'text-gold'} />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-[0.75rem] text-ivory/30 mt-5 text-center italic">💡 اضغط على القيمة أو زر النسخ للحفظ تلقائياً</p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#0D2318] to-deep border border-gold/30 rounded-[2.5rem] p-12 text-center max-w-md w-full shadow-2xl relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-4xl shadow-lg ring-8 ring-deep/50">
                🌟
              </div>
              <h3 className="font-amiri text-3xl text-ivory mb-4 font-bold mt-4">جزاك الله خيراً!</h3>
              <p className="text-ivory/70 leading-loose mb-8">
                بفضل الله ثم كرمك، سيتم توجيه تبرعك وقدره <strong className="text-gold">{currentTotal.toLocaleString('ar-EG')} جنيه</strong> لدعم <span className="text-gold font-bold">{causes.find(c => c.id === selectedCause)?.title}</span>.
                <br />
                إن عطاءك اليوم هو شعاع أمل ينير حياة من هم في أمسّ الحاجة إليه. بارك الله في مالك وأهلك وجعلها في ميزان حسناتك.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(201,168,76,0.4)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -4, 0],
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                onClick={() => setShowSuccess(false)}
                className="bg-gold text-deep px-10 py-3.5 rounded-full font-bold text-[0.95rem] shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">آمين — إغلاق</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
