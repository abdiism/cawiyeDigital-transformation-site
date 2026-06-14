import React, { useState, useEffect } from 'react';
import { useTranslation } from '../lib/i18n';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Clock, CheckCircle, Package, User, Mail, MessageSquare, 
  ClipboardList, LogOut, ShieldCheck, ArrowRight, Eye, EyeOff,
  LayoutDashboard, Settings, Bell, Briefcase, ArrowLeft,
  FileText, Star, CreditCard, Video, Key, Folder, BookOpen,
  Download, BarChart2, Calendar, FileCheck, Globe
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

const STORAGE_KEYS = {
  REQUESTS: 'cawiye_requests',
  MESSAGES: 'cawiye_messages',
  PROJECT_STATUS: 'cawiye_project_status'
};

// -- TYPES --
type PortalView = 'dashboard' | 'contract' | 'welcome' | 'invoice' | 'access' | 'kickoff' | 'fulfillment' | 'reports' | 'feedback';

export const Portal: React.FC = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Client Navigation State
  const [activeView, setActiveView] = useState<PortalView>('dashboard');
  
  // Data state
  const [requests, setRequests] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [projectStatus, setProjectStatus] = useState({
    name: "E-Commerce Solution v2.0",
    progress: 45,
    daysRemaining: 14,
    milestones: [
      { label: 'Discovery', completed: true },
      { label: 'Architecture', completed: true },
      { label: 'Frontend Dev', completed: false },
      { label: 'Integration', completed: false }
    ]
  });

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem(STORAGE_KEYS.REQUESTS) || '[]');
    const savedMessages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    const savedStatus = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECT_STATUS) || JSON.stringify(projectStatus));
    
    setRequests(savedRequests);
    setMessages(savedMessages);
    setProjectStatus(savedStatus);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'admin@cawiye.com' && password === 'admin123') {
        setIsLoggedIn(true);
        setIsAdmin(true);
      } else if (email === 'client@cawiye.com' && password === 'client123') {
        setIsLoggedIn(true);
        setIsAdmin(false);
        setActiveView('dashboard');
      } else {
        alert("Invalid credentials.\n\nAdmin: admin@cawiye.com / admin123\nClient: client@cawiye.com / client123");
      }
    }, 1000);
  };

  const updateProgress = (newVal: number) => {
    const nextStatus = { ...projectStatus, progress: newVal };
    setProjectStatus(nextStatus);
    localStorage.setItem(STORAGE_KEYS.PROJECT_STATUS, JSON.stringify(nextStatus));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setEmail('');
    setPassword('');
  };

  // --- Auth View ---
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-gray flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 p-3 bg-white rounded-full shadow-lg border border-gray-100 text-gray-500 hover:text-brand-black hover:scale-110 transition-all z-50 group"
          aria-label="Back to Home"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </Link>

        <ScrollReveal>
          <div className="w-full max-w-[450px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white p-8 md:p-12 relative">
            <div className="flex justify-center mb-8">
               <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg p-4 border border-gray-100">
                  <Logo className="w-full h-full" />
               </div>
            </div>
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-serif font-bold text-brand-black mb-2">{t('portal.login.title')}</h1>
              <p className="text-gray-500 text-sm leading-relaxed px-4">{t('portal.login.subtitle')}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">{t('portal.login.email')}</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors" size={18} />
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all text-sm font-medium" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{t('portal.login.password')}</label>
                  <button type="button" className="text-[10px] font-bold text-brand-green hover:underline">Forgot?</button>
                </div>
                <div className="relative group">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all text-sm font-medium" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-black transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button 
                disabled={isLoading}
                className="w-full bg-brand-black text-white py-4 rounded-2xl font-bold hover:bg-brand-green transition-all shadow-xl shadow-brand-green/10 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    {t('portal.login.button')}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-100">
               <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">{t('portal.login.demo')}</span>
                  <div className="flex flex-col gap-2">
                     <button 
                       onClick={() => { setEmail('admin@cawiye.com'); setPassword('admin123'); }}
                       className="text-left text-xs text-gray-600 hover:text-brand-green transition-colors font-medium flex items-center gap-2"
                     >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                        {t('portal.login.admin_demo')}
                     </button>
                     <button 
                       onClick={() => { setEmail('client@cawiye.com'); setPassword('client123'); }}
                       className="text-left text-xs text-gray-600 hover:text-brand-green transition-colors font-medium flex items-center gap-2"
                     >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                        {t('portal.login.client_demo')}
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  // --- Admin Dashboard (Unchanged logic) ---
  if (isAdmin) {
    return (
      <div className="pb-24 animate-in fade-in slide-in-bottom duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
                <LayoutDashboard size={28} />
             </div>
             <div>
                <h1 className="text-4xl font-serif text-brand-black">{t('portal.admin.title')}</h1>
                <p className="text-sm text-gray-500 font-medium">Manage your agency operations</p>
             </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 text-sm font-bold bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 hover:text-brand-red transition-all shadow-sm"
          >
            <LogOut size={18} /> {t('portal.logout')}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Requests List */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif font-bold flex items-center gap-3 text-brand-black">
                <ClipboardList className="text-brand-green" /> {t('portal.admin.requests')}
              </h3>
              <span className="bg-green-50 text-brand-green text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{requests.length} New</span>
            </div>
            
            <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar pr-2">
              {requests.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                   <p className="text-gray-400 italic">No project requests found.</p>
                </div>
              ) : (
                requests.map((req, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green block mb-1">Project Request</span>
                        <h4 className="font-serif text-xl font-bold text-brand-black">{req.name}</h4>
                      </div>
                      <div className="flex gap-2">
                         <span className="text-[10px] font-bold bg-white border border-gray-200 px-3 py-1.5 rounded-full uppercase">{req.budget}</span>
                         <span className="text-[10px] font-bold bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-full uppercase">{req.timeline}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200/50">
                       <span className="flex items-center gap-1.5"><Mail size={12}/> {req.email}</span>
                       <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                       <span>Just now</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{req.details}"</p>
                    <div className="mt-6 flex gap-3">
                       <button className="bg-brand-black text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-brand-green transition-colors">Start Project</button>
                       <button className="bg-white border border-gray-200 text-brand-black px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors">Dismiss</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-brand-red" /> {t('portal.admin.messages')}
              </h3>
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <p className="text-gray-400 italic text-center py-10 text-sm">No active messages.</p>
                ) : (
                  messages.map((msg, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group cursor-pointer hover:bg-white transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-brand-black text-sm">{msg.name}</span>
                        <span className="text-[10px] text-gray-400">12:30 PM</span>
                      </div>
                      <p className="text-[11px] text-gray-500 line-clamp-2 italic">"{msg.message}"</p>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Project Controller */}
            <div className="bg-brand-black text-white p-8 rounded-[2.5rem] shadow-2xl">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                     <Settings size={20} className="text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold">{t('portal.admin.projects')}</h3>
               </div>
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                       <span>Progress</span>
                       <span className="text-brand-green">{projectStatus.progress}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={projectStatus.progress} 
                      onChange={(e) => updateProgress(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-green"
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Client Portal Navigation & Layout ---
  const menuItems = [
    { id: 'contract', icon: FileCheck, label: t('portal.menu.contract') },
    { id: 'welcome', icon: BookOpen, label: t('portal.menu.welcome') },
    { id: 'invoice', icon: CreditCard, label: t('portal.menu.invoice') },
    { id: 'access', icon: Key, label: t('portal.menu.access') },
    { id: 'kickoff', icon: Video, label: t('portal.menu.kickoff') },
    { id: 'dashboard', icon: LayoutDashboard, label: t('portal.menu.dashboard') }, // Centerpiece
    { id: 'fulfillment', icon: Folder, label: t('portal.menu.fulfillment') },
    { id: 'reports', icon: BarChart2, label: t('portal.menu.reports') },
    { id: 'feedback', icon: Star, label: t('portal.menu.feedback') },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'contract':
        return (
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm min-h-[auto] md:min-h-[600px] flex flex-col items-center justify-center text-center">
             <div className="max-w-xl w-full">
                <FileCheck size={48} className="mx-auto text-brand-green mb-6 md:w-16 md:h-16" />
                <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">Services Agreement</h2>
                <p className="text-gray-500 mb-8 text-sm md:text-base">Please review and sign the digital contract to commence the project.</p>
                
                <div className="bg-gray-50 p-6 md:p-8 rounded-3xl text-left mb-8 border border-gray-200">
                   <h3 className="font-bold text-base md:text-lg mb-4">1. Scope of Services</h3>
                   <p className="text-xs md:text-sm text-gray-600 mb-4">The Agency agrees to provide the Client with [Web Development, UI/UX Design] services...</p>
                   <h3 className="font-bold text-base md:text-lg mb-4">2. Payment Terms</h3>
                   <p className="text-xs md:text-sm text-gray-600">Total budget of $5,000 paid in two installments...</p>
                </div>

                <div className="flex flex-col gap-4">
                   <div className="border-b-2 border-gray-300 pb-2">
                      <input type="text" placeholder="Type full name to sign" className="w-full text-center text-xl md:text-2xl font-serif focus:outline-none bg-transparent" />
                   </div>
                   <button onClick={() => alert("Contract Signed!")} className="bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-brand-green transition-colors w-full">
                      Sign & Accept
                   </button>
                </div>
             </div>
          </div>
        );
      case 'welcome':
        return (
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-brand-green/10"></div>
             <div className="relative z-10 max-w-2xl mx-auto mt-12 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-green text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                   <BookOpen size={32} className="md:w-10 md:h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-6">Welcome to Cawiye!</h2>
                <p className="text-base md:text-lg text-gray-600 mb-10">We are thrilled to partner with you. This portal is your command center for everything related to your project.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                   <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="font-bold mb-2">Communication</h4>
                      <p className="text-sm text-gray-500">We use Slack for daily comms and this portal for approvals.</p>
                   </div>
                   <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="font-bold mb-2">Office Hours</h4>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM - 5PM EAT. Expect replies within 2 hours.</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'invoice':
        return (
          <div className="space-y-6">
             <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div>
                   <h2 className="text-3xl font-serif text-brand-black">Invoices</h2>
                   <p className="text-gray-500 text-sm">Manage your payments and billing history.</p>
                </div>
                <div className="bg-brand-green/10 px-6 py-3 rounded-full text-brand-green font-bold text-sm md:text-base whitespace-nowrap w-full md:w-auto text-center">
                   Total Due: $2,500.00
                </div>
             </div>

             <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-sm">
                
                {/* Desktop Table */}
                <div className="hidden md:block w-full overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b border-gray-100 text-xs uppercase tracking-widest text-gray-400">
                             <th className="pb-4 font-bold">Invoice ID</th>
                             <th className="pb-4 font-bold">Date</th>
                             <th className="pb-4 font-bold">Amount</th>
                             <th className="pb-4 font-bold">Status</th>
                             <th className="pb-4 font-bold text-right">Action</th>
                          </tr>
                       </thead>
                       <tbody className="text-sm">
                          <tr className="group">
                             <td className="py-6 font-medium">#INV-2024-001</td>
                             <td className="py-6 text-gray-500">Oct 10, 2024</td>
                             <td className="py-6 font-bold">$2,500.00</td>
                             <td className="py-6"><span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-bold">Unpaid</span></td>
                             <td className="py-6 text-right">
                                <button className="bg-brand-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-brand-green transition-colors">Pay Now</button>
                             </td>
                          </tr>
                          <tr className="group border-t border-gray-50">
                             <td className="py-6 font-medium">#INV-2024-002</td>
                             <td className="py-6 text-gray-500">Nov 10, 2024</td>
                             <td className="py-6 font-bold">$2,500.00</td>
                             <td className="py-6"><span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-xs font-bold">Scheduled</span></td>
                             <td className="py-6 text-right text-gray-400 font-bold text-xs">Locked</td>
                          </tr>
                       </tbody>
                    </table>
                </div>

                {/* Mobile Cards (No Scrolling) */}
                <div className="md:hidden space-y-4">
                     {/* Invoice Item 1 */}
                     <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                           <div>
                              <div className="font-bold text-brand-black text-lg">#INV-2024-001</div>
                              <div className="text-xs text-gray-500 font-medium mt-1">Due: Oct 10, 2024</div>
                           </div>
                           <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Unpaid</span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                           <div className="flex flex-col">
                              <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Amount</span>
                              <span className="font-serif text-2xl font-bold text-brand-black">$2,500.00</span>
                           </div>
                           <button className="bg-brand-black text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-brand-green transition-colors shadow-lg shadow-brand-black/10">
                              Pay Now
                           </button>
                        </div>
                     </div>

                     {/* Invoice Item 2 */}
                     <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col gap-4 opacity-70">
                        <div className="flex justify-between items-start">
                           <div>
                              <div className="font-bold text-brand-black text-lg">#INV-2024-002</div>
                              <div className="text-xs text-gray-500 font-medium mt-1">Due: Nov 10, 2024</div>
                           </div>
                           <span className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Scheduled</span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                           <div className="flex flex-col">
                              <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Amount</span>
                              <span className="font-serif text-2xl font-bold text-brand-black">$2,500.00</span>
                           </div>
                           <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div> Locked
                           </span>
                        </div>
                     </div>
                </div>

             </div>
          </div>
        );
      case 'access':
        return (
          <div className="bg-brand-black text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl min-h-[auto] md:min-h-[600px] flex flex-col items-center justify-center">
             <Key size={48} className="mb-6 text-brand-green" />
             <h2 className="text-2xl md:text-3xl font-serif mb-2 text-center">Secure Access Vault</h2>
             <p className="text-gray-400 mb-8 max-w-md text-center text-sm md:text-base">Securely share your credentials and assets. End-to-end encrypted.</p>
             
             <div className="w-full max-w-lg space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                   <h4 className="font-bold mb-4 flex items-center gap-2 text-sm md:text-base"><Globe size={16}/> Domain Provider</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Provider (e.g. GoDaddy)" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 md:py-2 text-sm w-full" />
                      <input type="text" placeholder="Username" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 md:py-2 text-sm w-full" />
                      <input type="password" placeholder="Password" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 md:py-2 text-sm w-full md:col-span-2" />
                   </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                   <h4 className="font-bold mb-4 flex items-center gap-2 text-sm md:text-base"><Folder size={16}/> Branding Assets</h4>
                   <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Drop Logo / Fonts Here</p>
                   </div>
                </div>

                <button className="w-full bg-brand-green text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors">
                   Encrypt & Send
                </button>
             </div>
          </div>
        );
      case 'kickoff':
        return (
           <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm min-h-[auto] md:min-h-[600px] flex flex-col items-center justify-center">
              <div className="flex gap-4 mb-8">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><Video size={28} className="md:w-8 md:h-8"/></div>
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-lg"><Calendar size={28} className="md:w-8 md:h-8"/></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-4 text-center">Book Kickoff Call</h2>
              <p className="text-gray-500 mb-8 max-w-md text-center text-sm md:text-base">Select a time for our initial strategy session via Google Meet.</p>
              
              {/* Mock Calendar Grid */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 w-full max-w-md">
                 <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-lg">October 2024</span>
                    <div className="flex gap-2">
                       <button className="p-1 rounded hover:bg-gray-200"><ArrowLeft size={16}/></button>
                       <button className="p-1 rounded hover:bg-gray-200"><ArrowRight size={16}/></button>
                    </div>
                 </div>
                 <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-sm mb-2 font-bold text-gray-400">
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                 </div>
                 <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-sm font-medium">
                    <span className="text-gray-300 py-1">29</span><span className="text-gray-300 py-1">30</span><span className="py-1">1</span><span className="py-1">2</span><span className="py-1">3</span><span className="py-1">4</span><span className="py-1">5</span>
                    <span className="py-1">6</span><span className="py-1">7</span><span className="bg-brand-black text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto shadow-lg">8</span><span className="py-1">9</span><span className="py-1">10</span><span className="py-1">11</span><span className="py-1">12</span>
                 </div>
                 <div className="mt-6 space-y-2">
                    <button className="w-full bg-white border border-gray-200 py-3 rounded-xl text-sm font-bold hover:border-brand-green hover:text-brand-green">10:00 AM - 11:00 AM</button>
                    <button className="w-full bg-white border border-gray-200 py-3 rounded-xl text-sm font-bold hover:border-brand-green hover:text-brand-green">02:00 PM - 03:00 PM</button>
                 </div>
              </div>
           </div>
        );
      case 'fulfillment':
         return (
            <div className="space-y-6">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-3xl font-serif text-brand-black">Project Files</h2>
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-black text-white px-6 py-3 rounded-full text-sm font-bold"><Download size={16}/> Download All</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['Brand Guidelines.pdf', 'Logo Pack.zip', 'Wireframes_v1.fig', 'Content_Copy.docx'].map((file, i) => (
                     <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group cursor-pointer">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                           <Folder size={24}/>
                        </div>
                        <h4 className="font-bold text-brand-black mb-1">{file}</h4>
                        <p className="text-xs text-gray-400">Added 2 days ago</p>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'reports':
         return (
            <div className="bg-[#0F1115] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl min-h-[auto] md:min-h-[700px]">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                  <h2 className="text-3xl font-serif">Campaign Metrics</h2>
                  <div className="flex gap-2 text-xs font-bold bg-white/10 p-1 rounded-lg">
                     <button className="bg-brand-green px-4 py-2 rounded-md">Performance</button>
                     <button className="px-4 py-2 hover:bg-white/5 rounded-md text-gray-400">Sources</button>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Metric Card 1 */}
                  <div className="bg-[#1A1D24] p-6 rounded-2xl border border-white/5">
                     <div className="flex justify-between mb-4">
                        <span className="text-gray-400 text-sm font-medium">Leads Generated</span>
                        <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold">On Track</span>
                     </div>
                     <div className="text-4xl font-bold mb-2">180</div>
                     <div className="w-full bg-black h-1 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-brand-green"></div>
                     </div>
                     <p className="text-xs text-gray-500 mt-2">Target: 200</p>
                  </div>

                  {/* Metric Card 2 */}
                   <div className="bg-[#1A1D24] p-6 rounded-2xl border border-white/5">
                     <div className="flex justify-between mb-4">
                        <span className="text-gray-400 text-sm font-medium">Conversion Rate</span>
                        <span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Below Target</span>
                     </div>
                     <div className="text-4xl font-bold mb-2">2.4%</div>
                     <div className="w-full bg-black h-1 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-red-400"></div>
                     </div>
                     <p className="text-xs text-gray-500 mt-2">Target: 5.0%</p>
                  </div>

                  {/* Metric Card 3 */}
                   <div className="bg-[#1A1D24] p-6 rounded-2xl border border-white/5">
                     <div className="flex justify-between mb-4">
                        <span className="text-gray-400 text-sm font-medium">Click Rate</span>
                        <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Exceeding</span>
                     </div>
                     <div className="text-4xl font-bold mb-2">12.8%</div>
                     <div className="w-full bg-black h-1 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-brand-green"></div>
                     </div>
                     <p className="text-xs text-gray-500 mt-2">Target: 8.0%</p>
                  </div>
               </div>

               <div className="mt-8 bg-[#1A1D24] rounded-2xl p-8 border border-white/5 h-64 flex items-center justify-center">
                  <span className="text-gray-600 font-serif italic text-center">Interactive Graph Visualization Placeholder</span>
               </div>
            </div>
         );
      case 'feedback':
         return (
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm min-h-[auto] md:min-h-[600px] flex flex-col items-center justify-center text-center">
               <Star size={48} className="text-yellow-400 mb-6 fill-yellow-400" />
               <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">How did we do?</h2>
               <p className="text-gray-500 mb-8 max-w-md text-sm md:text-base">Your feedback helps us improve. Please rate your experience with Cawiye.</p>
               
               <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
                  {[1,2,3,4,5].map(i => (
                     <button key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 border border-gray-200 hover:border-brand-green hover:bg-green-50 text-lg md:text-xl font-bold text-gray-400 hover:text-brand-green transition-all">{i}</button>
                  ))}
               </div>
               
               <textarea className="w-full max-w-lg bg-gray-50 border border-gray-200 rounded-2xl p-4 min-h-[150px] mb-6 focus:outline-none focus:border-brand-green" placeholder="Tell us what you liked or what we can improve..."></textarea>
               
               <button className="bg-brand-black text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-green transition-colors w-full md:w-auto">Submit Feedback</button>
            </div>
         );
      case 'dashboard':
      default:
        // Original Client Dashboard Logic
        return (
          <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in slide-in-bottom duration-500">
            {/* Main Status Card */}
            <div className="lg:col-span-2 bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-10 md:opacity-100 pointer-events-none">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[8px] md:border-[10px] border-gray-50 flex items-center justify-center relative">
                     <svg className="w-full h-full transform -rotate-90">
                        <circle 
                          cx="50%" cy="50%" r="45%" 
                          stroke="currentColor" strokeWidth="10" fill="transparent" 
                          className="text-brand-green"
                          style={{ strokeDasharray: 339, strokeDashoffset: 339 * (1 - projectStatus.progress/100) }}
                        />
                     </svg>
                     <span className="absolute text-xl md:text-2xl font-serif font-bold text-brand-black">{projectStatus.progress}%</span>
                  </div>
               </div>

               <div className="relative z-10 max-w-lg">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green bg-green-50 px-3 py-1 rounded-full border border-green-100">In Development</span>
                 <h2 className="text-3xl md:text-4xl font-serif mt-6 mb-2 text-brand-black">{projectStatus.name}</h2>
                 <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">Crafting a premium shopping experience for your brand. Our engineers are currently finalizing the checkout integration.</p>
                 
                 <div className="space-y-5">
                    {projectStatus.milestones.map((m, i) => (
                      <div key={i} className="flex items-center gap-5 group/item">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${m.completed ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20 scale-110' : 'bg-gray-100 text-gray-300'}`}>
                          {m.completed ? <CheckCircle size={18} /> : <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
                        </div>
                        <div className="flex-1">
                           <span className={`text-sm md:text-base font-serif font-bold transition-colors ${m.completed ? 'text-brand-black' : 'text-gray-300'}`}>{m.label}</span>
                           {m.completed && <span className="ml-2 text-[10px] font-bold text-brand-green uppercase tracking-widest">Done</span>}
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Action Sidebar */}
            <div className="space-y-8">
               <div className="bg-brand-black text-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl"></div>
                  <Clock className="text-brand-red mb-6" size={32} />
                  <h4 className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-2">Time Remaining</h4>
                  <div className="text-4xl md:text-6xl font-serif font-bold mt-2">{projectStatus.daysRemaining} <span className="text-xl md:text-2xl opacity-40">Days</span></div>
                  <div className="mt-8 pt-8 border-t border-white/10">
                     <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span>Deadline</span>
                        <span className="text-white">Oct 24, 2024</span>
                     </div>
                  </div>
               </div>

               <div className="bg-gray-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <Briefcase className="text-brand-green mb-6" size={32} />
                  <h4 className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-6">Execution Team</h4>
                  <div className="flex -space-x-3 mb-8">
                     {[1,2,3,4].map(i => (
                        <img key={i} src={`https://randomuser.me/api/portraits/thumb/men/${30+i}.jpg`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="Team member" />
                     ))}
                     <div className="w-12 h-12 rounded-full bg-white border-4 border-white flex items-center justify-center text-[10px] font-black text-brand-green shadow-lg">+2</div>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-gray-100">
                     <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Your Lead</span>
                     <p className="font-bold text-brand-black text-sm">Abdirahman Muse</p>
                     <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-brand-green hover:text-brand-black transition-colors flex items-center gap-1.5">
                        Send Message <ArrowRight size={12} />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Sidebar Navigation */}
      <div className="fixed top-24 md:top-32 left-0 w-20 md:w-64 bottom-0 z-40 px-4 pb-8 hidden md:flex flex-col">
         <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 h-full p-4 flex flex-col">
            <div className="space-y-2 flex-1 overflow-y-auto no-scrollbar">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id as PortalView)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                    activeView === item.id 
                      ? 'bg-brand-black text-white shadow-md' 
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={20} className={activeView === item.id ? 'text-brand-green' : ''} />
                  <span className="font-medium text-sm hidden md:block">{item.label}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={handleLogout}
              className="mt-4 w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
            >
               <LogOut size={20} />
               <span className="font-medium text-sm hidden md:block">Logout</span>
            </button>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-8 md:pl-72 pr-4 pb-24">
         {/* Mobile Nav Top Bar (Simple) */}
         <div className="md:hidden mb-6 overflow-x-auto flex gap-2 no-scrollbar pb-2 px-1 -mx-4 md:mx-0 w-[calc(100%+2rem)] md:w-auto">
             <div className="w-4 shrink-0"></div> 
            {menuItems.map((item) => (
               <button
                  key={item.id}
                  onClick={() => setActiveView(item.id as PortalView)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                    activeView === item.id 
                      ? 'bg-brand-black text-white border-brand-black' 
                      : 'bg-white border-gray-200 text-gray-500'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
            ))}
             <div className="w-4 shrink-0"></div> 
         </div>

         {/* Render Active View */}
         <div className="animate-in fade-in duration-300">
            {renderContent()}
         </div>
      </div>
    </div>
  );
};