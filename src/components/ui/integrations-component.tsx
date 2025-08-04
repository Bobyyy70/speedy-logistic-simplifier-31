'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Logos e-commerce et logistique officiels (basés sur les vraies couleurs)
const ShopifyLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#7AB55C"/>
    <path d="M22.5 11.8c-.1-.1-.2-.1-.4-.1l-1.8-.1c-.1 0-.2-.1-.2-.2v-.3c0-.7-.2-1.3-.6-1.8-.5-.6-1.2-.9-2-.9-.1 0-.1 0-.2 0-.6-1.3-1.6-1.9-2.8-1.9-2.2 0-3.3 2.8-3.6 4.2l-1.5.5c-.5.2-.5.2-.6.7L8 18.6c0 .1 0 .2.1.2l10.8 2.1c.1 0 .3-.1.3-.2l1.4-8.7c.1-.2 0-.2-.1-.2z" fill="white"/>
    <path d="M22.1 11.7c-.8-.2-1.8-.4-1.8-.4s-.1-1.2-.5-1.2c-.4 0-1.9 6.4-1.9 6.4s-.7-.4-1.5-.9c1.1-3.6 2-6.9.9-7.8-.6-.5-1.7-.2-2.7 1.3-.7 1-1.3 2.4-1.6 3.8l-1.1.4c-.3-.9-.7-1.9-1.3-1.9-.7 0-1.4 2.9-1.4 2.9l-.8.3 1.3 8.1 10.8-2.1-1.3-8.9z" fill="#7AB55C"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#7F54B3"/>
    <path d="M7 9.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm0 4c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5z" fill="white"/>
    <path d="M8.5 17.5c0-.8.7-1.5 1.5-1.5h12c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H10c-.8 0-1.5-.7-1.5-1.5zm2 4c0-.8.7-1.5 1.5-1.5h8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8c-.8 0-1.5-.7-1.5-1.5z" fill="white"/>
    <circle cx="8" cy="22" r="1.5" fill="white"/>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#FF9900"/>
    <path d="M8 12c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4v-8z" fill="white"/>
    <path d="M11 16h10" stroke="#FF9900" strokeWidth="2"/>
    <path d="M16 11v10" stroke="#FF9900" strokeWidth="2"/>
    <path d="M9 22c0-.6.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1H10c-.6 0-1-.4-1-1z" fill="#FF9900"/>
    <path d="M23 22c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z" fill="#FF9900"/>
    <path d="M11 22c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z" fill="#FF9900"/>
  </svg>
);

const PrestashopLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#DF0067"/>
    <path d="M16 6c-1.1 0-2 .9-2 2v3h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-3V8c0-1.1-.9-2-2-2z" fill="white"/>
    <circle cx="16" cy="16" r="3" fill="#DF0067"/>
    <path d="M16 13v6" stroke="white" strokeWidth="1"/>
    <path d="M13 16h6" stroke="white" strokeWidth="1"/>
  </svg>
);

const MagentoLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#EC6611"/>
    <path d="M16 5L9 9v10l7 6 7-6V9l-7-4z" fill="white"/>
    <path d="M16 8v12" stroke="#EC6611" strokeWidth="2"/>
    <path d="M12 11l4 2 4-2" stroke="#EC6611" strokeWidth="1.5"/>
    <path d="M12 17l4 2 4-2" stroke="#EC6611" strokeWidth="1.5"/>
    <circle cx="16" cy="14" r="1" fill="#EC6611"/>
  </svg>
);

const CdiscountLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#F39200"/>
    <path d="M16 6C10.5 6 6 10.5 6 16s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="20" cy="20" r="2" fill="white"/>
  </svg>
);

const ColissimoLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#FFD320"/>
    <rect x="6" y="10" width="20" height="12" rx="2" fill="white"/>
    <path d="M8 13h16" stroke="#FFD320" strokeWidth="2"/>
    <path d="M8 16h12" stroke="#FFD320" strokeWidth="1.5"/>
    <path d="M8 19h14" stroke="#FFD320" strokeWidth="1.5"/>
    <circle cx="25" cy="8" r="2" fill="#FFD320"/>
  </svg>
);

const DPDLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#DC143C"/>
    <rect x="6" y="10" width="20" height="12" rx="2" fill="white"/>
    <path d="M9 13h14v6H9v-6z" fill="#DC143C"/>
    <path d="M11 15h10" stroke="white" strokeWidth="2"/>
    <path d="M26 7v3h-3V7h3z" fill="white"/>
  </svg>
);

// Centre logo (Speed E-Log main icon)
const MainLogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 7h10v10H7V7z" fill="currentColor" opacity="0.3"/>
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// --- Infinite Slider Component ---
export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    if (size === 0) return; // Don't start animation until size is measured

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      // Set initial position before starting the loop
      translation.set(from);
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// --- Integration Card Component ---
const IntegrationCard = ({ children, className, isCenter = false }: { children: React.ReactNode; className?: string; isCenter?: boolean }) => {
    return (
        <div className={cn('bg-background relative z-20 flex size-12 items-center justify-center rounded-full border border-border', className)}>
            <div className={cn('m-auto size-fit text-muted-foreground *:size-5', isCenter && '*:size-8')}>{children}</div>
        </div>
    )
}

// --- Main Exported Component ---
export default function IntegrationsSection({ onCTAClick }: { onCTAClick?: () => void }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Animation */}
            <BackgroundGradientAnimation height="100vh">
                <div className="absolute inset-0 z-10">
                    {/* Hero Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="container mx-auto px-6 py-24 text-center"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
                        >
                            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                Intégrations
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                E-commerce
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mx-auto mb-12 max-w-3xl text-lg text-white/80 md:text-xl"
                        >
                            Connectez toutes vos plateformes de vente à notre système logistique. 
                            Un stock central, une synchronisation parfaite, une visibilité totale.
                        </motion.p>
                    </motion.div>

                    {/* Integrations Animation Section - Enlarged */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative mx-auto max-w-7xl px-6 py-16"
                    >
                        <div className="relative mx-auto max-w-6xl space-y-12 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]">
                            <div
                                role="presentation"
                                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
                            />
                            
                            {/* Slider Row 1 - E-commerce platforms */}
                            <div className="py-4">
                                <InfiniteSlider
                                    gap={48}
                                    speed={20}
                                    speedOnHover={10}>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><ShopifyLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><WooCommerceLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><AmazonLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><PrestashopLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><MagentoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><CdiscountLogo /></IntegrationCard>
                                </InfiniteSlider>
                            </div>

                            {/* Slider Row 2 - Mixed platforms (reverse) */}
                            <div className="py-4">
                                <InfiniteSlider
                                    gap={48}
                                    speed={20}
                                    speedOnHover={10}
                                    reverse>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><ColissimoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><DPDLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><ShopifyLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><WooCommerceLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><AmazonLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><PrestashopLogo /></IntegrationCard>
                                </InfiniteSlider>
                            </div>

                            {/* Slider Row 3 - Logistics & e-commerce */}
                            <div className="py-4">
                                <InfiniteSlider
                                    gap={48}
                                    speed={20}
                                    speedOnHover={10}>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><MagentoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><CdiscountLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><ColissimoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><DPDLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><ShopifyLogo /></IntegrationCard>
                                    <IntegrationCard className="size-20 border-white/20 bg-white/10 backdrop-blur-md"><WooCommerceLogo /></IntegrationCard>
                                </InfiniteSlider>
                            </div>

                            {/* Center Logo */}
                            <div className="absolute inset-0 m-auto flex size-fit justify-center">
                                <IntegrationCard
                                    className="size-24 border-white/30 bg-white/20 backdrop-blur-lg shadow-2xl"
                                    isCenter={true}>
                                    <MainLogoIcon />
                                </IntegrationCard>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="container mx-auto px-6 py-16"
                    >
                        <div className="mx-auto max-w-4xl space-y-8 text-center">
                            <h2 className="text-balance text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                    Un stock central, une visibilité maximale
                                </span>
                            </h2>
                            
                            <div className="mx-auto max-w-4xl space-y-6 text-base text-white/90 md:text-lg">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="leading-relaxed"
                                >
                                    <strong className="text-white">Imaginez la puissance d'un stock centralisé chez Speed E-Log</strong> connecté simultanément à toutes vos plateformes de vente. Shopify, WooCommerce, Amazon, Cdiscount, vos marketplaces favorites... tous synchronisés en temps réel avec le même inventaire physique.
                                </motion.p>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.4 }}
                                    className="leading-relaxed"
                                >
                                    Cette approche révolutionnaire vous offre une <strong className="text-white">visibilité totale sur votre activité</strong> : plus besoin de jongler entre plusieurs entrepôts, plus de ruptures de stock cachées, plus de commandes perdues. Chaque produit vendu sur n'importe quelle plateforme est immédiatement déduit de votre stock central, garantissant une cohérence parfaite.
                                </motion.p>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                    className="leading-relaxed"
                                >
                                    Le résultat ? <strong className="text-white">Une expansion multi-canal sans effort</strong>. Ajoutez de nouveaux canaux de vente en quelques clics, testez de nouvelles marketplaces sans investissement logistique, et gardez toujours le contrôle total sur votre activité depuis un tableau de bord unique.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.8 }}
                                className="pt-8"
                            >
                                <Button
                                    variant="default"
                                    size="xl"
                                    onClick={onCTAClick}
                                    className="bg-white/90 text-black hover:bg-white gap-3 px-10 py-6 text-lg font-semibold shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-white/20 hover:scale-105"
                                >
                                    Découvrir nos intégrations
                                    <ChevronRight className="ml-0 !size-5" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </BackgroundGradientAnimation>
        </div>
    )
}