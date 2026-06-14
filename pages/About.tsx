import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { CtaSection } from '../components/CtaSection';

export const About: React.FC = () => {
  return (
    <div className="pt-10 pb-24 animate-in fade-in duration-500">
      <AboutSection />
      <CtaSection />
    </div>
  );
};