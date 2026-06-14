import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../lib/i18n';

export const CtaSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 text-center">
      <div className="flex justify-center mb-8">
         <div className="w-12 h-12 rounded-full border-2 border-white -ml-4 bg-brand-green shadow-sm"></div>
         <div className="w-12 h-12 rounded-full border-2 border-white -ml-4 bg-gray-200 shadow-sm"></div>
         <div className="w-12 h-12 rounded-full border-2 border-white -ml-4 bg-brand-red shadow-sm"></div>
      </div>
      
      <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-black px-4">
        {t('cta.title')}
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg px-6">
        {t('cta.desc')}
      </p>

      <Link 
        to="/request-quote"
        className="inline-block bg-brand-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
      >
        {t('cta.button')}
      </Link>
    </section>
  );
};