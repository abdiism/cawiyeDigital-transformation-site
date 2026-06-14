import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export const CommunitySection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="community" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F5F5F7] rounded-[3rem] p-10 md:p-20 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">{t('community.pre')}</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">
            {t('community.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            {t('community.desc')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Users className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('community.card1.title')}</h3>
              <p className="text-gray-500 text-sm">{t('community.card1.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Globe className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('community.card2.title')}</h3>
              <p className="text-gray-500 text-sm">{t('community.card2.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Heart className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('community.card3.title')}</h3>
              <p className="text-gray-500 text-sm">{t('community.card3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};