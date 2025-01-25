import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Check } from "lucide-react";

const mockInsurers = [
  {
    name: "AssurPro",
    price: "15,90",
    features: ["Dégâts des eaux", "Vol", "Incendie"],
    rating: 4.5,
  },
  {
    name: "SecurHabitat",
    price: "18,50",
    features: ["Dégâts des eaux", "Vol", "Incendie", "Catastrophes naturelles"],
    rating: 4.8,
  },
  {
    name: "HabitatPlus",
    price: "22,90",
    features: ["Dégâts des eaux", "Vol", "Incendie", "Protection juridique"],
    rating: 4.2,
  },
];

export const ResultsDisplay = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Meilleures offres pour votre bien
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {mockInsurers.map((insurer) => (
          <Card key={insurer.name} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">{insurer.name}</h3>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-primary">{insurer.price}€</span>
              <span className="text-gray-500">/mois</span>
            </div>
            <ul className="space-y-2 mb-6">
              {insurer.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Souscrire</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};