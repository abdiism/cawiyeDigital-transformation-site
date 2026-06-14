import React from 'react';
import { Database, Server, Code, Layout, Smartphone, Globe, Cloud, Lock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTranslation } from '../lib/i18n';

export const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const techs = [
    { name: "Next.js 14", icon: Globe },
    { name: "TypeScript", icon: Code },
    { name: "Supabase", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Node.js", icon: Server },
    { name: "Tailwind CSS", icon: Layout },
    { name: "React Native", icon: Smartphone },
    { name: "AWS", icon: Cloud },
    { name: "Security", icon: Lock },
  ];

  return (
    <section className="py-20 bg-brand-black text-white overflow-hidden">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">{t('tech.pre')}</span>
           <h2 className="text-3xl md:text-4xl font-serif mt-4">{t('tech.title')}</h2>
        </div>
      </ScrollReveal>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-8">
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-brand-green hover:border-brand-green transition-colors duration-300 cursor-default">
               <tech.icon size={18} className="text-gray-300" />
               <span className="text-lg font-medium text-gray-200">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-brand-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-brand-black to-transparent z-10"></div>
      </div>
    </section>
  );
};