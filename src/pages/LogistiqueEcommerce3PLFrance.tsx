import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServicesCta } from "@/components/services/ServicesCta";

import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicCalculatorSection } from "@/components/sections/DynamicCalculatorSection";

const LogistiqueEcommerce3PLFrance: React.FC = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>3PL et Logistique E‑commerce en France | Speed E‑Log</title>
        <meta name="description" content="Externalisez votre logistique e‑commerce en France. 3PL pour tous volumes, spécial petit volume. Devis gratuit, intégrations Shopify & WooCommerce." />
        <link rel="canonical" href="https://speedelog.net/logistique-ecommerce-3pl-france" />
      </Helmet>

      <header className="bg-background/60 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Speed E‑Log : Votre Partenaire 3PL E‑commerce en France
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Libérez votre croissance et optimisez votre logistique. Des solutions complètes d’externalisation conçues pour tous les volumes — avec une offre dédiée « petit volume ».
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Demandez votre audit logistique gratuit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#services">Découvrez nos services complets</Link>
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <span>Intégrations e‑commerce :</span>
              <ul className="mt-2 flex flex-wrap gap-3">
                <li className="px-3 py-1 rounded-full bg-muted">Shopify</li>
                <li className="px-3 py-1 rounded-full bg-muted">WooCommerce</li>
                <li className="px-3 py-1 rounded-full bg-muted">PrestaShop</li>
                <li className="px-3 py-1 rounded-full bg-muted">Magento</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Pain points */}
        <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="painpoints">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 id="painpoints" className="text-2xl md:text-3xl font-bold tracking-tight">
                Vous gérez un e‑commerce ? Libérez‑vous des contraintes logistiques !
              </h2>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>
                  Votre activité grandit, mais la logistique freine votre croissance ? Nous comprenons vos défis.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Manque de temps et de ressources pour la gestion interne</li>
                  <li>Coûts de stockage et d’expédition élevés et imprévisibles</li>
                  <li>Difficulté à gérer les pics d’activité et la scalabilité</li>
                  <li>Complexité des retours et de la satisfaction client</li>
                </ul>
                <p className="mt-3">La solution&nbsp;: externalisez votre logistique e‑commerce avec Speed E‑Log.</p>
              </div>
            </div>
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Ce que vous gagnez</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>Visibilité temps réel sur les stocks et les commandes</li>
                  <li>Pick & Pack précis, branding et emballages personnalisables</li>
                  <li>Expédition nationale et internationale optimisée</li>
                  <li>Gestion des retours fluide, clients satisfaits</li>
                </ul>
                <div className="mt-4">
                  <Button asChild variant="secondary">
                    <Link to="#pricing">Voir nos options tarifaires</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="services-title">
          <h2 id="services-title" className="text-2xl md:text-3xl font-bold tracking-tight">Nos services complets de logistique e‑commerce externalisée</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Réception & Stockage",
                points: [
                  "Gestion des stocks en temps réel, inventaire précis",
                  "Entrepôts sécurisés, adaptés à vos produits",
                ],
              },
              {
                title: "Préparation de commandes (Pick & Pack)",
                points: [
                  "Efficacité et précision pour chaque commande",
                  "Personnalisation de l’emballage et branding",
                ],
              },
              {
                title: "Expédition FR & International",
                points: [
                  "Partenariats transporteurs pour des livraisons optimisées",
                  "Suivi des colis en temps réel",
                ],
              },
              {
                title: "Gestion des retours",
                points: [
                  "Processus fluide, satisfaction client",
                  "Réintégration rapide au stock",
                ],
              },
              {
                title: "Optimisation des coûts",
                points: [
                  "Tarifs négociés, transparents",
                  "Gain de temps précieux pour votre équipe",
                ],
              },
            ].map((card) => (
              <article key={card.title} className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                  {card.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Petit Volume */}
        <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="petit-volume">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 id="petit-volume" className="text-2xl md:text-3xl font-bold tracking-tight">Logistique e‑commerce « petit volume » : votre solution sur mesure</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
                <li>Spécialement conçu pour les jeunes marques et petites entreprises</li>
                <li>Pas de volume minimum, flexibilité maximale</li>
                <li>Accompagnement personnalisé pour démarrer et grandir sereinement</li>
                <li>Tarification transparente, sans frais cachés</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <Button asChild>
                  <Link to="/contact">Parlez à un expert Speed E‑Log</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="#pricing">Découvrez nos offres petit volume</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Pourquoi nous choisir ?</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                <li>Expertise reconnue en logistique e‑commerce</li>
                <li>Technologie de pointe, intégrations Shopify, WooCommerce, Magento, PrestaShop</li>
                <li>Scalabilité garantie pour accompagner votre croissance</li>
                <li>Approche éco‑responsable : emballages durables, optimisation des transports</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="process">
          <h2 id="process" className="text-2xl md:text-3xl font-bold tracking-tight">Comment fonctionne l’externalisation logistique ?</h2>
          <ol className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Audit & Devis personnalisé", desc: "Nous analysons vos besoins et définissons une offre claire, sans engagement." },
              { step: "2", title: "Intégration facile", desc: "Connexion à votre boutique et synchronisation des flux produits/commandes." },
              { step: "3", title: "Nous gérons tout", desc: "Réception, stockage, préparation, expédition, retours. Vous suivez en temps réel." },
            ].map((s) => (
              <li key={s.step} className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{s.step}</div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact" className="inline-flex items-center">Lancez votre audit gratuit <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 border-t">
          <TestimonialsSection />
        </section>

        {/* Pricing / Calculator */}
        <section id="pricing" className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="pricing-title">
          <h2 id="pricing-title" className="text-2xl md:text-3xl font-bold tracking-tight">Tarifs & Devis : transparents et compétitifs</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Utilisez notre simulateur pour estimer vos coûts selon vos besoins. Obtenez ensuite un devis personnalisé sans engagement.</p>
          <div className="mt-8">
            <DynamicCalculatorSection />
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold tracking-tight">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="mt-6">
            {[
              { q: "Quels sont les délais de livraison moyens en France ?", a: "Selon le transporteur et la destination, 24 à 72h en moyenne en France métropolitaine." },
              { q: "Puis‑je suivre mes stocks et commandes en temps réel ?", a: "Oui, via notre plateforme : visibilité complète et alertes personnalisées." },
              { q: "Comment s’intègre votre solution à ma boutique ?", a: "Nous connectons Shopify, WooCommerce, PrestaShop, Magento et d’autres via API/webhooks." },
              { q: "Gérez‑vous les retours internationaux ?", a: "Oui, nous disposons de processus dédiés et d’accords transporteurs adaptés." },
              { q: "Y a‑t‑il un volume minimum pour commencer ?", a: "Non, aucune contrainte de volume minimum : offre " + '"' + "petit volume" + '"' + " dédiée." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 border-t">
          <ServicesCta />
        </section>
      </main>
    </div>
  );
};

export default LogistiqueEcommerce3PLFrance;
