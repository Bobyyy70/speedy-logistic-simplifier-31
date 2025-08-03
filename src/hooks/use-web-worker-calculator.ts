import { useCallback, useEffect, useRef } from 'react';

interface CalculatorWorkerResult {
  type: 'PRICE_RESULT' | 'VOLUMETRIC_RESULT' | 'ERROR';
  result?: any;
  error?: string;
  requestId: string;
}

export const useWebWorkerCalculator = () => {
  const workerRef = useRef<Worker>();
  const requestCallbacks = useRef<Map<string, (result: any) => void>>(new Map());

  useEffect(() => {
    if (typeof Worker === 'undefined') return;

    // Create worker from blob to avoid separate file dependency
    const workerBlob = new Blob([
      `
      const pricingTiers = [
        { min: 0, max: 2, basePrice: 6.50, pricePerKg: 0 },
        { min: 2, max: 5, basePrice: 8.90, pricePerKg: 1.20 },
        { min: 5, max: 10, basePrice: 12.50, pricePerKg: 1.80 },
        { min: 10, max: 20, basePrice: 18.90, pricePerKg: 2.40 },
        { min: 20, max: 50, basePrice: 35.00, pricePerKg: 3.20 },
        { min: 50, max: Infinity, basePrice: 89.00, pricePerKg: 1.80 }
      ];

      function getZipCodeMultiplier(zipCode) {
        if (!zipCode) return 1;
        const zip = parseInt(zipCode);
        if (zip >= 75000 && zip <= 75020) return 1.0;
        if (zip >= 69000 && zip <= 69009) return 1.1;
        if (zip >= 13000 && zip <= 13016) return 1.15;
        if (zip >= 97000) return 1.5;
        return 1.05;
      }

      function getServiceMultiplier(service) {
        switch (service) {
          case 'express': return 1.8;
          case 'priority': return 1.4;
          case 'economy': return 0.9;
          default: return 1.0;
        }
      }

      self.onmessage = function(event) {
        const { type, data, requestId } = event.data;

        if (type === 'CALCULATE_VOLUMETRIC') {
          const { length, width, height } = data;
          if (!length || !width || !height) {
            self.postMessage({ type: 'ERROR', error: 'Missing dimensions', requestId });
            return;
          }
          const volumetricWeight = (length * width * height) / 5000;
          self.postMessage({ type: 'VOLUMETRIC_RESULT', result: volumetricWeight, requestId });
        }

        if (type === 'CALCULATE_PRICE') {
          const { weight, zipCode, service } = data;
          if (!weight || weight <= 0) {
            self.postMessage({ type: 'ERROR', error: 'Invalid weight', requestId });
            return;
          }

          const tier = pricingTiers.find(t => weight >= t.min && weight < t.max);
          if (!tier) {
            self.postMessage({ type: 'ERROR', error: 'Weight out of range', requestId });
            return;
          }

          let price = tier.basePrice;
          if (weight > tier.min) {
            price += (weight - tier.min) * tier.pricePerKg;
          }

          price *= getZipCodeMultiplier(zipCode);
          price *= getServiceMultiplier(service);

          const finalPrice = Math.round(price * 100) / 100;

          self.postMessage({
            type: 'PRICE_RESULT',
            result: {
              price: finalPrice,
              breakdown: {
                basePrice: tier.basePrice,
                weightSurcharge: (weight - tier.min) * tier.pricePerKg,
                finalPrice
              }
            },
            requestId
          });
        }
      };
      `
    ], { type: 'application/javascript' });

    const workerUrl = URL.createObjectURL(workerBlob);
    workerRef.current = new Worker(workerUrl);

    workerRef.current.onmessage = (event: MessageEvent<CalculatorWorkerResult>) => {
      const { requestId, ...result } = event.data;
      const callback = requestCallbacks.current.get(requestId);
      
      if (callback) {
        callback(result);
        requestCallbacks.current.delete(requestId);
      }
    };

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        URL.revokeObjectURL(workerUrl);
      }
    };
  }, []);

  const calculateVolumetricWeight = useCallback((
    length: number,
    width: number,
    height: number
  ): Promise<number> => {
    return new Promise((resolve, reject) => {
      if (!workerRef.current) {
        // Fallback calculation
        resolve((length * width * height) / 5000);
        return;
      }

      const requestId = `volumetric_${Date.now()}_${Math.random()}`;
      
      requestCallbacks.current.set(requestId, (result) => {
        if (result.type === 'ERROR') {
          reject(new Error(result.error));
        } else {
          resolve(result.result);
        }
      });

      workerRef.current.postMessage({
        type: 'CALCULATE_VOLUMETRIC',
        data: { length, width, height },
        requestId
      });
    });
  }, []);

  const calculatePrice = useCallback((
    weight: number,
    zipCode?: string,
    service?: string
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!workerRef.current) {
        // Fallback calculation
        const basePrice = weight <= 2 ? 6.50 : 8.90;
        resolve({ price: basePrice, breakdown: { finalPrice: basePrice } });
        return;
      }

      const requestId = `price_${Date.now()}_${Math.random()}`;
      
      requestCallbacks.current.set(requestId, (result) => {
        if (result.type === 'ERROR') {
          reject(new Error(result.error));
        } else {
          resolve(result.result);
        }
      });

      workerRef.current.postMessage({
        type: 'CALCULATE_PRICE',
        data: { weight, zipCode, service },
        requestId
      });
    });
  }, []);

  return {
    calculateVolumetricWeight,
    calculatePrice,
    isWorkerSupported: typeof Worker !== 'undefined'
  };
};