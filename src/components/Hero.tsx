
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background 3D Effect Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -right-10 md:-right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-theme-purple/20 to-theme-teal/20 blur-3xl"
          style={{ 
            transform: `translate3d(${mousePosition.x * -10}px, ${mousePosition.y * -10}px, 0)`,
          }}
        />
        <div 
          className="absolute -bottom-10 -left-10 md:-left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-theme-light-purple/20 to-theme-teal/20 blur-3xl"
          style={{ 
            transform: `translate3d(${mousePosition.x * -5}px, ${mousePosition.y * -5}px, 0)`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 pt-12 lg:pt-0">
            <p className="text-theme-teal font-semibold mb-3 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Muhammad Aqib
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Web Designer & Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
              I have 4 years of experience in website design, development, Shopify, and WordPress.
              Crafting beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button size="lg" className="bg-theme-purple hover:bg-theme-light-purple">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">Contact Me</Button>
            </div>
          </div>
          
          <div 
            className="lg:w-1/2 flex justify-center"
            style={{ 
              transform: `translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="relative w-3/4 max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-theme-purple/60 to-theme-teal/60 rounded-2xl blur-md transform -translate-y-2 translate-x-2"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Muhammad Aqib" 
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div 
              className="absolute -right-4 top-1/4 bg-theme-purple text-white p-2 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-4 w-16 bg-white/20 rounded mb-1"></div>
              <div className="h-3 w-10 bg-white/20 rounded"></div>
            </div>
            
            <div 
              className="absolute left-10 top-10 bg-theme-teal text-white p-2 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="h-4 w-4 rounded-full bg-white/20"></div>
            </div>
            
            <div 
              className="absolute -left-6 bottom-10 bg-theme-light-purple text-white p-2 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="h-4 w-12 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
