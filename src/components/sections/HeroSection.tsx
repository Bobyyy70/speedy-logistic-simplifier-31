
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { WorldMap } from "@/components/ui/world-map/component";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Enable parallax effect on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      const worldMapElement = hero.querySelector(".world-map-container");
      if (worldMapElement) {
        // Subtle parallax movement for world map
        (worldMapElement as HTMLElement).style.transform = 
          `translate3d(${moveX * 10}px, ${moveY * 10}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define our international shipping routes
  const shippingRoutes = [
    {
      start: {
        lat: 48.8566,
        lng: 2.3522
      }, // Paris, France
      end: {
        lat: 40.7128,
        lng: -74.0060,
        label: "New York"
      } // New York
    },
    {
      start: {
        lat: 48.8566,
        lng: 2.3522
      }, // Paris, France
      end: {
        lat: -33.8688,
        lng: 151.2093,
        label: "Sydney"
      } // Sydney
    },
    {
      start: {
        lat: 48.8566,
        lng: 2.3522
      }, // Paris, France
      end: {
        lat: 35.6762,
        lng: 139.6503,
        label: "Tokyo"
      } // Tokyo
    },
    {
      start: {
        lat: 48.8566,
        lng: 2.3522
      }, // Paris, France
      end: {
        lat: 55.7558,
        lng: 37.6173,
        label: "Moscow"
      } // Moscow
    },
    {
      start: {
        lat: 48.8566,
        lng: 2.3522
      }, // Paris, France
      end: {
        lat: -15.7975,
        lng: -47.8919,
        label: "Brasília"
      } // Brazil (Brasília)
    },
    {
      start: {
        lat: 48.8566,
        lng: 2.3522
      }, // Paris, France
      end: {
        lat: -1.2921,
        lng: 36.8219,
        label: "Nairobi"
      } // Nairobi, Kenya
    }
  ];

  return (
    <section ref={heroRef} className="relative py-0 md:py-0 lg:py-0 overflow-hidden xl:py-0 rounded-none mx-0 min-h-[100vh]">
      <BackgroundGradientAnimation 
        height="100vh"
        gradientBackgroundStart="rgb(17, 24, 39)" // Dark blue background
        gradientBackgroundEnd="rgb(2, 6, 23)"      // Almost black
        firstColor="18, 113, 255"                  // Blue
        secondColor="243, 186, 47"                 // Orange
        thirdColor="45, 212, 191"                  // Teal
        fourthColor="240, 171, 252"                // Purple
        fifthColor="22, 78, 99"                    // Dark blue
        pointerColor="243, 186, 47"                // Orange
        interactive={true}
        className="z-10"
        preserveBackground={true}
      >
        {/* World Map Background - Higher opacity with improved animation */}
        <div className="absolute inset-0 world-map-container transition-transform duration-200 ease-out">
          <WorldMap 
            dots={shippingRoutes} 
            lineColor="#2F68F3" 
            secondaryLineColor="#F3BA2F"
            opacity={0.65}
          />
        </div>
        
        <div className="container mx-auto relative z-20 px-0 pt-16 md:pt-0 flex items-center min-h-[100vh]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-[25px]">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-2"
              >
                <HomeLogoWithText className="w-36 lg:self-start mx-auto lg:mx-0" />
              </motion.div>

              <div className="space-y-4">
                <AnimatedText
                  text="La logistique E-commerce,"
                  className="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl text-white"
                  delay={0.2}
                />
                <AnimatedText
                  text="sans les tracas."
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400 dark:from-blue-400 dark:to-orange-400 text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl"
                  delay={0.6}
                />
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 text-gray-300"
              >
                Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
                <br />
                Speed E-Log simplifie vos expéditions vers le monde entier.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start px-[4px]"
              >
                <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center">
                      Obtenir un devis personnalisé
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.2, 
                          repeat: Infinity, 
                          repeatDelay: 3,
                          ease: "easeInOut" 
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300">
                  <Link to="/services">
                    Découvrir nos services
                  </Link>
                </Button>
              </motion.div>
              
              {/* Social Proof - With animation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="mt-6 flex items-center justify-center lg:justify-start space-x-3"
              >
                <div className="flex -space-x-2">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Avatar className="inline-block h-8 w-8 border-2 border-white">
                      <AvatarImage alt="Logo HEFA Group" className="p-1 object-cover" src="/lovable-uploads/44a63774-38e6-47c0-bddf-56c2d10f5e6c.png" />
                      <AvatarFallback>HG</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Avatar className="inline-block h-8 w-8 border-2 border-white">
                      <AvatarImage alt="Logo THOMAS" className="p-1 object-cover" src="/lovable-uploads/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb.png" />
                      <AvatarFallback>TH</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Avatar className="inline-block h-8 w-8 border-2 border-white">
                      <AvatarImage alt="Logo Heatzy" className="p-1 object-cover" src="/lovable-uploads/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6.png" />
                      <AvatarFallback>HZ</AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <motion.p 
                  className="text-sm text-gray-300"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  Déjà <span className="font-medium text-white">20+ PME</span> nous font confiance
                </motion.p>
              </motion.div>
            </div>
            
            {/* Visual Column with floating effect */}
            <motion.div 
              className="lg:order-last relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-lg blur-md"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <motion.div 
                className="relative bg-gradient-to-r from-slate-900/80 via-slate-950/70 to-slate-900/80 shadow-xl p-6 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 rounded"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              >
                <h3 className="font-semibold text-lg mb-2 text-white">Speed E-Log vous accompagne dans la gestion complète de votre e-commerce.</h3>
                <p className="text-gray-300">Notre expertise 3PL garantit une optimisation maximale de votre chaîne logistique.</p>
                
                {/* Add animated stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm p-3 rounded"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <p className="text-sm text-gray-400">Taux de livraison</p>
                    <p className="text-xl font-semibold text-white">99.8%</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm p-3 rounded"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <p className="text-sm text-gray-400">Pays desservis</p>
                    <p className="text-xl font-semibold text-white">180+</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Mouse scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </div>
        </motion.div>
      </BackgroundGradientAnimation>
    </section>
  );
}
