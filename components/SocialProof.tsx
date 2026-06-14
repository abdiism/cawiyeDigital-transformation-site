import React from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export const LogoMarquee: React.FC = () => {
  // Placeholder logos - in a real app these would be SVGs
  const clients = [
    "Dahabshiil", "Telesom", "Somcable", "DP World", "Hargeisa Water", "Ministry of Commerce", "Guul Group", "Shaqodoon"
  ];

  return (
    <div className="w-full py-12 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Trusted by industry leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span key={i} className="text-2xl md:text-3xl font-serif font-bold text-gray-300 hover:text-brand-green transition-colors cursor-default select-none">
              {client}
            </span>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    const testimonials = [
        {
            quote: "Cawiye didn't just build us an app; they completely digitized our remittance flow. The data analysis dashboard they built saved us thousands of hours.",
            author: "Ahmed Ali",
            role: "CTO, Fintech Somaliland",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            quote: "The attention to detail is unmatched. Our website traffic increased by 200% within a month of launching the new design.",
            author: "Sarah Hassan",
            role: "Marketing Director, Nordic House",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            quote: "Finally, a local agency that understands global standards. Professional, timely, and technically brilliant.",
            author: "Mohamed Abdi",
            role: "Founder, Horn Logistics",
            image: "https://randomuser.me/api/portraits/men/86.jpg"
        }
    ];

    return (
        <section className="py-24 bg-brand-gray/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                     <span className="text-xs font-bold tracking-widest uppercase text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        {t('testimonials.pre')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif mt-6 text-brand-black">
                        {t('testimonials.title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative">
                            <Quote className="w-10 h-10 text-brand-green/20 mb-6" />
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                                <div>
                                    <div className="font-bold text-brand-black">{t.author}</div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}