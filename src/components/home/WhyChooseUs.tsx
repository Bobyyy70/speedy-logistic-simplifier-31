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
  return <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir <span className="text-primary">Speed E-Log</span> ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Speed E Log est le partenaire idéal pour les PME e-commerce souhaitant professionnaliser leur logistique sans se ruiner ni perdre en qualité de service.
          </p>

          <div className="space-y-4">
            {advantages.map((advantage, index) => <div key={index} className="flex gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>)}
          </div>

          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Discutons de votre projet</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl">
          <div className="bg-blue-gradient text-white p-8 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold mb-4">Spécialisés pour votre niche</h3>
            <p className="mb-6">
              Notre expertise est concentrée sur les produits à fort potentiel e-commerce :
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                <span>Produits non fragiles</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                <span>Produits non périssables</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                <span>Sans température dirigée</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                <span>Poids inférieur à 30 kg</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                <span>Idéal pour produits à forte rotation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}