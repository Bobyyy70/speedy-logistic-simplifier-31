import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services-data";

const WarehouseManagement = () => {
  const service = getServiceBySlug('warehouse-management');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage service={service} />;
};

export default WarehouseManagement;
