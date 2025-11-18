import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services-data";

const TransportDistribution = () => {
  const service = getServiceBySlug('transport-distribution');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage service={service} />;
};

export default TransportDistribution;
