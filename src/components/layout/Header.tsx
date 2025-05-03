
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/neon-button";
import { LogoIconWithText, LogoIcon } from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, Info, FileQuestion, Contact } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [{
    name: "Accueil",
    url: "/",
    icon: Home
  }, {
    name: "Services",
    url: "/services",
    icon: Briefcase
  }, {
    name: "À Propos",
    url: "/about",
    icon: Info
  }, {
    name: "FAQ",
    url: "/faq",
    icon: FileQuestion
  }, {
    name: "Contact",
    url: "/contact",
    icon: Contact
  }];

  return <header className={cn(
    "sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm", 
    isScrolled && "shadow-sm bg-white/30"
  )}>
      <div className="container flex h-16 items-center justify-between py-0 my-[8px]">
        <NavLink to="/" className="flex items-center">
          <LogoIconWithText className="w-auto" />
        </NavLink>

        <div className="hidden md:block">
          <NavBar items={navigationItems} className="relative sm:static left-auto transform-none mb-0 sm:pt-0" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Button variant="ghost" size="sm" className="h-10 w-10 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex justify-center my-4">
              <LogoIconWithText />
            </div>
            <nav className="flex flex-col gap-4 mt-8">
              {navigationItems.map(item => <SheetClose key={item.name} asChild>
                  <NavLink to={item.url} className={({
                isActive
              }) => cn("text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 px-1 py-2", isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-foreground")}>
                    {item.name}
                  </NavLink>
                </SheetClose>)}
              
              <div className="mt-4">
                <SheetClose>
                  <NavLink to="/contact" className="block">
                    <Button variant="solid" size="default">
                      Obtenir un devis
                    </Button>
                  </NavLink>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden md:block">
          <NavLink to="/contact">
            <Button variant="solid" size="default">
              Obtenir un devis
            </Button>
          </NavLink>
        </div>
      </div>
      
      {isMobile && <NavBar items={navigationItems.slice(0, 5)} className="z-50" />}
    </header>;
};

export default Header;
