import { Card } from "@/components/ui/card";
import { Shield, Users, Trophy, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience dans la comparaison d'assurances"
    },
    {
      icon: Users,
      title: "Confiance",
      description: "Plus de 100 000 clients satisfaits"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Reconnu comme leader du marché"
    },
    {
      icon: Target,
      title: "Précision",
      description: "Des comparaisons détaillées et personnalisées"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-up">
          À propos de nous
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <p className="text-lg text-gray-600 mb-6">
            Nous sommes le leader de la comparaison d'assurances habitation en France,
            offrant un service transparent et personnalisé pour trouver la meilleure
            protection pour votre bien immobilier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fade-up">
          <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
          <p className="text-gray-600 mb-6">
            Notre mission est de simplifier la recherche d'assurance habitation en
            offrant une comparaison claire et objective des meilleures offres du marché.
            Nous nous engageons à fournir un service transparent et personnalisé pour
            vous aider à faire le meilleur choix pour votre bien immobilier.
          </p>
        </div>

        <div className="text-center animate-fade-up">
          <h2 className="text-2xl font-semibold mb-4">Nos Partenaires</h2>
          <p className="text-gray-600">
            Nous collaborons avec les plus grandes compagnies d'assurance pour vous
            offrir les meilleures garanties aux meilleurs prix.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;