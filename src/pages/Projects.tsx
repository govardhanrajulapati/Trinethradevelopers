import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  MapPin,
  Calendar,
  Home,
  Car,
  Wifi,
  Shield,
  Droplets,
  Trees,
  Dumbbell,
  Users,
  Star,
  ArrowLeft,
  Phone
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'completed', label: 'Completed' }
  ];

  const projects = [
    {
      id: 1,
      name: "Trinethra Heights",
      location: "Ramachandra Rao Pet, Kakinada",
      status: "ongoing",
      type: "Luxury Apartments",
      price: "₹45 - 75 Lakhs",
      possession: "Dec 2024",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["3/4 BHK", "Gym", "Swimming Pool", "24/7 Security"],
      amenities: [
        { icon: Home, name: "3/4 BHK Apartments" },
        { icon: Car, name: "Covered Parking" },
        { icon: Dumbbell, name: "Fitness Center" },
        { icon: Shield, name: "24/7 Security" }
      ],
      description: "Experience luxury living at its finest with Trinethra Heights. This premium residential complex offers spacious 3 and 4 BHK apartments with world-class amenities.",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Golden Palms Villas",
      location: "One Town, Kakinada",
      status: "upcoming",
      type: "Independent Villas",
      price: "₹1.2 - 2.5 Cr",
      possession: "Mar 2025",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["4/5 BHK", "Private Garden", "Clubhouse", "Swimming Pool"],
      amenities: [
        { icon: Home, name: "4/5 BHK Villas" },
        { icon: Trees, name: "Private Gardens" },
        { icon: Users, name: "Clubhouse" },
        { icon: Droplets, name: "Swimming Pool" }
      ],
      description: "Discover the epitome of luxury living with Golden Palms Villas. These independent villas offer spacious layouts, private gardens, and premium amenities.",
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      name: "Royal Residency",
      location: "Salipeta, Kakinada",
      status: "completed",
      type: "Premium Flats",
      price: "₹35 - 60 Lakhs",
      possession: "Completed",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["2/3 BHK", "Rooftop Garden", "Power Backup", "Lift"],
      amenities: [
        { icon: Home, name: "2/3 BHK Flats" },
        { icon: Trees, name: "Rooftop Garden" },
        { icon: Wifi, name: "Power Backup" },
        { icon: Shield, name: "Gated Community" }
      ],
      description: "Royal Residency offers premium 2 and 3 BHK flats with modern amenities and excellent connectivity.",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      name: "Marina Bay Towers",
      location: "Kakinada Port Area",
      status: "ongoing",
      type: "High-Rise Apartments",
      price: "₹55 - 95 Lakhs",
      possession: "Jun 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["3/4 BHK", "Sea View", "Infinity Pool", "Sky Lounge"],
      amenities: [
        { icon: Home, name: "3/4 BHK Apartments" },
        { icon: Droplets, name: "Infinity Pool" },
        { icon: Users, name: "Sky Lounge" },
        { icon: Car, name: "Multi-level Parking" }
      ],
      description: "Marina Bay Towers offers stunning sea views and luxury high-rise living with premium amenities.",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      name: "Orchid Gardens",
      location: "Surya Raopet, Kakinada",
      status: "upcoming",
      type: "Garden Villas",
      price: "₹85 Lakhs - 1.8 Cr",
      possession: "Sep 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["3/4 BHK", "Landscaped Gardens", "Jogging Track", "Kids Play Area"],
      amenities: [
        { icon: Home, name: "3/4 BHK Villas" },
        { icon: Trees, name: "Landscaped Gardens" },
        { icon: Users, name: "Community Hall" },
        { icon: Shield, name: "Gated Security" }
      ],
      description: "Orchid Gardens features beautifully designed villas surrounded by lush landscaping and modern amenities.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      name: "Green Valley Plots",
      location: "Ramanayyapeta, Kakinada",
      status: "completed",
      type: "Residential Plots",
      price: "₹25 - 45 Lakhs",
      possession: "Ready to Build",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["DTCP Approved", "40x60 to 50x80", "Underground Drainage", "Wide Roads"],
      amenities: [
        { icon: MapPin, name: "DTCP Approved" },
        { icon: Droplets, name: "Underground Drainage" },
        { icon: Shield, name: "Boundary Wall" },
        { icon: Wifi, name: "Street Lighting" }
      ],
      description: "DTCP approved residential plots with all modern infrastructure and ready-to-build facilities.",
      gallery: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.status === activeFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-blue-500';
      case 'upcoming': return 'bg-orange-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setSearchParams({ id: project.id.toString() });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setSearchParams({});
  };

  // Check if there's a project ID in URL params
  useEffect(() => {
    const projectId = searchParams.get('id');
    if (projectId) {
      const project = projects.find(p => p.id === parseInt(projectId));
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [searchParams]);

  // If a project is selected, show detailed view
  if (selectedProject) {
    return (
      <div className="min-h-screen pt-20">
        {/* Project Detail Header */}
        <section className="section-spacing relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${selectedProject.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/70" />
          <div className="relative z-10 max-w-7xl mx-auto container-padding text-white">
            <Button 
              variant="outline" 
              className="mb-6 border-white/50 text-white hover:bg-white hover:text-navy-900"
              onClick={handleBackToProjects}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
              {selectedProject.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed drop-shadow-lg">
              {selectedProject.description}
            </p>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-spacing bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-6">Project Overview</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Location:</span>
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Type:</span>
                    <span>{selectedProject.type}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Price Range:</span>
                    <span className="text-gold-600 font-bold">{selectedProject.price}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Possession:</span>
                    <span>{selectedProject.possession}</span>
                  </div>
                </div>

                <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.amenities.map((amenity: any, index: number) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <amenity.icon className="w-5 h-5 text-gold-600 mr-3" />
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 gap-4">
                  {selectedProject.gallery?.map((image: string, index: number) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedProject.name} ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-navy-950">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                  Interested in {selectedProject.name}?
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Schedule a visit or get more details about this project.
                </p>
                <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
              <div>
                <LeadCaptureForm 
                  title="Project Inquiry"
                  subtitle={`Get details about ${selectedProject.name}`}
                  context={`project_${selectedProject.id}`}
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Regular projects listing view
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="section-spacing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Our <span className="text-gold-400">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Discover our portfolio of luxury residential and commercial developments across Kakinada
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key ? "premium-button" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} text-white capitalize`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-navy-900">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-2">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-charcoal-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-gold-600" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-charcoal-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-gold-600" />
                    <span className="text-sm">Possession: {project.possession}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-gold-600 mb-4">
                    {project.price}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center text-xs text-charcoal-600">
                        <amenity.icon className="w-3 h-3 mr-1 text-gold-600" />
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full premium-button"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-navy-950">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Find Your Perfect Home
              </h2>
              <p className="text-lg leading-relaxed">
                Let us help you discover the ideal property that matches your lifestyle and budget.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Property Inquiry"
                subtitle="Tell us about your requirements"
                context="projects_page"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
