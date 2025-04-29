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
import { useLazyImage } from "@/hooks/use-lazy-image"; // Ajout du hook pour lazy loading

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="bg-gradient-to-br from-blue-50 via-white to-green-100/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950">
      <Helmet>
        <title>À Propos de Speed E-Log | Votre Partenaire Logistique</title>
        <meta name="description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta property="og:title" content="À Propos de Speed E-Log | Votre Partenaire Logistique" />
        <meta property="og:description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>

      <section className="py-10 md:py-24 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Qui <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Sommes-Nous</span> ?
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Speed E-Log est un partenaire logistique spécialisé pour les PME e-commerce françaises.
            Notre mission est de vous permettre de vous concentrer sur la croissance de votre entreprise
            en gérant votre logistique de manière fiable et efficace.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-100/80 via-blue-50/50 to-green-100/50 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-green-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Notre Mission et Nos Valeurs</h2>
            <div className="flex items-center justify-center mb-6 md:mb-10">
              <p className="text-base md:text-xl font-medium">
                Simplifier la logistique e-commerce pour les PME françaises
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/10 dark:to-blue-800/5 border-blue-200/50 dark:border-blue-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-4 md:px-6">
                <Star className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <CardTitle className="text-xl">Transparence</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <p className="text-muted-foreground text-sm md:text-base">
                  Une tarification claire et une communication ouverte à chaque étape du processus logistique.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-900/10 dark:to-green-800/5 border-green-200/50 dark:border-green-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-4 md:px-6">
                <Star className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <CardTitle className="text-xl">Fiabilité</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <p className="text-muted-foreground text-sm md:text-base">
                  Un engagement sur la qualité et la précision des préparations pour satisfaire vos clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 dark:from-orange-900/10 dark:to-orange-800/5 border-orange-200/50 dark:border-orange-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-4 md:px-6">
                <Star className="h-5 w-5 text-orange-500 dark:text-orange-400 mr-2" />
                <CardTitle className="text-xl">Efficacité</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <p className="text-muted-foreground text-sm md:text-base">
                  Des processus optimisés et des technologies avancées pour une logistique performante et rentable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50/50 to-green-100/30 dark:from-blue-900/10 dark:to-green-800/5 border-blue-200/50 dark:border-green-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0 px-4 md:px-6">
                <Star className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <CardTitle className="text-xl">Partenariat</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <p className="text-muted-foreground text-sm md:text-base">
                  Une relation basée sur l'écoute et l'accompagnement pour soutenir votre croissance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-100/80 via-blue-50/50 to-green-100/50 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-green-950/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center mb-4">
                <History className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl md:text-4xl font-bold">Notre Histoire</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">Speed E-Log est née d'une passion pour l'optimisation logistique et d'une compréhension approfondie des défis auxquels sont confrontées les PME du e-commerce.</p>
              <p className="text-muted-foreground text-sm md:text-base">Après plusieurs années d'expérience dans le secteur, Nous avons identifié un besoin crucial : offrir aux entrepreneurs e-commerce une solution logistique adaptée à leur taille, flexible et technologiquement avancée, sans les coûts prohibitifs des grands prestataires.</p>
              <p className="text-muted-foreground text-sm md:text-base">
                Aujourd'hui, notre équipe partage cette vision et travaille chaque jour pour optimiser la chaîne 
                logistique de nos clients et contribuer à leur succès.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 rounded-lg p-4 md:p-6 border border-orange-200/50 dark:border-orange-800/30 shadow-sm">
              <div className="text-center">
                <Truck className="h-12 w-12 md:h-16 md:w-16 text-orange-500 dark:text-orange-400 mx-auto mb-4" />
                <p className="text-lg md:text-xl font-medium">
                  "Notre ambition est de démocratiser l'accès à une logistique e-commerce de qualité pour les PME françaises."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-100/80 via-blue-50/50 to-green-100/50 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-green-950/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="aspect-video rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 overflow-hidden">
                <AspectRatio ratio={16 / 9} className="lazy-image" data-loaded="false">
                  <img alt="Équipe de Speed E-Log en réunion stratégique analysant des données logistiques" className="w-full h-full object-cover" loading="lazy" onLoad={e => e.currentTarget.parentElement?.setAttribute('data-loaded', 'true')} src="/lovable-uploads/0eebcb35-a340-42cb-b519-5af8f45c8f76.png" />
                </AspectRatio>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 space-y-4">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                <h2 className="text-2xl md:text-4xl font-bold">Notre Mission</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Speed E-Log est bien plus qu'un prestataire logistique : nous sommes le partenaire opérationnel 
                des e-commerces TPE/PME, déterminés à transformer leur chaîne logistique en levier de croissance.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                En nous appuyant sur une relation de proximité et une écoute active de vos besoins, nous 
                construisons des collaborations pérennes ou performances rime avec agilité.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-100/50 dark:from-blue-950/30 dark:to-green-900/20 rounded-lg p-4 md:p-6 border border-blue-200/50 dark:border-blue-800/30 shadow-sm my-4 md:my-6">
                <p className="text-base md:text-lg font-medium italic text-center">
                  "Chez Speed E-Log, chaque colis expédié incarne notre promesse : une logistique fiable, 
                  des délais maîtrisés et une traçabilité totale pour garantir votre réputation."
                </p>
              </div>
              <p className="text-muted-foreground font-medium text-sm md:text-base">
                Notre engagement ? Vous offrir une logistique fluide, scalable et transparente, conçue pour 
                renforcer la satisfaction de vos clients et accroître votre compétitivité sur un marché en 
                constante évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-100/80 via-blue-50/50 to-green-100/50 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-green-950/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl md:text-4xl font-bold">Nos Valeurs</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Chez Speed E-Log, nous percevons la logistique bien au-delà d'une simple chaîne d'opérations : 
                c'est un écosystème vibrant, où chaque maillon est une opportunité de créer de la valeur partagée.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Dans ce domaine passionnant, chaque acteur devient gagnant – qu'il s'agisse de nos prestataires, 
                de nos clients ou de leurs destinataires finaux. Les défis, qu'ils soient techniques, humains ou 
                environnementaux, ne sont pas des obstacles, mais des leviers pour innover et progresser ensemble.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-800/30 overflow-hidden">
                <AspectRatio ratio={16 / 9} className="lazy-image" data-loaded="false">
                  <img alt="Équipe de Speed E-Log en réunion stratégique analysant des données logistiques" className="w-full h-full object-cover" loading="lazy" onLoad={e => e.currentTarget.parentElement?.setAttribute('data-loaded', 'true')} src="/lovable-uploads/7e668035-1d72-4474-a463-2edc7209bb2a.png" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Envie de travailler avec nous ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Découvrez comment Speed E Log peut devenir votre partenaire logistique
            et vous accompagner dans la croissance de votre entreprise e-commerce.
          </p>
          <AnimatedButton asChild className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 touch-target">
            <Link to="/contact">Demander un Devis Personnalisé</Link>
          </AnimatedButton>
        </div>
      </section>
    </div>;
};
export default About;