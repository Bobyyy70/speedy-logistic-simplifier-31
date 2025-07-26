import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Code, Plug, Zap, CheckCircle, ExternalLink, FileCode, Video, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegrationsEcommerce: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
      category: "CMS E-commerce",
      items: [
        { name: "Shopify", logo: "🛍️", integration: "Native", setupTime: "2h", features: ["Sync commandes", "Gestion stocks", "Webhooks"] },
        { name: "WooCommerce", logo: "🔌", integration: "Plugin", setupTime: "1h", features: ["Plugin dédié", "Auto-sync", "Multi-sites"] },
        { name: "PrestaShop", logo: "🛒", integration: "Module", setupTime: "3h", features: ["Module certifié", "API REST", "Multi-boutiques"] },
        { name: "Magento", logo: "🔧", integration: "Extension", setupTime: "4h", features: ["Extension marketplace", "B2B support", "Multi-stores"] }
      ]
    },
    {
      category: "Marketplaces",
      items: [
        { name: "Amazon", logo: "📦", integration: "API", setupTime: "1 jour", features: ["FBA/FBM", "Multi-comptes", "Reporting"] },
        { name: "Cdiscount", logo: "🏪", integration: "API", setupTime: "4h", features: ["C-Logistics", "Stock sync", "Pricing"] },
        { name: "Fnac", logo: "📚", integration: "API", setupTime: "6h", features: ["Marketplace", "Stock temps réel", "Promotions"] },
        { name: "eBay", logo: "🔨", integration: "API", setupTime: "4h", features: ["Global Shipping", "Best Offer", "Store"] }
      ]
    },
    {
      category: "ERP & Gestion",
      items: [
        { name: "Sage", logo: "💼", integration: "API", setupTime: "1-2 jours", features: ["Compta sync", "Stocks", "Clients"] },
        { name: "SAP", logo: "🏢", integration: "Connecteur", setupTime: "3-5 jours", features: ["Enterprise", "B2B", "Multi-entités"] },
        { name: "Dolibarr", logo: "⚙️", integration: "Module", setupTime: "4h", features: ["Open source", "CRM", "Factures"] },
        { name: "Odoo", logo: "🔄", integration: "Connecteur", setupTime: "1 jour", features: ["All-in-one", "Workflows", "BI"] }
      ]
    }
  ];

  const transporters = [
    { name: "Colissimo", type: "National", features: ["Tracking", "Points relais", "International"] },
    { name: "Chronopost", type: "Express", features: ["24h", "Samedi", "Relais"] },
    { name: "DPD", type: "International", features: ["Europe", "Predict", "Pickup"] },
    { name: "UPS", type: "International", features: ["Worldwide", "B2B", "Customs"] },
    { name: "FedEx", type: "International", features: ["Express", "Freight", "E-commerce"] },
    { name: "Mondial Relay", type: "Points relais", features: ["7000 points", "Europe", "Économique"] }
  ];

  const apiFeatures = [
    {
      title: "API REST moderne",
      description: "Documentation OpenAPI 3.0 avec authentification OAuth 2.0",
      endpoint: "POST /api/v1/orders",
      code: `{
  "order_id": "ORD-123456",
  "items": [...],
  "shipping_address": {...},
  "preferences": {
    "carrier": "auto",
    "packaging": "eco"
  }
}`
    },
    {
      title: "Webhooks temps réel",
      description: "Notifications instantanées sur les changements de statut",
      endpoint: "POST /webhooks/order-updated",
      code: `{
  "event": "order.shipped",
  "order_id": "ORD-123456",
  "tracking_number": "3S12345678901",
  "carrier": "colissimo",
  "timestamp": "2025-01-15T10:30:00Z"
}`
    },
    {
      title: "SDK JavaScript",
      description: "Bibliothèque NPM pour une intégration simplifiée",
      endpoint: "npm install @speedelog/sdk",
      code: `import SpeedELog from '@speedelog/sdk';

const speedelog = new SpeedELog({
  apiKey: 'your-api-key',
  environment: 'production'
});

await speedelog.orders.create({
  externalId: 'shop-123',
  items: [...]
});`
    }
  ];

  const tutorials = [
    {
      platform: "Shopify",
      type: "Vidéo",
      duration: "15 min",
      description: "Configuration complète de l'app Shopify Speed E-Log",
      steps: ["Installation app", "Configuration entrepôt", "Test commandes", "Personnalisation"]
    },
    {
      platform: "WooCommerce",
      type: "Guide",
      duration: "20 min",
      description: "Installation et paramétrage du plugin WordPress",
      steps: ["Téléchargement plugin", "Activation", "Paramètres API", "Zone de livraison"]
    },
    {
      platform: "API REST",
      type: "Documentation",
      duration: "30 min",
      description: "Développement d'une intégration custom avec l'API",
      steps: ["Authentification", "Endpoints", "Webhooks", "Gestion erreurs"]
    }
  ];

  const useCases = [
    {
      title: "Boutique multi-canal",
      description: "Centralisez vos ventes Shopify + Amazon + site custom",
      techStack: ["Shopify Plus", "Amazon API", "Custom API"],
      benefits: ["Stock unifié", "Prep centralisée", "Coûts optimisés"]
    },
    {
      title: "Marketplace européenne",
      description: "Vendez sur 5 marketplaces européennes depuis un stock",
      techStack: ["Amazon EU", "eBay", "Cdiscount", "Fnac"],
      benefits: ["Expansion rapide", "Logistique simplifiée", "Conformité locale"]
    },
    {
      title: "Automatisation n8n",
      description: "Workflows intelligents pour votre écosystème e-commerce",
      techStack: ["n8n", "Webhooks", "CRM", "Notifications"],
      benefits: ["0 intervention", "Réactivité client", "Analytiques auto"]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Guide Complet des Intégrations E-commerce et Logistique 3PL",
    "description": "Documentation technique complète pour intégrer votre e-commerce avec une solution logistique 3PL : API, webhooks, plateformes supportées.",
    "author": {
      "@type": "Organization",
      "name": "Speed E-Log"
    },
    "datePublished": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://speedelog.net/integrations-ecommerce-logistique"
    }
  };

  return (
    <>
      <Helmet>
        <title>Intégrations E-commerce Logistique : Shopify, API, WooCommerce | Speed E-Log</title>
        <meta name="description" content="Guide technique des intégrations e-commerce 3PL : Shopify, WooCommerce, API REST, webhooks. Documentation développeur et tutoriels d'installation." />
        <meta name="keywords" content="intégration Shopify fulfillment, API logistique, webhook e-commerce, plugin WooCommerce, connecteur 3PL" />
        <link rel="canonical" href="https://speedelog.net/integrations-ecommerce-logistique" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Code className="h-4 w-4 mr-1" />
                Documentation Technique
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Intégrations E-commerce & Logistique
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Connectez votre boutique e-commerce à notre solution logistique en quelques clics. 
                Plus de 40 plateformes supportées avec API moderne et documentation complète.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  <FileCode className="mr-2 h-4 w-4" />
                  Documentation API
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Aide à l'intégration
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Plateformes supportées */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Plateformes supportées</h2>
              {platforms.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((platform, index) => (
                      <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-2">{platform.logo}</div>
                          <h4 className="text-lg font-semibold">{platform.name}</h4>
                          <Badge variant="secondary" className="mt-1">{platform.integration}</Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Setup:</span>
                            <span className="font-medium">{platform.setupTime}</span>
                          </div>
                          <div className="space-y-1">
                            {platform.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                <span className="text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Transporteurs */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Transporteurs intégrés</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transporters.map((transporter, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold">{transporter.name}</h4>
                      <Badge variant="outline">{transporter.type}</Badge>
                    </div>
                    <div className="space-y-1">
                      {transporter.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* API Documentation */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">API et développement</h2>
              <div className="space-y-8">
                {apiFeatures.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                        <p className="text-muted-foreground mb-4">{feature.description}</p>
                        <Badge variant="outline" className="font-mono text-xs">
                          {feature.endpoint}
                        </Badge>
                      </div>
                      <div className="bg-card rounded-lg p-4">
                        <pre className="text-xs overflow-x-auto">
                          <code>{feature.code}</code>
                        </pre>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tutoriels */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Tutoriels d'intégration</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tutorials.map((tutorial, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {tutorial.type === 'Vidéo' && <Video className="h-5 w-5 text-primary" />}
                      {tutorial.type === 'Guide' && <Book className="h-5 w-5 text-primary" />}
                      {tutorial.type === 'Documentation' && <FileCode className="h-5 w-5 text-primary" />}
                      <div>
                        <h4 className="font-semibold">{tutorial.platform}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">{tutorial.type}</Badge>
                          <span>{tutorial.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{tutorial.description}</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="steps">
                        <AccordionTrigger className="text-sm">Étapes détaillées</AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-1 text-sm">
                            {tutorial.steps.map((step, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">
                                  {i + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                ))}
              </div>
            </section>

            {/* Cas d'usage */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Cas d'usage avancés</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold mb-3">{useCase.title}</h4>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium">Technologies :</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {useCase.techStack.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Bénéfices :</span>
                        <ul className="mt-1 space-y-1">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Workflow Integration */}
            <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Workflow d'intégration type</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Plug className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">1. Connexion</h4>
                  <p className="text-sm text-muted-foreground">Installation du plugin ou configuration API</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">2. Synchronisation</h4>
                  <p className="text-sm text-muted-foreground">Import des produits et configuration stocks</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">3. Tests</h4>
                  <p className="text-sm text-muted-foreground">Validation avec commandes de test</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">4. Production</h4>
                  <p className="text-sm text-muted-foreground">Mise en service et monitoring</p>
                </div>
              </div>
            </section>

            {/* Related content */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Guides spécialisés</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/integration-shopify-fulfillment" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">🛍️ Shopify Fulfillment</h4>
                  <p className="text-sm text-muted-foreground">Guide complet pour connecter votre boutique Shopify avec Speed E-Log</p>
                </Link>
                <Link to="/logistique-woocommerce" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">🔌 WooCommerce Logistique</h4>
                  <p className="text-sm text-muted-foreground">Intégration native WordPress avec plugin dédié</p>
                </Link>
                <Link to="/automatisation-logistique-n8n" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">⚡ Automatisation n8n</h4>
                  <p className="text-sm text-muted-foreground">Workflows avancés pour automatiser votre logistique</p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour votre intégration ?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Notre équipe technique vous accompagne dans l'intégration de votre plateforme e-commerce. 
                Configuration, tests et mise en production inclus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg">
                    Demander un accompagnement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <FileCode className="mr-2 h-4 w-4" />
                  Accéder à la documentation
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationsEcommerce;