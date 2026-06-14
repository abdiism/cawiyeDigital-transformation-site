import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../lib/i18n';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'so' : 'en');
  };

  const navLinks = [
    { path: '/product', label: t('nav.product') },
    { path: '/portal', label: t('nav.portal') },
    { path: '/about', label: t('nav.about') },
    { path: '/pricing', label: t('nav.pricing') },
  ];

  return (
    <>
      <div 
        className={`fixed left-0 right-0 z-50 flex justify-center px-3 md:px-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled ? 'top-2 md:top-5' : 'top-4 md:top-10'
        }`}
      >
        <nav 
          className={`
            transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            flex items-center justify-between
            rounded-full
            ${isScrolled 
              ? 'w-full max-w-[95%] md:max-w-5xl bg-white/60 backdrop-blur-2xl shadow-2xl shadow-black/5 border border-white/40 ring-1 ring-white/60 py-3 px-5 md:py-3 md:px-8' 
              : 'w-full max-w-7xl bg-transparent border-transparent py-2 px-2 md:py-4 md:px-6'
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 relative z-50 flex-shrink-0">
             <Link 
               to="/" 
               className="flex items-center gap-3 hover:opacity-80 transition-opacity" 
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <Logo className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
               <span className="font-serif font-black text-xl md:text-2xl tracking-tighter text-brand-green whitespace-nowrap">CAWIYE</span>
             </Link>
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-6 lg:gap-8 font-medium text-[15px] transition-all duration-500 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-brand-green transition-colors relative group whitespace-nowrap">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          {/* CTA & Lang */}
          <div className="flex items-center gap-2 md:gap-3 relative z-50 flex-shrink-0">
             <button 
              onClick={toggleLanguage}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-sm font-bold border ${isScrolled ? 'bg-white/50 border-white/60 hover:bg-white' : 'bg-white border-gray-100 shadow-sm'}`}
              aria-label="Toggle Language"
            >
              {language === 'en' ? (
                <>
                  <span className="text-gray-600 text-xs">EN</span>
                  <Globe size={14} className="text-brand-green" />
                </>
              ) : (
                <>
                  <span className="text-gray-600 text-xs">SO</span>
                  <Globe size={14} className="text-brand-red" />
                </>
              )}
            </button>

            <Link 
              to="/request-quote" 
              className={`hidden md:block bg-brand-black text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:bg-brand-green transition-all shadow-lg hover:shadow-brand-green/20 whitespace-nowrap ${isScrolled ? 'scale-95 hover:scale-100' : ''}`}
            >
              Start a Project
            </Link>
            
            <button 
              className="md:hidden text-brand-black p-2 hover:bg-white/50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/80 backdrop-blur-3xl transition-all duration-500 cubic-bezier(0.32,0.72,0,1) md:hidden flex flex-col pt-28 px-6 pb-8 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="flex flex-col h-full max-w-lg mx-auto w-full">
           <div className="flex flex-col space-y-2">
             {navLinks.map((link, idx) => (
               <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`flex items-center justify-between p-4 text-2xl font-serif font-medium text-brand-black border-b border-gray-100/50 hover:bg-white/60 rounded-2xl transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${idx * 100}ms` }}
               >
                 {link.label}
                 <ChevronRight size={20} className="text-gray-400" />
               </Link>
             ))}
           </div>
           
           <div className={`mt-auto space-y-4 transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <Link 
               to="/request-quote" 
               onClick={() => setIsMobileMenuOpen(false)}
               className="flex items-center justify-center w-full bg-brand-black text-white py-4 rounded-full text-lg font-semibold shadow-xl shadow-brand-black/10 active:scale-[0.98] transition-transform"
             >
               Start a Project
             </Link>
             
             <button 
               onClick={() => { toggleLanguage(); }} 
               className="flex items-center justify-center w-full bg-white/50 border border-white/60 text-brand-black py-4 rounded-full text-lg font-medium active:scale-[0.98] transition-transform"
             >
               <Globe size={20} className="mr-2" />
               {language === 'en' ? 'Switch to Somali' : 'Ku bedel English'}
             </button>
           </div>
        </div>
      </div>
    </>
  );
};