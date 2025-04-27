
import { Package, Truck, Clock, FileText, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [{
  title: "Réception & Contrôle",
  description: "Réception de vos marchandises et contrôle qualité minutieux pour garantir l'intégrité de votre stock.",
  icon: Package,
  note: null
}, {
  title: "Stockage Sécurisé",
  description: "Stockage optimal de vos produits avec suivi d'inventaire en temps réel dans notre entrepôt sécurisé.",
  icon: FileText,
  note: null
}, {
  title: "Préparation Commandes",
  description: "Picking, packing et personnalisation de vos colis avec rapidité et précision pour satisfaire vos clients.",
  icon: Users,
  note: "* peut varier dans les périodes de forte activité comme le black friday ou noel etc."
}, {
  title: "Expédition Multi-Transporteurs",
  description: "Expédition via notre réseau de transporteurs avec suivi et tarifs négociés pour une livraison optimale.",
  icon: Truck,
  note: "* Europe sous 48-72h dans livraison France"
}, {
  title: "Réponse sous 2h au service client",
  description: "Notre équipe support est disponible rapidement pour répondre à vos questions et résoudre vos problèmes.",
  icon: Clock,
  note: "* durant les horaires de travail, et sinon ils ont également le chatbot qui est déjà la première étape avant de passer au SAV"
}, {
  title: "Précision Opérationnelle",
  description: "Taux d'erreur de préparation quasiment nul grâce à nos processus rigoureux et notre système de contrôle avancé.",
  icon: ShieldCheck,
  note: null
}];

export function Services() {
  return (
    <section id="services" className="section-container">
      <div className="flex flex-col items-center mb-12">
        <img 
          src="/lovable-uploads/8c871008-d5f6-4ae5-b46f-3304f641cb8f.png" 
          alt="SupplyOS Logo" 
          className="w-32 h-auto mb-8"
        />
        <h2 className="section-title">Nos Services Logistiques</h2>
        <p className="section-subtitle">
          Une solution complète pour gérer efficacement votre chaîne logistique e-commerce
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-effect border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {service.description}
                    {service.note && (
                      <p className="mt-2 text-sm text-muted-foreground italic">
                        {service.note}
                      </p>
                    )}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      
      <div className="flex justify-center mt-12">
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
          <Link to="/services">Découvrir Tous Nos Services</Link>
        </Button>
      </div>
    </section>
  );
}
