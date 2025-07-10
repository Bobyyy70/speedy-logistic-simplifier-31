
import { OptimizedTestimonialsCarousel } from "@/components/ui/testimonials/OptimizedTestimonialsCarousel";
export function Testimonials() {
  return <section className="py-12 md:py-[26px]">
      <div className="section-container py-0 my-0">
        <h2 className="section-title">Ils nous font confiance</h2>
        <p className="section-subtitle">
          Découvrez comment Speed E Log a aidé d'autres e-commerçants à simplifier leur logistique et accélérer leur croissance.
        </p>

        <div className="mt-12">
          <OptimizedTestimonialsCarousel />
        </div>
      </div>
    </section>;
}
