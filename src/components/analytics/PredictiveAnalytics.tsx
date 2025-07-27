import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Target, Brain, Zap, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface PredictionData {
  metric: string;
  current: number;
  predicted: number;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
  timeframe: string;
}

interface CohortData {
  period: string;
  newUsers: number;
  returning: number;
  conversion: number;
  revenue: number;
}

export const PredictiveAnalytics: React.FC = () => {
  const [predictions, setPredictions] = useState<PredictionData[]>([]);
  const [cohortData, setCohortData] = useState<CohortData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock predictive data - in real app, this would come from ML models
  useEffect(() => {
    const generatePredictions = (): PredictionData[] => [
      {
        metric: 'Taux de conversion',
        current: 3.2,
        predicted: 4.8,
        confidence: 87,
        trend: 'up',
        timeframe: '30 jours'
      },
      {
        metric: 'Leads qualifiés/mois',
        current: 45,
        predicted: 72,
        confidence: 82,
        trend: 'up',
        timeframe: '30 jours'
      },
      {
        metric: 'Coût par acquisition',
        current: 180,
        predicted: 135,
        confidence: 79,
        trend: 'down',
        timeframe: '30 jours'
      },
      {
        metric: 'Revenus mensuels',
        current: 28500,
        predicted: 41200,
        confidence: 85,
        trend: 'up',
        timeframe: '30 jours'
      }
    ];

    const generateCohortData = (): CohortData[] => [
      { period: 'Jan 2025', newUsers: 120, returning: 45, conversion: 3.2, revenue: 15400 },
      { period: 'Fév 2025', newUsers: 145, returning: 67, conversion: 3.8, revenue: 18200 },
      { period: 'Mar 2025', newUsers: 168, returning: 89, conversion: 4.1, revenue: 22100 },
      { period: 'Avr 2025', newUsers: 195, returning: 112, conversion: 4.5, revenue: 26800 },
      { period: 'Mai 2025', newUsers: 220, returning: 134, conversion: 4.8, revenue: 31200 },
      { period: 'Jun 2025', newUsers: 248, returning: 158, conversion: 5.2, revenue: 36500 }
    ];

    setTimeout(() => {
      setPredictions(generatePredictions());
      setCohortData(generateCohortData());
      setIsLoading(false);
    }, 1500);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Target className="h-4 w-4 text-blue-500" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-500';
    if (confidence >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 animate-pulse" />
          <h2 className="text-2xl font-bold">Chargement des prédictions IA...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-6 bg-muted rounded w-1/2 mb-4" />
                <div className="h-2 bg-muted rounded w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Brain className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Analytics Prédictifs IA</h2>
        <Badge variant="secondary" className="ml-2">
          <Zap className="h-3 w-3 mr-1" />
          Temps réel
        </Badge>
      </div>

      <Tabs defaultValue="predictions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="predictions">Prédictions</TabsTrigger>
          <TabsTrigger value="cohorts">Analyse Cohortes</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="predictions" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {predictions.map((prediction, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center justify-between">
                    {prediction.metric}
                    {getTrendIcon(prediction.trend)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        {prediction.metric.includes('Revenus') 
                          ? `${prediction.predicted.toLocaleString()}€`
                          : prediction.metric.includes('Coût')
                          ? `${prediction.predicted}€`
                          : prediction.metric.includes('Taux')
                          ? `${prediction.predicted}%`
                          : prediction.predicted.toString()
                        }
                      </span>
                      <span className="text-sm text-muted-foreground">
                        vs {prediction.metric.includes('Revenus') 
                          ? `${prediction.current.toLocaleString()}€`
                          : prediction.metric.includes('Coût')
                          ? `${prediction.current}€`
                          : prediction.metric.includes('Taux')
                          ? `${prediction.current}%`
                          : prediction.current.toString()
                        }
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Confiance</span>
                        <span>{prediction.confidence}%</span>
                      </div>
                      <Progress 
                        value={prediction.confidence} 
                        className="h-2"
                      />
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Prédiction {prediction.timeframe}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Évolution Prédictive des Revenus</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={cohortData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => [`${value}€`, 'Revenus']} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cohorts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analyse des Cohortes Utilisateurs</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cohortData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="newUsers" fill="hsl(var(--primary))" name="Nouveaux" />
                  <Bar dataKey="returning" fill="hsl(var(--secondary))" name="Récurrents" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rétention Moyenne</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">67%</div>
                <p className="text-sm text-muted-foreground">
                  +12% vs période précédente
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">LTV Moyenne</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">1,240€</div>
                <p className="text-sm text-muted-foreground">
                  Lifecycle de 18 mois
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Croissance MoM</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">+23%</div>
                <p className="text-sm text-muted-foreground">
                  Tendance haussière confirmée
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Modèle de Prévision - 6 Mois</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scénario Optimiste</h4>
                    <div className="text-2xl font-bold text-green-600">+180%</div>
                    <p className="text-sm text-muted-foreground">
                      Croissance avec optimisations IA complètes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scénario Conservateur</h4>
                    <div className="text-2xl font-bold text-blue-600">+85%</div>
                    <p className="text-sm text-muted-foreground">
                      Croissance organique maintenue
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Recommandations IA</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Optimiser le formulaire multi-étapes (+15% conversion estimée)</li>
                    <li>• Implémenter la personnalisation avancée (+25% engagement)</li>
                    <li>• Déployer le chatbot IA sur toutes les pages (+30% qualification leads)</li>
                    <li>• Lancer le programme de parrainage (+40% acquisition organique)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};