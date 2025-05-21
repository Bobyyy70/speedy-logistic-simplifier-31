
import { Package, Truck, Clock, FileText, Users, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [{
  title: "Réception & Contrôle",
  description: "Réception de vos marchandises et contrôle qualité minutieux pour garantir l'intégrité de votre stock.",
  icon: Package
}, {
  title: "Stockage Sécurisé",
  description: "Stockage optimal de vos produits avec suivi d'inventaire en temps réel dans notre entrepôt sécurisé.",
  icon: FileText
}, {
  title: "Préparation Commandes",
  description: "Picking, packing et personnalisation de vos colis avec rapidité et précision pour satisfaire vos clients.",
  icon: Users
}, {
  title: "Expédition Multi-Transporteurs",
  description: "Expédition via notre réseau de transporteurs avec suivi et tarifs négociés pour une livraison optimale.",
  icon: Truck
}, {
  title: "Gestion des Retours",
  description: "Traitement efficace des retours avec contrôle, reconditionnement et réintégration en stock si nécessaire.",
  icon: Clock
}, {
  title: "Précision Opérationnelle",
  description: "Taux d'erreur de préparation quasiment nul grâce à nos processus rigoureux et notre système de contrôle avancé.",
  icon: ShieldCheck
}];

export function Services() {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="mobile-container section-container relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-blue-100/10 dark:bg-blue-900/10 blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-orange-100/10 dark:bg-orange-900/10 blur-xl" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mobile-heading bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300">Nos Services Logistiques</h2>
          <p className="section-subtitle mobile-text">Une solution complète pour gérer efficacement votre chaîne logistique e-commerce sans les tracas</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: isMobile ? index * 0.05 : index * 0.1 }}
                viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border-2 border-gray-200 dark:border-gray-700/50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-2 px-5 md:px-6 pt-5 md:pt-6 flex flex-row items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl font-bold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5 md:px-6 pb-6">
                    <CardDescription className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-2">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link to="/contact" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-orange-400 p-0.5 shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-800/30 transition-all duration-300">
            <div className="relative bg-gradient-to-r from-blue-600/5 to-orange-400/5 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 text-white font-medium">
              <span className="relative z-10">Demander un devis personnalisé</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/90 to-orange-400/90 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
