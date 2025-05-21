import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

type ProjectCategory = 'all' | 'web-design' | 'web-app' | 'chatbot' | 'usa' | 'uk' | 'pakistan' | 'inventory';
type Project = {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
  link: string;
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [visibleProjects, setVisibleProjects] = useState(8);

  // Project data with real images
  const projects: Project[] = [
    // Web Design Projects - USA
    { id: 1, title: "Modern E-commerce Store", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", link: "#" },
    { id: 2, title: "Corporate Business Site", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", link: "#" },
    { id: 3, title: "Restaurant Booking Platform", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", link: "#" },
    { id: 4, title: "Real Estate Listings", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23", link: "#" },
    { id: 5, title: "Health & Wellness Center", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", link: "#" },
    { id: 6, title: "Financial Services Company", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", link: "#" },
    { id: 7, title: "Digital Marketing Agency", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", link: "#" },
    { id: 8, title: "Automotive Dealership", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", link: "#" },
    { id: 9, title: "Educational Institution", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", link: "#" },
    { id: 10, title: "Legal Practice Firm", category: ['web-design', 'usa'], image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", link: "#" },
    
    // Web Design Projects - UK/Pakistan
    { id: 11, title: "Fashion Retail Store", category: ['web-design', 'uk', 'pakistan'], image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", link: "#" },
    { id: 12, title: "Tourism & Travel Agency", category: ['web-design', 'uk'], image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", link: "#" },
    { id: 13, title: "Wedding Planning Service", category: ['web-design', 'uk'], image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", link: "#" },
    { id: 14, title: "Interior Design Studio", category: ['web-design', 'uk'], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", link: "#" },
    { id: 15, title: "Technology Startup", category: ['web-design', 'uk'], image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", link: "#" },
    { id: 16, title: "Charity Organization", category: ['web-design', 'pakistan'], image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23", link: "#" },
    { id: 17, title: "Food Delivery Service", category: ['web-design', 'pakistan'], image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", link: "#" },
    { id: 18, title: "Event Management Company", category: ['web-design', 'pakistan'], image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", link: "#" },
    { id: 19, title: "Media Production House", category: ['web-design', 'pakistan'], image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", link: "#" },
    { id: 20, title: "Sports & Fitness Club", category: ['web-design', 'pakistan'], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", link: "#" },
    
    // Web App Projects
    { id: 21, title: "Customer Relationship Management", category: ['web-app'], image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", link: "#" },
    { id: 22, title: "Inventory Management System", category: ['web-app'], image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", link: "#" },
    { id: 23, title: "Employee Scheduling Tool", category: ['web-app'], image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", link: "#" },
    { id: 24, title: "Learning Management System", category: ['web-app'], image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", link: "#" },
    { id: 25, title: "E-commerce Analytics Dashboard", category: ['web-app'], image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", link: "#" },
    
    // Chatbot Projects - Email Handling
    { id: 26, title: "Customer Support Email Bot", category: ['chatbot'], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", link: "#" },
    { id: 27, title: "Email Lead Qualification Bot", category: ['chatbot'], image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", link: "#" },
    { id: 28, title: "Email Scheduling Assistant", category: ['chatbot'], image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23", link: "#" },
    { id: 29, title: "Email Categorization Bot", category: ['chatbot'], image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", link: "#" },
    { id: 30, title: "Automated Email Response System", category: ['chatbot'], image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", link: "#" },
    
    // Chatbot Projects - Inventory Management
    { id: 31, title: "Retail Inventory Bot", category: ['chatbot', 'inventory'], image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", link: "#" },
    { id: 32, title: "Warehouse Management Bot", category: ['chatbot', 'inventory'], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", link: "#" },
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'web-app', name: 'Web Apps' },
    { id: 'chatbot', name: 'AI Chatbots' },
    { id: 'usa', name: 'USA Clients' },
    { id: 'uk', name: 'UK Clients' },
    { id: 'pakistan', name: 'Pakistan Clients' },
    { id: 'inventory', name: 'Inventory Management' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const loadMore = () => {
    setVisibleProjects(prev => prev + 8);
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-theme-teal font-medium mb-2">My Work</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto">
            Take a look at some of my recent projects spanning web design, app development, and AI chatbots.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`mb-2 ${
                activeFilter === category.id
                  ? "bg-theme-purple hover:bg-theme-light-purple"
                  : "border-theme-purple text-theme-purple hover:bg-theme-purple hover:text-white"
              }`}
              onClick={() => setActiveFilter(category.id as ProjectCategory)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-theme-purple/0 group-hover:bg-theme-purple/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a 
                    href={project.link} 
                    className="bg-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Link className="h-5 w-5 text-theme-purple" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.category.map(cat => (
                    <span 
                      key={`${project.id}-${cat}`} 
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                    >
                      {cat === 'web-design' ? 'Web Design' : 
                       cat === 'web-app' ? 'Web App' : 
                       cat === 'chatbot' ? 'AI Chatbot' :
                       cat === 'inventory' ? 'Inventory' : cat.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > visibleProjects && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMore} 
              size="lg"
              className="bg-theme-purple hover:bg-theme-light-purple"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
