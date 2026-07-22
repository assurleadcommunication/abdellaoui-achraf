import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: "Comment choisir son assurance auto ?",
    excerpt: "Découvrez les critères essentiels pour protéger votre véhicule au meilleur prix au Maroc.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Guide de l'assurance santé",
    excerpt: "Tout savoir sur le tiers payant, les remboursements et les cliniques conventionnées.",
    icon: BookOpen,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Protéger son entreprise",
    excerpt: "Les garanties indispensables pour sécuriser votre activité et vos salariés.",
    icon: HelpCircle,
    color: "bg-amber-50 text-amber-600"
  }
];

export const GuidesSection = () => {
  return (
    <section className="py-24 bg-slate-50 reveal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-axa-red font-bold tracking-widest uppercase text-sm">Ressources</span>
            <h2 className="text-4xl font-bold text-axa-blue mt-4">Guides & Conseils Assurance</h2>
            <p className="text-slate-600 mt-4">
              Nous vous aidons à mieux comprendre vos contrats et à faire les bons choix pour votre protection.
            </p>
          </div>
          <Link to="/blog" className="flex items-center gap-2 text-axa-blue font-bold hover:gap-4 transition-all">
            Voir tous les articles <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${guide.color}`}>
                <guide.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-axa-blue transition-colors">
                {guide.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {guide.excerpt}
              </p>
              <Link to="/blog" className="text-axa-blue font-bold text-sm flex items-center gap-2">
                Lire la suite <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
