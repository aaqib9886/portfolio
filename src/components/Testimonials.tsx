
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO at TechStart",
      quote: "Working with Muhammad Aqib was a game-changer for our company. The website he designed has significantly increased our conversion rates and customer engagement.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "David Williams",
      position: "Marketing Director",
      quote: "Aqib delivered our e-commerce platform ahead of schedule with all features working flawlessly. His attention to detail and responsive design skills are exceptional.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      location: "London, UK"
    },
    {
      id: 3,
      name: "Aisha Malik",
      position: "Startup Founder",
      quote: "The AI chatbot Aqib developed for our customer service has reduced response times by 70% and improved customer satisfaction scores dramatically.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      location: "Islamabad, Pakistan"
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "E-commerce Manager",
      quote: "Our inventory management has been completely transformed by the AI chatbot system. Tracking stock and managing orders has never been easier.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      location: "California, USA"
    },
    {
      id: 5,
      name: "Elizabeth Chen",
      position: "Product Owner",
      quote: "The web application Aqib built for our team streamlined our entire workflow. His technical expertise and problem-solving abilities are truly impressive.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop", 
      location: "Toronto, Canada"
    },
  ];

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-theme-teal font-medium mb-2">Testimonials</p>
          <h2 className="section-title">Client <span className="gradient-text">Feedback</span></h2>
          <p className="section-subtitle mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <blockquote className="mb-6 text-muted-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? "bg-theme-purple" : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
