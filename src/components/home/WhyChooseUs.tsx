
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="why-choose-us" className="py-12 md:py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Pourquoi Choisir Speed E-Log ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous combinons expertise logistique, technologie et flexibilité pour un service parfaitement adapté aux PME e-commerce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-t-4 border-primary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 rounded-full p-1.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600">
              Discuter de votre projet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
