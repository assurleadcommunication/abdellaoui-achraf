import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Heart, Info } from 'lucide-react';

const santeSteps = [
  {
    title: "Votre Profil",
    fields: [
      { name: "age", label: "Âge de l'assuré principal", type: "number", placeholder: "Ex: 35" },
      { name: "profession", label: "Secteur d'activité", type: "select", options: ["Salarié secteur privé", "Fonctionnaire", "Indépendant / Libéral", "Retraité", "Sans activité"] },
      { name: "ville", label: "Ville de résidence", type: "text", placeholder: "Ex: Casablanca" }
    ]
  },
  {
    title: "Bénéficiaires",
    fields: [
      { name: "couverture", label: "Qui souhaitez-vous assurer ?", type: "select", options: ["Moi uniquement", "Moi et mon conjoint", "Moi, mon conjoint et mes enfants", "Moi et mes enfants"] },
      { name: "nb_enfants", label: "Nombre d'enfants à assurer", type: "number", placeholder: "Ex: 2" }
    ]
  },
  {
    title: "Niveau de Garantie",
    fields: [
      { name: "formule", label: "Formule souhaitée", type: "select", options: ["Essentielle (Hospitalisation)", "Confort (Soins courants + Hospitalisation)", "Premium (Couverture maximale + Optique/Dentaire)"] },
      { name: "budget", label: "Budget mensuel estimé (DH)", type: "select", options: ["Moins de 500 DH", "500 - 1000 DH", "1000 - 2000 DH", "Plus de 2000 DH"] }
    ]
  },
  {
    title: "Vos Coordonnées",
    fields: [
      { name: "nom", label: "Nom complet", type: "text", placeholder: "Jean Dupont" },
      { name: "tel", label: "Téléphone", type: "tel", placeholder: "06 00 00 00 00" },
      { name: "email", label: "Email", type: "email", placeholder: "jean@exemple.com" }
    ]
  }
];

export const SanteSimulationPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < santeSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Sante Simulation submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-2xl max-w-2xl w-full text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-bold text-axa-blue mb-4">Demande de simulation Santé envoyée !</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Merci {formData.nom}. Nos experts en santé vont étudier votre profil et vous proposer la formule la plus adaptée à vos besoins et à votre budget.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-axa-blue text-white px-10 py-4 rounded-full font-bold hover:bg-axa-light-blue transition-all"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <Helmet>
        <title>Simulation Assurance Santé Maroc | AXA Agent Officiel</title>
        <meta name="description" content="Simulez votre assurance santé au Maroc. Obtenez un tarif personnalisé pour vous et votre famille avec les meilleures garanties AXA." />
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {santeSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  i <= currentStep ? 'bg-axa-blue text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {i + 1}
                </div>
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${
                  i <= currentStep ? 'text-axa-blue' : 'text-slate-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-axa-blue"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / santeSteps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Sidebar Info */}
            <div className="axa-gradient p-10 text-white hidden lg:block">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Heart size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-6">Simulation Santé</h2>
              <p className="text-blue-100 mb-10 leading-relaxed">
                Prenez soin de votre santé avec une couverture adaptée. Accédez aux meilleures cliniques du Maroc sans avance de frais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-blue-300" />
                  <span>Tiers Payant inclus</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-blue-300" />
                  <span>Remboursements rapides</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-blue-300" />
                  <span>Assistance 24/7</span>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-2 p-10 md:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-axa-blue mb-2">{santeSteps[currentStep].title}</h3>
                    <p className="text-slate-500 text-sm">Veuillez renseigner les informations ci-dessous.</p>
                  </div>

                  <div className="space-y-6">
                    {santeSteps[currentStep].fields.map((field: any) => (
                      <div key={field.name} className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          {field.label}
                          {field.info && <Info size={14} className="text-slate-400 cursor-help" />}
                        </label>
                        
                        {field.type === 'select' ? (
                          <select 
                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all appearance-none"
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                          >
                            <option value="">Sélectionnez une option</option>
                            {field.options.map((opt: string) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input 
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-axa-blue outline-none transition-all"
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-8">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-2 font-bold transition-colors ${
                        currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:text-axa-blue'
                      }`}
                    >
                      <ChevronLeft size={20} />
                      Précédent
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-axa-blue text-white px-10 py-4 rounded-full font-bold hover:bg-axa-light-blue transition-all flex items-center gap-2 group"
                    >
                      {currentStep === santeSteps.length - 1 ? 'Finaliser' : 'Suivant'}
                      <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
