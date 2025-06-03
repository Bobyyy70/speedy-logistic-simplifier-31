
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransportServicesAdmin } from "@/components/admin/TransportServicesAdmin";
import { CarrierRatesAdmin } from "@/components/admin/CarrierRatesAdmin";
import { useAuth } from "@/contexts/AuthContext";
import { Shield, Users, Database } from "lucide-react";

const Admin = () => {
  const { user, userRole } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Administration - Speed E-Log</title>
        <meta 
          name="description" 
          content="Interface d'administration Speed E-Log" 
        />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Administration</h1>
        <p className="text-gray-600">
          Connecté en tant que <span className="font-medium">{user?.email}</span> 
          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Shield className="mr-1 h-3 w-3" />
            {userRole}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services Actifs</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Services de transport configurés
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tarifs Configurés</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">
              Tarifs de base définis
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Comptes utilisateurs actifs
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList>
          <TabsTrigger value="services">Services de Transport</TabsTrigger>
          <TabsTrigger value="rates">Tarifs</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <TransportServicesAdmin />
        </TabsContent>
        <TabsContent value="rates">
          <CarrierRatesAdmin />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
