
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/moving-border";

export function ContactCTA() {
  return (
    <section className="bg-gradient-to-br from-green-200 via-white to-blue-100 dark:from-green-800 dark:via-slate-950 dark:to-slate-900 py-16 md:py-[95px] px-0">
      <div className="section-container py-0 my-0">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à optimiser votre logistique ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E Log peut transformer votre chaîne logistique.
          </p>
          <Link to="/contact">
            <AnimatedButton 
              className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20"
            >
              Obtenir un devis gratuit <ArrowRight className="ml-2 h-4 w-4 text-orange-400" />
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
