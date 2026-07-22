import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react';
const touziniLogo = '/touzini_logo.jpg';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Trust Badges in Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-white/5">
          <div className="flex items-center gap-4">
            <Shield className="text-axa-red" size={32} />
            <div>
              <p className="font-bold text-sm">Sécurité</p>
              <p className="text-xs text-slate-500">Données protégées</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="text-axa-red" size={32} />
            <div>
              <p className="font-bold text-sm">Expertise</p>
              <p className="text-xs text-slate-500">15+ ans d'expérience</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="text-axa-red" size={32} />
            <div>
              <p className="font-bold text-sm">Réactivité</p>
              <p className="text-xs text-slate-500">Réponse sous 24h</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-axa-red" size={32} />
            <div>
              <p className="font-bold text-sm">Proximité</p>
              <p className="text-xs text-slate-500">Agent local à Casa</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-700 flex items-center justify-center shrink-0 shadow-md">
                <img 
                  src={touziniLogo} 
                  alt="Logo Assurances Touzini AXA" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block font-bold text-lg leading-tight text-white">ASSURANCES TOUZINI</span>
                <span className="text-[10px] tracking-widest uppercase text-axa-red font-semibold">Agent Général AXA Maroc</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Assurances Touzini, votre agent général de confiance AXA Assurances au Maroc. Nous protégeons ce qui compte pour vous avec expertise, écoute et proximité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-axa-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-axa-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-axa-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-axa-blue transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services/auto" className="hover:text-white transition-colors">Assurance Auto</Link></li>
              <li><Link to="/services/habitation" className="hover:text-white transition-colors">Assurance Habitation</Link></li>
              <li><Link to="/services/sante" className="hover:text-white transition-colors">Assurance Santé</Link></li>
              <li><Link to="/services/prevoyance" className="hover:text-white transition-colors">Prévoyance</Link></li>
              <li><Link to="/services/professionnelle" className="hover:text-white transition-colors">Assurance Pro</Link></li>
              <li><Link to="/services/retraite" className="hover:text-white transition-colors">Épargne Retraite</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">L'Agence</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Actualités</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contactez-nous</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-axa-red shrink-0" />
                <span>123 Boulevard Mohammed V, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-axa-red shrink-0" />
                <a href="tel:+212500000000" className="hover:text-white transition-colors">+212 5 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-axa-red shrink-0" />
                <a href="mailto:contact@axa-agent.ma" className="hover:text-white transition-colors">contact@axa-agent.ma</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Assurances Touzini - Agent Général AXA Assurances Maroc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Axa_logo.svg/1200px-Axa_logo.svg.png" alt="AXA Logo" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};
