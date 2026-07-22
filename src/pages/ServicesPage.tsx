import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Car, Home, Heart, Briefcase, TrendingUp, ChevronRight, Check, ArrowRight, Phone } from 'lucide-react';
import { ServiceCardSkeleton } from '../components/Skeletons';

const allServices = [
  {
    id: "auto",
    category: "Particulier",
    title: "Assurance Automobile",
    subtitle: "Protection véhicule & assistance 24/7",
    description: "Des garanties indispensables (RC, Vol, Incendie, Bris de Glaces, Tous Risques) adaptées à tous les conducteurs au Maroc. Dépannage prioritaire et véhicule de remplacement.",
    features: [
      "Assistance 0km partout au Maroc",
      "Véhicule de courtoisie jusqu'à 15 jours",
      "Prise en charge bris de glace sans avance de frais",
      "Indemnisation valeur à neuf optionnelle"
    ],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000",
    icon: Car,
    badge: "Populaire"
  },
  {
    id: "sante",
    category: "Particulier",
    title: "Assurance Santé Famille",
    subtitle: "Réseau Tiers Payant & Remboursements 48h",
    description: "Prenez soin de votre famille avec des remboursements élevés en consultations, pharmacie, chirurgie, optique et dentaire grâce au Tiers Payant AXA.",
    features: [
      "Prise en charge directe en clinique sans avance de frais",
      "Optique & Maternité renforcées",
      "Suivi des demandes en ligne via espace client",
      "Téléconsultation médicale offerte"
    ],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000",
    icon: Heart,
    badge: "Essentiel"
  },
  {
    id: "habitation",
    category: "Particulier",
    title: "Multirisque Habitation",
    subtitle: "Sécurité maison & appartement",
    description: "Protégez votre résidence principale ou secondaire contre le vol, l'incendie, les événements climatiques, et les dégâts des eaux avec dépannage d'urgence 24/7.",
    features: [
      "Dépannage plomberie & serrurerie sous 2h",
      "Responsabilité civile chef de famille incluse",
      "Protection du mobilier et des objets de valeur",
      "Garantie dégâts électriques"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    icon: Home
  },
  {
    id: "professionnelle",
    category: "Professionnel",
    title: "Multirisque & RC Professionnelle",
    subtitle: "Sécurité PME, Artisans & Commerçants",
    description: "Assurez la pérennité de votre entreprise à Casablanca et au Maroc. Protection des locaux, des marchandises, de la responsabilité civile et des salariés.",
    features: [
      "RC Décennale & Professionnelle sur mesure",
      "Pertes d'exploitation compensées",
      "Flottes automobiles d'entreprise",
      "Prévoyance & Mutuelle collective salariés"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    icon: Briefcase,
    badge: "Entreprises"
  },
  {
    id: "prevoyance",
    category: "Particulier",
    title: "Assurance Prévoyance",
    subtitle: "Sécurité financière pour vos proches",
    description: "Soutenez votre famille en cas de coup dur, d'invalidité ou d'accident. Garantie du financement de la scolarité de vos enfants et maintien de revenu.",
    features: [
      "Capital garanti versé rapidement",
      "Rente éducation pour les enfants",
      "Exonération des formalités médicales selon âge",
      "Solutions modulables selon votre budget"
    ],
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000",
    icon: Shield
  },
  {
    id: "retraite",
    category: "Particulier",
    title: "Épargne & Retraite",
    subtitle: "Constituez votre capital avec avantages fiscaux",
    description: "Maximisez vos économies d'impôt au Maroc tout en vous préparant une retraite confortable ou un capital transmis à vos proches dans des conditions privilégiées.",
    features: [
      "Déduction fiscale avantageuse à l'entrée",
      "Rendements réguliers et sécurisés",
      "Gestion souple des versements",
      "Option rente viagère ou capital libéré"
    ],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
    icon: TrendingUp
  }
];

export const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredServices = activeCategory === "Tous" 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 bg-tile-pattern pb-24">
      <Helmet>
        <title>Nos Services & Solutions d'Assurance | Assurances Touzini AXA Maroc</title>
        <meta name="description" content="Découvrez toute la gamme des solutions d'assurance AXA au Maroc par Assurances Touzini : Auto, Santé, Habitation, Pro, Épargne et Prévoyance." />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden bg-tile-pattern-dark">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-axa-red font-bold tracking-widest uppercase text-xs sm:text-sm inline-block mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md"
          >
            Assurances Touzini — Agent Général AXA
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
          >
            Nos Solutions d'Assurance au Maroc
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Que vous souhaitiez protéger votre famille, vos véhicules, votre logement ou votre entreprise, notre équipe vous accompagne avec l'expertise et la réactivité d'AXA.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 mt-12 mb-12">
        <div className="flex justify-center gap-3 flex-wrap">
          {["Tous", "Particulier", "Professionnel"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeCategory === cat
                  ? "bg-axa-blue text-white shadow-axa-blue/30 shadow-md scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat === "Tous" ? "Toutes nos offres" : `Offres ${cat}s`}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <ServiceCardSkeleton key={idx} />
            ))
          ) : (
            filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/80 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {service.badge && (
                    <span className="absolute top-4 right-4 bg-axa-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-axa-blue shadow-lg">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs text-white/80 uppercase font-semibold tracking-wider">{service.category}</span>
                      <h3 className="text-xl font-bold text-white leading-snug">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <Check size={16} className="text-axa-blue shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-axa-blue font-bold text-sm flex items-center gap-1 hover:underline"
                    >
                      Détails de l'offre
                      <ChevronRight size={16} />
                    </Link>
                    
                    <Link
                      to={service.id === 'sante' ? '/simulation/sante' : `/simulation/${service.id}`}
                      className="bg-axa-red text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-red-700 transition-colors shadow-md flex items-center gap-1.5"
                    >
                      Devis en ligne
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          }))}
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-axa-gradient text-white rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Vous ne trouvez pas la formule adaptée ?</h2>
            <p className="text-blue-100 text-base md:text-lg font-light leading-relaxed">
              Contactez directement Assurances Touzini à Casablanca. Nos experts conçoivent des contrats personnalisés selon vos exigences précises.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              className="bg-white text-axa-blue font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-center shadow-lg"
            >
              Prendre Rendez-vous
            </Link>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-all text-center shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Conseil WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
