
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-800 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à optimiser votre logistique ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E Log peut transformer votre chaîne logistique.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
            <Link to="/contact">
              Obtenir un devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
