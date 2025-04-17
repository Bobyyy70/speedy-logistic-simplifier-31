
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const advantages = [{
  title: "Expertise E-commerce",
  description: "Nous comprenons les enjeux spécifiques du e-commerce : pics d'activité, expérience client, gestion des retours."
}, {
  title: "Technologie Avancée",
  description: "Notre infrastructure technique permet un suivi en temps réel et une intégration facilitée avec votre plateforme."
}, {
  title: "Flexibilité & Scalabilité",
  description: "Notre offre s'adapte à votre croissance, de quelques commandes par jour à plusieurs centaines."
}, {
  title: "Transparence Totale",
  description: "Tarification claire sans frais cachés et visibilité complète sur vos stocks et opérations."
}, {
  title: "Spécialisation Niche",
  description: "Focus sur les produits non fragiles, non périssables < 30kg pour des processus vraiment optimisés."
}, {
  title: "Partenariat & Accompagnement",
  description: "Nous sommes un véritable partenaire de croissance, pas un simple prestataire logistique."
}];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Speed E-Log?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous combinons expertise logistique, technologie et flexibilité pour offrir un service parfaitement adapté aux PME e-commerce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg" className="mx-auto">
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
