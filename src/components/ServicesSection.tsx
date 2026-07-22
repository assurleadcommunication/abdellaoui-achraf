import React from 'react';
import { motion } from 'motion/react';
import { Shield, Car, Home, Heart, Briefcase, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Assurance Auto",
    description: "Protection complète pour votre véhicule avec assistance 24/7 au Maroc.",
    icon: Car,
    path: "/services/auto",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Assurance Habitation",
    description: "Sécurisez votre foyer et vos biens contre tous les risques du quotidien.",
    icon: Home,
    path: "/services/habitation",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Assurance Santé",
    description: "Une couverture santé flexible pour vous et votre famille avec tiers payant.",
    icon: Heart,
    path: "/services/sante",
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Prévoyance",
    description: "Anticipez l'avenir et protégez vos proches face aux aléas de la vie.",
    icon: Shield,
    path: "/services/prevoyance",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Assurance Pro",
    description: "Des solutions sur mesure pour les entreprises et les professionnels.",
    icon: Briefcase,
    path: "/services/professionnelle",
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Épargne Retraite",
    description: "Préparez votre retraite sereinement avec des rendements performants.",
    icon: TrendingUp,
    path: "/services/retraite",
    color: "bg-purple-50 text-purple-600"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 text-white reveal bg-tile-pattern-dark" id="services">
      {/* Background Image with Blue Tint Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" 
          alt="Assurance AXA Maroc Background" 
          className="w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-axa-blue/95 via-blue-950/90 to-slate-950/95" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-axa-red font-bold tracking-widest uppercase text-xs sm:text-sm inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
          >
            Nos Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
          >
            Une protection adaptée à chaque étape de votre vie
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 font-light leading-relaxed"
          >
            Découvrez nos gammes d'assurances conçues pour répondre aux besoins spécifiques des particuliers et des professionnels au Maroc.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/20 group text-slate-900"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <Link 
                  to={service.path}
                  className="flex items-center gap-2 text-axa-blue font-bold text-sm group/btn"
                >
                  En savoir plus
                  <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Link 
                  to={`/simulation/${service.path.split('/').pop()}`}
                  className="bg-axa-red text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-red-700 transition-all shadow-md"
                >
                  Simuler
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
