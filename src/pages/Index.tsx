import { useState } from "react";
import { Header } from "@/components/Header";
import { ComparisonForm } from "@/components/ComparisonForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Shield, Users, ThumbsUp } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-6 animate-fade-up">
          <div className="flex justify-center gap-4 mb-6">
            <Shield className="h-12 w-12 text-primary animate-pulse" />
            <Users className="h-12 w-12 text-primary/80 animate-pulse delay-100" />
            <ThumbsUp className="h-12 w-12 text-primary/60 animate-pulse delay-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Comparez les meilleures assurances habitation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trouvez l'assurance parfaite pour votre bien immobilier en quelques clics.
            <span className="block mt-2 text-primary font-semibold">
              Économisez jusqu'à 40% sur votre contrat.
            </span>
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-3xl transform -rotate-1"></div>
          <div className="relative">
            <ComparisonForm onSubmit={handleComparisonSubmit} />
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">À propos</h3>
              <p className="text-gray-600">
                AssurCompare vous aide à trouver la meilleure assurance habitation
                adaptée à vos besoins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-600">
                Email: contact@assurcompare.fr<br />
                Tél: 01 23 45 67 89
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Liens utiles</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm border-t pt-8">
            © 2024 AssurCompare. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;