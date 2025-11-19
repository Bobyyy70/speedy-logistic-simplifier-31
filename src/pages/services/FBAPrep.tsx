import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services-data";

const FBAPrep = () => {
  const service = getServiceBySlug('fba-prep');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage service={service} />;
};

export default FBAPrep;
