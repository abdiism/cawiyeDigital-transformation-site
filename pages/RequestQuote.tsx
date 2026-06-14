import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Check, ArrowRight, Calendar, DollarSign, PenTool } from 'lucide-react';

export const RequestQuote: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const services = [
    { id: 'web', label: 'Website / Platform' },
    { id: 'app', label: 'Mobile Application' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'consult', label: 'Tech Consulting' }
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest = {
      name, email, selectedServices, budget, timeline, details, date: new Date().toISOString()
    };

    // Save to simulated DB
    const current = JSON.parse(localStorage.getItem('cawiye_requests') || '[]');
    localStorage.setItem('cawiye_requests', JSON.stringify([newRequest, ...current]));

    alert("Thank you! Your request has been sent to our admin team. Check the Client Portal later for updates.");
    // Clear form
    setName(''); setEmail(''); setDetails(''); setBudget(''); setTimeline(''); setSelectedServices([]);
  };

  return (
    <div className="pt-10 pb-24">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-serif text-brand-black mb-6">Let's build your vision.</h1>
          <p className="text-xl text-gray-500">
            Tell us about your project. We'll analyze your requirements and get back to you with a tailored roadmap and quote within 24 hours.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto">
        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center text-sm">1</span>
                Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Business Email</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-100 w-full"></div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center text-sm">2</span>
                What do you need?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                      selectedServices.includes(service.id)
                        ? 'border-brand-green bg-green-50 text-brand-green font-semibold shadow-sm'
                        : 'border-gray-200 hover:border-brand-green/50 hover:bg-gray-50'
                    }`}
                  >
                    {service.label}
                    {selectedServices.includes(service.id) && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>

             <div className="h-px bg-gray-100 w-full"></div>

            <div className="space-y-6">
               <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center text-sm">3</span>
                Project Spec
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                   <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                     <DollarSign size={16} className="text-gray-400"/> Budget Range
                   </label>
                   <select 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none appearance-none"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                   >
                     <option value="" disabled>Select Budget</option>
                     <option value="1k-5k">$1,000 - $5,000</option>
                     <option value="5k-10k">$5,000 - $10,000</option>
                     <option value="10k-20k">$10,000 - $20,000</option>
                     <option value="20k+">$20,000+</option>
                   </select>
                </div>
                
                <div className="space-y-3">
                   <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                     <Calendar size={16} className="text-gray-400"/> Desired Timeline
                   </label>
                   <select 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none appearance-none"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                   >
                     <option value="" disabled>Select Timeline</option>
                     <option value="urgent">Urgent (&lt; 1 month)</option>
                     <option value="standard">Standard (1-3 months)</option>
                     <option value="relaxed">Flexible (3+ months)</option>
                   </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <PenTool size={16} className="text-gray-400"/> Describe your idea
                </label>
                <textarea 
                  required
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none"
                  placeholder="Tell us about the features, the target audience, and the problem you are solving..."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="w-full bg-brand-black text-white py-4 rounded-xl text-lg font-bold hover:bg-brand-green transition-colors shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2 group">
              Submit Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              By submitting, you agree to our privacy policy. We treat your intellectual property with strict confidentiality.
            </p>

          </form>
        </ScrollReveal>
      </div>
    </div>
  );
};