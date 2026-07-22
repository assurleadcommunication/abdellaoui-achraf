import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, MessageSquare } from 'lucide-react';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 hidden md:block"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 flex items-center gap-6 relative max-w-sm">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-slate-100 text-slate-500 p-1 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X size={14} />
            </button>
            
            <div className="w-12 h-12 bg-axa-blue text-white rounded-xl flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">Besoin d'un conseil ?</p>
              <p className="text-xs text-slate-500 mb-3">Nos experts vous rappellent gratuitement.</p>
              <div className="flex gap-2">
                <a 
                  href="tel:+212500000000" 
                  className="bg-axa-blue text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-axa-light-blue transition-all flex items-center gap-2"
                >
                  Appeler
                </a>
                <a 
                  href="https://wa.me/212600000000" 
                  className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#128C7E] transition-all flex items-center gap-2"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
