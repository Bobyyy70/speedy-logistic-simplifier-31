import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
          <p className="text-lg text-center mb-12">
            Vous avez des questions sur nos services logistiques ? N'hésitez pas à nous contacter pour obtenir un devis personnalisé ou discuter de vos besoins spécifiques.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom / Société</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom ou société" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="votre@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone (optionnel)</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre numéro de téléphone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre besoin, volume estimé, type de produits..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@speedelog.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+33 3 84 XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">
                      Speed E Log<br />
                      Port-sur-Saône<br />
                      70170 Bourgogne-Franche-Comté<br />
                      France
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-muted h-[300px] rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Carte Google Maps à intégrer</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold mb-4">Vous avez d'autres questions ?</h2>
            <p className="mb-6">Consultez notre <Link to="/faq" className="text-primary hover:underline">FAQ</Link> ou contactez-nous directement.</p>
            <Button asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
