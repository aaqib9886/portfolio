
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 gradient-text">Muhammad Aqib</h3>
            <p className="mb-4 text-gray-300 max-w-md">
              Professional web designer and developer with 4 years of experience in creating stunning websites, web applications, and AI chatbots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-theme-teal transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-theme-teal transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-theme-teal transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-theme-teal transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-theme-teal transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-theme-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">Web App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">AI Chatbot Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">WordPress Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">Shopify Development</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Muhammad Aqib. All rights reserved.
          </p>
          <div>
            <button 
              onClick={scrollToTop}
              className="bg-theme-purple hover:bg-theme-light-purple text-white p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
