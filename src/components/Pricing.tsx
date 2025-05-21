
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, DollarSign } from 'lucide-react';

const Pricing = () => {
  const pricingPackages = [
    {
      title: "Web Design",
      price: "$300",
      description: "Professional website design with modern trends and user-friendly experience.",
      features: [
        "Responsive Design",
        "3 Page Layouts",
        "SEO Basic Setup",
        "1 Round of Revisions"
      ],
      popular: false
    },
    {
      title: "Branding Package",
      price: "$200",
      description: "Complete brand identity design to help your business stand out.",
      features: [
        "Logo Design",
        "Color Palette",
        "Typography Selection",
        "Brand Guidelines"
      ],
      popular: false
    },
    {
      title: "Custom Web App",
      price: "$600",
      description: "Tailor-made web applications to solve your business challenges.",
      features: [
        "Custom Functionality",
        "User Authentication",
        "Database Integration",
        "Admin Dashboard"
      ],
      popular: true
    },
    {
      title: "AI Chatbot Setup",
      price: "$500",
      description: "Intelligent chatbots that streamline your business operations.",
      features: [
        "Email Handling",
        "Inventory Management",
        "Customer Support",
        "Integration with Existing Systems"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-theme-teal font-medium mb-2">My Rates</p>
          <h2 className="section-title">Service <span className="gradient-text">Packages</span></h2>
          <p className="section-subtitle mx-auto">
            Transparent pricing options to get your project started. Final pricing depends on project scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPackages.map((pkg, index) => (
            <Card key={index} className={`overflow-hidden border-0 shadow-md transition-transform duration-300 hover:-translate-y-2 ${pkg.popular ? 'relative border-theme-purple/30 shadow-lg' : ''}`}>
              {pkg.popular && (
                <div className="absolute -right-12 top-6 bg-theme-purple text-white px-12 py-1 rotate-45 text-xs font-medium">
                  Popular
                </div>
              )}
              <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>{pkg.title}</CardTitle>
                  <DollarSign className="h-5 w-5 text-theme-purple" />
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">starting price</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-muted-foreground mb-6">
                  {pkg.description}
                </CardDescription>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-theme-teal" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-theme-purple hover:bg-theme-light-purple' : 'border-theme-purple text-theme-purple hover:bg-theme-purple hover:text-white'}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Final pricing depends on project scope. Contact me for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
