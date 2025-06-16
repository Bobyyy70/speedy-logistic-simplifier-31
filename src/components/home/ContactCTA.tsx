
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map/component";
import { Button } from "@/components/ui/button";

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
    <section className="py-16 md:py-24 lg:py-32 px-0 relative overflow-hidden bg-white">
      {/* Fond subtil avec carte du monde */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <WorldMap dots={globalShippingPoints} opacity={0.35} />
      </div>
      
      <div className="section-container py-0 my-0 px-4 md:px-8 relative z-10">
        <motion.div 
          className="section-box text-center max-w-3xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-orange-500">
              Prêt à optimiser votre logistique ?
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E Log peut transformer votre chaîne logistique.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Button 
              variant="blue" 
              size="2xl" 
              className="mx-auto shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Obtenir un devis personnalisé 
                <ArrowRight className="ml-2 h-5 w-5 text-white transition-transform" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Effets de particules flottantes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className={`absolute w-${index % 2 ? 3 : 2} h-${index % 2 ? 3 : 2} rounded-full ${
                  index % 3 === 0 
                    ? 'bg-blue-400/10 dark:bg-blue-400/5'
                    : index % 3 === 1 
                      ? 'bg-orange-400/10 dark:bg-orange-400/5'
                      : 'bg-green-400/10 dark:bg-green-400/5'
                }`}
                style={{
                  left: `${(index * 15) + Math.random() * 10}%`,
                  top: `${(index * 10) + Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
