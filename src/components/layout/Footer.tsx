
import React from "react";
import { Link } from "react-router-dom";
import { LogoIconWithText } from "@/components/ui/LogoIcon";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-12 pb-6 bg-slate-900/60 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-start px-0">
              <LogoIconWithText />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Votre partenaire logistique pour simplifier vos opérations e-commerce et accélérer votre croissance.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4 text-[#F3BA2F]" />
              Port-sur-Saône, France
            </div>
          </div>

          {/* Liens principaux */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">Accueil</Link>
              <Link to="/services" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">Services</Link>
              <Link to="/pricing" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">Tarification</Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">À Propos</Link>
              <Link to="/faq" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">FAQ</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Liens légaux et copyright */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Informations légales</h3>
            <div className="flex flex-col gap-2">
              <Link to="/mentions-legales" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="text-sm text-gray-400 hover:text-[#2F68F3] transition-colors">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright avec effet néon */}
        <div className="pt-4 text-center border-t border-white/5">
          <p className="text-sm text-gray-500">
            © {currentYear} Speed E-Log. Tous droits réservés. 
            <span className="text-[#2F68F3]"> Réalisé avec passion à Port-sur-Saône.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
