import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, Square, Building2, Euro, Info } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ComparisonForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    surface: "",
    type: "apartment",
    rooms: "",
    constructionYear: "",
    value: "",
    location: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.surface) {
      newErrors.surface = "La surface est requise";
    } else if (Number(formData.surface) <= 0) {
      newErrors.surface = "La surface doit être supérieure à 0";
    }

    if (!formData.rooms) {
      newErrors.rooms = "Le nombre de pièces est requis";
    } else if (Number(formData.rooms) <= 0) {
      newErrors.rooms = "Le nombre de pièces doit être supérieur à 0";
    }

    if (!formData.constructionYear) {
      newErrors.constructionYear = "L'année de construction est requise";
    } else if (Number(formData.constructionYear) < 1800 || Number(formData.constructionYear) > new Date().getFullYear()) {
      newErrors.constructionYear = "L'année de construction n'est pas valide";
    }

    if (!formData.value) {
      newErrors.value = "La valeur du bien est requise";
    } else if (Number(formData.value) <= 0) {
      newErrors.value = "La valeur doit être supérieure à 0";
    }

    if (!formData.location) {
      newErrors.location = "Le code postal est requis";
    } else if (!/^\d{5}$/.test(formData.location)) {
      newErrors.location = "Le code postal doit contenir 5 chiffres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      toast.success("Recherche des meilleures offres en cours...");
    } else {
      toast.error("Veuillez corriger les erreurs dans le formulaire");
    }
  };

  return (
    <Card className="p-6 bg-white shadow-lg rounded-xl max-w-2xl mx-auto animate-fade-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Type de bien
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sélectionnez le type de votre bien immobilier</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
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
            className={`w-full ${errors.surface ? 'border-red-500' : ''}`}
          />
          {errors.surface && <p className="text-sm text-red-500">{errors.surface}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Nombre de pièces</label>
          <Input
            type="number"
            placeholder="Nombre de pièces"
            value={formData.rooms}
            onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
            className={`w-full ${errors.rooms ? 'border-red-500' : ''}`}
          />
          {errors.rooms && <p className="text-sm text-red-500">{errors.rooms}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Année de construction</label>
          <Input
            type="number"
            placeholder="Année de construction"
            value={formData.constructionYear}
            onChange={(e) => setFormData({ ...formData, constructionYear: e.target.value })}
            className={`w-full ${errors.constructionYear ? 'border-red-500' : ''}`}
          />
          {errors.constructionYear && <p className="text-sm text-red-500">{errors.constructionYear}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Valeur estimée du bien (€)</label>
          <Input
            type="number"
            placeholder="Valeur en euros"
            value={formData.value}
            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
            className={`w-full ${errors.value ? 'border-red-500' : ''}`}
          />
          {errors.value && <p className="text-sm text-red-500">{errors.value}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Code postal</label>
          <Input
            type="text"
            placeholder="Code postal"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className={`w-full ${errors.location ? 'border-red-500' : ''}`}
            maxLength={5}
          />
          {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          <Euro className="mr-2 h-4 w-4" />
          Comparer les assurances
        </Button>
      </form>
    </Card>
  );
};