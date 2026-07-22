import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Home, Heart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const QuickQuote = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('auto');

  const options = [
    { id: 'auto', label: 'Auto', icon: Car },
    { id: 'habitation', label: 'Habitation', icon: Home },
    { id: 'sante', label: 'Santé', icon: Heart },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto -mt-16 relative z-20 border border-slate-100 reveal">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-axa-blue mb-2">Simulation Rapide</h3>
          <p className="text-slate-500 text-sm">Choisissez votre produit pour commencer</p>
        </div>
        
        <div className="flex gap-4">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all border-2 ${
                selected === opt.id 
                ? 'border-axa-blue bg-blue-50 text-axa-blue' 
                : 'border-transparent bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              <opt.icon size={24} />
              <span className="text-xs font-bold">{opt.label}</span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => navigate(`/simulation/${selected}`)}
          className="bg-axa-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg shadow-red-500/20"
        >
          Simuler
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
