import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const touziniLogo = '/touzini_logo.jpg';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl overflow-hidden bg-white shadow-md border border-slate-200 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <img 
              src={touziniLogo} 
              alt="Logo Assurances Touzini AXA" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className={`block font-extrabold text-base sm:text-lg leading-tight tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              ASSURANCES TOUZINI
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-semibold ${isScrolled ? 'text-axa-blue' : 'text-blue-200'}`}>
              Agent Général AXA Maroc
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-all hover:text-axa-red relative group/link ${
                location.pathname === link.path 
                  ? 'text-axa-red' 
                  : isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-axa-red transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/contact" className={`text-sm font-bold flex items-center gap-2 ${isScrolled ? 'text-slate-600' : 'text-white/80'} hover:text-axa-red transition-colors`}>
            Espace Client
          </Link>
          <Link to="/simulation/auto" className="bg-axa-red text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-500/20 hover:-translate-y-0.5 active:translate-y-0">
            Simulation Express
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-axa-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-axa-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight size={18} className="text-slate-400" />
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link
                to="/devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-axa-blue text-white text-center py-4 rounded-xl font-bold"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
