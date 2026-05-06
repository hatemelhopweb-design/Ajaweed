import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Book, HeartPulse, Users, Soup, Briefcase, GraduationCap } from 'lucide-react';

const sectors = [
  { id: 'care', title: 'قطاع الرعاية', icon: <Home size={18} /> },
  { id: 'religious', title: 'القطاع الديني', icon: <Book size={18} /> },
  { id: 'social', title: 'الرعاية الاجتماعية', icon: <HeartPulse size={18} /> },
  { id: 'integration', title: 'قطاع التكامل', icon: <Users size={18} /> },
];

export default function Sectors() {
  const [activeTab, setActiveTab] = useState('care');

  return (
    <section id="sectors" className="py-24 px-[5%] bg-deep">
      <div className="text-center mb-16">
        <span className="inline-block text-gold text-[0.8rem] font-bold tracking-[4px] uppercase mb-4 px-5 py-1.5 border border-gold/30 rounded-full bg-gold/5">
          خدماتنا
        </span>
        <h2 className="font-amiri text-[clamp(2.5rem,4vw,3.2rem)] font-bold text-ivory mb-4 leading-tight">
          قطاعات <span className="text-gold">عملنا</span>
        </h2>
        <p className="text-[1.05rem] text-ivory/60 max-w-[600px] mx-auto leading-loose">
          نعمل من خلال أربعة قطاعات رئيسية متكاملة لتحقيق التنمية الشاملة للمجتمع
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {sectors.map((sector) => (
          <button
            key={sector.id}
            onClick={() => setActiveTab(sector.id)}
            className={`flex items-center gap-2 px-7 py-3 rounded-full text-[0.9rem] font-semibold transition-all border ${
              activeTab === sector.id 
                ? 'bg-gold text-deep border-gold shadow-[0_4px_20px_rgba(201,168,76,0.3)]' 
                : 'bg-transparent text-ivory/60 border-gold/20 hover:bg-gold hover:text-deep hover:border-gold'
            }`}
          >
            {sector.icon}
            {sector.title}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === 'care' && (
            <motion.div
              key="care"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              <div className="bg-emerald/15 border border-emerald/30 rounded-3xl p-12 relative overflow-hidden">
                <div className="inline-block bg-emerald/30 text-emerald-light px-3.5 py-1 rounded-full text-[0.75rem] font-bold tracking-widest mb-5">
                  مرخصة برقم 56 لسنة 2013
                </div>
                <h3 className="font-amiri text-[2rem] text-ivory mb-4 font-bold">دار دارا لرعاية الأيتام</h3>
                <p className="text-ivory/65 leading-loose mb-6">دار رعاية متكاملة توفر للأطفال بيئة أسرية دافئة وآمنة، تضم 47 طفلاً في رعاية كاملة تشمل جميع جوانب النمو الصحي والنفسي والاجتماعي والتعليمي.</p>
                
                <div className="grid grid-cols-3 gap-5 mb-8">
                  {[
                    { value: '47', label: 'طفل في رعاية كاملة' },
                    { value: '42', label: 'دفتر توفير مستقبلي' },
                    { value: '12+', label: 'مدرسة ومعهد' }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 text-center"
                    >
                      <span className="text-2xl font-black text-gold block">{stat.value}</span>
                      <span className="text-[0.75rem] text-ivory/50">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-[0.85rem] text-ivory/50 mb-3 ml-auto">التوزيع العمري للأبناء:</p>
                <div className="flex flex-wrap gap-2">
                  {['4-5 سنوات (3)', '6-9 سنوات (7)', '10-13 سنوات (10)', '14-17 سنوات (13)', '18-22 سنة (14)'].map((age, i) => (
                    <span key={i} className="bg-gold/10 border border-gold/20 rounded-full px-3 py-1.5 text-[0.78rem] text-gold-light font-semibold">
                      {age}
                    </span>
                  ))}
                </div>
                <Home className="absolute bottom-5 left-5 opacity-5 w-24 h-24 rotate-[-15deg]" />
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/30 transition-all group">
                  <h4 className="text-gold font-bold mb-3">📚 الجانب التعليمي والثقافي</h4>
                  <p className="text-ivory/60 text-[0.9rem] leading-relaxed">التحاق بأفضل المدارس الخاصة والحكومية، مع توفير دروس تقوية لجميع المراحل، ومكتبة منزلية ووقت للقراءة الحرة، وكورسات لغة إنجليزية.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-gold text-[0.85rem] font-bold tracking-widest mb-4 uppercase">📸 لمحات من حياة الأبناء</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400', label: 'أنشطة تعليمية' },
                      { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400', label: 'لحظات مرح' },
                      { url: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=400', label: 'بيئة آمنة' },
                      { url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400', label: 'روح الجماعة' },
                    ].map((img, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="relative h-24 rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <img 
                          src={img.url} 
                          alt={img.label} 
                          className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-end p-2 bg-gradient-to-t from-black/60 to-transparent">
                          <span className="text-[0.6rem] text-ivory font-bold">{img.label}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/30 transition-all">
                  <h4 className="text-gold font-bold mb-4">⚽ الجانب الرياضي</h4>
                  <div className="grid grid-cols-2 gap-2 text-[0.85rem]">
                    {['🏊 سباحة (19 ابن)', '💪 جيم (18 ابن)', '⚽ كرة قدم (8 أبناء)', '🥋 كونغ فو (9 أبناء)', '🥊 كاراتيه (7 أبناء)', '🏀 سلة (1 ابن)'].map((act, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/5 hover:bg-gold/10 hover:border-gold/20 transition-all flex items-center gap-2">
                        {act}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/30 transition-all">
                  <h4 className="text-gold font-bold mb-3">🏥 الرعاية الصحية</h4>
                  <p className="text-ivory/60 text-[0.9rem] leading-relaxed">كشف دوري كل 6 أشهر، مع اتفاقيات مع مستشفيات خاصة وحكومية. تم إجراء 71 كشفاً طبياً، 5 أشعات، 3 تحاليل، وعملية جراحية خلال العام.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'religious' && (
            <motion.div
              key="religious"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                {[
                  { title: 'فرع القبارى', count: 468, unit: 'دارساً' },
                  { title: 'فرع العجمى', count: 740, unit: 'دارساً' },
                  { title: 'فرع زيزينيا', count: 588, unit: 'دارساً' },
                  { title: 'مسجد الريان 2', count: 104, unit: 'دارساً' },
                ].map((branch, i) => (
                  <a 
                    key={i} 
                    href="https://dar.ajaweed-eg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-7 text-center hover:-translate-y-1.5 transition-all group"
                  >
                    <Book className="text-gold mx-auto mb-4 w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="text-[0.9rem] font-bold text-ivory mb-1">{branch.title}</div>
                    <span className="text-3xl font-black text-gold block leading-none">{branch.count}</span>
                    <span className="text-[0.75rem] text-ivory/50 mt-1">{branch.unit}</span>
                  </a>
                ))}
              </div>
              
              <div className="bg-emerald/20 border border-emerald/40 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
                <div className="text-[5rem] opacity-70">🕌</div>
                <div>
                  <h3 className="font-amiri text-[1.8rem] text-ivory mb-2 font-bold">مسجد الريان (2) – الافتتاح الجديد</h3>
                  <p className="text-ivory/65 leading-loose mb-4">تم الانتهاء من بناء مسجد الريان 2 بحوض دفشو – كفر الدوار – محافظة البحيرة، ليكون منارة دينية لأهل المنطقة وفرعاً جديداً لتحفيظ القرآن الكريم.</p>
                  <div className="inline-flex items-center gap-2 bg-emerald/30 px-4 py-2 rounded-full text-[0.85rem] text-[#7EC8A4] font-semibold">
                    📅 أول صلاة جمعة: 5 سبتمبر 2025
                  </div>
                </div>
              </div>

              <div className="mt-10 p-10 bg-gold/5 border border-gold/15 rounded-2xl text-center">
                <div className="text-5xl font-black text-gold">2,530</div>
                <div className="text-ivory/60 mt-2">إجمالي دارسي القرآن الكريم في الفروع الأربعة</div>
                <p className="text-ivory/50 text-[0.85rem] mt-3">تعليم مجاني بالكامل، بمستوى كفاءة عالٍ، مع مسابقات دورية وجوائز عينية ونقدية.</p>
                <div className="mt-6">
                  <a 
                    href="https://dar.ajaweed-eg.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-deep px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                  >
                    <span>زيارة الموقع الرسمي لدور التحفيظ</span>
                    <Book size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'social' && (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              <div>
                <h3 className="font-amiri text-[1.8rem] text-ivory mb-7 font-bold">دار الهدايا للرعاية الاجتماعية</h3>
                <p className="text-ivory/60 leading-relaxed mb-8 text-[0.95rem]">تم استلام الدار في فبراير 2024 بموجب القرار الوزاري رقم 40. تضم أربعة أقسام لرعاية كبار السن والمحتاجين بلا مأوى.</p>
                
                <div className="grid grid-cols-2 gap-5 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                    <span className="text-4xl font-black text-gold block">37</span>
                    <div className="text-[0.85rem] text-ivory/50 mt-1">رجال بلا مأوى</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                    <span className="text-4xl font-black text-gold block">14</span>
                    <div className="text-[0.85rem] text-ivory/50 mt-1">رجال مسنين</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                    <span className="text-4xl font-black text-gold block">57</span>
                    <div className="text-[0.85rem] text-ivory/50 mt-1">سيدات بلا مأوى</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                    <span className="text-4xl font-black text-gold block">17</span>
                    <div className="text-[0.85rem] text-ivory/50 mt-1">سيدات مسنات</div>
                  </div>
                </div>

                <div className="bg-white/3 border border-white/7 rounded-2xl p-7">
                  <h4 className="text-gold font-bold mb-4">التوزيع الكلي للنزلاء (143 نزيل)</h4>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-emerald to-gold"
                      style={{ width: '37%' }}
                    />
                  </div>
                  <div className="flex justify-between text-[0.8rem] text-white/60">
                    <span>رجال: <strong>51 نزيل</strong></span>
                    <span>سيدات: <strong>74 نزيلة</strong></span>
                    <span>إجمالي: <strong>143</strong></span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gold text-[0.85rem] font-bold tracking-widest mb-4">الخدمات الصحية المقدمة</h4>
                <div className="bg-white/3 border border-white/7 rounded-2xl p-4">
                  <ul className="flex flex-col gap-2.5">
                    {[
                      '🩺 أطباء متخصصين (باطنة/صدر/أسنان)',
                      '🧘 جلسات علاج طبيعي دورية',
                      '💊 علاج يومي وشهري لجميع النزلاء',
                      '🏥 متابعة مستشفى المعمورة للطب النفسي',
                      '🔬 تحاليل وأشعات وعمليات جراحية',
                      '📋 ملف نفسي لكل نزيل مع جلسات فردية',
                      '🪪 استخراج أوراق ثبوتية للنزلاء',
                      '🎭 رحلات ترفيهية وفعاليات اجتماعية'
                    ].map((svc, i) => (
                      <li key={i} className="p-3.5 bg-white/5 rounded-xl border-r-4 border-gold text-ivory/75 text-[0.9rem] hover:bg-gold/10 transition-all">
                        {svc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'integration' && (
            <motion.div
              key="integration"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gold/15 border border-gold/25 rounded-3xl p-10 flex flex-col items-center text-center">
                  <Soup className="text-gold w-12 h-12 mb-5" />
                  <h3 className="font-amiri text-2xl text-ivory mb-2">مطعم جودى الخير</h3>
                  <p className="text-ivory/65 leading-relaxed mb-6 text-[0.9rem]">مطعم مخصص لتجهيز وتوزيع الوجبات على الأسر الكريمة طوال العام بجودة عالية.</p>
                  <span className="text-5xl font-black text-gold block leading-none">93,330</span>
                  <div className="text-[0.9rem] text-ivory/50 mt-2">وجبة سنوياً</div>
                </div>

                <div className="bg-emerald/20 border border-emerald/30 rounded-3xl p-8 flex flex-col items-center text-center">
                  <HeartPulse className="text-emerald-light w-12 h-12 mb-5" />
                  <h3 className="font-amiri text-2xl text-ivory mb-2">أنشطة المساعدات</h3>
                  <p className="text-ivory/65 leading-relaxed mb-4 text-[0.85rem]">منظومة متكاملة لدعم الأسر المتعففة وتوفير حياة كريمة لهم.</p>
                  
                  <div className="w-full space-y-3 mb-6 text-right">
                    {[
                      { label: 'تجهيز العرائس', desc: 'توفير أجهزة كهربائية ومفروشات لـ 12 عروساً' },
                      { label: 'إعمار المنازل', desc: 'ترميم وتوصيل مرافق لـ 8 منازل متهالكة' },
                      { label: 'فك الكرب', desc: 'سداد ديون 5 غارمين وغارمات لإعادة الشمل' },
                      { label: 'سلات الخير', desc: 'توزيع 450 كرتونة مواد غذائية شهرياً' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 p-2.5 rounded-xl border-r-2 border-emerald/50">
                        <div className="text-gold text-[0.8rem] font-bold">{item.label}</div>
                        <div className="text-ivory/50 text-[0.7rem]">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10 w-full">
                    <div className="text-3xl font-black text-gold mb-1">59,974</div>
                    <div className="text-[0.75rem] text-ivory/40">إجمالي التدخلات الاجتماعية حتى الآن</div>
                  </div>

                  <div className="mt-4 bg-gold/10 p-3 rounded-xl text-right border border-gold/20">
                    <div className="text-gold text-[0.7rem] font-bold mb-1">💡 قصة أثر (دراسة حالة):</div>
                    <p className="text-[0.65rem] text-ivory/70 leading-relaxed italic">
                      "سعاد"، أم لـ 4 أطفال، سددت المؤسسة دينها (22 ألف ج.م) ورممت سقف منزلها، وهي الآن إحدى أمهر الخياطات في قسم الأسر المنتجة.
                    </p>
                  </div>
                </div>

                <div className="bg-[#8B6914]/20 border border-[#8B6914]/30 rounded-3xl p-10 flex flex-col items-center text-center">
                  <Briefcase className="text-gold-light w-12 h-12 mb-5" />
                  <h3 className="font-amiri text-2xl text-ivory mb-2">الأسر المنتجة</h3>
                  <p className="text-ivory/65 leading-relaxed mb-6 text-[0.9rem]">دعم الأسر لتحقيق الاستقلال الاقتصادي من خلال التدريب والإنتاج.</p>
                  <div className="w-full text-right space-y-2 mb-6">
                    {['إسدال (64)', 'عباية (71)', 'كاريجان (30)', 'بادي (6)'].map((p, i) => (
                      <div key={i} className="flex justify-between border-b border-white/5 pb-1 text-[0.85rem] text-ivory/70">
                        <span>{p.split('(')[0]}</span>
                        <strong className="text-gold">{p.split('(')[1].replace(')', '')}</strong>
                      </div>
                    ))}
                  </div>
                  <span className="text-3xl font-black text-gold">178</span>
                  <div className="text-[0.8rem] text-ivory/50">قطعة منتجة إجمالاً</div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <div className="inline-flex flex-wrap items-center gap-3 bg-gold/5 border border-gold/15 rounded-2xl px-12 py-5">
                  <GraduationCap className="text-gold" />
                  <span className="text-gold font-bold">إجمالي التدخلات التعليمية:</span>
                  <span className="text-ivory text-2xl font-black">231 مستفيد</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
