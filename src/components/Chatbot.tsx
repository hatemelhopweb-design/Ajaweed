import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, Bot, User, Check, CheckCheck, Clock } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  suggestions?: string[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      content: 'أهلاً بك! أنا المساعد الذكي لمؤسسة أجاويد الخير. كيف يمكنني مساعدتك اليوم؟', 
      timestamp: new Date(),
      suggestions: ["كيف أتبرع؟", "كفالة يتيم", "مواعيد الزيارة"]
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (customMessage?: string) => {
    const userMessage = customMessage || input.trim();
    if (!userMessage || loading) return;

    const currentHistory = [...messages];
    if (!customMessage) setInput('');
    
    const newUserMsg: Message = { 
      role: 'user', 
      content: userMessage, 
      timestamp: new Date(),
      status: 'sending' 
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setLoading(true);

    try {
      const response = await getChatResponse(userMessage, currentHistory);
      setMessages(prev => {
        const lastUserIndex = prev.map(m => m.role).lastIndexOf('user');
        const updated = prev.map((msg, i) => 
          i === lastUserIndex ? { ...msg, status: 'sent' as const } : msg
        );
        return [...updated, { 
          role: 'model', 
          content: response.text, 
          timestamp: new Date(),
          suggestions: response.suggestions 
        }];
      });
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => {
        const lastUserIndex = prev.map(m => m.role).lastIndexOf('user');
        const updated = prev.map((msg, i) => 
          i === lastUserIndex ? { ...msg, status: 'error' as const } : msg
        );
        return [...updated, { 
          role: 'model', 
          content: 'عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.', 
          timestamp: new Date() 
        }];
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1600]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-deep border border-gold/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gold/10 p-4 border-b border-gold/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-deep">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-gold font-bold text-sm">مساعد أجاويد الخير</div>
                  <div className="text-white/40 text-[0.7rem] flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse" />
                    متاح الآن (مدعوم بالذكاء الاصطناعي)
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M50 0 L100 50 L50 100 L0 50 Z%22 fill=%22none%22 stroke=%22%23C9A84C%22 stroke-opacity=%220.03%22 stroke-width=%221%22/%3E%3C/svg%3E')] bg-repeat"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-3.5 rounded-2xl text-[0.88rem] leading-relaxed shadow-sm transition-all ${
                      msg.role === 'user' 
                        ? 'bg-gold text-deep rounded-bl-none font-medium' 
                        : 'bg-white/5 border border-white/10 text-ivory rounded-br-none'
                    }`}>
                      {msg.content}
                    </div>
                    <div className={`mt-1 flex items-center gap-1.5 text-[0.6rem] ${msg.role === 'user' ? 'text-white/40' : 'text-white/30'}`}>
                      <span>
                        {msg.timestamp.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {msg.role === 'user' && (
                        <span className="flex">
                          {msg.status === 'sending' ? (
                            <Clock size={10} className="text-white/40 animate-pulse" />
                          ) : msg.status === 'sent' ? (
                            <CheckCheck size={10} className="text-emerald" />
                          ) : msg.status === 'error' ? (
                            <X size={10} className="text-red-500" />
                          ) : (
                            <Check size={10} />
                          )}
                        </span>
                      )}
                    </div>

                    {msg.role === 'model' && msg.suggestions && msg.suggestions.length > 0 && i === messages.length - 1 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.suggestions.map((suggestion, idx) => (
                          <motion.button
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            key={idx}
                            onClick={() => handleSend(suggestion)}
                            className="text-[0.7rem] px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold hover:bg-gold/10 transition-all font-bold"
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-br-none flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                        className="w-1.5 h-1.5 bg-gold rounded-full" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-gold rounded-full" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-gold rounded-full" 
                      />
                    </div>
                    <span className="text-[0.65rem] text-gold/60 font-bold uppercase tracking-wider">جاري الكتابة...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gold/20 flex gap-2 bg-deep">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب استفسارك هنا..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[0.9rem] focus:border-gold outline-none text-ivory transition-colors placeholder:text-white/20"
              />
              <button 
                onClick={() => handleSend()}
                disabled={loading}
                className="w-11 h-11 bg-gold text-deep rounded-xl flex items-center justify-center hover:scale-105 hover:shadow-[0_0_15px_rgba(201,168,76,0.5)] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
              >
                <Send size={18} className="translate-x-[-1px] rotate-180" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold text-deep rounded-full flex items-center justify-center shadow-xl hover:shadow-gold/50 transition-shadow relative"
      >
        <MessageCircle size={24} />
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald text-white text-[0.6rem] font-bold rounded-full flex items-center justify-center border-2 border-deep">
            1
          </div>
        )}
      </motion.button>
    </div>
  );
}
