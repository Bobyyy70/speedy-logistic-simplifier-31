
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map/component";

export function ContactCTA() {
  // Points de livraison internationaux pour la carte simplifiée
  const globalShippingPoints = [
    {
      start: { lat: 48.8566, lng: 2.3522, label: "France" },
      end: { lat: 40.7128, lng: -74.006, label: "New York" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-0 relative overflow-hidden">
      {/* Fond subtil avec carte du monde */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <WorldMap dots={globalShippingPoints} opacity={0.35} />
      </div>
      
      {/* Overlay gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70 dark:from-slate-900/70 dark:via-transparent dark:to-slate-900/70 pointer-events-none" />
      
      <div className="section-container py-0 my-0 px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto backdrop-blur-sm p-8 rounded-xl border border-white/10 dark:border-slate-700/10 bg-white/30 dark:bg-slate-900/30 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-green-500 dark:from-blue-400 dark:via-orange-300 dark:to-green-400">
              Prêt à optimiser votre logistique ?
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E Log peut transformer votre chaîne logistique.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/contact" className="block w-fit mx-auto">
              <AnimatedButton 
                className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 px-5 py-3 text-base md:text-lg group relative"
                duration={6}
              >
                Obtenir un devis gratuit 
                <ArrowRight className="ml-2 h-4 w-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
            </Link>
          </motion.div>
          
          {/* Effets de particules simplifiés */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`absolute w-${index % 2 ? 3 : 2} h-${index % 2 ? 3 : 2} rounded-full ${
                  index % 3 === 0 
                    ? 'bg-blue-400/20 dark:bg-blue-400/10'
                    : index % 3 === 1 
                      ? 'bg-orange-400/20 dark:bg-orange-400/10'
                      : 'bg-green-400/20 dark:bg-green-400/10'
                }`}
                style={{
                  left: `${(index * 15) + Math.random() * 10}%`,
                  top: `${(index * 10) + Math.random() * 80}%`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
