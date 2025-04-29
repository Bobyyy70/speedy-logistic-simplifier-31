
import { Package, Truck, Clock, FileText, Users, ShieldCheck } from "lucide-react";
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

  return <section id="services" className="mobile-container section-container">
      <h2 className="section-title mobile-heading">Nos Services Logistiques</h2>
      <p className="section-subtitle mobile-text">
        Une solution complète pour gérer efficacement votre chaîne logistique e-commerce
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12">
        {services.map((service, index) => {
        const Icon = service.icon;
        return <motion.div key={service.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: isMobile ? index * 0.05 : index * 0.1 // Plus rapide sur mobile
        }} viewport={{
          once: true,
          margin: isMobile ? "-50px" : "0px" // Déclenche l'animation plus tôt sur mobile
        }}>
              <Card className="h-full glass-effect border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6">
                  <div className="mb-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 md:px-6 pb-3 md:pb-6">
                  <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>;
      })}
      </div>
      
      <div className="flex justify-center mt-8 md:mt-12">
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
          <Link to="/services">Découvrir Tous Nos Services</Link>
        </Button>
      </div>
    </section>;
}
