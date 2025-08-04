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

// Official logos SVG
const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#181717]">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.167 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.647.243 2.864.12 3.167.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.431.372.816 1.102.816 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 54 54" fill="none" className="w-full h-full">
    <path d="M19.712 34.5c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6h6v6z" fill="#E01E5A"/>
    <path d="M19.712 19.5c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6h6v-6z" fill="#36C5F0"/>
    <path d="M34.212 19.5c0-3.313 2.687-6 6-6s6 2.687 6 6-2.687 6-6 6h-6v-6z" fill="#2EB67D"/>
    <path d="M34.212 34.5c0 3.313 2.687 6 6 6s6-2.687 6-6-2.687-6-6-6h-6v6z" fill="#ECB22E"/>
    <path d="M13.712 25.5c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6v6h-6z" fill="#36C5F0"/>
    <path d="M40.212 25.5c3.313 0 6-2.687 6-6s-2.687-6-6-6-6 2.687-6 6v6h6z" fill="#2EB67D"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#000000]">
    <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"/>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" fill="none" className="w-full h-full">
    <path d="M12.667 0h12.666c7 0 12.667 5.667 12.667 12.667S32.333 25.334 25.333 25.334H19V12.667C19 5.667 13.333 0 12.667 0Z" fill="#F24E1E"/>
    <path d="M6.333 0h12.666V25.334H6.333C2.833 25.334 0 22.5 0 19S2.833 12.667 6.333 12.667 9.167 15.5 9.167 19V0Z" fill="#FF7262"/>
    <path d="M0 31.667c0-7 5.667-12.667 12.667-12.667S25.334 24.667 25.334 31.667 19.667 44.334 12.667 44.334 0 38.667 0 31.667Z" fill="#1ABCFE"/>
    <path d="M25.334 0v25.334h6.333c7 0 12.667-5.667 12.667-12.667S38.667 0 31.667 0H25.334Z" fill="#0ACF83"/>
    <path d="M25.334 25.334v12.666c0 7-5.667 12.667-12.667 12.667S0 45 0 38V25.334h25.334Z" fill="#A259FF"/>
  </svg>
);

const DiscordLogo = () => (
  <svg viewBox="0 0 71 55" fill="none" className="w-full h-full">
    <path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.319a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.38 7.156 0 3.945-2.827 7.156-6.38 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.379 7.156 0 3.945-2.797 7.156-6.38 7.156Z" fill="#5865F2"/>
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
      <path fillRule="evenodd" clipRule="evenodd" d="M70.9119 99.3171c1.5307 0.9821 3.4765 1.0987 5.1023 0.3051L99.5 84.4313c3.3144 -1.6573 5.5 -5.0304 5.5 -8.7763L105 23.2197c0 -3.7459 -2.1856 -7.119 -5.5 -8.7763L76.0142 -0.6218c-1.6258 -0.7936 -3.5716 -0.677 -5.1023 0.3051c-0.8521 0.5465 -1.4949 1.3216 -1.8729 2.2188L68.9 2.3226c-0.2502 0.5985 -0.2502 1.2792 0 1.8777l0.4615 1.1084c0.2502 0.5985 0.2502 1.2792 0 1.8777l-0.4615 1.1084c-0.2502 0.5985 -0.2502 1.2792 0 1.8777l0.4615 1.1084c0.2502 0.5985 0.2502 1.2792 0 1.8777l-0.4615 1.1084c-0.2502 0.5985 -0.2502 1.2792 0 1.8777l0.4615 1.1084c0.2502 0.5985 0.2502 1.2792 0 1.8777l-0.4615 1.1084c-0.2502 0.5985 -0.2502 1.2792 0 1.8777l0.4615 1.1084c0.2502 0.5985 0.2502 1.2792 0 1.8777l-0.4615 1.1084z" fill="#C5C5C5"/>
    </mask>
    <g mask="url(#mask0)">
      <path d="M96.8 13.1L75.2 1.2c-1.1-0.6-2.4-0.6-3.5 0L50.3 15.7 23.4 1.4c-0.8-0.4-1.8-0.1-2.2 0.6L5.6 13.1c-1.2 0.7-1.9 2-1.9 3.4v67c0 1.4 0.7 2.7 1.9 3.4l15.6 11.1c0.4 0.7 1.4 1 2.2 0.6l26.9-14.3 21.4 14.5c1.1 0.6 2.4 0.6 3.5 0l21.6-11.9c1.2-0.7 1.9-2 1.9-3.4v-67c0-1.4-0.7-2.7-1.9-3.4z" fill="#007ACC"/>
      <path d="M96.8 13.1L75.2 1.2c-1.1-0.6-2.4-0.6-3.5 0L50.3 15.7 23.4 1.4c-0.8-0.4-1.8-0.1-2.2 0.6L5.6 13.1c-1.2 0.7-1.9 2-1.9 3.4v67c0 1.4 0.7 2.7 1.9 3.4l15.6 11.1c0.4 0.7 1.4 1 2.2 0.6l26.9-14.3 21.4 14.5c1.1 0.6 2.4 0.6 3.5 0l21.6-11.9c1.2-0.7 1.9-2 1.9-3.4v-67c0-1.4-0.7-2.7-1.9-3.4z" fill="#007ACC"/>
    </g>
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
                    <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
                        />
                        
                        {/* Slider Row 1 */}
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}>
                                <IntegrationCard><VSCodeLogo /></IntegrationCard>
                                <IntegrationCard><GitHubLogo /></IntegrationCard>
                                <IntegrationCard><SlackLogo /></IntegrationCard>
                                <IntegrationCard><NotionLogo /></IntegrationCard>
                                <IntegrationCard><FigmaLogo /></IntegrationCard>
                                <IntegrationCard><DiscordLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Slider Row 2 */}
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}
                                reverse>
                                <IntegrationCard><NotionLogo /></IntegrationCard>
                                <IntegrationCard><SlackLogo /></IntegrationCard>
                                <IntegrationCard><FigmaLogo /></IntegrationCard>
                                <IntegrationCard><VSCodeLogo /></IntegrationCard>
                                <IntegrationCard><DiscordLogo /></IntegrationCard>
                                <IntegrationCard><GitHubLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Slider Row 3 */}
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}>
                                <IntegrationCard><DiscordLogo /></IntegrationCard>
                                <IntegrationCard><FigmaLogo /></IntegrationCard>
                                <IntegrationCard><GitHubLogo /></IntegrationCard>
                                <IntegrationCard><SlackLogo /></IntegrationCard>
                                <IntegrationCard><VSCodeLogo /></IntegrationCard>
                                <IntegrationCard><NotionLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-lg size-16 bg-background/95 backdrop-blur-md border-border shadow-foreground/10"
                                isCenter={true}>
                                <MainLogoIcon />
                            </IntegrationCard>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                            Intégrations sans limites
                        </h2>
                        <p className="text-muted-foreground">
                            Connectez Speed E-Log à vos plateformes e-commerce, CMS et transporteurs favoris pour une logistique unifiée.
                        </p>

                        <Button
                            variant="default"
                            size="sm"
                            onClick={onCTAClick}
                            className="gap-1"
                        >
                            Obtenir un devis
                            <ChevronRight className="ml-0 !size-3.5 opacity-70" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}