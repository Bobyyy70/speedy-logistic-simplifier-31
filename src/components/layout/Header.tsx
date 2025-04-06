import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoIconWithText } from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigationItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tarification", path: "/pricing" },
    { name: "À Propos", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "text-base font-medium transition-colors hover:text-primary px-1 py-2",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button className="mt-4 w-full" asChild>
                  <NavLink to="/contact" onClick={() => setOpen(false)}>
                    Obtenir un devis
                  </NavLink>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Button size="sm" asChild className="hidden md:inline-flex">
          <NavLink to="/contact">Obtenir un devis</NavLink>
        </Button>
      </div>
    </header>
  );
};

export default Header;
