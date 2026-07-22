/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { SimulationPage } from './pages/SimulationPage';
import { SanteSimulationPage } from './pages/SanteSimulationPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  useEffect(() => {
    // Global reveal animation
    const ctx = gsap.context(() => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 bg-tile-pattern">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/simulation/sante" element={<SanteSimulationPage />} />
              <Route path="/simulation/:id" element={<SimulationPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/devis" element={<SimulationPage />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
          <AIChat />
        </div>
      </Router>
    </HelmetProvider>
  );
}
