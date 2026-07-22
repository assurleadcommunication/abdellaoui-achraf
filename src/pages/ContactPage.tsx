import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Navigation, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    insuranceType: 'Assurance Auto',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapAddress = "123 Boulevard Mohammed V, Casablanca, Maroc";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Boulevard Mohammed V, Casablanca, Morocco")}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent("Boulevard Mohammed V Casablanca")}&navigate=yes`;

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Contact & Itinéraire | Assurances Touzini Agent Général AXA Casablanca</title>
        <meta name="description" content="Contactez votre agence AXA à Casablanca. Prenez rendez-vous, obtenez votre itinéraire GPS Google Maps ou demandez un devis gratuit pour vos assurances." />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden bg-tile-pattern-dark mb-12">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-axa-red font-bold tracking-widest uppercase text-xs sm:text-sm inline-block mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md"
          >
            Agence AXA Casablanca
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold mb-4"
          >
            Contactez votre Agent Général AXA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Notre équipe est à votre écoute pour vous conseiller, gérer vos souscriptions et vous guider jusqu'à nos bureaux à Casablanca.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Container */}
      <div className="container mx-auto px-6 mb-16">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-axa-blue via-blue-900 to-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-2">Informations Pratiques</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">Assurances Touzini</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Phone size={20} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-0.5">Téléphone Direct</p>
                      <a href="tel:+212500000000" className="text-lg font-bold hover:text-blue-200 transition-colors">+212 5 00 00 00 00</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Mail size={20} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-0.5">Email de l'agence</p>
                      <a href="mailto:contact@axa-agent.ma" className="text-base sm:text-lg font-bold hover:text-blue-200 transition-colors">contact@axa-agent.ma</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin size={20} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-0.5">Adresse de l'agence</p>
                      <p className="text-base sm:text-lg font-bold">{mapAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Clock size={20} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-0.5">Horaires d'ouverture</p>
                      <p className="text-sm font-semibold text-white">Lundi - Vendredi: 08:30 - 18:30</p>
                      <p className="text-sm font-semibold text-blue-200">Samedi: 09:00 - 12:30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps Action in Sidebar */}
              <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
                <p className="text-xs text-blue-200 font-medium">Se rendre à l'agence :</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-axa-blue hover:bg-blue-50 font-bold px-4 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Navigation size={15} />
                    Google Maps
                  </a>
                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 text-white hover:bg-white/20 font-bold px-4 py-3 rounded-xl text-xs flex items-center justify-center gap-2 border border-white/10 transition-all"
                  >
                    <ExternalLink size={15} />
                    Waze
                  </a>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-slate-500 text-sm mb-8">Remplissez le formulaire ci-dessous, un conseiller AXA vous recontacte sous 24h.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-green-900">Demande envoyée avec succès !</h3>
                  <p className="text-sm text-green-700">
                    Merci {formData.name || 'cher client'}. Votre message a bien été transmis à l'équipe Assurances Touzini. Nous vous recontacterons très rapidement.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-green-600 text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-green-700 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nom complet *</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Mohammed Alami"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-axa-blue focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Téléphone *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 6 00 00 00 00"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-axa-blue focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Adresse email</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@exemple.ma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-axa-blue focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Objet / Service concerné</label>
                    <select 
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-axa-blue focus:bg-white outline-none transition-all"
                    >
                      <option>Assurance Auto</option>
                      <option>Assurance Habitation</option>
                      <option>Assurance Santé & Complementaire</option>
                      <option>Assurance Professionnelle & Entreprise</option>
                      <option>Épargne & Retraite</option>
                      <option>Assurance Voyage Schengen</option>
                      <option>Déclaration de Sinistre</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Votre message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez votre demande ou vos questions..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-axa-blue focus:bg-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button 
                      type="submit"
                      className="flex-1 bg-axa-red text-white py-4 rounded-xl font-bold text-sm hover:bg-red-700 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      Envoyer le message
                      <Send size={16} />
                    </button>

                    <a 
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-sm hover:bg-green-700 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={16} />
                      WhatsApp
                    </a>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Vos données personnelles restent confidentielles et protégées conformément aux lois marocaines.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* MAP & ITINERARY SECTION */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-lg border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-axa-red uppercase tracking-widest block mb-1">Localisation Agence</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Itinéraire & Carte Interactive
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Retrouvez-nous au 123 Boulevard Mohammed V, au cœur de Casablanca.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-axa-blue text-white font-bold px-6 py-3.5 rounded-full hover:bg-blue-900 transition-all shadow-md flex items-center gap-2 text-xs sm:text-sm"
              >
                <Navigation size={18} />
                Ouvrir dans Google Maps
              </a>
              <a 
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-bold px-6 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-md flex items-center gap-2 text-xs sm:text-sm"
              >
                <ExternalLink size={18} />
                Ouvrir dans Waze
              </a>
            </div>
          </div>

          {/* Interactive Map Frame */}
          <div className="rounded-2xl overflow-hidden h-[450px] shadow-inner border border-slate-200 relative bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0xda7d2927d0d5761:0x9f3d93f147ad84!2sBoulevard+Mohammed+V%2C+Casablanca!5m2!1sfr!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Agence AXA Touzini Casablanca"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

