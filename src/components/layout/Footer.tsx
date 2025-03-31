
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { LogoIcon } from "@/components/ui/LogoIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <LogoIcon />
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Simplifiez votre logistique e-commerce et concentrez-vous sur votre cœur de métier. Speed E Log s'occupe du reste.
            </p>
            <div className="pt-2 flex space-x-4">
              {/* Social media icons could be added here in the future */}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  Tarification
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-sm text-muted-foreground hover:text-primary">
                  Conditions Générales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
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
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  contact@speedelog.fr
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a
                  href="tel:+33300000000"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  +33 3 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {currentYear} Speed E Log. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
