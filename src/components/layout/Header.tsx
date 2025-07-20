
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { UserMenu } from "@/components/layout/UserMenu";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation selon le cahier des charges : seulement /, /suivi-colis, /integrations, /faq, /blog
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Intégrations", href: "/integrations" },
    { name: "Suivi Colis", href: "/suivi-colis" },
    { name: "FAQ", href: "/faq" },
    // { name: "Blog", href: "/blog" }, // À activer quand HubSpot CMS sera configuré
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <LogoIcon className="h-6 w-6 md:h-8 md:w-8" />
            <span className="font-bold text-lg md:text-xl">Speed E-Log</span>
          </Link>

          {/* Desktop Navigation - Centré */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="relative flex items-center space-x-8 bg-white/90 border border-slate-200 backdrop-blur-xl py-2 px-6 rounded-full shadow-md">
              {navigation.map((item) => {
                const isCurrentActive = isActive(item.href);
                return (
                  <div key={item.name} className="relative">
                    <Link
                      to={item.href}
                      className={`relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                        isCurrentActive
                          ? "text-slate-900 bg-blue-50"
                          : "text-slate-500 hover:text-[#F3BA2F]"
                      }`}
                    >
                      {item.name}
                      {isCurrentActive && (
                        <>
                          <div className="absolute inset-0 w-full bg-[#2F68F3]/10 rounded-full -z-10" />
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#2F68F3] rounded-t-full">
                            <div className="absolute w-12 h-6 bg-[#2F68F3]/60 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-[#2F68F3]/60 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-[#2F68F3]/60 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="blue" size="sm" asChild>
              <Link to="/#contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden min-h-[44px] min-w-[44px] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-4 space-y-2 border-t bg-white/95 backdrop-blur-sm">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="px-4 py-3 border-t mt-4 pt-4">
                <Button variant="blue" size="sm" className="w-full" asChild>
                  <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                    Devis gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
