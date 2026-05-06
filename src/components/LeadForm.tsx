import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, User, Phone, Mail, Heart } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus('loading');
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      setStatus('error');
      try {
        handleFirestoreError(error, OperationType.WRITE, 'leads');
      } catch (e) {
        console.error('Lead collection error:', e);
      }
    }
  };

  return (
    <section id="community" className="py-24 bg-deep/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold mb-6"
          >
            <Heart size={16} fill="currentColor" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase">انضم لمجتمعنا</span>
          </motion.div>
          <h2 className="text-3xl font-black text-ivory mb-4">كُن شريكاً في الخير</h2>
          <p className="text-ivory/60 max-w-lg mx-auto">سجل بياناتك لنبقيك على اطلاع بأحدث الأنشطة والمشاريع الخيرية وفرص التطوع.</p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md"
        >
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-ivory mb-2">تم استلام بياناتك بنجاح!</h3>
              <p className="text-ivory/60 mb-6">شكراً لاهتمامك بمؤسسة أجاويد الخير. سنتواصل معك قريباً.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-gold font-bold hover:underline"
              >
                تسجيل بيانات أخرى؟
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-ivory/70 text-sm font-medium pr-1">الأسم بالكامل</label>
                <div className="relative">
                  <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    className="w-full bg-white/3 border border-white/10 rounded-xl py-3 pr-11 pl-4 text-ivory focus:border-gold/50 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-ivory/70 text-sm font-medium pr-1">رقم الهاتف / واتساب</label>
                <div className="relative">
                  <Phone size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01234567890"
                    className="w-full bg-white/3 border border-white/10 rounded-xl py-3 pr-11 pl-4 text-ivory focus:border-gold/50 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-ivory/70 text-sm font-medium pr-1">البريد الإلكتروني (اختياري)</label>
                <div className="relative">
                  <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full bg-white/3 border border-white/10 rounded-xl py-3 pr-11 pl-4 text-ivory focus:border-gold/50 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold hover:bg-gold-light text-deep font-black py-4 rounded-xl shadow-lg shadow-gold/20 flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? 'جاري الإرسال...' : 'انضم الآن لمجتمع الأجاويد'}
                  <Send size={18} className={`transition-transform ${status === 'loading' ? '' : 'group-hover:translate-x-1 rotate-180'}`} />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
