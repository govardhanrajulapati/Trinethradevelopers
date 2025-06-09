
import HeroSection from '@/components/HeroSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Award,
  Shield,
  Users,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Home,
  Building,
  Compass
} from 'lucide-react';

const Index = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Excellence",
      description: "Over a decade of creating premium living experiences with unmatched quality and craftsmanship."
    },
    {
      icon: Shield,
      title: "RERA Certified",
      description: "Fully compliant with all regulatory requirements, ensuring your investment is secure and transparent."
    },
    {
      icon: Users,
      title: "1000+ Happy Families",
      description: "Join our growing community of satisfied customers who chose us for their dream homes."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      project: "Trinethra Heights",
      rating: 5,
      text: "The attention to detail and quality of construction exceeded our expectations. Our family couldn't be happier with our new home.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Sharma",
      project: "Golden Palms Villas",
      rating: 5,
      text: "Professional team, timely delivery, and world-class amenities. Trinethra Developers truly understands luxury living.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Anil Reddy",
      project: "Royal Residency",
      rating: 5,
      text: "From planning to possession, the entire journey was smooth. The quality and amenities are simply outstanding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Lakshmi Devi",
      project: "Marina Bay Towers",
      rating: 5,
      text: "Best investment decision we ever made. The location, amenities, and build quality are exceptional.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Venkata Rao",
      project: "Orchid Gardens",
      rating: 5,
      text: "Trinethra delivered exactly what they promised. The handover was smooth and the after-sales service is excellent.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Residential Projects",
      description: "Luxury apartments and villas designed for modern families",
      projects: "15+ Projects",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Building,
      title: "Commercial Spaces", 
      description: "Premium office complexes and retail developments",
      projects: "8+ Projects",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Compass,
      title: "Plot Development",
      description: "Thoughtfully planned residential and commercial plots",
      projects: "5+ Projects",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why Choose <span className="text-gold-600">Trinethra?</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              We don't just build properties; we craft experiences, create communities, and turn your dreams into reality with uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-gold-50 hover:to-gold-100"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Services Section with Images */}
      <section className="section-spacing bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold-400">Expertise</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we deliver excellence across all segments of real estate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.projects}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-8 h-8 text-gold-400 mr-3" />
                    <h3 className="font-playfair text-2xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="premium-button text-lg px-8 py-4">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What Our <span className="text-gold-600">Customers Say</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Trinethra Developers.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-gold-200"
                        />
                        <div>
                          <h4 className="font-semibold text-navy-900 text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-charcoal-600">{testimonial.project}</p>
                          <div className="flex space-x-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-charcoal-700 leading-relaxed italic flex-grow">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream?
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Take the first step towards luxury living. Schedule a site visit or speak with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-navy-900 hover:bg-navy-800 text-white text-lg px-8 py-4">
              Schedule Site Visit
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white text-lg px-8 py-4"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
