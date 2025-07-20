
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, Code, Zap, Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface Integration {
  name: string;
  logo: string;
  description: string;
  category: 'cms' | 'marketplace' | 'transport';
  isPopular?: boolean;
  comingSoon?: boolean;
}

const integrations: Integration[] = [
  // CMS E-commerce (12)
  { name: "Shopify", logo: "🛍️", description: "Synchronisation automatique des commandes", category: "cms", isPopular: true },
  { name: "WooCommerce", logo: "🔧", description: "Plugin officiel Speed E-Log", category: "cms", isPopular: true },
  { name: "PrestaShop", logo: "🛒", description: "Module natif d'intégration", category: "cms", isPopular: true },
  { name: "Magento", logo: "🎯", description: "Extension marketplace", category: "cms" },
  { name: "BigCommerce", logo: "💼", description: "API REST complète", category: "cms" },
  { name: "Squarespace Commerce", logo: "⬜", description: "Intégration par webhook", category: "cms" },
  { name: "Wix eCommerce", logo: "🌐", description: "App store Wix", category: "cms" },
  { name: "Drupal Commerce", logo: "💧", description: "Module contributeur", category: "cms" },
  { name: "OpenCart", logo: "🛒", description: "Extension gratuite", category: "cms" },
  { name: "Sylius", logo: "🚀", description: "Bundle Symfony", category: "cms" },
  { name: "Thelia", logo: "🇫🇷", description: "Plugin français", category: "cms" },
  { name: "CubeCart", logo: "📦", description: "Module tiers", category: "cms" },

  // Marketplaces (15)
  { name: "Amazon", logo: "📦", description: "FBA/FBM synchronisé", category: "marketplace", isPopular: true },
  { name: "Cdiscount", logo: "🇫🇷", description: "Fulfillment by Cdiscount", category: "marketplace", isPopular: true },
  { name: "Fnac", logo: "📚", description: "Marketplace française", category: "marketplace", isPopular: true },
  { name: "eBay", logo: "🔨", description: "Gestion multi-comptes", category: "marketplace" },
  { name: "Rakuten France", logo: "🛍️", description: "Ex-PriceMinister", category: "marketplace" },
  { name: "Darty", logo: "⚡", description: "Électroménager & High-tech", category: "marketplace" },
  { name: "Boulanger", logo: "🔌", description: "Spécialiste tech", category: "marketplace" },
  { name: "Rue du Commerce", logo: "🛣️", description: "Marketplace généraliste", category: "marketplace" },
  { name: "Manomano", logo: "🔨", description: "Bricolage & jardinage", category: "marketplace" },
  { name: "Zalando", logo: "👗", description: "Mode & lifestyle", category: "marketplace", comingSoon: true },
  { name: "La Redoute", logo: "🏠", description: "Mode & maison", category: "marketplace", comingSoon: true },
  { name: "Showroomprive", logo: "💎", description: "Ventes privées", category: "marketplace", comingSoon: true },
  { name: "Vinted", logo: "👕", description: "Seconde main", category: "marketplace", comingSoon: true },
  { name: "Etsy", logo: "🎨", description: "Créateurs & artisans", category: "marketplace", comingSoon: true },
  { name: "Wish", logo: "⭐", description: "Marketplace internationale", category: "marketplace", comingSoon: true },

  // Transporteurs (10)
  { name: "DPD", logo: "📮", description: "Predict & Express", category: "transport", isPopular: true },
  { name: "UPS", logo: "🚚", description: "Réseau international", category: "transport", isPopular: true },
  { name: "FedEx", logo: "✈️", description: "Express mondial", category: "transport", isPopular: true },
  { name: "Colissimo", logo: "🇫🇷", description: "La Poste française", category: "transport", isPopular: true },
  { name: "Chronopost", logo: "⏰", description: "Express J+1", category: "transport" },
  { name: "GLS", logo: "🌍", description: "Réseau européen", category: "transport" },
  { name: "Colis Privé", logo: "📦", description: "Livraison domicile", category: "transport" },
  { name: "Mondial Relay", logo: "🏪", description: "Points relais", category: "transport" },
  { name: "TNT", logo: "💨", description: "Express B2B", category: "transport" },
  { name: "DHL", logo: "🔴", description: "Leader international", category: "transport" },
];

const Integrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cms' | 'marketplace' | 'transport'>('cms');

  const getIntegrationsByCategory = (category: string) => {
    return integrations.filter(integration => integration.category === category);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Intégrations Speed E-Log",
    "description": "Liste complète des intégrations e-commerce, marketplaces et transporteurs Speed E-Log",
    "numberOfItems": integrations.length,
    "itemListElement": integrations.map((integration, index) => ({
      "@type": "SoftwareApplication",
      "position": index + 1,
      "name": integration.name,
      "description": integration.description,
      "applicationCategory": integration.category
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Intégrations E-commerce | Speed E-Log - 40+ Connecteurs</title>
        <meta name="description" content="Connectez Speed E-Log à plus de 40 plateformes : Shopify, WooCommerce, Amazon, Cdiscount, DPD, UPS. Intégrations e-commerce, marketplaces et transporteurs." />
        <meta name="keywords" content="intégrations e-commerce, connecteur Shopify Speed E-Log, plugin WooCommerce expédition, API logistique, webhooks" />
        <meta property="og:title" content="Intégrations E-commerce | Speed E-Log - 40+ Connecteurs" />
        <meta property="og:description" content="Plus de 40 intégrations disponibles : CMS, marketplaces et transporteurs. Connectez facilement votre e-commerce à Speed E-Log." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            40+ Intégrations disponibles
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Connectez Speed E-Log<br />
            à votre écosystème
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Intégrations natives avec les principales plateformes e-commerce, marketplaces et transporteurs.
            Un stock centralisé, des expéditions multi-canaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="blue" size="lg" asChild>
              <Link to="/contact">
                <Code className="w-4 h-4 mr-2" />
                Documentation API
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Parlez à un intégrateur
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-lg p-1 inline-flex">
            {[
              { key: 'cms', label: 'CMS E-commerce', count: 12 },
              { key: 'marketplace', label: 'Marketplaces', count: 15 },
              { key: 'transport', label: 'Transporteurs', count: 10 }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {getIntegrationsByCategory(activeTab).map((integration, index) => (
            <Card key={integration.name} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {integration.isPopular && (
                <Badge className="absolute top-3 right-3 bg-orange-500 text-white">
                  Populaire
                </Badge>
              )}
              {integration.comingSoon && (
                <Badge variant="outline" className="absolute top-3 right-3">
                  Bientôt
                </Badge>
              )}
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">{integration.logo}</div>
                  <h3 className="font-semibold text-lg mb-2">{integration.name}</h3>
                  <p className="text-sm text-slate-600">{integration.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Un stock → multi-canal</h3>
              <p className="text-slate-600">
                Centralisez votre stock et vendez sur toutes vos plateformes simultanément.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Webhooks temps réel</h3>
              <p className="text-slate-600">
                Synchronisation instantanée des commandes, stocks et statuts de livraison.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Suivi marque blanche</h3>
              <p className="text-slate-600">
                Vos clients reçoivent les notifications sous votre marque, pas la nôtre.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tutorials Accordion */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Guides d'intégration</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shopify">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4" />
                  Comment connecter Shopify à Speed E-Log
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Guide complet pour connecter votre boutique Shopify en moins de 5 minutes.
                  </p>
                  <div className="bg-slate-100 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Étapes d'installation :</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Installez l'app Speed E-Log depuis le Shopify App Store</li>
                      <li>Connectez votre compte Speed E-Log</li>
                      <li>Configurez vos règles de synchronisation</li>
                      <li>Testez avec une commande test</li>
                    </ol>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir la documentation complète
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="woocommerce">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4" />
                  Installer le plugin WooCommerce
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Plugin WordPress officiel pour WooCommerce, téléchargement gratuit.
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Télécharger le plugin
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="api">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4" />
                  Intégration via API REST
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Documentation complète de notre API REST pour les développeurs.
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation API
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
