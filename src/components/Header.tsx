import { Building } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-primary">AssurCompare</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">
            Accueil
          </a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">
            Nos Services
          </a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};