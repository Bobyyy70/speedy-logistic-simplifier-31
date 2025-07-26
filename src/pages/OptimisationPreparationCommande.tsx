import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Target, Clock, CheckCircle, AlertTriangle, BarChart3, Zap, Package, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const OptimisationPreparationCommande: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Taux de précision", value: 99.98, unit: "%", color: "text-green-600" },
    { label: "Temps moyen picking", value: 3.2, unit: " min", color: "text-blue-600" },
    { label: "Commandes/heure/opérateur", value: 18, unit: "", color: "text-purple-600" },
    { label: "Réduction erreurs", value: 85, unit: "%", color: "text-orange-600" }
  ];

  const optimizationTechniques = [
    {
      title: "Picking par lots (Batch Picking)",
      description: "Préparation simultanée de plusieurs commandes avec produits communs",
      impact: "Gain de productivité : +40%",
      implementation: "Algorithme de regroupement intelligent basé sur la géolocalisation des produits",
      benefits: ["Réduction des déplacements", "Optimisation des trajets", "Économie de temps significative"]
    },
    {
      title: "Zonage stratégique ABC",
      description: "Organisation de l'entrepôt selon la rotation des produits",
      impact: "Réduction déplacements : -35%",
      implementation: "Zone A (fast-movers) près expédition, Zone C (slow-movers) en périphérie",
      benefits: ["Accès rapide produits populaires", "Optimisation layout", "Réduction fatigue opérateurs"]
    },
    {
      title: "Contrôle qualité systématique",
      description: "Vérification multi-niveaux avec scan codes-barres",
      impact: "Erreurs réduites de 95%",
      implementation: "Scan pickup + scan packing + contrôle poids automatique",
      benefits: ["Zéro erreur expédition", "Traçabilité complète", "Satisfaction client garantie"]
    }
  ];

  const technologies = [
    {
      name: "Système WMS avancé",
      description: "Warehouse Management System avec IA prédictive",
      features: ["Optimisation trajets", "Prédiction demande", "Analytics temps réel"],
      roi: "ROI : 240% sur 24 mois"
    },
    {
      name: "Picking vocal (Voice Picking)",
      description: "Guidage mains-libres des opérateurs par casque audio",
      features: ["Mains libres", "Réduction erreurs", "Productivité accrue"],
      roi: "Productivité : +25%"
    },
    {
      name: "Scan codes-barres 2D",
      description: "Lecture instantanée avec vérification automatique",
      features: ["Lecture rapide", "Multi-formats", "Validation auto"],
      roi: "Temps scan : -60%"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Réception commande",
      description: "Import automatique depuis votre e-commerce",
      time: "< 1 min",
      automation: 100
    },
    {
      step: 2,
      title: "Génération picking list",
      description: "Optimisation trajets et regroupement commandes",
      time: "2-3 min",
      automation: 90
    },
    {
      step: 3,
      title: "Préparation physique",
      description: "Guidage vocal + scan contrôle qualité",
      time: "3-8 min",
      automation: 75
    },
    {
      step: 4,
      title: "Emballage intelligent",
      description: "Sélection auto format + matériaux éco",
      time: "1-2 min",
      automation: 80
    },
    {
      step: 5,
      title: "Expédition",
      description: "Étiquetage auto + dispatch transporteur",
      time: "< 1 min",
      automation: 95
    }
  ];

  const kpis = [
    { name: "Temps de cycle complet", target: "< 12 minutes", current: "8.5 min" },
    { name: "Taux de précision globale", target: "> 99.5%", current: "99.98%" },
    { name: "Productivité opérateur", target: "> 15 cde/h", current: "18 cde/h" },
    { name: "Satisfaction client post-livraison", target: "> 95%", current: "97.2%" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Optimisation de la Préparation de Commande E-commerce",
    "description": "Guide complet des techniques d'optimisation de la préparation de commande pour l'e-commerce : picking, technologies, KPIs.",
    "totalTime": "PT30M",
    "supply": [
      "Système WMS",
      "Codes-barres 2D", 
      "Picking vocal",
      "Algorithmes d'optimisation"
    ],
    "tool": [
      "Scanner codes-barres",
      "Casque audio picking vocal",
      "Logiciel WMS",
      "Balance automatique"
    ],
    "step": processSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "timeRequired": `PT${step.time.replace(/[^\d]/g, '')}M`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Optimisation Préparation Commande E-commerce : Techniques & Technologies | Speed E-Log</title>
        <meta name="description" content="Guide expert optimisation préparation commande e-commerce : picking par lots, WMS, contrôle qualité. Réduisez erreurs et accélérez vos expéditions." />
        <meta name="keywords" content="optimisation picking, préparation commande e-commerce, WMS logistique, batch picking, contrôle qualité fulfillment" />
        <link rel="canonical" href="https://speedelog.net/optimisation-preparation-commande" />
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
                <Target className="h-4 w-4 mr-1" />
                Guide Technique Expert
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Optimisation de la Préparation de Commande
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Découvrez les techniques avancées et technologies de pointe pour optimiser votre préparation 
                de commande, réduire les erreurs et accélérer vos expéditions e-commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Audit de votre processus
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

            {/* Métriques de performance */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Performance de référence</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">
                      <span className={metric.color}>{metric.value}</span>
                      <span className="text-sm text-muted-foreground">{metric.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Processus optimisé */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Processus de préparation optimisé</h2>
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
                              {step.time}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {step.automation}% automatisé
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Niveau d'automatisation :</span>
                          <Progress value={step.automation} className="flex-1 max-w-xs" />
                          <span className="text-sm font-medium">{step.automation}%</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Techniques d'optimisation */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Techniques d'optimisation avancées</h2>
              <div className="space-y-8">
                {optimizationTechniques.map((technique, index) => (
                  <Card key={index} className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-3">{technique.title}</h3>
                        <p className="text-muted-foreground mb-4">{technique.description}</p>
                        <div className="bg-muted/30 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold mb-2">Mise en œuvre :</h4>
                          <p className="text-sm text-muted-foreground">{technique.implementation}</p>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {technique.impact}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Bénéfices :</h4>
                        <ul className="space-y-2">
                          {technique.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technologies innovantes */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Technologies innovantes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        {index === 0 && <Package className="h-8 w-8" />}
                        {index === 1 && <Zap className="h-8 w-8" />}
                        {index === 2 && <Scan className="h-8 w-8" />}
                      </div>
                      <h3 className="text-lg font-semibold">{tech.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                    <ul className="space-y-1 mb-4">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="outline" className="w-full justify-center text-primary">
                      {tech.roi}
                    </Badge>
                  </Card>
                ))}
              </div>
            </section>

            {/* KPIs et contrôle qualité */}
            <section>
              <h2 className="text-3xl font-bold mb-8">KPIs et contrôle qualité</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Indicateurs de performance</h3>
                  <div className="space-y-4">
                    {kpis.map((kpi, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{kpi.name}</span>
                          <Badge variant="secondary">{kpi.current}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="h-3 w-3" />
                          <span>Objectif : {kpi.target}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Points de contrôle qualité</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Contrôle à la source</span>
                        <p className="text-sm text-muted-foreground">Vérification produit lors du picking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Contrôle poids automatique</span>
                        <p className="text-sm text-muted-foreground">Balance connectée avec alertes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Contrôle aléatoire</span>
                        <p className="text-sm text-muted-foreground">Vérification manuelle échantillon</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Photo avant expédition</span>
                        <p className="text-sm text-muted-foreground">Traçabilité visuelle du colis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Étude de cas */}
            <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">📊 Étude de cas : Marque cosmétique</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Situation initiale :</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2000 commandes/mois</li>
                    <li>• Taux d'erreur : 3.2%</li>
                    <li>• Temps préparation : 15 min/commande</li>
                    <li>• 1 retour sur 15 pour erreur</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Après optimisation :</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Taux d'erreur : <strong>0.08%</strong> (-96%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Temps préparation : <strong>7 min</strong> (-53%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Productivité : <strong>+120%</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Satisfaction client : <strong>98.5%</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Internal linking */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Guides connexes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/guide-logistique-ecommerce-pme" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">📋 Guide logistique PME</h4>
                  <p className="text-sm text-muted-foreground">Guide complet de la logistique e-commerce pour PME</p>
                </Link>
                <Link to="/gestion-retours-ecommerce" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">🔄 Gestion des retours</h4>
                  <p className="text-sm text-muted-foreground">Optimiser le processus de retours e-commerce</p>
                </Link>
                <Link to="/integrations-ecommerce-logistique" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">🔗 Intégrations techniques</h4>
                  <p className="text-sm text-muted-foreground">API et connecteurs pour votre e-commerce</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Optimisez votre préparation de commande</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Bénéficiez de notre expertise pour réduire vos erreurs de préparation de 95% 
                et accélérer vos expéditions. Audit gratuit de votre processus actuel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg">
                    Demander un audit gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/calculateur-roi-logistique">
                  <Button variant="outline" size="lg">
                    Calculer vos économies
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

export default OptimisationPreparationCommande;