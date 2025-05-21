
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top Web Design Trends to Watch in 2023",
      excerpt: "Explore the latest design trends that are shaping the future of web experiences and how to implement them.",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=450&fit=crop",
      category: "Web Design"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Customer Service",
      excerpt: "Discover how AI chatbots are transforming customer support and creating better user experiences.",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
      category: "AI Technology"
    },
    {
      id: 3,
      title: "Building Responsive Websites That Convert",
      excerpt: "Learn the key strategies for designing websites that not only look good on all devices but drive conversions.",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop",
      category: "Development"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-theme-teal font-medium mb-2">My Blog</p>
          <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
          <p className="section-subtitle mx-auto">
            Insights and thoughts on web design, development, and AI technology from my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="project-card overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs px-3 py-1 bg-theme-purple/10 text-theme-purple rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="flex items-center text-theme-purple hover:text-theme-light-purple font-medium transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="border-theme-purple text-theme-purple hover:bg-theme-purple hover:text-white"
            variant="outline"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
