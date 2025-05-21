
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Target, Star, MapPin, History, Truck, Quote } from "lucide-react";
import { AnimatedButton } from "@/components/ui/moving-border";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLazyImage } from "@/hooks/use-lazy-image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="#ffffff"
        gradientBackgroundEnd="#f8fafc"
        firstColor="18, 113, 255"
        secondColor="80, 70, 230"
        thirdColor="100, 220, 255"
        fourthColor="120, 119, 198"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="100%"
        blendingValue="normal"
        interactive={false}
        className="absolute inset-0 z-0 opacity-20"
        height="200%"
      />

      <Helmet>
        <title>À Propos de Speed E-Log | Votre Partenaire Logistique</title>
        <meta name="description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta property="og:title" content="À Propos de Speed E-Log | Votre Partenaire Logistique" />
        <meta property="og:description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              Qui Sommes-nous ?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
              Speed E-Log est un partenaire logistique spécialisé pour les PME e-commerce françaises.
              Notre mission est de vous permettre de vous concentrer sur la croissance de votre entreprise
              en gérant votre logistique de manière fiable et efficace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission et Nos Valeurs</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Simplifier la logistique e-commerce pour les PME françaises
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-none group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-600/5 transform group-hover:scale-105 transition-transform duration-500 rounded-lg"></div>
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-5 md:px-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Transparence</CardTitle>
              </CardHeader>
              <CardContent className="px-5 md:px-6 relative z-10">
                <p className="text-muted-foreground">
                  Une tarification claire et une communication ouverte à chaque étape du processus logistique.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-none group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-600/5 transform group-hover:scale-105 transition-transform duration-500 rounded-lg"></div>
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-5 md:px-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Star className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-xl">Fiabilité</CardTitle>
              </CardHeader>
              <CardContent className="px-5 md:px-6 relative z-10">
                <p className="text-muted-foreground">
                  Un engagement sur la qualité et la précision des préparations pour satisfaire vos clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-none group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-orange-600/5 transform group-hover:scale-105 transition-transform duration-500 rounded-lg"></div>
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-5 md:px-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <Star className="h-5 w-5 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Efficacité</CardTitle>
              </CardHeader>
              <CardContent className="px-5 md:px-6 relative z-10">
                <p className="text-muted-foreground">
                  Des processus optimisés et des technologies avancées pour une logistique performante et rentable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-none group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 to-green-500/5 transform group-hover:scale-105 transition-transform duration-500 rounded-lg"></div>
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-5 md:px-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Star className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-xl">Partenariat</CardTitle>
              </CardHeader>
              <CardContent className="px-5 md:px-6 relative z-10">
                <p className="text-muted-foreground">
                  Une relation basée sur l'écoute et l'accompagnement pour soutenir votre croissance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 space-y-5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <History className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Notre Histoire</h2>
              </div>
              <p className="text-muted-foreground">Speed E-Log est née d'une passion pour l'optimisation logistique et d'une compréhension approfondie des défis auxquels sont confrontées les PME du e-commerce.</p>
              <p className="text-muted-foreground">Après plusieurs années d'expérience dans le secteur, Nous avons identifié un besoin crucial : offrir aux entrepreneurs e-commerce une solution logistique adaptée à leur taille, flexible et technologiquement avancée, sans les coûts prohibitifs des grands prestataires.</p>
              <p className="text-muted-foreground">
                Aujourd'hui, notre équipe partage cette vision et travaille chaque jour pour optimiser la chaîne 
                logistique de nos clients et contribuer à leur succès.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-300">
              <Card className="border-none h-full bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col items-center justify-center">
                  <div className="mb-6 bg-orange-100 p-4 rounded-full">
                    <Truck className="h-16 w-16 text-orange-500" />
                  </div>
                  <p className="text-xl md:text-2xl font-medium text-center">
                    "Notre ambition est de démocratiser l'accès à une logistique e-commerce de qualité pour les PME françaises."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl">
              <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden">
                <img 
                  alt="Équipe de Speed E-Log en réunion stratégique analysant des données logistiques" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  loading="lazy" 
                  src="/lovable-uploads/0eebcb35-a340-42cb-b519-5af8f45c8f76.png" 
                />
              </AspectRatio>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 space-y-5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Notre Mission</h2>
              </div>
              <p className="text-muted-foreground">
                Speed E-Log est bien plus qu'un prestataire logistique : nous sommes le partenaire opérationnel 
                des e-commerces TPE/PME, déterminés à transformer leur chaîne logistique en levier de croissance.
              </p>
              <p className="text-muted-foreground">
                En nous appuyant sur une relation de proximité et une écoute active de vos besoins, nous 
                construisons des collaborations pérennes ou performances rime avec agilité.
              </p>
              <Card className="border-none mt-6 bg-gradient-to-r from-blue-50 to-green-100/50 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg md:text-xl font-medium italic text-center">
                    "Chez Speed E-Log, chaque colis expédié incarne notre promesse : une logistique fiable, 
                    des délais maîtrisés et une traçabilité totale pour garantir votre réputation."
                  </p>
                </CardContent>
              </Card>
              <p className="font-medium mt-6">
                Notre engagement ? Vous offrir une logistique fluide, scalable et transparente, conçue pour 
                renforcer la satisfaction de vos clients et accroître votre compétitivité sur un marché en 
                constante évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 space-y-5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Nos Valeurs</h2>
              </div>
              <p className="text-muted-foreground">
                Chez Speed E-Log, nous percevons la logistique bien au-delà d'une simple chaîne d'opérations : 
                c'est un écosystème vibrant, où chaque maillon est une opportunité de créer de la valeur partagée.
              </p>
              <p className="text-muted-foreground">
                Dans ce domaine passionnant, chaque acteur devient gagnant – qu'il s'agisse de nos prestataires, 
                de nos clients ou de leurs destinataires finaux. Les défis, qu'ils soient techniques, humains ou 
                environnementaux, ne sont pas des obstacles, mais des leviers pour innover et progresser ensemble.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
              <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden">
                <img 
                  alt="Équipe de Speed E-Log collaborant sur des solutions logistiques innovantes" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  loading="lazy" 
                  src="/lovable-uploads/7e668035-1d72-4474-a463-2edc7209bb2a.png" 
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 md:py-24 text-center bg-gradient-to-t from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Envie de travailler avec nous ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
            Découvrez comment Speed E-Log peut devenir votre partenaire logistique et vous accompagner dans la croissance de votre entreprise e-commerce.
          </p>
          <AnimatedButton asChild className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 touch-target">
            <Link to="/contact" className="text-lg px-8 py-4">Demander un Devis Personnalisé</Link>
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
};

export default About;
