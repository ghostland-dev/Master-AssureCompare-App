import { Shield, Clock, ThumbsUp, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Assureurs certifiés",
    description: "Tous nos partenaires sont rigoureusement sélectionnés",
  },
  {
    icon: Clock,
    title: "Comparaison rapide",
    description: "Obtenez des devis en quelques minutes",
  },
  {
    icon: Percent,
    title: "Meilleurs tarifs",
    description: "Économisez jusqu'à 40% sur votre assurance",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction client",
    description: "97% de nos clients sont satisfaits",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};