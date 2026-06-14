import React from 'react';
import { CommunitySection } from '../components/CommunitySection';
import { useTranslation } from '../lib/i18n';

export const Community: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-10 pb-24 animate-in fade-in duration-500">
       <div className="text-center max-w-3xl mx-auto px-4 mb-16">
         <h1 className="text-5xl font-serif mb-6 text-brand-black">{t('community.header.title')}</h1>
         <p className="text-xl text-gray-500">{t('community.header.sub')}</p>
      </div>
      <CommunitySection />
    </div>
  );
};