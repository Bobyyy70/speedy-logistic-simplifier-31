'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Logos e-commerce et logistique officiels
const ShopifyLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <path d="M23.79 11.85a.41.41 0 0 0-.35-.11l-4.83-.07a.41.41 0 0 1-.39-.43l.32-3.45a.41.41 0 0 0-.78-.19l-1.35 3.37a.41.41 0 0 1-.38.25h-3.73a.41.41 0 0 0-.38.26l-1.3 3.35a.41.41 0 0 0 .38.56h1.51a.41.41 0 0 1 .38.26l-.75 1.93a.41.41 0 0 0 .38.56l3.51-.04a.41.41 0 0 0 .38-.26l1.3-3.35a.41.41 0 0 1 .38-.26h4.83a.41.41 0 0 0 .35-.46z" fill="#7AB55C"/>
    <circle cx="16" cy="16" r="14" stroke="#7AB55C" strokeWidth="2" fill="none"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <path d="M6 8h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2z" stroke="#7F54B3" strokeWidth="2" fill="none"/>
    <path d="M8 12l8 4 8-4" stroke="#7F54B3" strokeWidth="2" fill="none"/>
    <path d="M12 18h8" stroke="#7F54B3" strokeWidth="1.5" fill="none"/>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <path d="M16 2c7.7 0 14 6.3 14 14s-6.3 14-14 14S2 23.7 2 16 8.3 2 16 2z" fill="#FF9900"/>
    <path d="M8 20c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm12 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="white"/>
    <path d="M10 19h12" stroke="#FF9900" strokeWidth="2"/>
  </svg>
);

const PrestashopLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#DF0067"/>
    <path d="M12 8h8v16h-8V8z" fill="white"/>
    <path d="M14 10h4v4h-4v-4zm0 6h4v4h-4v-4z" fill="#DF0067"/>
  </svg>
);

const MagentoLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <path d="M16 2L8 6v12l8 4 8-4V6l-8-4z" fill="#EC6611"/>
    <path d="M16 6v16" stroke="white" strokeWidth="2"/>
    <path d="M12 8l4 2 4-2" stroke="white" strokeWidth="1.5"/>
    <path d="M12 14l4 2 4-2" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const CdiscountLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#F39200"/>
    <path d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="3" fill="none"/>
    <circle cx="16" cy="20" r="2" fill="white"/>
  </svg>
);

const ColissimoLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect x="4" y="8" width="24" height="16" rx="2" fill="#FFD320"/>
    <path d="M8 12h16v8H8v-8z" fill="white"/>
    <path d="M10 14h12" stroke="#FFD320" strokeWidth="2"/>
    <path d="M10 16h8" stroke="#FFD320" strokeWidth="1.5"/>
    <path d="M10 18h10" stroke="#FFD320" strokeWidth="1.5"/>
  </svg>
);

const DPDLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#DC143C"/>
    <path d="M8 16h16" stroke="white" strokeWidth="3"/>
    <path d="M12 12h8v8h-8v-8z" fill="white"/>
    <path d="M14 14h4v4h-4v-4z" fill="#DC143C"/>
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
        <section>
            <div className="bg-muted/50 py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-muted/25 group relative mx-auto max-w-4xl items-center justify-between space-y-8 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
                        />
                        
                        {/* Slider Row 1 */}
                        <div>
                            <InfiniteSlider
                                gap={32}
                                speed={25}
                                speedOnHover={12}>
                                <IntegrationCard className="size-16"><ShopifyLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><WooCommerceLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><AmazonLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><PrestashopLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><MagentoLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><CdiscountLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Slider Row 2 */}
                        <div>
                            <InfiniteSlider
                                gap={32}
                                speed={25}
                                speedOnHover={12}
                                reverse>
                                <IntegrationCard className="size-16"><ColissimoLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><DPDLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><ShopifyLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><WooCommerceLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><AmazonLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><PrestashopLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Slider Row 3 */}
                        <div>
                            <InfiniteSlider
                                gap={32}
                                speed={25}
                                speedOnHover={12}>
                                <IntegrationCard className="size-16"><MagentoLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><CdiscountLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><ColissimoLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><DPDLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><ShopifyLogo /></IntegrationCard>
                                <IntegrationCard className="size-16"><WooCommerceLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-lg size-20 bg-background/95 backdrop-blur-md border-border shadow-foreground/10"
                                isCenter={true}>
                                <MainLogoIcon />
                            </IntegrationCard>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="mx-auto mt-16 max-w-4xl space-y-8 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-5xl">
                            Un stock central, une visibilité maximale
                        </h2>
                        <div className="mx-auto max-w-3xl space-y-6 text-lg text-muted-foreground">
                            <p>
                                <strong className="text-foreground">Imaginez la puissance d'un stock centralisé chez Speed E-Log</strong> connecté simultanément à toutes vos plateformes de vente. Shopify, WooCommerce, Amazon, Cdiscount, vos marketplaces favorites... tous synchronisés en temps réel avec le même inventaire physique.
                            </p>
                            <p>
                                Cette approche révolutionnaire vous offre une <strong className="text-foreground">visibilité totale sur votre activité</strong> : plus besoin de jongler entre plusieurs entrepôts, plus de ruptures de stock cachées, plus de commandes perdues. Chaque produit vendu sur n'importe quelle plateforme est immédiatement déduit de votre stock central, garantissant une cohérence parfaite.
                            </p>
                            <p>
                                Le résultat ? <strong className="text-foreground">Une expansion multi-canal sans effort</strong>. Ajoutez de nouveaux canaux de vente en quelques clics, testez de nouvelles marketplaces sans investissement logistique, et gardez toujours le contrôle total sur votre activité depuis un tableau de bord unique.
                            </p>
                        </div>

                        <Button
                            variant="default"
                            size="lg"
                            onClick={onCTAClick}
                            className="gap-2 px-8 py-4 text-lg"
                        >
                            Découvrir nos intégrations
                            <ChevronRight className="ml-0 !size-4 opacity-70" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}