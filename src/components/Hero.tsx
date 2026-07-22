import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Clock, ChevronLeft, ChevronRight, Pause, Play, Heart, Home, Car, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
const touziniLogo = '/touzini_logo.jpg';

interface Slide {
  id: string;
  badge: string;
  badgeIcon: React.ReactNode;
  titleHtml: React.ReactNode;
  description: string;
  image: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const slides: Slide[] = [
  {
    id: 'auto',
    badge: 'Assurances Touzini — Agent Général AXA Assurances Maroc',
    badgeIcon: <Car size={16} className="text-blue-400" />,
    titleHtml: (
      <>
        Protégez votre véhicule avec la <span className="text-blue-400">Garantie Premium</span> AXA.
      </>
    ),
    description: 'Des formules auto sur mesure avec assistance 24/7, véhicule de remplacement et prise en charge rapide au Maroc.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=2000',
    primaryBtnText: 'Devis Auto Immédiat',
    primaryBtnLink: '/simulation/auto',
    secondaryBtnText: 'Découvrir nos offres',
    secondaryBtnLink: '/services/auto',
  },
  {
    id: 'sante',
    badge: 'Santé & Protection Familiale',
    badgeIcon: <Heart size={16} className="text-red-400" />,
    titleHtml: (
      <>
        Une couverture santé <span className="text-blue-400">sereine</span> pour votre famille.
      </>
    ),
    description: 'Bénéficiez du réseau Tiers Payant AXA au Maroc, de remboursements accélérés et d’une prise en charge optimale.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000',
    primaryBtnText: 'Simuler mon contrat Santé',
    primaryBtnLink: '/simulation/sante',
    secondaryBtnText: 'En savoir plus',
    secondaryBtnLink: '/services/sante',
  },
  {
    id: 'habitation',
    badge: 'Habitation & Patrimoine',
    badgeIcon: <Home size={16} className="text-amber-400" />,
    titleHtml: (
      <>
        Sécurisez votre foyer contre <span className="text-blue-400">tous les imprévus</span>.
      </>
    ),
    description: 'Protection intégrale de votre résidence principale ou secondaire : vol, incendie, dégâts des eaux et responsabilité civile.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    primaryBtnText: 'Devis Habitation',
    primaryBtnLink: '/simulation/habitation',
    secondaryBtnText: 'Nos garanties',
    secondaryBtnLink: '/services/habitation',
  },
  {
    id: 'pro',
    badge: 'Entreprises & Professionnels',
    badgeIcon: <Briefcase size={16} className="text-emerald-400" />,
    titleHtml: (
      <>
        Pérennisez votre activité avec nos <span className="text-blue-400">solutions Pro</span>.
      </>
    ),
    description: 'Responsabilité Civile Pro, Multirisque entreprise, assurance de vos salariés et flotte automobile à Casablanca et au Maroc.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
    primaryBtnText: 'Devis Pro Personnalisé',
    primaryBtnLink: '/simulation/pro',
    secondaryBtnText: 'Contactez un conseiller',
    secondaryBtnLink: '/contact',
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Background Sliding Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.id}
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          {/* Overlays for high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center my-auto">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
                <img 
                  src={touziniLogo} 
                  alt="Logo Touzini" 
                  className="w-6 h-6 rounded-md object-cover border border-white/30"
                  referrerPolicy="no-referrer"
                />
                {slide.badgeIcon}
                <span>{slide.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight text-balance">
                {slide.titleHtml}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to={slide.primaryBtnLink}
                  className="bg-axa-red text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-500/40 flex items-center justify-center gap-3 group"
                >
                  {slide.primaryBtnText}
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={slide.secondaryBtnLink}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  {slide.secondaryBtnText}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls & Indicators Bar */}
      <div className="container mx-auto px-6 relative z-10 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/15 pt-8">
          
          {/* Slide Dots and Numbers */}
          <div className="flex items-center gap-6">
            <span className="text-white font-mono text-sm tracking-widest">
              0{currentSlide + 1} <span className="text-slate-500">/ 0{slides.length}</span>
            </span>

            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-10 bg-blue-500 shadow-md shadow-blue-500/50'
                      : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Aller à la diapositive ${idx + 1}`}
                />
              ))}
            </div>

            {/* Play / Pause toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
              title={isPlaying ? 'Mettre en pause le défilement' : 'Démarrer le défilement'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>

          {/* Feature Badges */}
          <div className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-blue-400" />
              <span>Devis gratuit en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-400" />
              <span>Garanties Sur Mesure</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-400" />
              <span>Assistance AXA 24h/7j</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
              aria-label="Diapositive précédente"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
              aria-label="Diapositive suivante"
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>
      </div>

      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-axa-red/15 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};

