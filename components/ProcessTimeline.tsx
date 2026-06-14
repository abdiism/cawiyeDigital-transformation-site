import React from 'react';
import { Search, Map, Code2, Rocket } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export const ProcessTimeline: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: "01",
      title: t('timeline.step1.title'),
      subtitle: t('timeline.step1.sub'),
      description: t('timeline.step1.desc'),
      icon: Search,
      // Deep Onyx/Blue Gradient
      gradient: "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]",
      shadow: "shadow-slate-900/20",
    },
    {
      id: "02",
      title: t('timeline.step2.title'),
      subtitle: t('timeline.step2.sub'),
      description: t('timeline.step2.desc'),
      icon: Map,
      // Gold/Sand Gradient (Premium look)
      gradient: "bg-gradient-to-br from-[#B45309] via-[#D97706] to-[#F59E0B]",
      shadow: "shadow-amber-900/20",
    },
    {
      id: "03",
      title: t('timeline.step3.title'),
      subtitle: t('timeline.step3.sub'),
      description: t('timeline.step3.desc'),
      icon: Code2,
      // Brand Red Gradient
      gradient: "bg-gradient-to-br from-[#7F1D1D] via-[#D21034] to-[#E11D48]",
      shadow: "shadow-red-900/20",
    },
    {
      id: "04",
      title: t('timeline.step4.title'),
      subtitle: t('timeline.step4.sub'),
      description: t('timeline.step4.desc'),
      icon: Rocket,
      // Brand Green Gradient
      gradient: "bg-gradient-to-br from-[#064E3B] via-[#006233] to-[#10B981]",
      shadow: "shadow-emerald-900/20",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FDFBF7]">
      {/* Decorative Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-green border-b border-brand-green/20 pb-2">
            {t('timeline.pre')}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-black mt-6">
            {t('timeline.title')}
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            {t('timeline.desc')}
          </p>
        </div>

        <div className="relative">
            {/* Central Glowing Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-black/0 via-brand-black/20 to-brand-black/0 z-0"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-green/50 to-transparent z-0 blur-sm"></div>

            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-8 top-10 bottom-10 w-1 bg-gray-200 rounded-full"></div>

            <div className="space-y-16 md:space-y-24 relative z-10">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Card Side */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-12 group perspective-1000">
                      <div className={`
                        relative w-full max-w-lg rounded-[2.5rem] p-1 
                        bg-gradient-to-b from-white/20 to-white/5 
                        shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2
                        ${step.shadow}
                      `}>
                         {/* Card Content Container */}
                         <div className={`
                           h-full rounded-[2.4rem] p-8 md:p-10 relative overflow-hidden
                           ${step.gradient}
                           border border-white/10
                         `}>
                            {/* Inner Glass Shine */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                            
                            {/* Step Number */}
                            <div className="absolute top-6 right-8 text-6xl font-serif font-black text-white/10 select-none">
                              {step.id}
                            </div>

                            <div className="relative z-10 text-white">
                               <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-white shadow-inner">
                                  <step.icon size={28} />
                               </div>
                               <h3 className="text-3xl font-serif font-bold mb-2 tracking-wide">{step.title}</h3>
                               <h4 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-6">{step.subtitle}</h4>
                               <p className="text-white/80 leading-relaxed text-base font-light">
                                 {step.description}
                               </p>
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Center Icon/Connector */}
                    <div className="relative flex-shrink-0 z-20">
                       <div className={`
                         w-16 h-16 rounded-full border-[6px] border-[#FDFBF7] shadow-xl 
                         flex items-center justify-center bg-white transition-transform duration-500 group-hover:scale-110
                       `}>
                          <div className={`w-3 h-3 rounded-full ${step.gradient}`}></div>
                       </div>
                    </div>

                    {/* Empty Side for Layout Balance */}
                    <div className="w-full md:w-1/2 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
};