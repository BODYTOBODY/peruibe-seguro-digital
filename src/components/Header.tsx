import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-xl text-primary">Peruíbe Corretora</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
            <a href="tel:13997490715">
              <Phone className="h-4 w-4 mr-2" />
              (13) 99749-0715
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://wa.me/5513997490715" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;