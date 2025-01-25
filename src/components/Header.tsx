import { Building } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">AssurCompare</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Accueil
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Nos Services
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};