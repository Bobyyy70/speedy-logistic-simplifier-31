
import React from "react";
import { motion } from "framer-motion";

export const ContactInfoSection = () => {
  return (
    <motion.section 
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200" 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Colonne gauche - Actions principales */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                📞 <span className="ml-2">Prise de rendez-vous</span>
              </h3>
              <p className="text-slate-600 mb-4">
                Planifiez votre consultation gratuite de 15 minutes pour analyser vos besoins logistiques. 
                Nos experts vous accompagnent dans votre projet e-commerce.
              </p>
              <div className="text-sm text-blue-700 font-medium">
                → Consultation personnalisée et sans engagement
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                💬 <span className="ml-2">Support client via chat</span>
              </h3>
              <p className="text-slate-600 mb-4">
                Notre équipe SAV est disponible via le chat en bas à droite de votre écran. 
                Réponse rapide pendant les heures d'ouverture, sinon laissez un message.
              </p>
              <div className="text-sm text-green-700 font-medium">
                → Idéal pour le SAV et les questions techniques
              </div>
            </div>
          </div>

          {/* Colonne droite - Informations pratiques */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                🕒 <span className="ml-2">Horaires de disponibilité</span>
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>Lundi au vendredi : 9h - 16h30</strong>
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Chat en direct disponible</li>
                <li>• Consultations téléphoniques</li>
                <li>• Réponse emails sous 24h</li>
                <li>• Messages hors horaires traités le lendemain</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                ❓ <span className="ml-2">Questions fréquentes</span>
              </h3>
              <p className="text-slate-600 mb-4">
                Consultez notre <a href="/faq" className="text-purple-600 hover:text-purple-800 underline font-medium">page FAQ</a> pour 
                les réponses aux questions courantes, ou contactez-nous directement via le chat 
                pour des questions spécifiques à votre situation.
              </p>
              <div className="text-sm text-purple-700 font-medium">
                → Gain de temps assuré
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
