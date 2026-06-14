import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { I18nProvider } from './lib/i18n';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageLoader } from './components/PageLoader';

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Product = React.lazy(() => import('./pages/Product').then(module => ({ default: module.Product })));
const Portal = React.lazy(() => import('./pages/Portal').then(module => ({ default: module.Portal })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Pricing = React.lazy(() => import('./pages/Pricing').then(module => ({ default: module.Pricing })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Legal = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.Legal })));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote').then(module => ({ default: module.RequestQuote })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <I18nProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-brand-green selection:text-white">
          <TopBanner />
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          
          <main className="flex-grow pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-x-hidden">
            <ErrorBoundary>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/portal" element={<Portal />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </Router>
    </I18nProvider>
  );
};

export default App;