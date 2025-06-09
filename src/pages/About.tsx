
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  Award,
  Shield,
  Users,
  Target,
  Heart,
  Star,
  CheckCircle,
  Building,
  Home,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started with a vision to transform Kakinada's skyline" },
    { year: "2012", event: "First Major Project", description: "Completed our flagship residential complex" },
    { year: "2016", event: "RERA Registration", description: "Became one of the first RERA-certified developers" },
    { year: "2020", event: "1000+ Families", description: "Reached the milestone of serving 1000+ happy families" },
    { year: "2023", event: "Expansion", description: "Expanded operations across Andhra Pradesh" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around our customers' needs and satisfaction."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards of construction quality and materials."
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "Complete transparency in pricing, timelines, and project updates."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern technology and design trends in all our projects."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Rajesh Trinethra",
      position: "Managing Director",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Chief Architect",
      experience: "15+ Years", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mr. Anil Kumar",
      position: "Project Manager",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="section-spacing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            About <span className="text-gold-400">Trinethra Developers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Building dreams, creating communities, and transforming Kakinada's landscape with 15+ years of excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 2008 with a simple yet powerful vision: to create homes that inspire and communities that thrive. Trinethra Developers began as a small family business with big dreams for Kakinada's future.
              </p>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                Over the years, we've grown into one of the most trusted names in real estate, having delivered 25+ projects and created homes for over 1000+ families. Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-playfair">25+</div>
                  <div className="text-sm text-charcoal-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-playfair">1000+</div>
                  <div className="text-sm text-charcoal-600">Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-playfair">15+</div>
                  <div className="text-sm text-charcoal-600">Years</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern building"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">RERA</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-charcoal-600">
              Key milestones in our journey of excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-gold-600 mb-2">{milestone.year}</div>
                        <h3 className="font-semibold text-navy-900 mb-2">{milestone.event}</h3>
                        <p className="text-charcoal-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-charcoal-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal-600">
              The passionate professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-900 text-lg mb-1">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-2">{member.position}</p>
                  <p className="text-charcoal-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-spacing bg-gradient-to-r from-navy-950 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Family?
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Become part of our growing community of satisfied homeowners. Let's build your dream together.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Get In Touch"
                subtitle="Share your requirements with us"
                context="about_page"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
