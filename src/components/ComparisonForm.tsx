import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Home, Square, Building2 } from "lucide-react";
import { useState } from "react";

export const ComparisonForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    surface: "",
    type: "apartment",
    rooms: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Comparer les assurances
        </Button>
      </form>
    </Card>
  );
};