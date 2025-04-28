
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Intégration",
    description: "Connexion facile avec votre plateforme e-commerce (Shopify, WooCommerce, Prestashop...) ou via notre API.",
  },
  {
    number: "02",
    title: "Réception",
    description: "Envoyez-nous vos produits qui seront réceptionnés, contrôlés et référencés dans notre système.",
  },
  {
    number: "03",
    title: "Traitement",
    description: "Nous préparons, emballons et expédions vos commandes avec rapidité et précision via les meilleurs transporteurs.",
  },
  {
    number: "04",
    title: "Suivi",
    description: "Suivez en temps réel l'évolution de vos stocks et le statut de vos commandes sur votre espace client dédié.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 blend-with-middle">
      <div className="section-container">
        <h2 className="section-title">Comment ça marche ?</h2>
        <p className="section-subtitle">
          Un processus simple et transparent pour une logistique e-commerce sans souci.
        </p>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-0 right-0 top-24 h-0.5 bg-gradient-to-r from-speedelog-400/60 via-white/60 to-green-500/60 dark:from-speedelog-600 dark:via-white/20 dark:to-green-600/60"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-gradient-to-r from-speedelog-500 to-green-500 dark:from-speedelog-600 dark:to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-center text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 text-primary dark:text-primary/80">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
