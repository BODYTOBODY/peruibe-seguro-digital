import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Building, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Seguro Automotivo",
    description: "Proteja seu veículo com cobertura completa contra roubo, furto, colisão e mais.",
    features: ["Cobertura completa", "Assistência 24h", "Carro reserva", "Oficina referenciada"]
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja sua casa e seus bens com segurança total para você e sua família.",
    features: ["Incêndio e raio", "Roubo de bens", "Danos elétricos", "Responsabilidade civil"]
  },
  {
    icon: Building,
    title: "Seguro Empresarial",
    description: "Mantenha seu negócio protegido com coberturas específicas para empresas.",
    features: ["Equipamentos", "Responsabilidade civil", "Lucros cessantes", "Cyber segurança"]
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta a tranquilidade da sua família com proteção financeira completa.",
    features: ["Morte natural", "Morte acidental", "Invalidez", "Doenças graves"]
  },
  {
    icon: Users,
    title: "Planos de Vida",
    description: "Invista no futuro com planos de capitalização e previdência privada.",
    features: ["Previdência privada", "Capitalização", "Renda vitalícia", "Benefício fiscal"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-section-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de seguros para proteger o que mais importa para você
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href="#contato">Solicitar Cotação</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;