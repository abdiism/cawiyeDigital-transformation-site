import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = { name, email, message, date: new Date().toISOString() };
    
    const current = JSON.parse(localStorage.getItem('cawiye_messages') || '[]');
    localStorage.setItem('cawiye_messages', JSON.stringify([newMessage, ...current]));
    
    alert("Message sent! Our team will get back to you shortly.");
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <div className="pt-10 pb-24 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-6 text-brand-black">Help Center</h1>
          <p className="text-xl text-gray-500">We're here to help you get the most out of Cawiye.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-semibold">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">support@cawiye.com</p>
                  <p className="text-gray-500 text-sm mt-1">Typical response time: 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+252 63 444 4444</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 5pm EAT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-gray-100 p-3 rounded-full text-gray-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-gray-600">Hargeisa, Somaliland</p>
                  <p className="text-gray-600">Main Road, Digfeer Building, Floor 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
             <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                   <label className="block text-sm font-semibold mb-2">Name</label>
                   <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="Your name" />
                </div>
                <div>
                   <label className="block text-sm font-semibold mb-2">Email</label>
                   <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="you@company.com" />
                </div>
                <div>
                   <label className="block text-sm font-semibold mb-2">Message</label>
                   <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors">
                   Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>
  );
};