
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CustomCookieBanner } from "@/components/cookies/CustomCookieBanner";
import { HubSpotCookieBanner } from "./HubSpotCookieBanner";
import { useCookieManagement } from "@/hooks/useCookieManagement";
import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { shouldShowCustomBanner, isProduction } = useCookieManagement();

  return (
    <>
      {/* Bannière de cookies personnalisée si nécessaire (hors production) */}
      {!isProduction && shouldShowCustomBanner && <CustomCookieBanner />}
      <footer className="relative bg-gray-50 text-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(71_85_105)_1px,transparent_0)] bg-[size:24px_24px]" />
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
                    alt="Speed E-Log - Spécialiste logistique e-commerce France"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-xl font-bold text-slate-900">Speed E-Log</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Votre partenaire logistique e-commerce de confiance. Nous simplifions votre chaîne d'approvisionnement pour que vous puissiez vous concentrer sur la croissance de votre entreprise.
                </p>
                
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900">Liens Rapides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group">
                      Nos Services
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group">
                      Technologie
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group">
                      À Propos
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group">
                      Contact
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group">
                      FAQ
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900">Services</h3>
                <ul className="space-y-3">
                  <li className="text-slate-600">Réception & Contrôle</li>
                  <li className="text-slate-600">Stockage Sécurisé</li>
                  <li className="text-slate-600">Préparation de Commandes</li>
                  <li className="text-slate-600">Expédition Multi-Transporteurs</li>
                  <li className="text-slate-600">Gestion des Retours</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-slate-600">
                      <p>Port-sur-Saône</p>
                      <p>Bourgogne-Franche-Comté, France</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <a href="mailto:contact@speedelog.fr" className="text-slate-600 hover:text-slate-900 transition-colors">
                      contact@speedelog.net
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-200" />

          {/* Bottom Footer */}
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="text-sm text-muted-foreground">
                <p>&copy; {currentYear} Speed E-Log. Tous droits réservés.</p>
              </div>

              <nav aria-label="Liens du pied de page" className="w-full md:w-auto">
                <ul className="w-full text-sm grid grid-cols-2 sm:grid-cols-3 gap-1 md:flex md:flex-wrap md:justify-end md:gap-x-6 md:gap-y-2">
                  <li>
                    <Link
                      to="/mentions-legales"
                      className="mobile-touch-target inline-flex items-center px-2 py-2 md:px-0 md:py-1 text-muted-foreground hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Mentions Légales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/politique-confidentialite"
                      className="mobile-touch-target inline-flex items-center px-2 py-2 md:px-0 md:py-1 text-muted-foreground hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Politique de Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/politique-cookies"
                      className="mobile-touch-target inline-flex items-center px-2 py-2 md:px-0 md:py-1 text-muted-foreground hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Politique de Cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cgv"
                      className="mobile-touch-target inline-flex items-center px-2 py-2 md:px-0 md:py-1 text-muted-foreground hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      CGV
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sitemap"
                      className="mobile-touch-target inline-flex items-center px-2 py-2 md:px-0 md:py-1 text-muted-foreground hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Plan du Site
                    </Link>
                  </li>
                  <li className="md:ml-2">
                    <div className="inline-flex px-2 py-2 md:px-0 md:py-1">
                      {/* Bouton HubSpot pour paramètres cookies */}
                      <HubSpotCookieBanner />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
