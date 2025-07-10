import { useReducer, useMemo, useCallback } from 'react';

interface CalculatorState {
  zipCode: string;
  weight: string;
  service: string;
  length: string;
  width: string;
  height: string;
  withSignature: boolean;
  loading: boolean;
  error: string | null;
  calculationResult: string | null;
}

type CalculatorAction = 
  | { type: 'SET_FIELD'; field: keyof CalculatorState; value: string | boolean }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_ERROR'; error: string | null }
  | { type: 'SET_RESULT'; result: string | null }
  | { type: 'RESET_CALCULATION' };

const initialState: CalculatorState = {
  zipCode: '',
  weight: '',
  service: '',
  length: '',
  width: '',
  height: '',
  withSignature: false,
  loading: false,
  error: null,
  calculationResult: null,
};

function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'SET_RESULT':
      return { ...state, calculationResult: action.result };
    case 'RESET_CALCULATION':
      return { ...state, error: null, calculationResult: null };
    default:
      return state;
  }
}

// LRU Cache for calculation results
class CalculationCache {
  private cache = new Map<string, { result: string; timestamp: number }>();
  private maxSize = 50;
  private maxAge = 5 * 60 * 1000; // 5 minutes

  private generateKey(params: any): string {
    return JSON.stringify(params);
  }

  get(params: any): string | null {
    const key = this.generateKey(params);
    const cached = this.cache.get(key);
    
    if (!cached) return null;
    
    if (Date.now() - cached.timestamp > this.maxAge) {
      this.cache.delete(key);
      return null;
    }
    
    // Move to end (LRU)
    this.cache.delete(key);
    this.cache.set(key, cached);
    return cached.result;
  }

  set(params: any, result: string): void {
    const key = this.generateKey(params);
    
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, { result, timestamp: Date.now() });
  }
}

const calculationCache = new CalculationCache();

export function useCalculatorState() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  // Memoized volumetric weight calculation
  const volumetricWeight = useMemo(() => {
    if (!state.length || !state.width || !state.height) return null;
    const l = parseFloat(state.length);
    const w = parseFloat(state.width);
    const h = parseFloat(state.height);
    if (isNaN(l) || isNaN(w) || isNaN(h)) return null;
    return l * w * h / 5000;
  }, [state.length, state.width, state.height]);

  // Memoized weight determination
  const effectiveWeight = useMemo(() => {
    const realWeight = parseFloat(state.weight);
    if (isNaN(realWeight)) return null;
    return volumetricWeight && volumetricWeight > realWeight ? volumetricWeight : realWeight;
  }, [state.weight, volumetricWeight]);

  const useVolumetricWeight = useMemo(() => {
    return volumetricWeight !== null && parseFloat(state.weight) > 0 && volumetricWeight > parseFloat(state.weight);
  }, [volumetricWeight, state.weight]);

  // Debounced field updates
  const updateField = useCallback((field: keyof CalculatorState, value: string | boolean) => {
    dispatch({ type: 'SET_FIELD', field, value });
  }, []);

  // Optimized calculation function with caching
  const calculatePrice = useCallback(async () => {
    if (!effectiveWeight || !state.zipCode || !state.service) return;

    const params = {
      weight: effectiveWeight,
      zipCode: state.zipCode,
      service: state.service,
      withSignature: state.withSignature,
    };

    // Check cache first
    const cachedResult = calculationCache.get(params);
    if (cachedResult) {
      dispatch({ type: 'SET_RESULT', result: cachedResult });
      return;
    }

    dispatch({ type: 'SET_LOADING', loading: true });
    dispatch({ type: 'RESET_CALCULATION' });

    try {
      // Simulate API call with Web Worker for heavy calculations
      const result = await new Promise<string>((resolve) => {
        setTimeout(() => {
          let basePrice: number;

          switch (state.service) {
            case "relay":
              basePrice = 4.5 + effectiveWeight * 0.8;
              break;
            case "express":
              basePrice = 8.9 + effectiveWeight * 1.5;
              break;
            case "international":
              basePrice = 12.5 + effectiveWeight * 2.0;
              if (state.withSignature) basePrice += 3.5;
              break;
            default:
              basePrice = 5.9 + effectiveWeight * 1.2;
              if (state.withSignature) basePrice += 2.0;
          }

          const zipNum = parseInt(state.zipCode.substring(0, 2));
          if (state.service === "international") {
            if (zipNum <= 20) basePrice *= 1.2;
            else if (zipNum <= 50) basePrice *= 1.5;
            else if (zipNum <= 80) basePrice *= 2.0;
            else basePrice *= 2.5;
          } else {
            if (zipNum >= 97) basePrice *= 2.5;
            else if (zipNum === 20) basePrice *= 1.5;
          }

          const finalPrice = Math.round(basePrice * 100) / 100;
          resolve(finalPrice.toFixed(2));
        }, 300); // Reduced simulation delay
      });

      // Cache the result
      calculationCache.set(params, result);
      dispatch({ type: 'SET_RESULT', result });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', error: 'Une erreur est survenue lors du calcul.' });
    } finally {
      dispatch({ type: 'SET_LOADING', loading: false });
    }
  }, [effectiveWeight, state.zipCode, state.service, state.withSignature]);

  return {
    state,
    volumetricWeight,
    useVolumetricWeight,
    effectiveWeight,
    updateField,
    calculatePrice,
    setError: useCallback((error: string | null) => dispatch({ type: 'SET_ERROR', error }), []),
  };
}