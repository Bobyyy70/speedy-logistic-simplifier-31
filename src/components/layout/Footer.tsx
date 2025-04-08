import React from "react";
import { Link } from "react-router-dom";
import { LogoIconWithText } from "@/components/ui/LogoIcon";
import { Mail, Phone, MapPin } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="flex flex-col gap-4">
            <LogoIconWithText />
            <p className="text-sm text-muted-foreground">
              Votre partenaire logistique pour simplifier vos opérations e-commerce et accélérer votre croissance.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@speedelog.net
              </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+33 
6 35 58 40 04</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
70170 Port-sur-Saône,</span>
              </div>
            </div>
          </div>

          {/* Liens principaux */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tarification</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">À Propos</Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Liens légaux et copyright */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Informations légales</h3>
            <div className="flex flex-col gap-2">
              <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Speed E-Log. Tous droits réservés. Construit avec passion à Port-sur-Saône.
          </p>
        </div>
      </div>
    </footer>;
}