import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { QuickQuote } from '../components/QuickQuote';
import { TrustBadges } from '../components/TrustBadges';
import { ServicesSection } from '../components/ServicesSection';
import { ContactForm } from '../components/ContactForm';
import { MapSection } from '../components/MapSection';
import { motion } from 'motion/react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Assurances Touzini | Agent Général AXA Assurances Maroc</title>
        <meta name="description" content="Assurances Touzini, Agent Général AXA Assurances au Maroc. Devis gratuit en ligne pour assurance auto, habitation, santé et prévoyance. Protection premium." />
        <meta property="og:title" content="Assurances Touzini | Agent Général AXA Assurances Maroc" />
        <meta property="og:description" content="Protection sur mesure pour particuliers et professionnels au Maroc par Assurances Touzini, Agent Général AXA." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "Assurances Touzini - Agent Général AXA Assurances Maroc",
              "description": "Agent général AXA Assurances au Maroc proposant des solutions d'assurance auto, santé, habitation et pro.",
              "url": "https://axa-agent.ma",
              "telephone": "+212500000000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Boulevard Mohammed V",
                "addressLocality": "Casablanca",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5883",
                "longitude": "-7.6114"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:30",
                "closes": "18:30"
              }
            }
          `}
        </script>
      </Helmet>

      <main>
        <Hero />
        <div className="container mx-auto px-6">
          <QuickQuote />
        </div>
        <TrustBadges />
        
        {/* Agent Section */}
        <section className="py-24 bg-white overflow-hidden reveal">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=1000" 
                    alt="Famille protégée par Assurances Touzini" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-axa-blue/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-axa-red/5 rounded-full blur-3xl -z-10" />
              </motion.div>
              
              <div className="lg:w-1/2">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-axa-red font-bold tracking-widest uppercase text-sm"
                >
                  Votre Interlocuteur
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-axa-blue mt-4 mb-8 leading-tight"
                >
                  Un accompagnement humain et expert
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6 text-lg text-slate-600 leading-relaxed"
                >
                  <p>
                    Bienvenue chez <strong>Assurances Touzini</strong>, votre Agent Général AXA Assurances au Maroc. Notre mission est de vous conseiller et de vous accompagner au quotidien dans la protection de vos proches, de votre patrimoine et de votre entreprise.
                  </p>
                  <p>
                    Forts de notre ancrage local et de l'adossement à la solidité du groupe AXA, nous plaçons la confiance, la réactivité et la proximité au cœur de nos engagements. Nous bâtissons des solutions sur mesure adaptées à vos besoins réels.
                  </p>
                </motion.div>
                
                <div className="mt-10 flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-axa-blue">
                      <MessageSquare size={20} />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Conseil Personnalisé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-axa-blue">
                      <PhoneCall size={20} />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Disponibilité Totale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ContactForm />
        <MapSection />
        
        {/* FAQ Section */}
        <section className="py-24 bg-white reveal">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-axa-blue mb-4">Questions Fréquentes</h2>
              <p className="text-slate-600">Tout ce que vous devez savoir sur nos services d'assurance.</p>
            </div>
            
            <div className="space-y-4">
              {[
                { q: "Comment obtenir un devis d'assurance auto ?", a: "Vous pouvez obtenir un devis gratuit en remplissant notre formulaire en ligne ou en nous contactant directement par téléphone ou WhatsApp. Nous vous répondrons en moins de 24h." },
                { q: "Quels sont les documents nécessaires pour souscrire ?", a: "Généralement, une copie de votre CIN, la carte grise du véhicule (pour l'auto) et un justificatif de domicile suffisent pour commencer." },
                { q: "Comment déclarer un sinistre ?", a: "En cas de sinistre, contactez-nous immédiatement par téléphone ou via notre assistance 24/7. Nous vous guiderons pas à pas dans les démarches." },
                { q: "Proposez-vous des assurances pour les entreprises ?", a: "Oui, nous avons une gamme complète dédiée aux professionnels : RC Professionnelle, Multirisque Bureau, Flotte Automobile et Assurance Groupe Santé." }
              ].map((item, i) => (
                <motion.details 
                  key={i}
                  className="group bg-slate-50 rounded-2xl p-6 cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <summary className="flex items-center justify-between font-bold text-lg text-slate-900 list-none">
                    {item.q}
                    <span className="text-axa-blue transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
