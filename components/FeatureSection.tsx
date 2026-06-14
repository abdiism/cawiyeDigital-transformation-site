import React from 'react';
import { Layers, Zap, Share2, PenTool } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export const FeatureSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="rounded-[3rem] bg-brand-green/5 border border-brand-green/10 p-8 md:p-16 text-brand-black overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Mockup */}
        <div className="relative order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out max-w-md mx-auto border border-gray-100">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
               <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-brand-green rounded-sm"></div>
               </div>
               <div className="w-20 h-3 bg-gray-100 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-gray-200 rounded flex-shrink-0"></div>
                  <div className="space-y-2 w-full">
                     <div className="w-3/4 h-3 bg-gray-100 rounded-full"></div>
                     <div className="w-1/2 h-2 bg-gray-50 rounded-full"></div>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-gray-200 rounded flex-shrink-0"></div>
                  <div className="space-y-2 w-full">
                     <div className="w-full h-3 bg-gray-100 rounded-full"></div>
                  </div>
               </div>
               <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 border-2 border-gray-200 rounded flex-shrink-0 bg-gray-100"></div>
                  <div className="space-y-2 w-full">
                     <div className="w-2/3 h-3 bg-gray-100 rounded-full"></div>
                  </div>
               </div>
            </div>

            {/* Overlapping Card */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-brand-red p-6 rounded-2xl shadow-lg w-64 md:w-72 transform rotate-3 text-white">
               <h4 className="font-bold text-lg mb-4 text-white">{t('feature.card.title')}</h4>
               <div className="space-y-2">
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 border border-white/30 rounded"></div>
                     <span className="text-sm text-white/90">Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 border border-white/30 rounded"></div>
                     <span className="text-sm text-white/90">Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 border border-white/30 rounded"></div>
                     <span className="text-sm text-white/90">Digital Identity</span>
                  </div>
               </div>
               <p className="mt-4 text-xs text-white/80 leading-relaxed">
                  {t('feature.card.desc')}
               </p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase opacity-60 text-brand-green">{t('feature.pre')}</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-brand-black">
              {t('feature.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              {t('feature.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-brand-black">
              <Layers className="w-6 h-6 text-brand-green" />
              <span className="font-semibold">{t('feature.list.scalable')}</span>
            </div>
             <div className="flex items-center gap-3 text-brand-black">
              <PenTool className="w-6 h-6 text-brand-red" />
              <span className="font-semibold">{t('feature.list.whiteboards')}</span>
            </div>
             <div className="flex items-center gap-3 text-brand-black">
              <Zap className="w-6 h-6 text-brand-green" />
              <span className="font-semibold">{t('feature.list.fast')}</span>
            </div>
             <div className="flex items-center gap-3 text-brand-black">
              <Share2 className="w-6 h-6 text-brand-red" />
              <span className="font-semibold">{t('feature.list.publish')}</span>
            </div>
          </div>

          <button className="bg-brand-black text-white hover:bg-gray-800 border border-transparent px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
            {t('banner.link')}
          </button>
        </div>

      </div>
    </section>
  );
};