import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  BookOpen, 
  Calculator, 
  Lightbulb,
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Ressources = () => {
  const guides = [
    {
      title: "Guide Complet de la Logistique E-commerce",
      description: "Tout ce qu'il faut savoir pour optimiser votre chaîne logistique et réduire vos coûts de 30%",
      type: "PDF Guide",
      pages: "47 pages",
      downloadUrl: "#",
      featured: true,
      topics: ["Fulfillment", "Optimisation", "ROI", "KPIs"]
    },
    {
      title: "Checklist Optimisation Préparation de Commandes",
      description: "45 points de contrôle pour améliorer la productivité de votre entrepôt",
      type: "Checklist",
      pages: "12 pages",
      downloadUrl: "#",
      topics: ["Productivité", "Processus", "Qualité"]
    },
    {
      title: "Livre Blanc: ROI de l'Externalisation Logistique",
      description: "Étude de cas avec 15 PME qui ont externalisé leur logistique",
      type: "Livre Blanc",
      pages: "28 pages",
      downloadUrl: "#",
      topics: ["ROI", "Cas clients", "Benchmarks"]
    },
    {
      title: "Template: Audit Logistique Express",
      description: "Évaluez votre performance logistique en 30 minutes",
      type: "Template Excel",
      pages: "Fichier .xlsx",
      downloadUrl: "#",
      topics: ["Audit", "Diagnostic", "KPIs"]
    }
  ];

  const tools = [
    {
      title: "Calculateur ROI Logistique",
      description: "Estimez vos économies potentielles avec Speed E Log",
      icon: Calculator,
      link: "/calculateur-roi-logistique",
      badge: "Outil gratuit"
    },
    {
      title: "Guide Intégrations E-commerce",
      description: "Connectez votre boutique à notre WMS en quelques clics",
      icon: BookOpen,
      link: "/integrations-ecommerce-logistique",
      badge: "Guide pratique"
    }
  ];

  const webinars = [
    {
      title: "Optimiser ses Coûts Logistiques en 2025",
      date: "15 février 2025",
      duration: "45 min",
      status: "upcoming",
      registrationUrl: "#"
    },
    {
      title: "Retours E-commerce: Transformer le Coût en Opportunité",
      date: "28 janvier 2025",
      duration: "40 min",
      status: "replay",
      registrationUrl: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ressources Logistique E-commerce - Guides, Outils & Webinars | Speed E Log</title>
        <meta 
          name="description" 
          content="Téléchargez nos guides gratuits, utilisez nos outils de calcul ROI et participez à nos webinars pour optimiser votre logistique e-commerce." 
        />
        <meta name="keywords" content="guide logistique, outil ROI, webinar e-commerce, optimisation fulfillment, ressources logistique" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ressources Logistique E-commerce - Speed E Log" />
        <meta property="og:description" content="Guides, outils et webinars gratuits pour optimiser votre logistique e-commerce" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ressources Logistique E-commerce",
            "description": "Centre de ressources avec guides, outils et webinars pour l'optimisation logistique",
            "provider": {
              "@type": "Organization",
              "name": "Speed E Log"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": guides.map((guide, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": guide.title,
                "description": guide.description,
                "fileFormat": "application/pdf"
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Centre de Ressources
                <span className="text-primary"> Logistique</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Guides pratiques, outils de calcul et webinars exclusifs pour optimiser 
                votre performance logistique et réduire vos coûts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <Users className="h-3 w-3 mr-1" />
                  +2,000 téléchargements
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Contenu mis à jour mensuel
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Guides & Livres Blancs Gratuits
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Téléchargez nos ressources expertes pour maîtriser tous les aspects 
                de la logistique e-commerce moderne.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <Card key={index} className={`relative ${guide.featured ? 'ring-2 ring-primary/20 shadow-lg' : ''}`}>
                  {guide.featured && (
                    <Badge className="absolute -top-2 left-4 bg-primary text-white">
                      Le Plus Populaire
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{guide.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {guide.description}
                        </CardDescription>
                      </div>
                      <BookOpen className="h-6 w-6 text-primary ml-4 flex-shrink-0" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{guide.type}</span>
                        <span>{guide.pages}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full" asChild>
                        <a href={guide.downloadUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger Gratuitement
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Outils Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Outils Pratiques
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Utilisez nos outils en ligne pour évaluer votre performance 
                et identifier vos opportunités d'optimisation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-slate-900">{tool.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {tool.badge}
                          </Badge>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">{tool.description}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={tool.link}>
                            Utiliser l'outil
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Webinars & Formation
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Participez à nos sessions live avec nos experts logistique 
                ou regardez les replays de nos précédents webinars.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {webinars.map((webinar, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">{webinar.title}</h3>
                          <Badge 
                            variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {webinar.status === 'upcoming' ? 'À venir' : 'Replay'}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {webinar.date}
                          </span>
                          <span>{webinar.duration}</span>
                        </div>
                      </div>
                      <Button 
                        variant={webinar.status === 'upcoming' ? 'default' : 'outline'}
                        asChild
                      >
                        <a href={webinar.registrationUrl}>
                          {webinar.status === 'upcoming' ? "S'inscrire" : 'Voir le replay'}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un Accompagnement Personnalisé ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Nos experts analysent votre situation et vous proposent des solutions 
              sur-mesure pour optimiser votre logistique.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <Lightbulb className="h-5 w-5 mr-2" />
                Demander une Consultation Gratuite
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ressources;