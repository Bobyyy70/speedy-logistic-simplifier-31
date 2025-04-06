import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Target, Star, MapPin, History, Truck } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>À Propos de Speed E Log | Votre Partenaire Logistique</title>
        <meta 
          name="description" 
          content="Découvrez Speed E Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence."
        />
        <meta property="og:title" content="À Propos de Speed E Log | Votre Partenaire Logistique" />
        <meta 
          property="og:description" 
          content="Découvrez Speed E Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence."
        />
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Qui Sommes-Nous ?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Speed E Log est un partenaire logistique spécialisé pour les PME e-commerce françaises.
            Notre mission est de vous permettre de vous concentrer sur la croissance de votre entreprise
            en gérant votre logistique de manière fiable et efficace.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission et Nos Valeurs</h2>
            <div className="flex items-center justify-center mb-10">
              <Target className="w-6 h-6 text-primary mr-2" />
              <p className="text-lg md:text-xl font-medium">
                Simplifier la logistique e-commerce pour les PME françaises
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-muted/30 border-0">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Star className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-xl">Transparence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une tarification claire et une communication ouverte à chaque étape du processus logistique.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border-0">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Star className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-xl">Fiabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un engagement sur la qualité et la précision des préparations pour satisfaire vos clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border-0">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Star className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-xl">Efficacité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Des processus optimisés et des technologies avancées pour une logistique performante et rentable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border-0">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Star className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-xl">Partenariat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une relation basée sur l'écoute et l'accompagnement pour soutenir votre croissance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center mb-4">
                <History className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold">Notre Histoire</h2>
              </div>
              <p className="text-muted-foreground">
                Fondée par Francesco Almanzo, Speed E Log est née d'une passion pour l'optimisation logistique et d'une 
                compréhension approfondie des défis auxquels sont confrontées les PME du e-commerce.
              </p>
              <p className="text-muted-foreground">
                Après plusieurs années d'expérience dans le secteur, Francesco a identifié un besoin crucial : 
                offrir aux entrepreneurs e-commerce une solution logistique adaptée à leur taille, flexible et 
                technologiquement avancée, sans les coûts prohibitifs des grands prestataires.
              </p>
              <p className="text-muted-foreground">
                Aujourd'hui, notre équipe partage cette vision et travaille chaque jour pour optimiser la chaîne 
                logistique de nos clients et contribuer à leur succès.
              </p>
            </div>
            <div className="md:w-1/2 bg-muted rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-medium">
                  "Notre ambition est de démocratiser l'accès à une logistique e-commerce de qualité pour les PME françaises."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Francesco Almanzo, Fondateur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 order-2 md:order-1 bg-muted/50 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">
                  Port-sur-Saône, Bourgogne-Franche-Comté
                </p>
                <p className="text-sm text-muted-foreground">
                  {/* Placeholder for future map integration */}
                  Image de la carte ou de l'entrepôt à venir
                </p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-4 order-1 md:order-2">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold">Basés à Port-sur-Saône</h2>
              </div>
              <p className="text-muted-foreground">
                Notre entrepôt est situé en Bourgogne-Franche-Comté, à Port-sur-Saône, une position 
                stratégique qui nous permet d'optimiser la distribution de vos produits sur l'ensemble 
                du territoire français et européen.
              </p>
              <p className="text-muted-foreground">
                Cette localisation offre un excellent équilibre entre accessibilité, coûts optimisés 
                et efficacité logistique, des avantages que nous répercutons directement sur la qualité 
                de nos services et nos tarifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 md:py-20 bg-muted/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Envie de travailler avec nous ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez comment Speed E Log peut devenir votre partenaire logistique
            et vous accompagner dans la croissance de votre entreprise e-commerce.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Nos Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
