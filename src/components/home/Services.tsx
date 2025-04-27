import { Package, Truck, Clock, FileText, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

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
  return <section id="services" className="w-full px-0 py-12 md:py-20 bg-gradient-to-br from-green-200 via-white to-blue-100 dark:from-green-800 dark:via-slate-950 dark:to-slate-900">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5
    }}>
        <h2 className="section-title">Nos Services Logistiques</h2>
        <p className="section-subtitle">
          Des solutions complètes pour gérer l'ensemble de votre chaîne logistique e-commerce afin que vous puissiez vous concentrer sur le développement de votre activité.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }} whileHover={{
        scale: 1.03,
        transition: {
          duration: 0.2
        }
      }}>
            <Card className="transition-all duration-300 h-full border-opacity-80 bg-gradient-to-br from-green-50/50 via-white to-blue-50/50 dark:from-green-950 dark:via-slate-900 dark:to-blue-950 hover:shadow-md">
              <CardHeader className="pb-4">
                <div className="bg-orange-100/50 dark:bg-orange-900/30 w-12 h-12 rounded-md flex items-center justify-center mb-3">
                  <service.icon className="h-6 w-6 text-orange-600 dark:text-orange-500" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>)}
      </div>
    </section>;
}
