import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-24 bg-white reveal">
      <div className="container mx-auto px-6">
        <div className="bg-slate-100 rounded-[40px] overflow-hidden shadow-xl border border-slate-200 h-[500px] relative">
          {/* Mock Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000)' }}
          />
          
          {/* Map Overlay */}
          <div className="absolute inset-0 bg-axa-blue/5" />
          
          {/* Location Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-axa-red text-white p-4 rounded-full shadow-2xl animate-bounce">
              <MapPin size={32} />
            </div>
            <div className="mt-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 text-center">
              <p className="font-bold text-slate-900">Assurances Touzini - Agent Général AXA</p>
              <p className="text-xs text-slate-500">123 Boulevard Mohammed V, Casablanca</p>
            </div>
          </div>
          
          {/* Map Controls Mock */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-2">
            <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-slate-50 transition-colors">+</button>
            <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-slate-50 transition-colors">-</button>
          </div>
          
          <div className="absolute top-8 left-8">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=33.5883,-7.6114" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-axa-blue text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-axa-light-blue transition-all flex items-center gap-2"
            >
              Itinéraire
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
