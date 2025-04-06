
import React from "react";
import { Link } from "react-router-dom";
import { LogoIconWithText } from "@/components/ui/LogoIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 md:h-24 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          {/* Logo et Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <LogoIconWithText />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Speed E-Log. Tous droits réservés. Construit avec passion à Port-sur-Saône.
            </p>
          </div>

          {/* Navigation links remain the same */}
          <nav className="flex gap-4 sm:gap-6">
            <Link 
              to="/mentions-legales" 
              className="text-xs text-muted-foreground hover:underline hover:text-primary underline-offset-4"
            >
              Mentions Légales
            </Link>
            <Link 
              to="/politique-confidentialite" 
              className="text-xs text-muted-foreground hover:underline hover:text-primary underline-offset-4"
            >
              Politique de Confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
