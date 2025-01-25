import { useState } from "react";
import { Header } from "@/components/Header";
import { ComparisonForm } from "@/components/ComparisonForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Index = () => {
  const [showResults, setShowResults] = useState(false);

  const handleComparisonSubmit = (data: any) => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparez les meilleures assurances habitation
          </h1>
          <p className="text-xl text-gray-600">
            Trouvez l'assurance parfaite pour votre bien immobilier en quelques clics
          </p>
        </div>

        <div className="mb-16">
          <ComparisonForm onSubmit={handleComparisonSubmit} />
        </div>

        {showResults && (
          <div className="animate-fade-up">
            <ResultsDisplay />
          </div>
        )}

        <WhyChooseUs />
      </main>
    </div>
  );
};

export default Index;