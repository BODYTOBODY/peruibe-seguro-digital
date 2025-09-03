import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-xl">Peruíbe Corretora</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Especialistas em seguros há mais de 15 anos, oferecendo proteção e tranquilidade 
              para você e sua família.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Seguro Automotivo</li>
              <li>Seguro Residencial</li>
              <li>Seguro Empresarial</li>
              <li>Seguro de Vida</li>
              <li>Planos de Vida</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(13) 99749-0715</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>peruibecorretora@hotmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Av Marginal Fepasa 724 - Belmira Novaes - Peruíbe SP
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Peruíbe Corretora de Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;