import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'so';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.product": "Product",
    "nav.portal": "Client Portal",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact Us",
    "nav.login": "Client Login",
    
    // Portal & Authentication
    "portal.login.title": "Welcome to Cawiye",
    "portal.login.subtitle": "Sign in to manage your projects and track progress.",
    "portal.login.email": "Email",
    "portal.login.password": "Password",
    "portal.login.button": "Continue",
    "portal.login.demo": "Demo Access",
    "portal.login.admin_demo": "Admin: admin@cawiye.com / admin123",
    "portal.login.client_demo": "Client: client@cawiye.com / client123",
    "portal.client.title": "Project Dashboard",
    "portal.admin.title": "Command Center",
    "portal.admin.requests": "Pending Requests",
    "portal.admin.messages": "Support Inbox",
    "portal.admin.projects": "Project Management",
    "portal.logout": "Sign out",
    
    // Portal Sidebar Modules
    "portal.menu.dashboard": "Dashboard",
    "portal.menu.contract": "Agreements",
    "portal.menu.welcome": "Welcome Doc",
    "portal.menu.invoice": "Invoices",
    "portal.menu.access": "Access & Assets",
    "portal.menu.kickoff": "Kickoff Call",
    "portal.menu.fulfillment": "Files & Assets",
    "portal.menu.reports": "Monthly Reports",
    "portal.menu.feedback": "Feedback",

    // Banner
    "banner.text": "Get 40% off Cawiye for Life! – Limited offer",
    "banner.link": "Learn more",

    // Hero
    "hero.subtitle": "Organize",
    "hero.title": "Structure That Adapts to Your Business",
    "hero.desc": "Choose any approach that fits your vision: we build sites, apps, and analytics that scale with your ambitions.",
    "hero.card1.title": "Webspaces",
    "hero.card1.desc": "Modern websites that capture your brand's essence",
    "hero.card2.title": "Apps & Tags",
    "hero.card2.desc": "Robust applications for complex workflows",
    "hero.card3.title": "Collections",
    "hero.card3.desc": "Structured data analysis for rich insights",
    
    // About
    "about.pre": "About Cawiye",
    "about.title": "Helping businesses make sense of the digital world.",
    "about.desc1": "Cawiye started with a simple mission: to make high-end technology accessible to every business owner.",
    "about.desc2": "We combine aesthetic design with robust engineering to deliver products that look good and work beautifully.",
    "about.stat1": "Projects Delivered",
    "about.stat2": "Client Satisfaction",

    // Bento
    "bento.pre": "What we do",
    "bento.title": "Solutions that doesn't feel like hard work.",
    
    // Pricing
    "pricing.pre": "Pricing",
    "pricing.title": "Tailored to your needs",
    "pricing.desc": "We analyze your business idea, technical requirements, and data needs to provide a custom solution.",
    "pricing.consultation": "Consultation",
    "pricing.consultation.desc": "Let's discuss your vision. We'll analyze the scope and architecture to give you a clear roadmap.",
    "pricing.custom": "Custom Project",
    "pricing.custom.desc": "Full-service design, development, and data analysis based on value delivered.",
    
    // FAQ
    "faq.pre": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How long does a typical project take?",
    "faq.a1": "Timeline depends on complexity. A simple website might take 2 weeks, while a full SaaS platform can take 2-4 months. We provide a detailed timeline after the discovery phase.",
    "faq.q2": "Do you provide ongoing support?",
    "faq.a2": "Yes, we offer maintenance packages to keep your software secure, up-to-date, and running smoothly after launch.",
    "faq.q3": "What is your pricing model?",
    "faq.a3": "We work primarily on a project-based fixed price so you know exactly what you are paying. For long-term consulting, we offer retainer agreements.",
    "faq.q4": "Do you handle hosting and domain setup?",
    "faq.a4": "Absolutely. We handle the technical infrastructure setup including cloud hosting (AWS/Vercel) and domain configuration so you don't have to.",

    // CTA
    "cta.title": "Make it unmistakably yours",
    "cta.desc": "Cawiye is the one tool you need for everything — effortless organization and a workspace that adapts to your needs.",
    "cta.button": "Start your project with Cawiye free",

    // Footer
    "footer.product": "Product",
    "footer.sites_apps": "Sites & Apps",
    "footer.data_analysis": "Data Analysis",
    "footer.consulting": "Consulting",
    "footer.community": "Community",
    "footer.our_network": "Our Network",
    "footer.support": "Support",
    "footer.help_center": "Help Center",
    "footer.get_quote": "Get a Quote",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.rights": "All rights reserved.",

    // Timeline
    "timeline.pre": "The Roadmap",
    "timeline.title": "From Concept to Reality",
    "timeline.desc": "A meticulous journey designed to transform abstract ideas into tangible business assets.",
    "timeline.step1.title": "Discovery",
    "timeline.step1.sub": "Understanding your vision",
    "timeline.step1.desc": "Deep dive into your business model and technical requirements.",
    "timeline.step2.title": "Strategy",
    "timeline.step2.sub": "Blueprinting the solution",
    "timeline.step2.desc": "Architect the user journey and select the perfect tech stack.",
    "timeline.step3.title": "Build",
    "timeline.step3.sub": "Crafting the code",
    "timeline.step3.desc": "Our engineers build your product using Next.js and Supabase.",
    "timeline.step4.title": "Launch",
    "timeline.step4.sub": "Going live",
    "timeline.step4.desc": "Deployment and setup of analytics for a smooth transition.",

    // Legal
    "legal.title": "Legal & Privacy",
    "legal.terms.title": "Terms of Service",
    "legal.terms.intro": "Welcome to Cawiye. By using our services, you agree to our terms.",
    "legal.terms.sec1.title": "1. Acceptance",
    "legal.terms.sec1.desc": "Usage implies full acceptance of these terms.",
    "legal.terms.sec2.title": "2. License",
    "legal.terms.sec2.desc": "Materials are for personal, non-commercial use only.",
    "legal.privacy.title": "Privacy Policy",
    "legal.privacy.intro": "We respect your privacy regarding information we collect.",
    "legal.privacy.sec1.title": "Data Collection",
    "legal.privacy.sec1.desc": "We collect data directly via forms and interactions.",
    "legal.privacy.sec2.title": "Usage",
    "legal.privacy.sec2.desc": "Data is used to maintain and improve our services.",

    "testimonials.pre": "Testimonials",
    "testimonials.title": "What our partners say.",

    "product.header.title": "Our Work & Technology",
    "product.header.sub": "Explore the digital solutions we've crafted for businesses.",
    "tech.pre": "Our Toolkit",
    "tech.title": "Powered by modern tech",

    // Features
    "feature.pre": "Capabilities",
    "feature.title": "Designed for scale",
    "feature.desc": "Every pixel and every line of code is optimized for performance, ensuring your business runs without interruption.",
    "feature.card.title": "Real-time Metrics",
    "feature.card.desc": "Monitor your business health with our custom analytics dashboards.",
    "feature.list.scalable": "Scalable Infrastructure",
    "feature.list.whiteboards": "Collaborative Design",
    "feature.list.fast": "Lightning Fast",
    "feature.list.publish": "Instant Updates",
    "community.header.title": "Join the Network",
    "community.header.sub": "Connect with forward-thinking businesses powered by Cawiye.",
    "community.pre": "Ecosystem",
    "community.title": "A growing community",
    "community.desc": "We don't just build software; we build relationships. Join a network of Somali businesses digitizing their operations.",
    "community.card1.title": "Knowledge Sharing",
    "community.card1.desc": "Access exclusive tech workshops and resources.",
    "community.card2.title": "Global Reach",
    "community.card2.desc": "Connect your local business to international markets.",
    "community.card3.title": "Local Support",
    "community.card3.desc": "24/7 support from a team that speaks your language."
  },
  so: {
    // Nav
    "nav.product": "Alaabta",
    "nav.portal": "Portalka Macmiilka",
    "nav.pricing": "Qiimaha",
    "nav.about": "Nagu Saabsan",
    "nav.contact": "Nala soo xiriir",
    "nav.login": "Galaangalka Macmiilka",

    // Portal & Authentication
    "portal.login.title": "Ku soo dhawoow Cawiye",
    "portal.login.subtitle": "Soo gal si aad u maamusho mashaariicdaada.",
    "portal.login.email": "Email",
    "portal.login.password": "Erayga sirta ah",
    "portal.login.button": "Sii wad",
    "portal.login.demo": "Gali Demo",
    "portal.login.admin_demo": "Maamul: admin@cawiye.com / admin123",
    "portal.login.client_demo": "Macmiil: client@cawiye.com / client123",
    "portal.client.title": "Dashboard-ka Mashruuca",
    "portal.admin.title": "Xarunta Maamulka",
    "portal.admin.requests": "Codsiyada Cusub",
    "portal.admin.messages": "Fariimaha Caawinta",
    "portal.admin.projects": "Maamulka Mashaariicda",
    "portal.logout": "Ka bax",
    
    // Portal Sidebar Modules
    "portal.menu.dashboard": "Dashboard",
    "portal.menu.contract": "Heshiisyada",
    "portal.menu.welcome": "Warqada Soo Dhoweynta",
    "portal.menu.invoice": "Biilasha",
    "portal.menu.access": "Helitaanka & Agabka",
    "portal.menu.kickoff": "Kulanka Bilowga",
    "portal.menu.fulfillment": "Faylasha",
    "portal.menu.reports": "Warbixinada",
    "portal.menu.feedback": "Ra'yiga",

    // Banner
    "banner.text": "Hel 40% qiimo dhimis Cawiye weligaa ah!",
    "banner.link": "Baro wax badan",

    // Hero
    "hero.subtitle": "Habaynta",
    "hero.title": "Qaabdhismeed la jaanqaadaya Ganacsigaaga",
    "hero.desc": "Waxaan dhisnaa shabakado, apps, iyo falanqayn la kordhaysa himilooyinkaaga.",
    "hero.card1.title": "Mareegaha",
    "hero.card1.desc": "Websaydhyo casri ah oo qurux badan",
    "hero.card2.title": "Codsiyada",
    "hero.card2.desc": "Codsiyo adag oo shaqada kuu fududeeya",
    "hero.card3.title": "Xog Ururinta",
    "hero.card3.desc": "Falanqaynta xogta aragtiyo qani ah",

    // About
    "about.pre": "Ku Saabsan Cawiye",
    "about.title": "Caawinta ganacsiyada dhanka dhijitaalka ah.",
    "about.desc1": "Cawiye wuxuu ku bilaabmay hadaf fudud: tignoolajiyada heerka sare ah in la helo.",
    "about.desc2": "Waxaan isku dhisnaa naqshad bilic leh iyo injineernimo adag.",
    "about.stat1": "Mashaariicda",
    "about.stat2": "Qanacsanaanta",

    // Bento
    "bento.pre": "Waxa aan qabano",
    "bento.title": "Xalal aan u dareemin sida shaqo adag.",

    // Pricing
    "pricing.pre": "Qiimaha",
    "pricing.title": "Ku habboon baahiyahaaga",
    "pricing.desc": "Waxaan falanqayneynaa fikradaada si aan u bixinno xal gaar ah.",
    "pricing.consultation": "La-tashi",
    "pricing.consultation.desc": "Aan ka wada hadalno aragtidaada iyo qaabdhismeedka.",
    "pricing.custom": "Mashruuc Gaar ah",
    "pricing.custom.desc": "Naqshad, horumarin, iyo falanqayn xogeed oo dhammaystiran.",

    // FAQ
    "faq.pre": "Su'aalaha",
    "faq.title": "Su'aalaha Inta Badan La Isweydiiyo",
    "faq.q1": "Muddo intee le'eg ayuu qaataa mashruuca caadiga ah?",
    "faq.a1": "Waqtigu wuxuu ku xiran yahay baaxadda. Mareeg fudud waxay qaadan kartaa 2 toddobaad, halka nidaam dhammaystiran uu qaadan karo 2-4 bilood. Waxaan ku siinaynaa waqti cad ka dib wada-hadalka.",
    "faq.q2": "Ma bixisaan taageero joogto ah?",
    "faq.a2": "Haa, waxaan bixinaa xirmooyin dayactir ah si aan u hubinno in software-kaagu yahay mid ammaan ah oo si fiican u shaqeynaya daahfurka ka dib.",
    "faq.q3": "Waa sidee nidaamka qiimaynta?",
    "faq.a3": "Inta badan waxaan ku shaqaynaa qiimo go'an oo mashruuc ku salaysan si aad u ogaato waxaad bixinayso. Mashaariicda muddada dheer, waxaan leenahay heshiisyo gaar ah.",
    "faq.q4": "Ma maamushaan hosting-ka iyo domain-ka?",
    "faq.a4": "Haa, gabi ahaanba. Waxaan maamulnaa kaabayaasha farsamada oo ay ku jiraan hosting-ka (AWS/Vercel) iyo habaynta domain-ka si aadan adigu uga walwalin.",

    // CTA
    "cta.title": "Ka dhig mid adiga kuu gaar ah",
    "cta.desc": "Cawiye waa qalabka kaliya ee aad u baahan tahay — abaabul fudud.",
    "cta.button": "Ku bilow mashruucaaga Cawiye bilaash",

    // Footer
    "footer.product": "Alaabta",
    "footer.sites_apps": "Mareegaha & Apps",
    "footer.data_analysis": "Falanqaynta Xogta",
    "footer.consulting": "La-talin",
    "footer.community": "Bulshada",
    "footer.our_network": "Shabakaddayada",
    "footer.support": "Caawinaad",
    "footer.help_center": "Xarunta Caawinaada",
    "footer.get_quote": "Hel Qiimayn",
    "footer.company": "Shirkadda",
    "footer.legal": "Sharci",
    "footer.rights": "Xuquuqda oo dhan way dhowran yihiin.",

    // Timeline
    "timeline.pre": "Khariidadda",
    "timeline.title": "Fikrad ilaa Xaqiiqo",
    "timeline.desc": "Safarka afarta tallaabo ee taxadarka leh.",
    "timeline.step1.title": "Sahamin",
    "timeline.step1.sub": "Fahmitaanka aragtidaada",
    "timeline.step1.desc": "Falanqaynta baahiyaha suuqa iyo farsamada.",
    "timeline.step2.title": "Istiraatiijiyad",
    "timeline.step2.sub": "Qorshaynta xalka",
    "timeline.step2.desc": "Naqshadaynta safarka isticmaalaha iyo xogta.",
    "timeline.step3.title": "Dhisid",
    "timeline.step3.sub": "Qorista koodhka",
    "timeline.step3.desc": "Injineeradayadu waxay dhisayaan alaabtaada.",
    "timeline.step4.title": "Daahfur",
    "timeline.step4.sub": "U soo bandhigida",
    "timeline.step4.desc": "Daahfurka iyo dejinta falanqaynta xogta.",

    // Legal
    "legal.title": "Sharci & Arrimaha Khaaska ah",
    "legal.terms.title": "Shuruudaha Adeegga",
    "legal.terms.intro": "Ku soo dhawoow Cawiye. Shuruudahan ayaynu ku heshiinaynaa.",
    "legal.terms.sec1.title": "1. Aqbalaadda",
    "legal.terms.sec1.desc": "Isticmaalku wuxuu ka dhigan yahay aqbalaad buuxda.",
    "legal.terms.sec2.title": "2. Shatiga",
    "legal.terms.sec2.desc": "Agabku waa uun isticmaalkaaga shakhsi ah.",
    "legal.privacy.title": "Siyaasadda Khaaska ah",
    "legal.privacy.intro": "Waxaan ixtiraamaynaa sirtada macluumaadka.",
    "legal.privacy.sec1.title": "Ururinta Xogta",
    "legal.privacy.sec1.desc": "Waxaan xogta ka ururinaa foomamka aad buuxisid.",
    "legal.privacy.sec2.title": "Isticmaalka",
    "legal.privacy.sec2.desc": "Xogta waxaa loo isticmaalaa horumarinta adeegyada.",

    "testimonials.pre": "Markhaatiyada",
    "testimonials.title": "Waxa ay lammaanayaashayadu leeyihiin.",

    "product.header.title": "Shaqadayada & Teknolojiyadda",
    "product.header.sub": "Sahami xalalka dhijitaalka ah ee aan u samaynay ganacsiyada.",
    "tech.pre": "Qalabkayaga",
    "tech.title": "Waxa xoojiyay teknoolojiyad casri ah",
    
    // Features
    "feature.pre": "Awoodaha",
    "feature.title": "Loogu talagalay in la kordhiyo",
    "feature.desc": "Koodh kasta oo aan qorno waa mid loo hagaajiyay waxqabadka, hubinta in ganacsigaagu u shaqeeyo si aan kala go 'lahayn.",
    "feature.card.title": "Xogta Tooska ah",
    "feature.card.desc": "La socoshada caafimaadka ganacsigaaga adoo adeegsanaya dashboards-ka gaarka ah.",
    "feature.list.scalable": "Kaabayaal La Kordhin Karo",
    "feature.list.whiteboards": "Naqshad Wadajir ah",
    "feature.list.fast": "Xawaare Sare",
    "feature.list.publish": "Cusbooneysiin Degdeg ah",
    "community.header.title": "Ku biir Shabakadda",
    "community.header.sub": "La xiriir ganacsiyada horumarsan ee ku shaqeeya Cawiye.",
    "community.pre": "Deegaanka",
    "community.title": "Bulsho koraysa",
    "community.desc": "Ma dhisno oo kaliya software; waxaan dhisnaa xiriirro. Ku biir shabakadda ganacsiyada Soomaaliyeed ee digitizing-gareynaya howlahooda.",
    "community.card1.title": "Wadaagista Aqoonta",
    "community.card1.desc": "Hel aqoon isweydaarsiyo farsamo iyo agab gaar ah.",
    "community.card2.title": "Gaaritaanka Caalamiga ah",
    "community.card2.desc": "Ku xir ganacsigaaga maxalliga ah suuqyada caalamiga ah.",
    "community.card3.title": "Taageero Maxalli ah",
    "community.card3.desc": "24/7 taageero ka socota koox ku hadasha luqaddaada."
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};