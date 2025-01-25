import { useState } from "react";
import { Header } from "@/components/Header";
import { ComparisonForm } from "@/components/ComparisonForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleComparisonSubmit = async (data: any) => {
    setIsLoading(true);
    console.log("Données du formulaire:", data);
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparez les meilleures assurances habitation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez l'assurance parfaite pour votre bien immobilier en quelques clics.
            Économisez jusqu'à 40% sur votre contrat.
          </p>
        </div>

        <div className="mb-16">
          <ComparisonForm onSubmit={handleComparisonSubmit} />
        </div>

        {showResults && (
          <div className="mb-16">
            <ResultsDisplay />
          </div>
        )}

        <WhyChooseUs />
      </main>

      <footer className="bg-white border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 text-sm">
            © 2024 AssurCompare. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;