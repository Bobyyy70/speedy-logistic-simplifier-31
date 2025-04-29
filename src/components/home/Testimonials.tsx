
import { TestimonialsCarousel } from "@/components/ui/testimonials/TestimonialsCarousel";
export function Testimonials() {
  return <section className="py-12 backdrop-blur-sm md:py-[26px] relative overflow-visible">
      {/* Section color overlap effect */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-500/10 to-transparent -mt-24"></div>

      <div className="section-container py-0 my-0">
        <h2 className="section-title">Ils nous font confiance</h2>
        <p className="section-subtitle">
          Découvrez comment Speed E Log a aidé d'autres e-commerçants à simplifier leur logistique et accélérer leur croissance.
        </p>

        <div className="mt-12">
          <TestimonialsCarousel />
        </div>
      </div>

      {/* Section color overlap effect for next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500/10 to-transparent -mb-24"></div>
    </section>;
}
