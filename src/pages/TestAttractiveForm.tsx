import React from "react";
import { AttractiveQuoteButton } from "@/components/contact/AttractiveQuoteButton";
import { AttractiveQuoteForm } from "@/components/contact/AttractiveQuoteForm";
import { motion } from "framer-motion";
import { Sparkles, Star, CheckCircle } from "lucide-react";

export const TestAttractiveForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header de test */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            <span>Page de test - Formulaire attractif</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Test du nouveau formulaire attractif
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cette page permet de tester les différentes variantes du nouveau formulaire de devis.
          </p>
        </motion.div>

        {/* Tests des boutons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              Bouton par défaut
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Version standard du bouton avec animations et effets de brillance.
            </p>
            <AttractiveQuoteButton variant="default" size="md" />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              Bouton Hero
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Version pour les sections héros avec dégradé violet-rose.
            </p>
            <AttractiveQuoteButton variant="hero" size="lg" />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Informations
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Le bouton flottant apparaît automatiquement en bas à droite après 2 secondes.
            </p>
            <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
              Regardez en bas à droite de votre écran !
            </div>
          </div>
        </motion.div>

        {/* Bouton flottant */}
        <AttractiveQuoteButton variant="floating" size="md" />

        {/* Formulaire intégré */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Formulaire intégré (pour test direct)
            </h2>
            <p className="text-gray-600">
              Version du formulaire sans modal pour tester directement les fonctionnalités.
            </p>
          </div>
          
          <AttractiveQuoteForm />
        </motion.div>

        {/* Caractéristiques du nouveau formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ✨ Caractéristiques du nouveau formulaire
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-green-700">🔒 Sécurité</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Protection anti-bot (honeypot)</li>
                <li>• Rate limiting</li>
                <li>• Validation Zod</li>
                <li>• Sanitisation des données</li>
                <li>• Token CSRF</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-700">🎨 Design</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Animations Framer Motion</li>
                <li>• Dégradés modernes</li>
                <li>• Effets de survol</li>
                <li>• Progress bar interactive</li>
                <li>• Particules flottantes</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-purple-700">🔗 Intégrations</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HubSpot (mêmes IDs)</li>
                <li>• Supabase backend</li>
                <li>• Toast notifications</li>
                <li>• Validation temps réel</li>
                <li>• Multi-étapes fluides</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-blue-800 text-sm text-center">
              <strong>✅ Toutes les propriétés du formulaire original ont été conservées</strong><br/>
              + Design moderne et attractif + Animations engageantes + UX améliorée
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestAttractiveForm;