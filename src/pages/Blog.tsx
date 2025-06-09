
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  Home,
  DollarSign
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'market-trends', label: 'Market Trends' },
    { key: 'buying-guide', label: 'Buying Guide' },
    { key: 'investment', label: 'Investment Tips' },
    { key: 'legal', label: 'Legal & Documentation' },
    { key: 'lifestyle', label: 'Lifestyle' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Factors to Consider When Buying Your First Home in Kakinada",
      excerpt: "Discover the essential factors that every first-time homebuyer should consider when investing in Kakinada's booming real estate market.",
      content: "Buying your first home is one of the most significant financial decisions you'll make. In Kakinada, with its growing infrastructure and business opportunities...",
      author: "Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "buying-guide",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["First Home", "Kakinada", "Investment", "Tips"]
    },
    {
      id: 2,
      title: "Kakinada Real Estate Market Outlook 2024: Trends and Predictions",
      excerpt: "An in-depth analysis of the current real estate trends in Kakinada and what experts predict for the coming year.",
      content: "The real estate market in Kakinada has shown remarkable resilience and growth over the past year. With major infrastructure developments...",
      author: "Rajesh Kumar",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "market-trends",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Market Analysis", "2024 Trends", "Investment"]
    },
    {
      id: 3,
      title: "RERA Guidelines: What Homebuyers Need to Know",
      excerpt: "Understanding the Real Estate Regulatory Authority guidelines and how they protect homebuyer interests.",
      content: "The Real Estate (Regulation and Development) Act, 2016, commonly known as RERA, has revolutionized the real estate sector...",
      author: "Anil Reddy",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "legal",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["RERA", "Legal", "Homebuyer Rights"]
    },
    {
      id: 4,
      title: "Smart Home Features That Add Value to Your Property",
      excerpt: "Explore the latest smart home technologies that not only enhance your lifestyle but also increase property value.",
      content: "In today's digital age, smart home features have become more than just luxury additions. They're increasingly seen as essential...",
      author: "Lakshmi Devi",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Smart Homes", "Technology", "Property Value"]
    },
    {
      id: 5,
      title: "Investment Potential of Kakinada's Emerging Areas",
      excerpt: "Discover the up-and-coming neighborhoods in Kakinada that offer excellent investment opportunities.",
      content: "Kakinada's real estate landscape is rapidly evolving, with several emerging areas showing tremendous investment potential...",
      author: "Venkata Rao",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "investment",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Investment", "Emerging Areas", "ROI"]
    },
    {
      id: 6,
      title: "Home Loan Process Simplified: A Step-by-Step Guide",
      excerpt: "Navigate the home loan process with confidence using our comprehensive step-by-step guide.",
      content: "Securing a home loan can seem daunting, but with the right knowledge and preparation, the process becomes much more manageable...",
      author: "Priya Sharma",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "buying-guide",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Home Loan", "Finance", "Banking"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const recentPosts = blogPosts.slice(0, 3);
  const popularTags = ["Investment", "Kakinada", "Home Buying", "RERA", "Market Trends", "Smart Homes"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="section-spacing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Real Estate <span className="text-gold-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Stay informed with the latest trends, tips, and insights from Kakinada's real estate market
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-600 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.key}
                      variant={selectedCategory === category.key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.key)}
                      className={selectedCategory === category.key ? "premium-button" : ""}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gold-500 text-navy-900 capitalize">
                            {post.category.replace('-', ' ')}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="md:col-span-2 p-6 flex flex-col justify-between">
                        <div>
                          <h2 className="font-playfair text-xl md:text-2xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-charcoal-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center space-x-4 text-sm text-charcoal-600">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" size="sm" className="group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:border-gold-500 transition-colors">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-3 group cursor-pointer">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-navy-900 text-sm group-hover:text-gold-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-charcoal-600 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-colors">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-navy-950 to-navy-900 text-white">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-white/80 mb-4">Get the latest real estate insights delivered to your inbox.</p>
                  <LeadCaptureForm 
                    title=""
                    subtitle=""
                    context="blog_newsletter"
                    className="bg-transparent border-white/30"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-navy-950">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Invest?
              </h2>
              <p className="text-lg leading-relaxed">
                Let our experts guide you through your real estate journey with personalized advice and market insights.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Expert Consultation"
                subtitle="Get personalized real estate advice"
                context="blog_page"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
