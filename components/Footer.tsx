import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../lib/i18n';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white pt-16 md:pt-24 pb-8 md:pb-12 rounded-t-[2.5rem] md:rounded-t-[3rem] mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Logo Section in Footer */}
        <div className="mb-16">
           <Link to="/" className="inline-flex items-center gap-3 group">
             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg group-hover:scale-105 transition-transform">
                <Logo className="w-full h-full" />
             </div>
             <span className="font-serif text-3xl font-bold text-white tracking-tight">Cawiye</span>
           </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-20 text-sm">
          
          <div className="space-y-6">
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs">{t('footer.product')}</h4>
             <ul className="space-y-3 md:space-y-4 text-gray-300">
               <li><Link to="/product" className="hover:text-brand-green transition-colors block py-1">{t('footer.sites_apps')}</Link></li>
               <li><Link to="/product" className="hover:text-brand-green transition-colors block py-1">{t('footer.data_analysis')}</Link></li>
               <li><Link to="/pricing" className="hover:text-brand-green transition-colors block py-1">{t('footer.consulting')}</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs">{t('footer.community')}</h4>
             <ul className="space-y-3 md:space-y-4 text-gray-300">
               <li><Link to="/portal" className="hover:text-brand-green transition-colors block py-1">{t('footer.our_network')}</Link></li>
               <li><a href="#" className="hover:text-brand-green transition-colors block py-1">Slack</a></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs">{t('footer.support')}</h4>
             <ul className="space-y-3 md:space-y-4 text-gray-300">
               <li><Link to="/contact" className="hover:text-brand-green transition-colors block py-1">{t('footer.help_center')}</Link></li>
               <li><Link to="/pricing" className="hover:text-brand-green transition-colors block py-1">{t('footer.get_quote')}</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs">{t('footer.company')}</h4>
             <ul className="space-y-3 md:space-y-4 text-gray-300">
               <li><Link to="/about" className="hover:text-brand-green transition-colors block py-1">{t('nav.about')}</Link></li>
               <li><Link to="/legal" className="hover:text-brand-green transition-colors block py-1">{t('footer.legal')}</Link></li>
             </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">© {year} Cawiye Solutions Inc. {t('footer.rights')}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"><Instagram size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"><Twitter size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};