// Web Worker for pricing calculations to reduce main thread blocking

interface CalculatorMessage {
  type: 'CALCULATE_PRICE' | 'CALCULATE_VOLUMETRIC';
  data: {
    weight?: number;
    length?: number;
    width?: number;
    height?: number;
    zipCode?: string;
    service?: string;
  };
  requestId: string;
}

interface PricingTier {
  min: number;
  max: number;
  basePrice: number;
  pricePerKg: number;
}

class CalculatorWorker {
  private pricingTiers: PricingTier[] = [
    { min: 0, max: 2, basePrice: 6.50, pricePerKg: 0 },
    { min: 2, max: 5, basePrice: 8.90, pricePerKg: 1.20 },
    { min: 5, max: 10, basePrice: 12.50, pricePerKg: 1.80 },
    { min: 10, max: 20, basePrice: 18.90, pricePerKg: 2.40 },
    { min: 20, max: 50, basePrice: 35.00, pricePerKg: 3.20 },
    { min: 50, max: Infinity, basePrice: 89.00, pricePerKg: 1.80 }
  ];

  constructor() {
    self.onmessage = this.handleMessage.bind(this);
  }

  private handleMessage(event: MessageEvent<CalculatorMessage>) {
    const { type, data, requestId } = event.data;

    switch (type) {
      case 'CALCULATE_VOLUMETRIC':
        this.calculateVolumetricWeight(data, requestId);
        break;

      case 'CALCULATE_PRICE':
        this.calculatePrice(data, requestId);
        break;
    }
  }

  private calculateVolumetricWeight(data: any, requestId: string) {
    const { length, width, height } = data;
    
    if (!length || !width || !height) {
      self.postMessage({ type: 'ERROR', error: 'Missing dimensions', requestId });
      return;
    }

    // Volumetric weight = (Length × Width × Height) / 5000
    const volumetricWeight = (length * width * height) / 5000;

    self.postMessage({
      type: 'VOLUMETRIC_RESULT',
      result: volumetricWeight,
      requestId
    });
  }

  private calculatePrice(data: any, requestId: string) {
    const { weight, zipCode, service } = data;

    if (!weight || weight <= 0) {
      self.postMessage({ type: 'ERROR', error: 'Invalid weight', requestId });
      return;
    }

    // Find appropriate pricing tier
    const tier = this.pricingTiers.find(t => weight >= t.min && weight < t.max);
    
    if (!tier) {
      self.postMessage({ type: 'ERROR', error: 'Weight out of range', requestId });
      return;
    }

    // Calculate base price
    let price = tier.basePrice;
    
    // Add weight-based pricing for weight above minimum
    if (weight > tier.min) {
      price += (weight - tier.min) * tier.pricePerKg;
    }

    // Apply zip code multiplier (simplified logic)
    const zipMultiplier = this.getZipCodeMultiplier(zipCode);
    price *= zipMultiplier;

    // Apply service multiplier
    const serviceMultiplier = this.getServiceMultiplier(service);
    price *= serviceMultiplier;

    // Round to 2 decimal places
    const finalPrice = Math.round(price * 100) / 100;

    self.postMessage({
      type: 'PRICE_RESULT',
      result: {
        price: finalPrice,
        breakdown: {
          basePrice: tier.basePrice,
          weightSurcharge: (weight - tier.min) * tier.pricePerKg,
          zipMultiplier,
          serviceMultiplier,
          finalPrice
        }
      },
      requestId
    });
  }

  private getZipCodeMultiplier(zipCode?: string): number {
    if (!zipCode) return 1;

    const zip = parseInt(zipCode);
    
    // French postal code zones
    if (zip >= 75000 && zip <= 75020) return 1.0; // Paris
    if (zip >= 69000 && zip <= 69009) return 1.1; // Lyon
    if (zip >= 13000 && zip <= 13016) return 1.15; // Marseille
    if (zip >= 97000) return 1.5; // Overseas
    
    return 1.05; // Other French regions
  }

  private getServiceMultiplier(service?: string): number {
    switch (service) {
      case 'express': return 1.8;
      case 'priority': return 1.4;
      case 'economy': return 0.9;
      default: return 1.0; // standard
    }
  }
}

// Initialize worker
new CalculatorWorker();

export {};