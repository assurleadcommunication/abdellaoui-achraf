import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react';

const serviceData: Record<string, any> = {
  "auto": {
    title: "Assurance Auto Maroc",
    description: "La meilleure protection pour votre véhicule au Maroc. Garanties complètes, assistance 24/7 et indemnisation rapide.",
    longDesc: "Que vous soyez un conducteur expérimenté ou un jeune conducteur, AXA vous propose une assurance auto sur mesure qui s'adapte à vos besoins et à votre budget. Profitez d'une large gamme de garanties allant de la responsabilité civile obligatoire à la protection tous risques.",
    features: ["Assistance 24h/24 et 7j/7 partout au Maroc", "Véhicule de remplacement en cas d'immobilisation", "Expertise rapide et indemnisation simplifiée", "Garantie bris de glace sans franchise"],
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000"
  },
  "habitation": {
    title: "Assurance Habitation Maroc",
    description: "Protégez votre foyer et vos biens précieux. Une couverture multirisque habitation adaptée à votre logement.",
    longDesc: "Votre maison est votre sanctuaire. Notre assurance multirisque habitation vous protège contre l'incendie, le vol, les dégâts des eaux et bien plus encore. Nous couvrons également votre responsabilité civile chef de famille.",
    features: ["Protection contre le vol et le vandalisme", "Garantie dégâts des eaux et incendie", "Responsabilité civile vie privée incluse", "Assistance dépannage d'urgence (serrurerie, plomberie)"],
    image: "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=1000"
  },
  "sante": {
    title: "Assurance Santé Maroc",
    description: "Prenez soin de votre santé et de celle de vos proches. Accès aux meilleurs soins avec AXA Santé.",
    longDesc: "AXA Santé vous offre une couverture médicale complète pour faire face aux frais d'hospitalisation, de consultations et de pharmacie. Bénéficiez du réseau de tiers payant AXA pour ne pas avancer les frais.",
    features: ["Réseau étendu de cliniques et médecins partenaires", "Prise en charge directe (Tiers Payant)", "Couverture maternité et optique performante", "Remboursements rapides sous 48h"],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000"
  },
  "professionnelle": {
    title: "Assurance Professionnelle Maroc",
    description: "Sécurisez votre activité et vos actifs. Des solutions sur mesure pour les entreprises et les indépendants au Maroc.",
    longDesc: "Votre entreprise mérite la meilleure protection. Nous proposons des contrats RC Professionnelle, Multirisque Bureau, et Assurance Flotte pour garantir la pérennité de votre business face aux imprévus.",
    features: ["Responsabilité Civile Professionnelle", "Protection des locaux et du matériel", "Assurance perte d'exploitation", "Prévoyance collective pour salariés"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
  },
  "retraite": {
    title: "Épargne Retraite Maroc",
    description: "Préparez votre avenir sereinement. Des solutions d'épargne performantes avec des avantages fiscaux.",
    longDesc: "Anticipez votre fin de carrière avec nos solutions d'épargne retraite. Profitez de rendements attractifs et d'une fiscalité avantageuse pour vous constituer un capital ou une rente confortable.",
    features: ["Déduction fiscale sur les cotisations", "Gestion souple et performante", "Capital disponible en cas de besoin", "Transmission facilitée"],
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=1000"
  },
  "prevoyance": {
    title: "Assurance Prévoyance Maroc",
    description: "Protégez vos proches face aux aléas de la vie. Une sécurité financière pour votre famille.",
    longDesc: "La prévoyance AXA vous permet de garantir le maintien du niveau de vie de votre famille en cas de décès ou d'invalidité. Assurez l'avenir de vos enfants avec des solutions de financement d'études.",
    features: ["Versement d'un capital ou d'une rente", "Financement des études des enfants", "Couverture en cas d'invalidité", "Formalités médicales simplifiées"],
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000"
  }
};

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = serviceData[id || "auto"] || serviceData["auto"];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>{service.title} | Agent AXA Maroc</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-axa-blue/60 backdrop-blur-[2px] flex items-center">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white max-w-3xl"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-axa-blue">Pourquoi choisir AXA pour votre {service.title} ?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {service.longDesc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="text-axa-blue shrink-0" size={24} />
                  <span className="font-medium text-slate-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-10 rounded-[32px] border border-blue-100 mt-12">
              <h3 className="text-2xl font-bold text-axa-blue mb-4">Besoin d'un conseil personnalisé ?</h3>
              <p className="text-slate-600 mb-8">
                Nos conseillers sont à votre écoute pour réaliser une étude gratuite de vos besoins et vous proposer la solution la plus adaptée.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={`/simulation/${id}`} className="bg-axa-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg">
                  Lancer la simulation
                </Link>
                <a href="tel:+212500000000" className="bg-white text-axa-blue border border-axa-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                  <Phone size={20} />
                  Nous appeler
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-[32px] shadow-xl">
              <h3 className="text-xl font-bold mb-6">Autres Services</h3>
              <div className="space-y-4">
                {Object.keys(serviceData).filter(k => k !== id).map(key => (
                  <Link 
                    key={key} 
                    to={`/services/${key}`}
                    className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <span className="font-bold">{serviceData[key].title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200">
              <h3 className="text-xl font-bold text-axa-blue mb-4">Contact Rapide</h3>
              <p className="text-sm text-slate-500 mb-6">Disponible du Lundi au Samedi pour répondre à toutes vos questions.</p>
              <div className="space-y-4">
                <a href="https://wa.me/212600000000" className="flex items-center gap-4 p-4 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-all">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
