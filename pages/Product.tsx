import React from 'react';
import { BentoGrid } from '../components/BentoGrid';
import { FeatureSection } from '../components/FeatureSection';
import { CtaSection } from '../components/CtaSection';
import { TechStack } from '../components/TechStack';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { useTranslation } from '../lib/i18n';

export const Product: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-24 pb-24">
      {/* Hero / Portfolio Title */}
      <ScrollReveal>
        <div className="pt-10 text-center max-w-3xl mx-auto px-4">
           <h1 className="text-5xl font-serif mb-6 text-brand-black">{t('product.header.title')}</h1>
           <p className="text-xl text-gray-500">{t('product.header.sub')}</p>
        </div>
      </ScrollReveal>

      {/* Projects Showcase - Now first as requested */}
      <ScrollReveal>
         <ProjectShowcase hideLink={true} />
      </ScrollReveal>
      
      {/* Tech Stack */}
      <TechStack />

      {/* Bento Grid Services */}
      <ScrollReveal>
        <BentoGrid />
      </ScrollReveal>
      
      {/* Detailed Features */}
      <ScrollReveal>
        <FeatureSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </div>
  );
};