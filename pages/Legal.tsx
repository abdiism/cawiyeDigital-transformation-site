import React from 'react';
import { useTranslation } from '../lib/i18n';
import { ScrollReveal } from '../components/ScrollReveal';

export const Legal: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-10 pb-24 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl font-serif mb-12 text-brand-black">{t('legal.title')}</h1>
        </ScrollReveal>
        
        <div className="space-y-12">
          <ScrollReveal delay={100}>
            <section>
              <h2 className="text-2xl font-bold mb-4">{t('legal.terms.title')}</h2>
              <div className="prose prose-gray text-gray-600 space-y-4">
                <p>{t('legal.terms.intro')}</p>
                <p>
                  <strong>{t('legal.terms.sec1.title')}</strong><br/>
                  {t('legal.terms.sec1.desc')}
                </p>
                <p>
                  <strong>{t('legal.terms.sec2.title')}</strong><br/>
                  {t('legal.terms.sec2.desc')}
                </p>
              </div>
            </section>
          </ScrollReveal>

          <div className="h-px bg-gray-200 w-full"></div>

          <ScrollReveal delay={200}>
            <section>
              <h2 className="text-2xl font-bold mb-4">{t('legal.privacy.title')}</h2>
               <div className="prose prose-gray text-gray-600 space-y-4">
                <p>{t('legal.privacy.intro')}</p>
                <p>
                  <strong>{t('legal.privacy.sec1.title')}</strong><br/>
                  {t('legal.privacy.sec1.desc')}
                </p>
                <p>
                  <strong>{t('legal.privacy.sec2.title')}</strong><br/>
                  {t('legal.privacy.sec2.desc')}
                </p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};