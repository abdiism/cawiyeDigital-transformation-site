import React from 'react';
import { Smartphone, Monitor, Briefcase, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export const BentoGrid: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16 px-4">
        <span className="font-serif text-lg md:text-xl italic text-gray-500">{t('bento.pre')}</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-serif text-brand-black">
          {t('bento.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Card 1: Large Green Card */}
        <div className="md:col-span-1 md:row-span-2 bg-brand-green rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300 text-white min-h-[300px]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-xs font-bold uppercase tracking-wider text-white/80">Data Analysis</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-4">
              Insights that <br />drive growth.
            </h3>
            <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
              Keep your ideas and tasks together. We embed analytics directly into your workflow.
            </p>
          </div>
          
          <button className="mt-8 bg-white/10 hover:bg-white/20 transition-colors self-start px-6 py-3 rounded-full font-semibold text-sm border border-white/20">
            Learn more
          </button>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
        </div>

        {/* Card 2: App Development */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-50 rounded-xl">
              <Smartphone className="w-6 h-6 text-brand-black" />
            </div>
            <span className="font-semibold text-lg text-brand-black">Mobile Apps</span>
          </div>
          
          <div className="bg-brand-red/10 rounded-2xl p-6 mb-4 flex-grow flex items-center justify-center min-h-[120px]">
             <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1">17 Sep</div>
                <div className="text-brand-red font-medium">Today</div>
             </div>
          </div>
           <p className="text-gray-500 text-sm">Native performance for iOS and Android tailored to your business logic.</p>
        </div>

        {/* Card 3: Project Mgmt */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-brand-black" />
            </div>
            <span className="font-semibold text-lg text-brand-black">Project Mgmt</span>
          </div>

          <div className="space-y-3">
             {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-default">
                   <div className={`w-5 h-5 rounded border ${i === 1 ? 'bg-brand-green border-brand-green text-white flex items-center justify-center' : 'border-gray-300'}`}>
                      {i === 1 && <div className="w-3 h-3">✓</div>}
                   </div>
                   <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                </div>
             ))}
             <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                Add Task
             </div>
          </div>
        </div>

        {/* Card 4: Web Development */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-50 rounded-xl">
              <Monitor className="w-6 h-6 text-brand-black" />
            </div>
            <span className="font-semibold text-lg text-brand-black">Web Sites</span>
          </div>
          
          <div className="border border-gray-100 rounded-xl p-4 mb-2 shadow-sm bg-gray-50/50">
             <div className="font-serif font-bold text-xl mb-1 text-brand-black">Today</div>
             <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Reviewing the new landing page designs.
             </p>
          </div>
        </div>

        {/* Card 5: Consulting */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-50 rounded-xl">
              <Briefcase className="w-6 h-6 text-brand-black" />
            </div>
            <span className="font-semibold text-lg text-brand-black">Consulting</span>
          </div>
          
           <div className="flex flex-col gap-2 mt-auto">
             <div className="text-sm text-gray-600">
               <span className="text-brand-red font-bold text-lg">12:30</span> Final trip details
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};