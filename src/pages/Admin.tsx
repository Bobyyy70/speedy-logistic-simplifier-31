
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransportServicesAdmin } from "@/components/admin/TransportServicesAdmin";
import { CarrierRatesAdmin } from "@/components/admin/CarrierRatesAdmin";

const Admin = () => {
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

      <h1 className="text-3xl font-bold mb-8">Administration</h1>

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
