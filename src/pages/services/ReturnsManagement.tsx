import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services-data";

const ReturnsManagement = () => {
  const service = getServiceBySlug('returns-management');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage service={service} />;
};

export default ReturnsManagement;
