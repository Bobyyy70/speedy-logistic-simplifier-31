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
  return;
}