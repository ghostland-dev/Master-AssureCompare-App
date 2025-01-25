import { Shield, Clock, ThumbsUp, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Assureurs certifiés",
    description: "Tous nos partenaires sont rigoureusement sélectionnés et certifiés pour votre tranquillité.",
  },
  {
    icon: Clock,
    title: "Comparaison rapide",
    description: "Obtenez des devis personnalisés en quelques minutes seulement.",
  },
  {
    icon: Percent,
    title: "Meilleurs tarifs",
    description: "Bénéficiez des meilleures offres du marché et économisez jusqu'à 40% sur votre assurance.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction client",
    description: "Rejoignez nos 97% de clients satisfaits par notre service de comparaison.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Pourquoi nous choisir ?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Nous nous engageons à vous offrir le meilleur service de comparaison d'assurances,
          avec transparence et efficacité.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/5 rounded-full transform rotate-45"></div>
                <feature.icon className="h-12 w-12 text-primary mx-auto relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};