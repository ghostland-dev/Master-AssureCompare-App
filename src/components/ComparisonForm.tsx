import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Square, Building2, Euro } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const ComparisonForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    surface: "",
    type: "apartment",
    rooms: "",
    constructionYear: "",
    value: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.surface || !formData.rooms || !formData.value || !formData.location) {
      toast({
        title: "Erreur de formulaire",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
    toast({
      title: "Recherche en cours",
      description: "Nous comparons les meilleures offres pour vous",
    });
  };

  return (
    <Card className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type de bien</label>
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant={formData.type === "apartment" ? "default" : "outline"}
              className="w-full"
              onClick={() => setFormData({ ...formData, type: "apartment" })}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Appartement
            </Button>
            <Button
              type="button"
              variant={formData.type === "house" ? "default" : "outline"}
              className="w-full"
              onClick={() => setFormData({ ...formData, type: "house" })}
            >
              <Home className="mr-2 h-4 w-4" />
              Maison
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Surface (m²)</label>
          <Input
            type="number"
            placeholder="Surface en m²"
            value={formData.surface}
            onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Nombre de pièces</label>
          <Input
            type="number"
            placeholder="Nombre de pièces"
            value={formData.rooms}
            onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Année de construction</label>
          <Input
            type="number"
            placeholder="Année de construction"
            value={formData.constructionYear}
            onChange={(e) => setFormData({ ...formData, constructionYear: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Valeur estimée du bien (€)</label>
          <Input
            type="number"
            placeholder="Valeur en euros"
            value={formData.value}
            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Code postal</label>
          <Input
            type="text"
            placeholder="Code postal"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full"
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          <Euro className="mr-2 h-4 w-4" />
          Comparer les assurances
        </Button>
      </form>
    </Card>
  );
};