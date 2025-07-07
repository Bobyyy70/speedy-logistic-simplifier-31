import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonProps } from '@/components/ui/button';
import { useHubSpotCTA } from '@/hooks/useHubSpotCTA';

interface CTALinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  to: string;
  ctaId?: string;
  children: React.ReactNode;
}

export const CTALinkButton: React.FC<CTALinkButtonProps> = ({ 
  to, 
  ctaId = '248429698260',
  children,
  ...buttonProps 
}) => {
  const navigate = useNavigate();
  const { triggerCTA } = useHubSpotCTA(ctaId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Déclencher le CTA HubSpot
    const ctaTriggered = triggerCTA();
    
    // Rediriger vers la page après un court délai (ou immédiatement si le CTA échoue)
    const redirectDelay = ctaTriggered ? 500 : 0;
    
    setTimeout(() => {
      navigate(to);
    }, redirectDelay);
  };

  return (
    <>
      {/* Bouton CTA HubSpot masqué pour le déclenchement */}
      <span 
        className={`hs-cta-trigger-button hs-cta-trigger-button-${ctaId}`} 
        style={{ display: 'none' }}
      />
      
      {/* Bouton visible */}
      <Button 
        {...buttonProps} 
        onClick={handleClick}
        asChild={false}
      >
        {children}
      </Button>
    </>
  );
};