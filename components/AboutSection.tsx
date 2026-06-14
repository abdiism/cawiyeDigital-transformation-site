import React, { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { useTranslation } from '../lib/i18n';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(end * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 scroll-mt-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="space-y-6">
             <span className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('about.pre')}</span>
             <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight">
               {t('about.title')}
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed">
               {t('about.desc1')}
             </p>
             <p className="text-lg text-gray-600 leading-relaxed">
               {t('about.desc2')}
             </p>
             <div className="pt-4 flex gap-8">
                <div>
                   <div className="text-3xl font-serif font-bold text-brand-green">
                     <AnimatedCounter end={50} suffix="+" />
                   </div>
                   <div className="text-sm text-gray-500 mt-1">{t('about.stat1')}</div>
                </div>
                <div>
                   <div className="text-3xl font-serif font-bold text-brand-black">
                     <AnimatedCounter end={98} suffix="%" />
                   </div>
                   <div className="text-sm text-gray-500 mt-1">{t('about.stat2')}</div>
                </div>
             </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="relative">
             <div className="absolute inset-0 bg-brand-green rounded-full blur-3xl opacity-10 transform translate-x-10 translate-y-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
               alt="Team working" 
               className="relative z-10 rounded-[2.5rem] shadow-xl w-full object-cover aspect-square border border-gray-100"
             />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};