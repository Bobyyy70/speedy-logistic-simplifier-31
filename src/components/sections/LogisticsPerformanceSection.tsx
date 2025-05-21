
import React from "react";
import { Shield, Clock, Truck, MessageCircle, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function LogisticsPerformanceSection() {
  const performanceMetrics = [
    {
      icon: Shield,
      title: "Précision",
      value: "99.85%",
      description: "Taux de précision sur plus de 2000 colis"
    },
    {
      icon: Clock,
      title: "Délai",
      value: "24h",
      description: "Traitement moyen des commandes",
      note: "* peut varier pendant les périodes de forte activité"
    },
    {
      icon: Truck,
      title: "Livraison France",
      value: "24-48h",
      description: "Délai moyen de livraison en France",
      notes: ["* Europe sous 48-72h", "* peut varier pendant les périodes de forte activité"]
    },
    {
      icon: MessageCircle,
      title: "Service Client",
      value: "2h",
      description: "Temps de réponse moyen",
      note: "* durant les horaires de travail. Chatbot disponible 24/7"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span 
            className="pin-badge text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos performances
          </motion.span>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tighter mb-4 text-slate-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Performance & Technologie
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Notre engagement envers l'excellence opérationnelle, soutenu par des technologies de pointe
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {performanceMetrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400 p-2.5 rounded-lg shadow-sm">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                    {item.note && <br />}
                    {item.note && <span className="text-xs italic">{item.note}</span>}
                    {item.notes && item.notes.map((note, i) => (
                      <React.Fragment key={i}>
                        <br />
                        <span className="text-xs italic">{note}</span>
                      </React.Fragment>
                    ))}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Notre Technologie</h3>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Supplyos - Notre Partenaire Technologique</h4>
                <p className="text-muted-foreground mb-5">
                  Une suite logicielle intégrée et moderne combinant :
                </p>
                <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">1</span>
                    </div>
                    <span>WMS (Warehouse Management System) pour une gestion optimale des stocks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">2</span>
                    </div>
                    <span>TMS (Transport Management System) pour le suivi des expéditions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">3</span>
                    </div>
                    <span>OMS (Order Management System) pour le traitement des commandes</span>
                  </li>
                </ul>
                
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md"
                >
                  <Link to="/technology" className="flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <motion.div 
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-xl" />
              <img 
                alt="SupplyOS Logo" 
                className="relative z-10 max-w-full h-auto" 
                src="/lovable-uploads/9e3dc511-3aec-4dc9-840f-187ab8de7235.png" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
