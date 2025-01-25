import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Check, Star, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const mockInsurers = [
  {
    name: "AssurPro",
    price: "15,90",
    features: [
      "Dégâts des eaux",
      "Vol",
      "Incendie",
      "Responsabilité civile",
      "Assistance 24/7"
    ],
    rating: 4.5,
    advantages: ["Meilleur rapport qualité/prix", "Souscription 100% en ligne"],
    franchise: "150€"
  },
  {
    name: "SecurHabitat",
    price: "18,50",
    features: [
      "Dégâts des eaux",
      "Vol",
      "Incendie",
      "Catastrophes naturelles",
      "Protection juridique",
      "Assistance 24/7"
    ],
    rating: 4.8,
    advantages: ["Garanties étendues", "Service client premium"],
    franchise: "100€"
  },
  {
    name: "HabitatPlus",
    price: "22,90",
    features: [
      "Dégâts des eaux",
      "Vol",
      "Incendie",
      "Protection juridique",
      "Objets de valeur",
      "Assistance VIP"
    ],
    rating: 4.2,
    advantages: ["Couverture premium", "Indemnisation express"],
    franchise: "200€"
  },
];

export const ResultsDisplay = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Meilleures offres pour votre bien
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {mockInsurers.map((insurer) => (
          <Card key={insurer.name} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">{insurer.name}</h3>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-sm">{insurer.rating}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="text-3xl font-bold text-primary">{insurer.price}€</span>
              <span className="text-gray-500">/mois</span>
              <div className="mt-1 flex items-center">
                <Info className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-500">Franchise : {insurer.franchise}</span>
              </div>
            </div>

            <div className="mb-4">
              {insurer.advantages.map((advantage, index) => (
                <div key={index} className="text-sm text-primary-600 mb-1">
                  {advantage}
                </div>
              ))}
            </div>

            <ul className="space-y-2 mb-6">
              {insurer.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <Button className="w-full">Souscrire en ligne</Button>
              <Button variant="outline" className="w-full">
                Plus d'informations
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};