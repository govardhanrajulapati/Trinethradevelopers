
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Home, Calendar } from 'lucide-react';

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Trinethra Heights',
      location: 'Suryaraopeta, Kakinada',
      type: 'Luxury Apartments',
      status: 'ongoing',
      price: '₹45L - ₹75L',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      features: ['3 BHK & 4 BHK', 'Gated Community', 'Smart Homes'],
      completion: '2024'
    },
    {
      id: 2,
      title: 'Golden Palms Villas',
      location: 'Vakalapudi, Kakinada',
      type: 'Premium Villas',
      status: 'upcoming',
      price: '₹1.2Cr - ₹2.5Cr',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Independent Villas', 'Private Gardens', 'Vastu Compliant'],
      completion: '2025'
    },
    {
      id: 3,
      title: 'Emerald Square',
      location: 'Ramanayyapeta, Kakinada',
      type: 'Commercial Complex',
      status: 'completed',
      price: '₹25L - ₹1.5Cr',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      features: ['Retail Spaces', 'Office Suites', 'Food Court'],
      completion: '2023'
    },
    {
      id: 4,
      title: 'Royal Residency',
      location: 'Main Town, Kakinada',
      type: 'Luxury Apartments',
      status: 'ongoing',
      price: '₹35L - ₹65L',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['2 BHK & 3 BHK', 'Club House', 'Swimming Pool'],
      completion: '2024'
    },
    {
      id: 5,
      title: 'Tech Park Plaza',
      location: 'KAKINADA SEZ, Kakinada',
      type: 'IT Complex',
      status: 'upcoming',
      price: '₹50L - ₹3Cr',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Modern Offices', 'Conference Halls', '24/7 Security'],
      completion: '2025'
    },
    {
      id: 6,
      title: 'Coastal Grandeur',
      location: 'Beach Road, Kakinada',
      type: 'Sea View Apartments',
      status: 'completed',
      price: '₹55L - ₹95L',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Sea Facing', 'Penthouse Available', 'Luxury Amenities'],
      completion: '2023'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-orange-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleViewDetails = (projectId: number) => {
    // Navigate to projects page with specific project ID
    navigate(`/projects?id=${projectId}`);
  };

  const handleScheduleVisit = (projectId: number) => {
    // Navigate to contact page with project context
    navigate(`/contact?project=${projectId}`);
  };

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Flagship <span className="text-gold-600">Projects</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of premium residential and commercial developments that are redefining luxury living in Kakinada.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              className={`px-6 py-3 transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'premium-button'
                  : 'border-navy-200 text-navy-700 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden animate-fade-in bg-white`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusColor(project.status)} text-white capitalize`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-navy-900">
                    {project.completion}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="icon" 
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900"
                    onClick={() => handleViewDetails(project.id)}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-charcoal-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-charcoal-600">
                      <Home className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.type}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-charcoal-600">Starting from</span>
                      <span className="font-bold text-lg text-navy-900">{project.price}</span>
                    </div>

                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-charcoal-600">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      className="flex-1 premium-button text-sm"
                      onClick={() => handleViewDetails(project.id)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="border-navy-200 hover:border-gold-400"
                      onClick={() => handleScheduleVisit(project.id)}
                    >
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            className="premium-button text-lg px-8 py-4"
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
