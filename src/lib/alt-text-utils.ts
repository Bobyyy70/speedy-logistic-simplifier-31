/**
 * Utility functions for generating consistent and descriptive alt text
 * for images throughout the Speed E-Log application
 */

interface LogoAltOptions {
  context?: 'header' | 'footer' | 'hero' | 'contact' | 'navigation';
  size?: 'small' | 'medium' | 'large';
  withText?: boolean;
}

interface ImageAltOptions {
  context?: string;
  action?: string;
  location?: string;
  purpose?: string;
}

/**
 * Generate descriptive alt text for Speed E-Log logos
 */
export function generateLogoAlt(options: LogoAltOptions = {}): string {
  const { context = 'default', withText = false } = options;
  
  const baseText = 'Speed E-Log';
  const description = 'Spécialiste logistique e-commerce France';
  
  if (withText) {
    return `${baseText} - Solutions logistiques pour e-commerce`;
  }
  
  switch (context) {
    case 'header':
      return `${baseText} - ${description} - Logo de navigation`;
    case 'footer':
      return `${baseText} - ${description}`;
    case 'hero':
      return `${baseText} - Expert logistique e-commerce France`;
    case 'contact':
      return `${baseText} - Icône entreprise de logistique e-commerce`;
    default:
      return `${baseText} - ${description}`;
  }
}

/**
 * Generate descriptive alt text for SupplyOS-related images
 */
export function generateSupplyOSAlt(type: 'logo' | 'dashboard' | 'interface'): string {
  const baseText = 'SupplyOS - Plateforme logistique intégrée de Speed E-Log';
  
  switch (type) {
    case 'logo':
      return baseText;
    case 'dashboard':
      return 'Interface SupplyOS montrant les KPIs logistiques - commandes, coûts et performance des transporteurs';
    case 'interface':
      return `${baseText} pour gestion complète des opérations`;
    default:
      return baseText;
  }
}

/**
 * Generate alt text for partner/client logos
 */
export function generatePartnerAlt(companyName: string, relationship: 'client' | 'partenaire', industry?: string): string {
  const industryText = industry ? ` ${industry}` : '';
  const relationshipText = relationship === 'client' ? 'Client e-commerce' : 'Partenaire logistique';
  
  return `Logo ${companyName} - ${relationshipText}${industryText} de Speed E-Log`;
}

/**
 * Generate alt text for operational images (warehouses, logistics, etc.)
 */
export function generateOperationalAlt(options: ImageAltOptions): string {
  const { context, action, location, purpose } = options;
  
  let altText = '';
  
  if (context === 'warehouse' || context === 'entrepôt') {
    altText = 'Entrepôt moderne Speed E-Log équipé pour la logistique e-commerce';
    if (action) {
      altText += ` avec ${action}`;
    }
    if (purpose) {
      altText += ` - ${purpose}`;
    }
  } else if (context === 'team' || context === 'équipe') {
    altText = 'Équipe de Speed E-Log';
    if (action) {
      altText += ` ${action}`;
    }
    if (purpose) {
      altText += ` ${purpose}`;
    }
  } else if (context === 'world-map' || context === 'carte-monde') {
    altText = 'Carte mondiale illustrant la portée internationale des services logistiques Speed E-Log';
  }
  
  return altText || 'Image Speed E-Log';
}

/**
 * Validate that an alt attribute is descriptive and follows best practices
 */
export function validateAltText(altText: string): {
  isValid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];
  
  // Check for empty or missing alt text
  if (!altText || altText.trim() === '') {
    issues.push('Alt text is empty or missing');
    suggestions.push('Add descriptive alt text that explains what the image shows');
    return { isValid: false, issues, suggestions };
  }
  
  // Check for generic alt text
  const genericTerms = ['image', 'picture', 'photo', 'logo', 'icon'];
  const isGeneric = genericTerms.some(term => 
    altText.toLowerCase().trim() === term || 
    altText.toLowerCase().startsWith(term + ' ')
  );
  
  if (isGeneric) {
    issues.push('Alt text is too generic');
    suggestions.push('Add specific context about what the image shows and its purpose');
  }
  
  // Check for redundant phrases
  const redundantPhrases = ['image of', 'picture of', 'photo of'];
  const hasRedundancy = redundantPhrases.some(phrase => 
    altText.toLowerCase().includes(phrase)
  );
  
  if (hasRedundancy) {
    issues.push('Alt text contains redundant phrases');
    suggestions.push('Remove phrases like "image of" or "picture of" - just describe what you see');
  }
  
  // Check length (should be descriptive but not too long)
  if (altText.length < 10) {
    issues.push('Alt text is too short');
    suggestions.push('Add more descriptive context about the image content and purpose');
  } else if (altText.length > 125) {
    issues.push('Alt text is very long');
    suggestions.push('Consider shortening while keeping essential information');
  }
  
  // Check for Speed E-Log context
  if (!altText.toLowerCase().includes('speed e-log') && !altText.toLowerCase().includes('supplyos')) {
    suggestions.push('Consider adding Speed E-Log or SupplyOS context if relevant');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    suggestions
  };
}

/**
 * Development helper to log alt text validation warnings
 */
export function validateImageAlt(imgElement: HTMLImageElement, context?: string): void {
  if (process.env.NODE_ENV !== 'development') return;
  
  const altText = imgElement.alt;
  const validation = validateAltText(altText);
  
  if (!validation.isValid) {
    console.warn(
      `Alt text validation failed for image${context ? ` in ${context}` : ''}:`,
      {
        src: imgElement.src,
        currentAlt: altText,
        issues: validation.issues,
        suggestions: validation.suggestions
      }
    );
  }
}