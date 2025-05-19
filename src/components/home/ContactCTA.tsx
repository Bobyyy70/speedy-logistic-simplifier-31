
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/moving-border";

export function ContactCTA() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-0">
      <div className="section-container py-0 my-0 px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Prêt à optimiser votre logistique ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E Log peut transformer votre chaîne logistique.
          </p>
          <Link to="/contact" className="block w-fit mx-auto">
            <AnimatedButton 
              className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 px-5 py-3 text-base md:text-lg"
            >
              Obtenir un devis gratuit <ArrowRight className="ml-2 h-4 w-4 text-orange-400" />
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
