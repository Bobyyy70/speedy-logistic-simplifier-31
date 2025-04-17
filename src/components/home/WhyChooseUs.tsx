
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Users, LineChart, BadgePercent } from "lucide-react";

export function WhyChooseUs() {
  const advantages = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Expertise E-commerce",
      description: "Notre expérience dans le e-commerce nous permet de comprendre vos enjeux spécifiques, de la gestion des pics d'activité à l'importance de l'expérience client."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Technologie Avancée",
      description: "Suivi en temps réel, intégration facile avec votre CMS, portail client : notre technologie est conçue pour simplifier votre quotidien."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Flexibilité & Scalabilité",
      description: "Notre solution s'adapte à votre croissance. Augmentez ou diminuez vos besoins logistiques selon votre activité, sans contraintes."
    },
    {
      icon: <BadgePercent className="h-8 w-8 text-primary" />,
      title: "Transparence Totale",
      description: "Une grille tarifaire claire, sans frais cachés. Vous savez exactement ce que vous payez et pourquoi."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Spécialisation Niche",
      description: "Notre focus sur certains types de produits nous permet d'optimiser nos processus et de développer une véritable expertise."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Partenariat & Accompagnement",
      description: "Plus qu'un prestataire, nous sommes un partenaire de croissance qui vous accompagne dans la durée."
    },
  ];

  return (
    <section className="bg-muted/50 py-12 md:py-20" id="why-choose">
      <div className="section-container">
        <h2 className="section-title">Pourquoi Choisir Speed E Log</h2>
        <p className="section-subtitle">
          Découvrez ce qui fait de nous le partenaire logistique idéal pour votre activité e-commerce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-start">
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
