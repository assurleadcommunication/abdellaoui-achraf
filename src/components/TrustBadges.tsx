import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    { icon: Shield, label: "Sécurité Garantie", sub: "Données protégées" },
    { icon: Award, label: "N°1 Mondial", sub: "Assurance Dommages" },
    { icon: Clock, label: "Assistance 24/7", sub: "Partout au Maroc" },
    { icon: Users, label: "1M+ Clients", sub: "Confiance renouvelée" },
  ];

  return (
    <div className="py-12 border-y border-slate-100 bg-white reveal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-axa-blue group-hover:bg-axa-blue group-hover:text-white transition-all">
                <badge.icon size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{badge.label}</p>
                <p className="text-xs text-slate-500">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
