
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <LogoIcon />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/services"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/pricing"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            Tarification
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            À Propos
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            Contact
          </NavLink>
        </nav>

        <Button size="sm" asChild>
          <NavLink to="/contact">Obtenir un devis</NavLink>
        </Button>
      </div>
    </header>
  );
};

export default Header;
