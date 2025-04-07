
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoIconWithText } from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader,
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Fermer le menu mobile lors des changements de route
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Détection du scroll pour ajouter une ombre
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tarification", path: "/pricing" },
    { name: "À Propos", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isScrolled && "shadow-sm"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <LogoIconWithText />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              {navigationItems.map((item) => (
                <SheetClose key={item.name} asChild>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "text-base font-medium transition-colors hover:text-primary px-1 py-2",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button className="mt-4 w-full" asChild>
                  <NavLink to="/contact">
                    Obtenir un devis
                  </NavLink>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop CTA Button (moved out of the nav for clarity) */}
        <div className="hidden md:block">
          <Button size="sm" asChild>
            <NavLink to="/contact">Obtenir un devis</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
