
import React from "react";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/ui/LogoIcon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <LogoIcon />
        </a>

        {/* Navigation - à compléter ultérieurement */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Ces liens seront implémentés dans une prochaine étape */}
          {/* 
          <a href="/services" className="text-sm font-medium text-foreground hover:text-primary">Services</a>
          <a href="/pricing" className="text-sm font-medium text-foreground hover:text-primary">Tarification</a>
          <a href="/about" className="text-sm font-medium text-foreground hover:text-primary">À Propos</a>
          <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary">Contact</a>
          */}
        </nav>

        <Button size="sm" asChild>
          <a href="/contact">Obtenir un devis</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
