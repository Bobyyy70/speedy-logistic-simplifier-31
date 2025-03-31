
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { LogoIcon } from "@/components/ui/LogoIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-10 md:h-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <LogoIcon />
            <p className="text-sm text-muted-foreground mt-4 max-w-xs text-center md:text-left">
              Simplifiez votre logistique e-commerce et concentrez-vous sur votre cœur de métier.
              <br />
              Speed E Log s'occupe du reste.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-center md:text-left">Navigation</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  Accueil
                </Link>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  Services
                </Link>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  Tarification
                </Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  À Propos
                </Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-center md:text-left">Légal</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  Mentions Légales
                </Link>
                <Link to="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  Politique de Confidentialité
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-center md:text-left">Contact</h4>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Port-sur-Saône, Bourgogne-Franche-Comté, France
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <a
                    href="mailto:contact@speedelog.fr"
                    className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4"
                  >
                    contact@speedelog.fr
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <a
                    href="tel:+33300000000"
                    className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4"
                  >
                    +33 3 00 00 00 00
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {currentYear} Speed E Log. Tous droits réservés. Construit avec passion à Port-sur-Saône.
          </p>
        </div>
      </div>
    </footer>
  );
}
