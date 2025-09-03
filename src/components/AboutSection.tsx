import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Confiança e Segurança",
    description: "Mais de 15 anos no mercado oferecendo as melhores soluções em seguros para nossos clientes."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Oferecemos atendimento personalizado para encontrar a melhor solução."
  },
  {
    icon: Award,
    title: "Parceiros Qualificados",
    description: "Trabalhamos apenas com as melhores seguradoras do mercado para garantir qualidade."
  },
  {
    icon: Clock,
    title: "Suporte Completo",
    description: "Suporte completo desde a cotação até o acionamento do sinistro, quando necessário."
  }
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher a Peruíbe Corretora?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos uma corretora de seguros estabelecida em Peruíbe, com anos de experiência 
              no mercado de seguros. Nossa missão é oferecer proteção completa e tranquilidade 
              para nossos clientes, sempre com atendimento personalizado e as melhores condições do mercado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalhamos com as principais seguradoras do país e oferecemos soluções 
              completas para pessoas físicas e jurídicas, sempre buscando a melhor 
              relação custo-benefício para cada perfil de cliente.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;