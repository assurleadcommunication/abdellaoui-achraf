import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Yassine El Amrani",
    role: "Entrepreneur",
    content: "Un service irréprochable. Mon agent AXA a su m'orienter vers la meilleure assurance professionnelle pour ma startup. Réactivité et professionnalisme au rendez-vous.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=yassine"
  },
  {
    name: "Laila Benjelloun",
    role: "Mère de famille",
    content: "J'ai souscrit à l'assurance santé pour toute ma famille. Le tiers payant fonctionne parfaitement et les remboursements sont rapides. Je recommande vivement cet agent.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=laila"
  },
  {
    name: "Mehdi Sadiki",
    role: "Cadre Supérieur",
    content: "Après un accident de voiture, l'assistance AXA a été incroyable. Mon agent a géré tout le dossier de A à Z. C'est dans ces moments qu'on voit la valeur d'un bon assureur.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=mehdi"
  },
  {
    name: "Sara Tazi",
    role: "Professionnelle Libérale",
    content: "Une expertise rare au Maroc. Mon agent AXA a su optimiser mes contrats pour une protection maximale de mon cabinet. Je recommande sans hésiter.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sara"
  },
  {
    name: "Omar Mansouri",
    role: "Retraité",
    content: "J'ai transféré tous mes contrats chez cet agent. L'accueil est chaleureux et les conseils sont toujours avisés. Un vrai partenaire de confiance.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=omar"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white reveal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-axa-red font-bold tracking-widest uppercase text-sm"
          >
            Témoignages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-axa-blue mt-4 mb-6"
          >
            Ce que nos clients disent de nous
          </motion.h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-slate-900">4.8/5</span>
            <span className="text-slate-500 text-sm">(basé sur 500+ avis)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl relative hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100"
            >
              <Quote className="absolute top-6 right-8 text-slate-200" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed text-sm">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
