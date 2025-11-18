import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services-data";

const FulfillmentEcommerce = () => {
  const service = getServiceBySlug('fulfillment-ecommerce');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage service={service} />;
};

export default FulfillmentEcommerce;
