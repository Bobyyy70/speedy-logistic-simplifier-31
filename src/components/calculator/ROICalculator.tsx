/**
 * ROI Calculator - Interactive tool for lead generation
 * Based on specifications
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, DollarSign, Package, Users, Zap } from "lucide-react";

interface CalculatorInputs {
  monthlyOrders: number;
  averageOrderValue: number;
  currentLogisticsCost: number;
  employeeCount: number;
  warehouseSize: number;
}

interface CalculatorResults {
  currentAnnualCost: number;
  speedelogAnnualCost: number;
  annualSavings: number;
  savingsPercentage: number;
  timeSaved: number;
  breakdownCurrentCosts: {
    warehouse: number;
    labor: number;
    shipping: number;
    packaging: number;
    technology: number;
  };
  breakdownSpeedeLogCosts: {
    fulfillment: number;
    storage: number;
    shipping: number;
  };
}

const defaultInputs: CalculatorInputs = {
  monthlyOrders: 500,
  averageOrderValue: 50,
  currentLogisticsCost: 5000,
  employeeCount: 2,
  warehouseSize: 200
};

export const ROICalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    // Current annual costs breakdown
    const warehouseCost = inputs.warehouseSize * 10 * 12; // 10€/m²/mois
    const laborCost = inputs.employeeCount * 2500 * 12; // 2500€/mois par employé
    const shippingCost = inputs.monthlyOrders * 6 * 12; // 6€ par colis en moyenne
    const packagingCost = inputs.monthlyOrders * 2 * 12; // 2€ par colis
    const technologyCost = 3000; // WMS, etc.

    const currentAnnualCost = warehouseCost + laborCost + shippingCost + packagingCost + technologyCost;

    // Speed E-Log costs (30-40% reduction)
    const fulfillmentCostPerOrder = 3.5; // Picking + packing
    const storageCostPerM3 = 8 * 12; // 8€/m³/mois
    const estimatedM3 = inputs.warehouseSize / 25; // Rough estimation
    const shippingCostOptimized = inputs.monthlyOrders * 4.2 * 12; // Tarifs négociés -30%

    const fulfillmentCost = inputs.monthlyOrders * fulfillmentCostPerOrder * 12;
    const storageCost = estimatedM3 * storageCostPerM3;
    const speedelogAnnualCost = fulfillmentCost + storageCost + shippingCostOptimized;

    const annualSavings = currentAnnualCost - speedelogAnnualCost;
    const savingsPercentage = (annualSavings / currentAnnualCost) * 100;
    const timeSaved = inputs.employeeCount * 35 * 12; // heures/mois économisées

    setResults({
      currentAnnualCost,
      speedelogAnnualCost,
      annualSavings,
      savingsPercentage,
      timeSaved,
      breakdownCurrentCosts: {
        warehouse: warehouseCost,
        labor: laborCost,
        shipping: shippingCost,
        packaging: packagingCost,
        technology: technologyCost
      },
      breakdownSpeedeLogCosts: {
        fulfillment: fulfillmentCost,
        storage: storageCost,
        shipping: shippingCostOptimized
      }
    });

    setShowResults(true);
  };

  useEffect(() => {
    if (showResults) {
      calculateROI();
    }
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary-500" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Calculateur d'Économies
          </h2>
          <p className="text-gray-600">
            Découvrez combien vous pourriez économiser
          </p>
        </div>
      </div>

      {/* Input Form */}
      <div className="space-y-6 mb-8">
        {/* Monthly Orders */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="font-medium flex items-center gap-2">
              <Package className="w-5 h-5 text-primary-500" />
              Commandes mensuelles
            </span>
            <span className="text-2xl font-bold text-primary-500">
              {inputs.monthlyOrders.toLocaleString('fr-FR')}
            </span>
          </label>
          <input
            type="range"
            min="50"
            max="5000"
            step="50"
            value={inputs.monthlyOrders}
            onChange={(e) => handleInputChange('monthlyOrders', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50</span>
            <span>5000+</span>
          </div>
        </div>

        {/* Average Order Value */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="font-medium flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary-500" />
              Valeur moyenne commande
            </span>
            <span className="text-2xl font-bold text-primary-500">
              {formatCurrency(inputs.averageOrderValue)}
            </span>
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={inputs.averageOrderValue}
            onChange={(e) => handleInputChange('averageOrderValue', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>10€</span>
            <span>500€+</span>
          </div>
        </div>

        {/* Current Logistics Cost */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="font-medium flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-primary-500" />
              Coûts logistiques actuels (mensuels)
            </span>
            <span className="text-2xl font-bold text-primary-500">
              {formatCurrency(inputs.currentLogisticsCost)}
            </span>
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={inputs.currentLogisticsCost}
            onChange={(e) => handleInputChange('currentLogisticsCost', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1000€</span>
            <span>50000€+</span>
          </div>
        </div>

        {/* Employee Count */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="font-medium flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-500" />
              Employés logistique
            </span>
            <span className="text-2xl font-bold text-primary-500">
              {inputs.employeeCount}
            </span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={inputs.employeeCount}
            onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>20+</span>
          </div>
        </div>

        {/* Warehouse Size */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="font-medium flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-500" />
              Surface entrepôt (m²)
            </span>
            <span className="text-2xl font-bold text-primary-500">
              {inputs.warehouseSize} m²
            </span>
          </label>
          <input
            type="range"
            min="50"
            max="2000"
            step="50"
            value={inputs.warehouseSize}
            onChange={(e) => handleInputChange('warehouseSize', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50m²</span>
            <span>2000m²+</span>
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      {!showResults && (
        <motion.button
          onClick={calculateROI}
          className="w-full py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Calculer mes économies
        </motion.button>
      )}

      {/* Results */}
      {showResults && results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Main Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
              <div className="text-sm text-green-700 mb-1">Économies Annuelles</div>
              <div className="text-3xl font-bold text-green-600">
                {formatCurrency(results.annualSavings)}
              </div>
              <div className="text-sm text-green-600 mt-1">
                soit {results.savingsPercentage.toFixed(1)}%
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
              <div className="text-sm text-blue-700 mb-1">Coût Actuel (annuel)</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(results.currentAnnualCost)}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border-2 border-primary-200">
              <div className="text-sm text-primary-700 mb-1">Avec Speed E-Log (annuel)</div>
              <div className="text-2xl font-bold text-primary-600">
                {formatCurrency(results.speedelogAnnualCost)}
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Bénéfices Additionnels</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span><strong>{results.timeSaved}h</strong> économisées par an</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>Technologie WMS incluse (valeur <strong>3000€/an</strong>)</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>Scalabilité illimitée sans investissement</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>Libérez <strong>{inputs.employeeCount} employés</strong> pour des tâches à valeur ajoutée</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary-500 p-6 rounded-lg text-white text-center">
            <h3 className="text-xl font-bold mb-2">
              Économisez {formatCurrency(results.annualSavings)}/an dès maintenant
            </h3>
            <p className="mb-4 text-white/90">
              Obtenez un devis personnalisé gratuit en moins de 24h
            </p>
            <button className="px-8 py-3 bg-white text-primary-500 rounded-md font-semibold hover:scale-105 transition-all duration-300">
              Obtenir mon devis gratuit
            </button>
          </div>

          {/* Recalculate */}
          <button
            onClick={() => setShowResults(false)}
            className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
          >
            Modifier les paramètres
          </button>
        </motion.div>
      )}
    </div>
  );
};
