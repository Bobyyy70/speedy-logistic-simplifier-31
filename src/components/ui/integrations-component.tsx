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

// Official SVG Logos with Real Brand Designs
const ShopifyLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#95BF47"/>
    <path d="M21.5 9.8c-.1-.1-.3-.2-.5-.2 0-.2-.1-.5-.2-.7-.4-.8-1.1-1.3-1.9-1.3-.1 0-.1 0-.2 0-.7-1.5-1.9-2.2-3.2-2.2-2.5 0-3.8 3.2-4.1 4.8l-1.7.5c-.6.2-.6.2-.7.8L8 19.2c0 .1 0 .2.1.2l12.4 2.4c.1 0 .3-.1.3-.2l1.6-10c.1-.2 0-.2-.1-.2l-1-.6zm-5.8 1.4c-.7.2-1.4.4-2.1.7.3-1.1.8-1.7 1.4-1.9.2.4.3.8.3 1.2h.4zm-1-2.2c.2 0 .4.1.5.2-.6.3-1.1 1-1.5 2.5l-1.6.5c.3-1 1-3.2 2.6-3.2z" fill="white"/>
    <path d="M20.5 11.2l-.4.1s-.1-1.4-.6-1.4c-.5 0-2.2 7.3-2.2 7.3s-.8-.5-1.7-1c1.3-4.1 2.3-7.9.9-8.9-.7-.6-2-.2-3.1 1.5-.8 1.1-1.5 2.7-1.8 4.3l-1.3.4c-.3-1-.8-2.2-1.5-2.2-.8 0-1.6 3.3-1.6 3.3l-.9.3 1.5 9.3 12.4-2.4-1.5-10.2z" fill="#95BF47"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#7F54B3"/>
    <path d="M6.5 8.5c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2s-.9 2-2 2h-15c-1.1 0-2-.9-2-2z" fill="white"/>
    <path d="M8.5 12.5c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2s-.9 2-2 2h-11c-1.1 0-2-.9-2-2z" fill="white"/>
    <path d="M10.5 16.5c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2s-.9 2-2 2h-7c-1.1 0-2-.9-2-2z" fill="white"/>
    <path d="M6 21h4l2-6h8l2 6h4l-3-9H9l-3 9z" fill="white"/>
    <circle cx="9" cy="24" r="1.5" fill="white"/>
    <circle cx="23" cy="24" r="1.5" fill="white"/>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#232F3E"/>
    <path d="M7 12.5h18c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5H7c-.8 0-1.5-.7-1.5-1.5v-6c0-.8.7-1.5 1.5-1.5z" fill="white"/>
    <text x="16" y="17.5" fill="#232F3E" fontSize="6" textAnchor="middle" fontWeight="bold">amazon</text>
    <path d="M9 22c5 2 14 2 19 0" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="28" cy="22" r="0.8" fill="#FF9900"/>
    <circle cx="9" cy="22" r="0.8" fill="#FF9900"/>
  </svg>
);

const PrestashopLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#DF0067"/>
    <path d="M16 5c-2.2 0-4 1.8-4 4v2h-2c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-2V9c0-2.2-1.8-4-4-4z" fill="white"/>
    <path d="M13 9c0-1.7 1.3-3 3-3s3 1.3 3 3v2h-6V9z" fill="#DF0067"/>
    <circle cx="16" cy="18" r="2" fill="#DF0067"/>
    <path d="M16 16v4" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const MagentoLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#f46f25"/>
    <path d="M16 4L8 8.5v11l8 6.5 8-6.5v-11L16 4z" fill="white"/>
    <path d="M16 6.5L10.5 10v9.5L16 23.5 21.5 19.5V10L16 6.5z" fill="#f46f25"/>
    <path d="M16 8.5v11l-3-2.2V11.5L16 8.5z" fill="white"/>
    <path d="M16 8.5v11l3-2.2V11.5L16 8.5z" fill="white"/>
    <circle cx="16" cy="14" r="1" fill="white"/>
  </svg>
);

const CdiscountLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#F39200"/>
    <path d="M16 5C9.9 5 5 9.9 5 16s4.9 11 11 11c4.4 0 8.2-2.6 9.9-6.3h-3.2c-1.2 1.8-3.3 3-5.7 3-3.9 0-7-3.1-7-7s3.1-7 7-7c2.4 0 4.5 1.2 5.7 3h3.2C24.2 7.6 20.4 5 16 5z" fill="white"/>
    <text x="16" y="18" fill="#F39200" fontSize="4" textAnchor="middle" fontWeight="bold">Cdiscount</text>
  </svg>
);

const ColissimoLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#FFD320"/>
    <rect x="5" y="9" width="22" height="14" rx="2" fill="white"/>
    <path d="M7 12h18" stroke="#FFD320" strokeWidth="2"/>
    <path d="M7 15h14" stroke="#FFD320" strokeWidth="1.5"/>
    <path d="M7 18h16" stroke="#FFD320" strokeWidth="1.5"/>
    <path d="M25 6l3 3v4l-3-3V6z" fill="#0066CC"/>
    <circle cx="26" cy="7" r="1.5" fill="#0066CC"/>
    <text x="16" y="21" fill="#FFD320" fontSize="3" textAnchor="middle" fontWeight="bold">Colissimo</text>
  </svg>
);

const DPDLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#BB0033"/>
    <rect x="5" y="9" width="22" height="14" rx="2" fill="white"/>
    <rect x="7" y="11" width="18" height="10" rx="1" fill="#BB0033"/>
    <text x="16" y="17.5" fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">DPD</text>
    <rect x="25" y="6" width="4" height="4" rx="1" fill="white"/>
    <circle cx="28" cy="7" r="1" fill="#BB0033"/>
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
                        className="container mx-auto px-6 py-16 text-center"
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

                    {/* Integrations Animation Section - MASSIVELY Enlarged */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative mx-auto max-w-[1400px] px-6 py-12"
                    >
                        <div className="relative mx-auto max-w-[1200px] space-y-16 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]">
                            <div
                                role="presentation"
                                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"
                            />
                            
                            {/* Slider Row 1 - E-commerce platforms */}
                            <div className="py-6">
                                <InfiniteSlider
                                    gap={70}
                                    speed={15}
                                    speedOnHover={8}>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><ShopifyLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><WooCommerceLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><AmazonLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><PrestashopLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><MagentoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><CdiscountLogo /></IntegrationCard>
                                </InfiniteSlider>
                            </div>

                            {/* Slider Row 2 - Mixed platforms (reverse) */}
                            <div className="py-6">
                                <InfiniteSlider
                                    gap={70}
                                    speed={15}
                                    speedOnHover={8}
                                    reverse>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><ColissimoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><DPDLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><ShopifyLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><WooCommerceLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><AmazonLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><PrestashopLogo /></IntegrationCard>
                                </InfiniteSlider>
                            </div>

                            {/* Slider Row 3 - Logistics & e-commerce */}
                            <div className="py-6">
                                <InfiniteSlider
                                    gap={70}
                                    speed={15}
                                    speedOnHover={8}>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><MagentoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><CdiscountLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><ColissimoLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><DPDLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><ShopifyLogo /></IntegrationCard>
                                    <IntegrationCard className="size-32 border-white/30 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"><WooCommerceLogo /></IntegrationCard>
                                </InfiniteSlider>
                            </div>

                            {/* Center Logo - Enhanced */}
                            <div className="absolute inset-0 m-auto flex size-fit justify-center">
                                <IntegrationCard
                                    className="size-40 border-white/40 bg-white/25 backdrop-blur-xl shadow-3xl ring-2 ring-white/20 hover:ring-white/40 transition-all duration-500"
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
                        className="container mx-auto px-6 py-12"
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