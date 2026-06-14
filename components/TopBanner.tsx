import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export const TopBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-black text-white text-[10px] md:text-xs py-2.5 px-4 flex justify-center items-center gap-2 relative z-[60] tracking-wide transition-all duration-300">
      <div className="flex items-center gap-2 mr-6 md:mr-0">
        <span className="font-medium opacity-90">{t('banner.text')}</span>
        <a href="#pricing" className="flex items-center gap-1 font-semibold hover:underline opacity-100 group text-brand-green">
          {t('banner.link')} <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X size={14} />
      </button>
    </div>
  );
};