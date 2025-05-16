
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-0 bg-white dark:bg-slate-900">
      <div className="section-container py-0 my-0 px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Prêt à optimiser votre logistique ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E-Log peut transformer votre chaîne logistique.
          </p>
          <Link to="/contact" className="block w-fit mx-auto">
            <Button 
              size="lg" 
              className="bg-speedelog-500 hover:bg-speedelog-600 text-white shadow-lg transition-all duration-300"
            >
              Obtenir un devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
