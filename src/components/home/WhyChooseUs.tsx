
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Pourquoi choisir Speed E Log ?</h2>
        <p className="section-subtitle">
          Découvrez comment nous transformons la logistique e-commerce pour les PME françaises.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1 
            }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Check className="text-green-500 h-6 w-6" strokeWidth={3} />
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {advantage.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
          <Link to="/contact">
            Obtenir un devis personnalisé
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
