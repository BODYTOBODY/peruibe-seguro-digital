import { Button } from "@/components/ui/button";
import { Shield, Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-hover/90" />
      <div className="container relative z-10 text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Shield className="h-16 w-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Peruíbe Corretora
          <span className="block text-2xl md:text-4xl font-normal mt-2 text-primary-foreground/90">
            de Seguros
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Protegendo você e sua família há anos com os melhores seguros do mercado. 
          Especialistas em seguros automotivos, residenciais, empresariais e de vida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg"
            asChild
          >
            <a href="#contato">
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Cotação
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-primary bg-white/95 hover:bg-white font-semibold px-8 py-3 text-lg"
            asChild
          >
            <a href="https://wa.me/5513997490715" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">+15</div>
            <div className="text-sm text-primary/80">Anos de Experiência</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">5000+</div>
            <div className="text-sm text-primary/80">Clientes Atendidos</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-sm text-primary/80">Suporte Disponível</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-primary/80">Satisfação</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
          <path d="m0,56 c48,48 96,48 144,0 s96,-48 144,0 s96,48 144,0 s96,-48 144,0 s96,48 144,0 s96,-48 144,0 s96,48 144,0 s96,-48 144,0 s96,48 144,0 s96,-48 144,0 s96,48 144,0 v64 h-1200 z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;