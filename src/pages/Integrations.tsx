/**
 * Integrations Page
 * Showcase all integrations for SEO and lead generation
 */

import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { integrationsData, getIntegrationsByCategory } from "@/data/integrations-data";
import { Check, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Integrations = () => {
  const categories = ['E-commerce', 'Marketplace', 'Shipping', 'CRM', 'Tools'];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Intégrations | 50+ Connexions E-commerce & Marketplaces"
        description="Connectez Speed E-Log à vos plateformes e-commerce, marketplaces et outils. Shopify, WooCommerce, Amazon, SendCloud et 50+ intégrations natives."
        keywords="intégrations logistique, Shopify fulfillment, WooCommerce fulfillment, Amazon FBA, SendCloud"
      />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-[1280px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium">50+ Intégrations Natives</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              S'intègre avec votre Stack Existant
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Connectez Speed E-Log à vos plateformes e-commerce, marketplaces et outils en quelques clics
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold text-lg hover:scale-105 transition-all duration-300">
                  Demander une démo
                </button>
              </Link>
              <a href="#integrations-list">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300">
                  Voir les intégrations
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Pourquoi nos Intégrations ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Setup Ultra-Rapide</h3>
              <p className="text-gray-600">
                Connexion en 5-30 minutes selon la plateforme. Assistance complète pour la configuration.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sync Temps Réel</h3>
              <p className="text-gray-600">
                Commandes, stocks, tracking synchronisés en temps réel. Zéro intervention manuelle.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Dédié</h3>
              <p className="text-gray-600">
                Équipe technique disponible pour vous accompagner dans l'intégration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations List */}
      <section id="integrations-list" className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1280px]">
          {categories.map((category, catIndex) => {
            const categoryIntegrations = getIntegrationsByCategory(category);
            if (categoryIntegrations.length === 0) return null;

            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-heading font-bold mb-8">
                  {category === 'E-commerce' && 'Plateformes E-commerce'}
                  {category === 'Marketplace' && 'Marketplaces'}
                  {category === 'Shipping' && 'Transporteurs'}
                  {category === 'CRM' && 'CRM & Marketing'}
                  {category === 'Tools' && 'Outils & Automation'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryIntegrations.map((integration, index) => (
                    <motion.div
                      key={integration.slug}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <img
                            src={integration.logo}
                            alt={`${integration.name} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{integration.name}</h3>
                          {integration.isNative && (
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                              Natif
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {integration.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {integration.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Setup: {integration.setupTime}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Besoin d'une Intégration Personnalisée ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Notre API REST complète vous permet de créer vos propres intégrations ou d'utiliser notre SDK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-all duration-300">
                  Parler à un développeur
                </button>
              </Link>
              <a href="/docs/api" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Documentation API
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 max-w-[900px] text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Prêt à Connecter vos Systèmes ?
          </h2>
          <p className="text-xl mb-8">
            Configuration gratuite et assistance complète pour toutes les intégrations
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold text-lg hover:scale-105 transition-all duration-300">
              Démarrer maintenant
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
