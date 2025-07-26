import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, Users, ShoppingCart, Package, Truck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROICalculatorCTA } from '@/components/sections/ROICalculatorCTA';

const GuideLogistiquePME: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableOfContents = [
    { id: 'defis', title: 'Les défis logistiques des PME e-commerce' },
    { id: 'solutions', title: 'Solutions logistiques adaptées aux PME' },
    { id: 'externalisation', title: 'Externalisation vs logistique interne' },
    { id: 'choix-prestataire', title: 'Comment choisir son prestataire 3PL' },
    { id: 'integration', title: 'Intégration technologique et automatisation' },
    { id: 'kpis', title: 'KPIs et optimisation continue' },
    { id: 'bonnes-pratiques', title: 'Bonnes pratiques pour optimiser sa logistique' }
  ];

  const challenges = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Gestion du temps",
      description: "68% des dirigeants de PME passent plus de 15h/semaine sur la logistique au lieu de se concentrer sur leur cœur de métier."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Coûts cachés",
      description: "Les frais logistiques représentent en moyenne 12-18% du CA, mais peu d'entreprises maîtrisent leurs coûts réels."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalabilité",
      description: "87% des PME rencontrent des difficultés à adapter leur logistique lors des pics d'activité (Black Friday, soldes)."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Satisfaction client",
      description: "76% des consommateurs abandonnent une marque après une mauvaise expérience de livraison."
    }
  ];

  const solutions = [
    {
      type: "Stockage optimisé",
      description: "Système de gestion des stocks en temps réel avec alertes automatiques",
      benefits: ["Réduction des ruptures de stock", "Optimisation de l'espace de stockage", "Visibilité temps réel"]
    },
    {
      type: "Préparation automatisée",
      description: "Processus de picking optimisé avec contrôle qualité systématique",
      benefits: ["Réduction du taux d'erreur à 0,02%", "Accélération de la préparation", "Traçabilité complète"]
    },
    {
      type: "Expédition intelligente",
      description: "Sélection automatique du transporteur optimal selon le profil de commande",
      benefits: ["Réduction des coûts d'expédition", "Amélioration des délais", "Gestion des retours simplifiée"]
    }
  ];

  const comparisonData = [
    { criteria: "Investissement initial", internal: "150k€ - 500k€", outsourced: "0€ (pas d'investissement)" },
    { criteria: "Temps de mise en place", internal: "6-18 mois", outsourced: "2-4 semaines" },
    { criteria: "Coût par commande", internal: "8€ - 15€", outsourced: "6€ - 12€" },
    { criteria: "Flexibilité volumes", internal: "Limitée", outsourced: "Totale" },
    { criteria: "Expertise technique", internal: "À développer", outsourced: "Immédiate" }
  ];

  const kpis = [
    { name: "Taux de précision", target: "> 99,5%", description: "Pourcentage de commandes préparées sans erreur" },
    { name: "Délai de préparation", target: "< 24h", description: "Temps entre réception commande et expédition" },
    { name: "Taux de retours", target: "< 3%", description: "Pourcentage de retours dus à des erreurs logistiques" },
    { name: "Coût par commande", target: "Optimisé", description: "Coût total incluant stockage, préparation et expédition" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guide Complet de la Logistique E-commerce pour PME 2025",
    "description": "Guide exhaustif pour optimiser la logistique e-commerce des PME : défis, solutions, bonnes pratiques et choix du prestataire 3PL.",
    "author": {
      "@type": "Organization",
      "name": "Speed E-Log"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Speed E-Log",
      "logo": {
        "@type": "ImageObject",
        "url": "https://speedelog.net/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://speedelog.net/guide-logistique-ecommerce-pme"
    }
  };

  return (
    <>
      <Helmet>
        <title>Guide Logistique E-commerce PME 2025 : Optimisation & 3PL | Speed E-Log</title>
        <meta name="description" content="Guide complet logistique e-commerce PME : défis, solutions 3PL, choix prestataire, intégration technologique. Optimisez vos coûts et performance." />
        <meta name="keywords" content="logistique e-commerce PME, 3PL France, externalisation logistique, fulfillment, optimisation logistique" />
        <link rel="canonical" href="https://speedelog.net/guide-logistique-ecommerce-pme" />
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
                Guide Expert 2025
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Guide Complet de la Logistique E-commerce pour PME
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Découvrez comment optimiser votre logistique e-commerce, réduire vos coûts et améliorer 
                la satisfaction client grâce aux meilleures pratiques et solutions 3PL adaptées aux PME.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculateur-roi-logistique">
                  <Button size="lg" className="group">
                    Calculer mon ROI logistique
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Obtenir un audit gratuit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Sommaire du guide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center p-4 bg-card rounded-lg hover:bg-card/80 transition-colors group"
                  >
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </span>
                    <span className="group-hover:text-primary transition-colors">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Section 1: Défis */}
            <section id="defis">
              <h2 className="text-3xl font-bold mb-8">Les défis logistiques des PME e-commerce</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Les PME e-commerce font face à des défis logistiques uniques qui peuvent freiner leur croissance. 
                Une étude récente révèle que 73% des dirigeants de PME considèrent la logistique comme leur 
                principal frein au développement.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                        <p className="text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 2: Solutions */}
            <section id="solutions">
              <h2 className="text-3xl font-bold mb-8">Solutions logistiques adaptées aux PME</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Face à ces défis, plusieurs solutions s'offrent aux PME pour optimiser leur chaîne logistique. 
                L'externalisation vers un prestataire 3PL spécialisé apparaît souvent comme la solution la plus pertinente.
              </p>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{solution.type}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, i) => (
                        <Badge key={i} variant="secondary" className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 3: Externalisation vs Interne */}
            <section id="externalisation">
              <h2 className="text-3xl font-bold mb-8">Externalisation vs logistique interne</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Le choix entre logistique interne et externalisation dépend de nombreux facteurs. 
                Voici un comparatif détaillé pour vous aider dans votre décision.
              </p>
              <Card className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-2 font-semibold">Critère</th>
                        <th className="text-left py-4 px-2 font-semibold">Logistique interne</th>
                        <th className="text-left py-4 px-2 font-semibold">Externalisation 3PL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-4 px-2 font-medium">{row.criteria}</td>
                          <td className="py-4 px-2 text-muted-foreground">{row.internal}</td>
                          <td className="py-4 px-2 text-primary font-medium">{row.outsourced}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            {/* Section 4: Choix du prestataire */}
            <section id="choix-prestataire">
              <h2 className="text-3xl font-bold mb-8">Comment choisir son prestataire 3PL</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Le choix du bon partenaire logistique est crucial pour le succès de votre e-commerce. 
                Voici les critères essentiels à évaluer.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expertise sectorielle</h3>
                  <p className="text-sm text-muted-foreground">
                    Expérience dans votre secteur d'activité et types de produits
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Couverture géographique</h3>
                  <p className="text-sm text-muted-foreground">
                    Réseau de distribution adapté à vos zones de livraison
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Intégrations technologiques</h3>
                  <p className="text-sm text-muted-foreground">
                    Compatibilité avec vos outils e-commerce existants
                  </p>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Questions clés à poser à votre prestataire :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quels sont vos SLA (délais, taux de précision, disponibilité) ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comment gérez-vous les pics d'activité saisonniers ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quelles sont vos options de personnalisation (emballage, inserts) ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comment fonctionne la gestion des retours ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quels rapports et analytics proposez-vous ?</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Intégration technologique */}
            <section id="integration">
              <h2 className="text-3xl font-bold mb-8">Intégration technologique et automatisation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Une intégration technologique réussie est la clé d'une logistique efficace. 
                Les meilleures solutions 3PL offrent des API robustes et des intégrations natives.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Intégrations essentielles</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Badge variant="outline">Shopify</Badge>
                      <span className="text-sm">Synchronisation native des commandes et stocks</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge variant="outline">WooCommerce</Badge>
                      <span className="text-sm">Plugin dédié pour WordPress</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge variant="outline">Marketplaces</Badge>
                      <span className="text-sm">Amazon, Cdiscount, eBay automatisés</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge variant="outline">ERP</Badge>
                      <span className="text-sm">Sage, SAP, ou solutions métier</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Automatisations avancées</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <RotateCcw className="h-4 w-4 text-primary" />
                      <span className="text-sm">Gestion automatique des stocks et réapprovisionnement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RotateCcw className="h-4 w-4 text-primary" />
                      <span className="text-sm">Sélection intelligente du transporteur</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RotateCcw className="h-4 w-4 text-primary" />
                      <span className="text-sm">Notifications client automatisées</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RotateCcw className="h-4 w-4 text-primary" />
                      <span className="text-sm">Rapports de performance en temps réel</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                <h4 className="text-lg font-semibold mb-3">🚀 Cas pratique : Automatisation avec n8n</h4>
                <p className="text-muted-foreground mb-4">
                  Speed E-Log utilise n8n pour créer des workflows d'automatisation sur mesure. 
                  Exemple : déclenchement automatique d'une campagne de réactivation si un client 
                  n'a pas commandé depuis 60 jours.
                </p>
                <Link to="/automatisation-logistique-n8n">
                  <Button variant="outline" size="sm">
                    Découvrir nos automatisations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </section>

            {/* Section 6: KPIs */}
            <section id="kpis">
              <h2 className="text-3xl font-bold mb-8">KPIs et optimisation continue</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Pour optimiser en continu votre logistique, il est essentiel de suivre les bons indicateurs 
                de performance. Voici les KPIs clés à monitorer.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {kpis.map((kpi, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">{kpi.name}</h4>
                      <Badge variant="secondary">{kpi.target}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{kpi.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 7: Bonnes pratiques */}
            <section id="bonnes-pratiques">
              <h2 className="text-3xl font-bold mb-8">Bonnes pratiques pour optimiser sa logistique</h2>
              
              <div className="space-y-8">
                <Card className="p-6">
                  <h4 className="text-xl font-semibold mb-4">✅ Préparation et transition</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Auditez votre logistique actuelle et identifiez les points d'amélioration</li>
                    <li>• Testez le prestataire avec un volume réduit avant la transition complète</li>
                    <li>• Définissez clairement vos SLA et pénalités en cas de non-respect</li>
                    <li>• Planifiez la transition en évitant les périodes de forte activité</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-semibold mb-4">📊 Suivi et optimisation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mettez en place un tableau de bord avec vos KPIs critiques</li>
                    <li>• Organisez des revues mensuelles avec votre prestataire</li>
                    <li>• Analysez les retours clients pour identifier les axes d'amélioration</li>
                    <li>• Optimisez continuellement vos processus selon les données terrain</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-semibold mb-4">🎯 Focus satisfaction client</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personnalisez l'expérience d'unboxing (emballage, inserts)</li>
                    <li>• Proposez plusieurs options de livraison (standard, express, points relais)</li>
                    <li>• Automatisez le suivi de commande avec notifications proactives</li>
                    <li>• Simplifiez au maximum le processus de retour</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Internal linking section */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Approfondissez vos connaissances</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/optimisation-preparation-commande" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">Optimisation de la préparation de commande</h4>
                  <p className="text-sm text-muted-foreground">Techniques avancées pour réduire les erreurs et accélérer le picking</p>
                </Link>
                <Link to="/integration-shopify-fulfillment" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">Intégration Shopify Fulfillment</h4>
                  <p className="text-sm text-muted-foreground">Guide complet pour connecter votre boutique Shopify</p>
                </Link>
                <Link to="/gestion-retours-ecommerce" className="block p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h4 className="font-semibold mb-2">Gestion des retours e-commerce</h4>
                  <p className="text-sm text-muted-foreground">Optimisez votre processus de retours pour fidéliser vos clients</p>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <ROICalculatorCTA />
      </div>
    </>
  );
};

export default GuideLogistiquePME;