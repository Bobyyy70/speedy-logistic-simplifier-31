import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, RotateCcw, CheckCircle, Clock, DollarSign, Users, Package, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GestionRetoursEcommerce: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const returnStats = [
    { label: "Taux retour moyen e-commerce", value: "8-15%", color: "text-orange-600" },
    { label: "Coût traitement retour", value: "25€", color: "text-red-600" },
    { label: "Délai traitement optimisé", value: "24h", color: "text-green-600" },
    { label: "Taux satisfaction post-retour", value: "94%", color: "text-blue-600" }
  ];

  const returnReasons = [
    { reason: "Produit ne correspond pas", percentage: 35, solutions: ["Photos détaillées", "Guide des tailles", "AR/VR"] },
    { reason: "Défaut/dommage livraison", percentage: 22, solutions: ["Emballage renforcé", "Assurance transport", "Contrôle qualité"] },
    { reason: "Livraison tardive", percentage: 18, solutions: ["Tracking proactif", "Communication délais", "Options express"] },
    { reason: "Erreur de commande", percentage: 15, solutions: ["Double contrôle", "Scan systématique", "Formation équipes"] },
    { reason: "Changement d'avis", percentage: 10, solutions: ["Période d'essai", "Politique flexible", "Service client"] }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Demande retour client",
      description: "Portail en ligne ou service client",
      duration: "< 2 min",
      automation: "95%",
      actions: ["Vérification éligibilité", "Génération étiquette", "Email confirmation"]
    },
    {
      step: 2,
      title: "Expédition retour",
      description: "Colis récupéré chez le client",
      duration: "24-48h",
      automation: "85%",
      actions: ["Collecte transporteur", "Tracking retour", "Notification réception"]
    },
    {
      step: 3,
      title: "Réception entrepôt",
      description: "Contrôle état et conformité",
      duration: "2-4h",
      automation: "60%",
      actions: ["Scan réception", "Contrôle visuel", "Mise à jour stock"]
    },
    {
      step: 4,
      title: "Traitement retour",
      description: "Remboursement ou échange",
      duration: "< 24h",
      automation: "90%",
      actions: ["Validation état", "Remboursement auto", "Notification client"]
    }
  ];

  const optimizations = [
    {
      category: "Prévention",
      icon: <AlertCircle className="h-6 w-6" />,
      strategies: [
        { name: "Fiches produits enrichies", impact: "-25% retours", description: "Photos 360°, vidéos, guides tailles" },
        { name: "Recommandations IA", impact: "-15% retours", description: "Suggestions basées sur l'historique client" },
        { name: "Chat pré-achat", impact: "-20% retours", description: "Conseil avant commande pour éviter déceptions" }
      ]
    },
    {
      category: "Processus",
      icon: <RotateCcw className="h-6 w-6" />,
      strategies: [
        { name: "Portail retours intuitif", impact: "+40% satisfaction", description: "Interface simple, étiquettes automatiques" },
        { name: "Collecte à domicile", impact: "+60% NPS", description: "Service premium inclus ou en option" },
        { name: "Contrôle qualité rapide", impact: "-50% délais", description: "Process standardisé avec scan et photos" }
      ]
    },
    {
      category: "Valorisation",
      icon: <DollarSign className="h-6 w-6" />,
      strategies: [
        { name: "Reconditionnement", impact: "70% valeur", description: "Remise en vente après contrôle qualité" },
        { name: "Liquidation B2B", impact: "40% valeur", description: "Vente lots à revendeurs spécialisés" },
        { name: "Don associations", impact: "Déduction fiscale", description: "Partenariats caritatifs + image positive" }
      ]
    }
  ];

  const roi = [
    { metric: "Réduction coûts traitement", value: "-35%", details: "Automatisation + processus optimisé" },
    { metric: "Accélération remboursements", value: "3x plus rapide", details: "24h vs 72h en moyenne marché" },
    { metric: "Taux satisfaction post-retour", value: "+25%", details: "Expérience fluide = fidélisation" },
    { metric: "Valorisation stock retourné", value: "+50%", details: "Reconditionnement professionnel" }
  ];

  const technologies = [
    {
      name: "Portail retours automatisé",
      features: ["Interface intuitive", "Étiquettes automatiques", "Suivi temps réel"],
      integration: "Shopify, WooCommerce, API"
    },
    {
      name: "IA d'évaluation d'état",
      features: ["Reconnaissance visuelle", "Évaluation automatique", "Décision reconditionnement"],
      integration: "Caméras + algorithmes"
    },
    {
      name: "Workflows intelligents",
      features: ["Routage automatique", "Notifications proactives", "Remboursements auto"],
      integration: "n8n, Zapier, API natives"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Gestion Optimisée des Retours E-commerce",
    "description": "Guide complet pour optimiser la gestion des retours e-commerce : processus, technologies, prévention et ROI.",
    "totalTime": "PT24H",
    "step": processSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "timeRequired": `PT${step.duration.replace(/[^\d]/g, '')}H`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Gestion Retours E-commerce : Processus Optimisé & ROI | Speed E-Log</title>
        <meta name="description" content="Optimisez la gestion des retours e-commerce : processus automatisé, réduction coûts, satisfaction client. Portail retours, reconditionnement et workflows." />
        <meta name="keywords" content="gestion retours e-commerce, processus retours optimisé, portail retours automatique, reconditionnement produits, ROI retours" />
        <link rel="canonical" href="https://speedelog.net/gestion-retours-ecommerce" />
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
                <RotateCcw className="h-4 w-4 mr-1" />
                Gestion des Retours
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gestion des Retours E-commerce
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transformez vos retours en avantage concurrentiel. Processus optimisé, 
                satisfaction client maximisée et valorisation intelligente des produits retournés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Optimiser mes retours
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/guide-logistique-ecommerce-pme">
                  <Button variant="outline" size="lg">
                    Guide logistique complet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Statistiques des retours */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">L'enjeu des retours e-commerce</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {returnStats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-2xl font-bold mb-2">
                      <span className={stat.color}>{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Impact business des retours mal gérés
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 92% des consommateurs rachètent après une expérience de retour positive</li>
                  <li>• 1 retour mal géré = perte de 3 clients potentiels (bouche-à-oreille négatif)</li>
                  <li>• Coût retour non optimisé : jusqu'à 21% de la marge produit</li>
                </ul>
              </div>
            </section>

            {/* Causes des retours */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Principales causes de retours</h2>
              <div className="space-y-4">
                {returnReasons.map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h3 className="font-semibold mb-2">{item.reason}</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-sm font-medium mb-2">Solutions préventives :</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.solutions.map((solution, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {solution}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Processus optimisé */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Processus de retour optimisé</h2>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {step.duration}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {step.automation} automatisé
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.actions.map((action, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {action}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Stratégies d'optimisation */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Stratégies d'optimisation</h2>
              <div className="space-y-8">
                {optimizations.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {category.strategies.map((strategy, i) => (
                        <Card key={i} className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-sm">{strategy.name}</h4>
                            <Badge variant="secondary" className="text-xs">{strategy.impact}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{strategy.description}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies et outils */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Technologies et outils</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                    <ul className="space-y-2 mb-4">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="outline" className="text-xs">
                      <Package className="h-3 w-3 mr-1" />
                      {tech.integration}
                    </Badge>
                  </Card>
                ))}
              </div>
            </section>

            {/* ROI et bénéfices */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">ROI et bénéfices mesurables</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {roi.map((metric, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">{metric.metric}</h3>
                      <Badge variant="secondary" className="text-lg font-bold">{metric.value}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.details}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Étude de cas */}
            <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">📊 Étude de cas : Boutique mode</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Situation initiale :</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Taux de retour : 18%</li>
                    <li>• Délai traitement : 5-7 jours</li>
                    <li>• Coût traitement : 32€/retour</li>
                    <li>• Satisfaction post-retour : 67%</li>
                    <li>• Perte sur retours : 85% valeur</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Après optimisation :</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Taux de retour : <strong>12%</strong> (-33%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Délai traitement : <strong>24h</strong> (-80%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Coût traitement : <strong>18€</strong> (-44%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Satisfaction : <strong>94%</strong> (+40%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Valorisation : <strong>65%</strong> (+320%)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm">
                  <strong>Impact global :</strong> Économies de 180k€/an + amélioration NPS de +35 points
                </p>
              </div>
            </section>

            {/* Bonnes pratiques */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Bonnes pratiques</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Expérience client
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Portail retours accessible 24/7 avec étiquettes prépayées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Communication proactive sur l'avancement du retour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Options flexibles : remboursement, échange, avoir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Collecte à domicile pour commandes {'>'}100€</span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Optimisation coûts
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Reconditionnement systématique des produits en bon état</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Partenariats liquidation B2B pour stocks déclassés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Analytics prédictives pour réduire les retours futurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Processus automatisé pour réduire les coûts de main d'œuvre</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Internal linking */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Guides connexes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/optimisation-preparation-commande" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">📦 Optimisation préparation</h4>
                  <p className="text-sm text-muted-foreground">Techniques pour réduire les erreurs de préparation</p>
                </Link>
                <Link to="/guide-logistique-ecommerce-pme" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">📋 Guide logistique PME</h4>
                  <p className="text-sm text-muted-foreground">Guide complet de la logistique e-commerce</p>
                </Link>
                <Link to="/integrations-ecommerce-logistique" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">🔗 Intégrations techniques</h4>
                  <p className="text-sm text-muted-foreground">API et connecteurs pour automatiser les retours</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Optimisez votre gestion des retours</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Transformez vos retours en avantage concurrentiel avec un processus optimisé 
                qui fidélise vos clients et valorise vos produits retournés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg">
                    Audit de mon processus retours
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/calculateur-roi-logistique">
                  <Button variant="outline" size="lg">
                    Calculer mes économies
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionRetoursEcommerce;