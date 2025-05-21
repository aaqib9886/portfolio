
import { 
  Monitor, 
  Palette, 
  Code, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Palette className="service-icon" />,
      title: "Web Design",
      description: "Crafting visually stunning and user-friendly interfaces that engage your audience and reflect your brand identity.",
      link: "#"
    },
    {
      icon: <Monitor className="service-icon" />,
      title: "Branding",
      description: "Developing cohesive brand identities that communicate your values and resonate with your target audience.",
      link: "#"
    },
    {
      icon: <Code className="service-icon" />,
      title: "Web App Development",
      description: "Building custom web applications with modern technologies to power your business operations and customer experiences.",
      link: "#"
    },
    {
      icon: <MessageSquare className="service-icon" />,
      title: "AI Chatbot Development",
      description: "Creating intelligent chatbots for email handling, inventory management, and streamlining your business workflows.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-theme-teal font-medium mb-2">My Services</p>
          <h2 className="section-title">What I <span className="gradient-text">Offer</span></h2>
          <p className="section-subtitle mx-auto">
            I provide comprehensive digital solutions tailored to meet your specific needs and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden card-hover border-0 shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-gray-800">
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                <a 
                  href={service.link} 
                  className="flex items-center text-theme-purple hover:text-theme-light-purple font-medium transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-theme-purple text-theme-purple hover:bg-theme-purple hover:text-white"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
