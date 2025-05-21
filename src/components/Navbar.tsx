
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 dark:bg-theme-dark/90 shadow-md backdrop-blur-sm' : 'py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-text">Muhammad Aqib</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-theme-purple hover:bg-theme-light-purple"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-theme-dark shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-theme-purple hover:bg-theme-light-purple w-full"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
