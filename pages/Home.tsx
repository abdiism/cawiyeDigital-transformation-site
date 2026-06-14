import React from 'react';
import { Hero } from '../components/Hero';
import { CtaSection } from '../components/CtaSection';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { LogoMarquee, Testimonials } from '../components/SocialProof';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../lib/i18n';
import { ScrollReveal } from '../components/ScrollReveal';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero handles its own internal animations mostly, but we wrap for safety */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      
      {/* Social Proof: Logos */}
      <ScrollReveal delay={200}>
        <LogoMarquee />
      </ScrollReveal>

      {/* NEW CTA section after companies list as requested */}
      <ScrollReveal delay={300}>
        <CtaSection />
      </ScrollReveal>
      
      {/* Mini Services Preview */}
      <section className="px-4 text-center">
         <ScrollReveal>
            <h2 className="text-3xl font-serif mb-12">{t('bento.title')}</h2>
         </ScrollReveal>
         
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <ScrollReveal delay={100} width="100%">
               <div className="bg-brand-gray p-8 rounded-3xl text-left hover:bg-white border border-transparent hover:border-gray-200 transition-all group h-full">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-brand-green/20">1</div>
                  <h3 className="text-2xl font-bold mb-2">Sites & Apps</h3>
                  <p className="text-gray-600 mb-6">Full stack development using Next.js, Node, and Supabase.</p>
                  <Link to="/product" className="text-brand-green font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={16}/>
                  </Link>
               </div>
             </ScrollReveal>

             <ScrollReveal delay={200} width="100%">
               <div className="bg-brand-gray p-8 rounded-3xl text-left hover:bg-white border border-transparent hover:border-gray-200 transition-all group h-full">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-brand-red/20">2</div>
                  <h3 className="text-2xl font-bold mb-2">Data Analysis</h3>
                  <p className="text-gray-600 mb-6">Transform raw numbers into actionable business intelligence.</p>
                  <Link to="/product" className="text-brand-red font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Solutions <ArrowRight size={16}/>
                  </Link>
               </div>
             </ScrollReveal>
         </div>
      </section>

      {/* Timeline - Placed before Showcase */}
      <ScrollReveal>
        <ProcessTimeline />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectShowcase />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* Keeping the final CTA at bottom for conversion continuity */}
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </div>
  );
};