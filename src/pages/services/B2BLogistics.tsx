import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services-data";

const B2BLogistics = () => {
  const service = getServiceBySlug('b2b-logistics');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage service={service} />;
};

export default B2BLogistics;
