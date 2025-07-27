import React from 'react';
import { Helmet } from 'react-helmet-async';
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Zap,
  Eye,
  MousePointer
} from 'lucide-react';
import { PredictiveAnalytics } from "@/components/analytics/PredictiveAnalytics";
import { ReferralProgram } from "@/components/referral/ReferralProgram";

const AdminDashboard = () => {
  const { metrics, alerts, performanceScore, clearAlerts } = usePerformanceMonitoring();

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'Mesure en cours...';
    return `${Math.round(value)}${unit}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Mock data - En production, ces données viendraient de votre analytics
  const mockAnalytics = {
    visitorsToday: 347,
    conversionRate: 3.8,
    leadsGenerated: 23,
    avgSessionDuration: '4:32',
    topPages: [
      { path: '/', views: 1247, conversions: 47 },
      { path: '/calculateur-roi-logistique', views: 892, conversions: 34 },
      { path: '/services', views: 634, conversions: 19 },
      { path: '/contact', views: 423, conversions: 28 }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Dashboard Admin - Speed E Log</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Dashboard Analytics</h1>
              <p className="text-slate-600">Monitoring en temps réel des performances et conversions</p>
            </div>
            <Badge variant="outline" className="text-sm">
              Mis à jour il y a {new Date().toLocaleTimeString('fr-FR')}
            </Badge>
          </div>

          {/* Alertes Performance */}
          {alerts.length > 0 && (
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="flex items-center justify-between">
                <span>
                  {alerts.length} alerte(s) performance détectée(s)
                </span>
                <Button size="sm" variant="outline" onClick={clearAlerts}>
                  Marquer comme lu
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
              <TabsTrigger value="content">Contenu</TabsTrigger>
              <TabsTrigger value="analytics">Analytics IA</TabsTrigger>
              <TabsTrigger value="referral">Parrainage</TabsTrigger>
            </TabsList>

            {/* Vue d'ensemble */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Visiteurs Aujourd'hui</CardTitle>
                    <Users className="h-4 w-4 text-slate-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockAnalytics.visitorsToday}</div>
                    <p className="text-xs text-slate-600">+12% vs hier</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Taux Conversion</CardTitle>
                    <TrendingUp className="h-4 w-4 text-slate-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockAnalytics.conversionRate}%</div>
                    <p className="text-xs text-green-600">+0.3% vs semaine dernière</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Leads Générés</CardTitle>
                    <MousePointer className="h-4 w-4 text-slate-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockAnalytics.leadsGenerated}</div>
                    <p className="text-xs text-slate-600">Aujourd'hui</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Score Performance</CardTitle>
                    <Activity className="h-4 w-4 text-slate-600" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                      {performanceScore}/100
                    </div>
                    <Progress value={performanceScore} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Performance */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">LCP (Largest Contentful Paint)</CardTitle>
                    <CardDescription>Temps de chargement du contenu principal</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatMetric(metrics.lcp)}</div>
                    <div className="flex items-center mt-2">
                      {metrics.lcp && metrics.lcp <= 2500 ? (
                        <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mr-1" />
                      )}
                      <span className="text-xs">Objectif: {'<'}2,5s</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">FID (First Input Delay)</CardTitle>
                    <CardDescription>Délai de première interaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatMetric(metrics.fid)}</div>
                    <div className="flex items-center mt-2">
                      {metrics.fid && metrics.fid <= 100 ? (
                        <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                      )}
                      <span className="text-xs">Objectif: {'<'}100ms</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">CLS (Cumulative Layout Shift)</CardTitle>
                    <CardDescription>Stabilité visuelle de la page</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatMetric(metrics.cls, '')}</div>
                    <div className="flex items-center mt-2">
                      {metrics.cls && metrics.cls <= 0.1 ? (
                        <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mr-1" />
                      )}
                      <span className="text-xs">Objectif: {'<'}0,1</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Alertes détaillées */}
              {alerts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Alertes Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {alerts.map((alert, index) => (
                      <Alert key={index} className={alert.type === 'error' ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'}>
                        <AlertTriangle className={`h-4 w-4 ${alert.type === 'error' ? 'text-red-600' : 'text-yellow-600'}`} />
                        <AlertDescription>
                          <strong>{alert.metric}:</strong> {alert.message}
                          <br />
                          <span className="text-sm">Valeur: {formatMetric(alert.value)} (seuil: {formatMetric(alert.threshold)})</span>
                        </AlertDescription>
                      </Alert>
                    ))}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Conversions */}
            <TabsContent value="conversions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Entonnoir de Conversion</CardTitle>
                  <CardDescription>Performance des étapes clés du parcours utilisateur</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Visiteurs uniques</span>
                      <span className="font-bold">347</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Engagement ({'>'}30s)</span>
                      <span className="font-bold">284 (82%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Calculateur ROI</span>
                      <span className="font-bold">67 (19%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Formulaire Contact</span>
                      <span className="font-bold">23 (7%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contenu */}
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pages les Plus Performantes</CardTitle>
                  <CardDescription>Analyse du trafic et des conversions par page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAnalytics.topPages.map((page, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Eye className="h-4 w-4 text-slate-600" />
                          <span className="font-medium">{page.path}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span>{page.views} vues</span>
                          <Badge variant="secondary">{page.conversions} conversions</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <PredictiveAnalytics />
            </TabsContent>

            <TabsContent value="referral">
              <ReferralProgram />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;