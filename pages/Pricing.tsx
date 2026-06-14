import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { CtaSection } from '../components/CtaSection';

export const Pricing: React.FC = () => {
  return (
    <div className="pt-10 pb-24">
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      
      <FaqSection />
      
      <ScrollReveal>
         <CtaSection />
      </ScrollReveal>
    </div>
  );
};