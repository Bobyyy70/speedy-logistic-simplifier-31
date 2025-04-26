
import { Card, CardContent, CardFooter } from "@/components/ui/card";
const testimonials = [{
  quote: "Speed E Log nous a permis de nous concentrer sur notre croissance sans nous soucier de la logistique. Service impeccable et réactif !",
  name: "Marie Dupont",
  title: "Fondatrice, BeautyBox France",
  image: "/placeholder.svg"
}, {
  quote: "La transparence tarifaire et la qualité de préparation des commandes sont remarquables. Nos clients sont ravis des délais de livraison.",
  name: "Thomas Laurent",
  title: "Directeur E-commerce, GreenLife",
  image: "/placeholder.svg"
}, {
  quote: "L'intégration avec notre boutique Shopify a été d'une simplicité étonnante. Le suivi en temps réel des stocks est un vrai plus pour notre activité.",
  name: "Julie Moreau",
  title: "CEO, FashionTrend",
  image: "/placeholder.svg"
}];
export function Testimonials() {
  return <section className="bg-gradient-to-r from-green-200 via-white to-blue-100 dark:from-green-900 dark:via-slate-950 dark:to-slate-900 py-12 md:py-[120px]">
      <div className="section-container py-0 my-0">
        <h2 className="section-title">Ils nous font confiance</h2>
        <p className="section-subtitle">Découvrez comment Speed E Log a aidé d'autres e-commerçants à simplifier leur logistique et accélérer leur croissance.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-white dark:bg-slate-900 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <blockquote className="text-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </section>;
}
