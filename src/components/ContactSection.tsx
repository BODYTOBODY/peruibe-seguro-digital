import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(13) 99749-0715",
    href: "tel:13997490715"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(13) 99749-0715",
    href: "https://wa.me/5513997490715"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "peruibecorretora@hotmail.com",
    href: "mailto:peruibecorretora@hotmail.com"
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Av Marginal Fepasa 724 - Belmira Novaes - Peruíbe SP",
    href: "https://maps.google.com/?q=Av+Marginal+Fepasa+724+Belmira+Novaes+Peruibe+SP"
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    value: "Segunda a Sexta: 8h às 18h",
    href: null
  }
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar a melhor proteção. 
            Entre em contato conosco para uma cotação personalizada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {contact.href ? (
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-primary text-center whitespace-normal"
                    asChild
                  >
                    <a href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                      {contact.value}
                    </a>
                  </Button>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="https://wa.me/5513997490715" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <a href="tel:13997490715">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;