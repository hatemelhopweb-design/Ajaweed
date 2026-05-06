import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Facebook, Twitter, Link as LinkIcon, MessageCircle, Heart, Hash } from 'lucide-react';

export default function ShareTools() {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://ajaweed-eg.com";
  const shareTitle = "مؤسسة أجاويد الخير - رفقاء الخير في الإسكندرية";
  const hashtags = ["أجاويد_الخير", "خير_الإسكندرية", "رعاية_الأيتام"];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareUrl,
        text: "انضم إلينا في رحلة الخير مع مؤسسة أجاويد الخير بالإسكندرية."
      });
    }
  };

  return (
    <section className="py-20 bg-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gold/10 to-transparent p-12 rounded-[3rem] border border-white/5 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-gold mb-4">
                <Share2 size={20} />
                <span className="font-bold tracking-widest text-[0.7rem] uppercase">انشر الخير</span>
              </div>
              <h2 className="text-4xl font-black text-ivory mb-6 leading-tight">شارِك الموقع ليكون لك نصيب من الأجر</h2>
              <p className="text-ivory/60 text-lg mb-8 leading-relaxed">
                كلمة منك قد تفتح باباً للفرح ليتيم أو مسن. كن أنت السبب في وصول رسالتنا لكل محب للخير.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {hashtags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-ivory/50 text-sm">
                    <Hash size={12} className="text-gold" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleNativeShare}
                  className="bg-gold text-deep px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Share2 size={20} />
                  أنشر الآن
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="bg-white/5 border border-white/10 text-ivory px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors relative h-[56px] min-w-[160px]"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span 
                        key="copied"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2 text-emerald"
                      >
                        تم النسخ!
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="copy"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <LinkIcon size={18} />
                        نسخ الرابط
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-white/3 border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 transition-all"
              >
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#1877F2] text-[#1877F2] group-hover:text-white transition-all">
                  <Facebook size={32} />
                </div>
                <span className="font-bold text-ivory/60">فيسبوك</span>
              </a>

              <a 
                href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-white/3 border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all font-arabic"
              >
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white transition-all">
                  <MessageCircle size={32} />
                </div>
                <span className="font-bold text-ivory/60">واتساب</span>
              </a>

              <a 
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(shareTitle)}&hashtags=${hashtags.join(',')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-white/3 border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 transition-all"
              >
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#1DA1F2] text-[#1DA1F2] group-hover:text-white transition-all">
                  <Twitter size={32} />
                </div>
                <span className="font-bold text-ivory/60">اكس / تويتر</span>
              </a>

              <div className="p-8 bg-gold/10 border border-gold/20 rounded-3xl flex flex-col items-center justify-center text-center">
                <Heart size={40} className="text-gold mb-3" fill="currentColor" />
                <div className="text-sm font-black text-ivory">ساهم بنشر الخير</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
