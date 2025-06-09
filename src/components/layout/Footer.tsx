
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CustomCookieBanner } from "@/components/cookies/CustomCookieBanner";
import { useCookieManagement } from "@/hooks/useCookieManagement";
import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const {
    shouldShowCustomBanner
  } = useCookieManagement();

  return (
    <>
      {/* Bannière de cookies personnalisée si nécessaire */}
      {shouldShowCustomBanner && <CustomCookieBanner />}
      
      <footer className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" 
                    alt="Speed E-Log Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-xl font-bold text-white">Speed E-Log</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Votre partenaire logistique e-commerce de confiance. Nous simplifions votre chaîne d'approvisionnement pour que vous puissiez vous concentrer sur la croissance de votre entreprise.
                </p>
                
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Liens Rapides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      Nos Services
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      Technologie
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      À Propos
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      Contact
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      FAQ
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="space-y-3">
                  <li className="text-slate-300">Réception & Contrôle</li>
                  <li className="text-slate-300">Stockage Sécurisé</li>
                  <li className="text-slate-300">Préparation de Commandes</li>
                  <li className="text-slate-300">Expédition Multi-Transporteurs</li>
                  <li className="text-slate-300">Gestion des Retours</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-slate-300">
                      <p>Port-sur-Saône</p>
                      <p>Bourgogne-Franche-Comté, France</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <a href="mailto:contact@speedelog.fr" className="text-slate-300 hover:text-white transition-colors">
                      contact@speedelog.net
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          {/* Bottom Footer */}
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-slate-400">
                <p>&copy; {currentYear} Speed E-Log. Tous droits réservés.</p>
              </div>
              <div className="flex flex-wrap items-center space-x-4 text-sm">
                <Link to="/mentions-legales" className="text-slate-400 hover:text-white transition-colors">
                  Mentions Légales
                </Link>
                <Link to="/politique-confidentialite" className="text-slate-400 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
                <Link to="/cgv" className="text-slate-400 hover:text-white transition-colors">
                  CGV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
