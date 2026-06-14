import React from 'react';
import { useTranslation } from '../lib/i18n';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center pt-8 md:pt-10 pb-12 md:pb-20 scroll-mt-32">
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-4 md:space-y-6 px-4">
        <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-green uppercase bg-green-50 px-3 py-1 rounded-full border border-green-100">
          {t('hero.subtitle')}
        </span>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight text-brand-black">
          {t('hero.title')}
        </h1>
        
        <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-medium px-2">
          {t('hero.desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 w-full text-left">
           
           {/* Card 1: Green Theme */}
           <div className="bg-[#E6F4EA] border border-green-100 rounded-[2rem] p-6 md:p-8 min-h-[320px] md:min-h-[400px] flex flex-col relative group overflow-hidden transition-transform active:scale-[0.99] md:hover:-translate-y-1 duration-300">
              <div className="text-center mb-8 relative z-10">
                 <h3 className="font-serif text-2xl mb-2 text-brand-green">{t('hero.card1.title')}</h3>
                 <p className="text-sm text-gray-600 leading-tight px-4">{t('hero.card1.desc')}</p>
              </div>
              <div className="bg-white rounded-t-xl shadow-lg mt-auto mx-4 p-4 pb-0 h-40 md:h-48 relative top-4 border border-green-50">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-6 h-6 rounded-md bg-brand-green"></div>
                     <span className="text-sm font-bold text-gray-800">Cawiye Portal</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-2 transform scale-105 shadow-md">
                     <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-brand-red"></div>
                        <span className="text-sm font-bold text-gray-800">Alerts</span>
                     </div>
                  </div>
              </div>
           </div>

           {/* Card 2: Red/White Theme */}
           <div className="bg-white border border-gray-200 rounded-[2rem] p-6 md:p-8 min-h-[320px] md:min-h-[400px] flex flex-col relative group overflow-hidden transition-transform active:scale-[0.99] md:hover:-translate-y-1 duration-300 shadow-sm">
              <div className="text-center mb-8 relative z-10">
                 <h3 className="font-serif text-2xl mb-2 text-brand-red">{t('hero.card2.title')}</h3>
                 <p className="text-sm text-gray-500 leading-tight px-4">{t('hero.card2.desc')}</p>
              </div>
               <div className="relative mt-auto h-40 md:h-48 w-full flex justify-center">
                  <div className="absolute w-32 md:w-40 h-28 md:h-32 bg-gray-50 rounded-xl shadow-lg rotate-[-5deg] left-4 md:left-8 bottom-0 p-4 z-10 border border-gray-100">
                      <span className="text-xs font-bold text-brand-red uppercase">Back-end</span>
                      <div className="mt-2 space-y-2">
                         <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                         <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                      </div>
                  </div>
                  <div className="absolute w-32 md:w-40 h-28 md:h-32 bg-brand-red text-white rounded-xl shadow-md rotate-[5deg] right-4 md:right-8 bottom-4 p-4 z-0">
                      <span className="text-xs font-bold text-white/80 uppercase">Front-end</span>
                       <div className="mt-2 space-y-2">
                         <div className="h-2 w-2/3 bg-white/40 rounded"></div>
                         <div className="h-2 w-3/4 bg-white/40 rounded"></div>
                      </div>
                  </div>
               </div>
           </div>

           {/* Card 3: Black/Green Theme */}
           <div className="bg-brand-black text-white rounded-[2rem] p-6 md:p-8 min-h-[320px] md:min-h-[400px] flex flex-col relative group overflow-hidden transition-transform active:scale-[0.99] md:hover:-translate-y-1 duration-300">
              <div className="text-center mb-8 relative z-10">
                 <h3 className="font-serif text-2xl mb-2 text-white">{t('hero.card3.title')}</h3>
                 <p className="text-sm text-gray-400 leading-tight px-4">{t('hero.card3.desc')}</p>
              </div>
              <div className="bg-gray-900 rounded-t-xl shadow-lg mt-auto mx-2 p-4 pb-0 h-40 md:h-48 relative top-4 border-t border-gray-800">
                 <div className="flex gap-4 border-b border-gray-800 pb-2 mb-2 text-[10px] font-bold text-gray-500 uppercase">
                    <span>Metric</span>
                    <span>Value</span>
                 </div>
                 <div className="space-y-3">
                    <div className="flex gap-4 items-center">
                       <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                       <div className="h-2 w-20 bg-gray-800 rounded"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                       <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                       <div className="h-2 w-24 bg-gray-800 rounded"></div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};