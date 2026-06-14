import React from 'react';
import { ArrowRight, MessageSquare, Briefcase } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { Link } from 'react-router-dom';

export const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="pricing" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">{t('pricing.pre')}</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-black">
            {t('pricing.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
             {t('pricing.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Analysis & Quote */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300">
             <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-brand-green" />
             </div>
             <h3 className="text-4xl font-serif mb-6 text-brand-black">{t('pricing.consultation')}</h3>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               {t('pricing.consultation.desc')}
             </p>
             <div className="mt-auto">
               <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-3xl font-serif text-brand-green">Free</span>
                 <span className="text-gray-400">/ Initial Call</span>
               </div>
               <Link to="/contact" className="block w-full text-center bg-white border border-gray-200 text-black py-4 rounded-full font-semibold hover:bg-green-50 hover:border-brand-green transition-colors">
                 Book a Discovery Call
               </Link>
             </div>
          </div>

          {/* Custom Project */}
          <div className="bg-brand-black text-white rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
             <div className="flex items-center justify-between mb-6">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-brand-green" />
                 </div>
                <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Popular</span>
             </div>
             <h3 className="text-4xl font-serif mb-6 text-white">{t('pricing.custom')}</h3>
             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               {t('pricing.custom.desc')}
             </p>
             <div className="mt-auto relative z-10">
               <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-3xl font-serif">Custom</span>
                 <span className="text-gray-500">/ Quote</span>
               </div>
               <Link to="/request-quote" className="w-full bg-brand-green text-white py-4 rounded-full font-semibold hover:bg-[#004d28] transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                 Request Quote <ArrowRight size={18} />
               </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};