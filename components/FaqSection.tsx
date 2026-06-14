import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { ScrollReveal } from './ScrollReveal';

export const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-4">
       <ScrollReveal>
         <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">{t('faq.pre')}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-black mt-4">{t('faq.title')}</h2>
         </div>
       </ScrollReveal>
       
       <div className="space-y-4">
         {faqs.map((faq, index) => (
           <ScrollReveal key={index} delay={index * 100}>
             <div 
               className={`border border-gray-100 rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white shadow-lg' : 'bg-brand-gray/30 hover:bg-white'}`}
             >
               <button
                 className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
               >
                 <span className={`font-serif text-lg md:text-xl font-medium ${openIndex === index ? 'text-brand-green' : 'text-brand-black'}`}>
                   {faq.question}
                 </span>
                 <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                   {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                 </div>
               </button>
               
               <div 
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
               >
                 <p className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed">
                   {faq.answer}
                 </p>
               </div>
             </div>
           </ScrollReveal>
         ))}
       </div>
    </section>
  );
};