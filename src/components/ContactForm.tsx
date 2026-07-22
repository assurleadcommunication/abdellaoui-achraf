import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="py-24 bg-slate-50 reveal" id="contact">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info Column */}
            <div className="axa-gradient p-12 lg:p-20 text-white flex flex-col justify-between">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-8"
                >
                  Parlons de votre projet de protection
                </motion.h2>
                <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                  Notre équipe d'experts est à votre disposition pour vous conseiller et vous accompagner dans le choix de vos garanties.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-1">Téléphone</p>
                      <a href="tel:+212500000000" className="text-xl font-bold hover:text-blue-200 transition-colors">+212 5 00 00 00 00</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-1">Email</p>
                      <a href="mailto:contact@axa-agent.ma" className="text-xl font-bold hover:text-blue-200 transition-colors">contact@axa-agent.ma</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-1">Adresse</p>
                      <p className="text-xl font-bold">123 Boulevard Mohammed V, Casablanca, Maroc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
                <Clock className="text-blue-300" size={20} />
                <p className="text-sm text-blue-100">Lun - Ven: 08:30 - 18:30 | Sam: 09:00 - 12:30</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nom Complet</label>
                    <input 
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Téléphone</label>
                    <input 
                      type="tel" 
                      placeholder="+212 6 00 00 00 00"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="jean@exemple.com"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Type d'assurance</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all appearance-none">
                    <option>Assurance Auto</option>
                    <option>Assurance Habitation</option>
                    <option>Assurance Santé</option>
                    <option>Prévoyance</option>
                    <option>Professionnelle</option>
                    <option>Épargne Retraite</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-axa-red text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/20 flex items-center justify-center gap-3">
                  Envoyer ma demande
                  <Send size={20} />
                </button>
                <a 
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-green-500/20 flex items-center justify-center gap-3"
                >
                  Discuter sur WhatsApp
                  <MessageSquare size={20} />
                </a>
                <p className="text-center text-xs text-slate-400">
                  En envoyant ce formulaire, vous acceptez que vos données soient traitées pour répondre à votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
