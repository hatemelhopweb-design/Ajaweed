import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Search } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'رؤيتنا', href: '#vision' },
    { title: 'قطاعاتنا', href: '#sectors' },
    { title: 'عن المؤسسة', href: '#about' },
    { title: 'إنجازاتنا', href: '#impact' },
    { title: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-[1000] px-[5%] h-20 flex items-center justify-between transition-all duration-400 ${
        scrolled ? 'bg-deep/97 shadow-2xl border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        <a href="#hero" className="flex items-center gap-3 no-underline group shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-xl shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-transform group-hover:scale-110">
            ☾
          </div>
          <div className="text-gold font-bold text-base leading-tight hidden xs:block">
            مؤسسة أجاويد الخير
            <span className="block text-ivory font-light text-[0.75rem]">للأعمال الخيرية</span>
          </div>
        </a>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex relative items-center">
          <AnimatePresence>
            {showSearch && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 250, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن..."
                className="bg-white/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm text-ivory focus:outline-none focus:border-gold"
              />
            )}
          </AnimatePresence>
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 text-gold hover:text-gold-light transition-colors"
          >
            <Search size={20} />
          </button>
          
          <SearchOverlay 
            query={searchQuery} 
            setQuery={setSearchQuery} 
            onClose={() => setShowSearch(false)} 
          />
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-2 items-center list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a 
              href={link.href}
              className="text-ivory/70 no-underline px-3.5 py-2 rounded-md text-[0.85rem] font-semibold transition-all hover:text-gold relative group"
            >
              {link.title}
              <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-gold scale-x-0 transition-transform group-hover:scale-x-100 origin-center" />
            </a>
          </li>
        ))}
        <li>
          <a 
            href="#donate" 
            className="bg-gradient-to-br from-gold to-gold-dark text-deep px-5 py-2.5 rounded-full font-bold text-[0.85rem] shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(201,168,76,0.5)] transition-all ml-2"
          >
            تبرع الآن 💛
          </a>
        </li>
      </ul>

      {/* Mobile Actions */}
      <div className="flex items-center gap-2 md:hidden">
        <button 
          onClick={() => setShowSearch(!showSearch)}
          className="p-2 text-gold"
        >
          <Search size={24} />
        </button>
        <button 
          className="text-ivory p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Search Input Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-20 left-0 right-0 bg-deep border-b border-gold/20 p-4 lg:hidden"
          >
            <input 
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن أي شيء في المؤسسة..."
              className="w-full bg-white/5 border border-gold/30 rounded-xl p-3 text-ivory outline-none"
            />
            <div className="relative mt-2">
              <SearchOverlay 
                query={searchQuery} 
                setQuery={setSearchQuery} 
                onClose={() => setShowSearch(false)} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-deep/98 border-b border-gold/20 p-5 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-ivory/80 text-lg font-medium hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a 
              href="#donate"
              className="bg-gold text-deep p-4 rounded-xl text-center font-bold text-lg flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart size={20} fill="currentColor" />
              تبرع الآن
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
