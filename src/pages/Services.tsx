
import { useEffect } from "react";
import { Package, Truck, Clock, FileText, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactCTA } from "@/components/home/ContactCTA";

const detailedServices = [
  {
    id: "reception",
    title: "Réception & Contrôle",
    description: "Un processus rigoureux pour assurer l'intégrité de votre stock dès son arrivée.",
    icon: Package,
    details: [
      "Déchargement et identification des colis/palettes",
      "Contrôle qualité et quantité selon vos spécifications",
      "Photographies en cas d'anomalies détectées",
      "Mise à jour des stocks en temps réel",
      "Reporting détaillé des réceptions",
    ],
  },
  {
    id: "stockage",
    title: "Stockage Sécurisé",
    description: "Un espace dédié et organisé pour une gestion optimale de vos produits.",
    icon: FileText,
    details: [
      "Référencement et étiquetage de chaque article",
      "Stockage adapté à la nature de vos produits",
      "Système de gestion d'inventaire précis",
      "Alerte stocks bas automatisée",
      "Inventaires réguliers pour garantir la précision",
    ],
  },
  {
    id: "preparation",
    title: "Préparation Commandes",
    description: "Un processus efficace pour des expéditions rapides et sans erreur.",
    icon: Users,
    details: [
      "Picking optimisé par des algorithmes intelligents",
      "Contrôle qualité avant emballage",
      "Packaging standard ou personnalisé selon vos besoins",
      "Insertion de documents marketing ou échantillons",
      "Préparations adaptées à vos pics d'activité",
    ],
  },
  {
    id: "expedition",
    title: "Expédition Multi-Transporteurs",
    description: "Un réseau de partenaires fiables pour des livraisons optimales.",
    icon: Truck,
    details: [
      "Intégration avec les principaux transporteurs",
      "Tarifs négociés et compétitifs",
      "Étiquetage et documents douaniers (CN23)",
      "Suivi des colis jusqu'à leur destination",
      "Remontée automatique des numéros de suivi",
    ],
  },
  {
    id: "retours",
    title: "Gestion des Retours",
    description: "Un processus simplifié pour traiter efficacement les retours clients.",
    icon: Clock,
    details: [
      "Réception et identification des produits retournés",
      "Contrôle qualité et évaluation de l'état",
      "Reconditionnement si nécessaire",
      "Réintégration en stock ou mise au rebut",
      "Reporting détaillé sur chaque retour",
    ],
  },
];

const eligibility = [
  "Produits non fragiles et résistants",
  "Articles non périssables (sans DLC courte)",
  "Produits sans température dirigée",
  "Poids inférieur à 30 kg (réel ou volumétrique)",
  "Adapté aux produits à forte rotation",
  "Idéal pour les cosmétiques, compléments alimentaires, textiles, accessoires, etc.",
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-sky-50 pt-32 pb-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Services Logistiques
              </h1>
              <p className="text-xl text-muted-foreground">
                Des solutions complètes pour gérer l'ensemble de votre chaîne logistique e-commerce, de la réception à l'expédition, en passant par le stockage et la gestion des retours.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="section-container">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div>
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  {/* Placeholder for service illustration */}
                  <div className="aspect-[4/3] bg-gray-200">
                    <img 
                      src="/placeholder.svg" 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Produits Éligibles
              </h2>
              <p className="text-lg text-muted-foreground mb-10 text-center">
                Nous sommes spécialisés dans une niche précise pour vous offrir le meilleur service possible.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Types de produits que nous gérons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eligibility.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <Button asChild>
                  <Link to="/contact">
                    Vérifier l'éligibilité de vos produits
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Technologie au service de votre logistique
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Notre infrastructure technologique est conçue pour vous offrir une visibilité totale et une gestion simplifiée de votre logistique.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Intégration avec votre plateforme e-commerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Portail client avec suivi en temps réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Système de gestion d'entrepôt (WMS) performant</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Alertes et notifications automatisées</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Reporting et analyses détaillés</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              {/* Placeholder for technology illustration */}
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src="/placeholder.svg" 
                  alt="Technologie Speed E Log" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
