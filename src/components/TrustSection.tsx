import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Globe } from 'lucide-react';

export const TrustSection = () => {
  const stats = [
    { label: "Clients au Maroc", value: "1M+", icon: Users },
    { label: "Années d'expertise", value: "130+", icon: Award },
    { label: "Présence Pays", value: "50+", icon: Globe },
    { label: "Note Satisfaction", value: "4.8/5", icon: CheckCircle2 },
  ];

  return (
    <section className="py-24 bg-axa-blue text-white overflow-hidden relative reveal">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-300 font-bold tracking-widest uppercase text-sm"
            >
              Pourquoi AXA ?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight"
            >
              La force d'un leader mondial, la proximité d'un agent local
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-blue-100 mb-10 leading-relaxed"
            >
              En choisissant AXA, vous bénéficiez de la solidité financière d'un groupe international de premier plan et de l'accompagnement personnalisé de votre agent général au Maroc. Nous nous engageons à vous fournir des solutions fiables et un service client d'exception.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</span>
                  <span className="text-blue-300 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000" 
                alt="AXA Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl text-slate-900 flex items-center gap-4">
              <div className="w-12 h-12 bg-axa-red rounded-full flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">N°1 Mondial</p>
                <p className="text-xs text-slate-500">Assurance Dommages</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
