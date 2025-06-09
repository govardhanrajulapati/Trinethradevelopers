import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Download, Calendar, Phone } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const heroSlides = [
    {
      title: "Elevating Kakinada Living",
      subtitle: "One Landmark at a Time",
      description: "Discover premium residential and commercial spaces designed for the discerning few who appreciate luxury, comfort, and timeless elegance.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      cta: "Explore Projects"
    },
    {
      title: "Where Dreams Meet",
      subtitle: "Architectural Excellence",
      description: "Experience world-class amenities and thoughtful design in every project. From luxury apartments to premium villas, we create spaces that inspire.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Schedule Visit"
    },
    {
      title: "Building Tomorrow's",
      subtitle: "Kakinada Today",
      description: "Join hundreds of satisfied families who chose Trinethra Developers for their dream homes. Your luxury lifestyle awaits.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      cta: "View Gallery"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-950/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-4xl order-2 xl:order-1">
              <div className="animate-fade-in">
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                  {heroSlides[currentSlide].title}
                  <br />
                  <span className="text-gold-400 drop-shadow-lg">{heroSlides[currentSlide].subtitle}</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-8 leading-relaxed max-w-3xl drop-shadow-lg">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
                  <Button 
                    className="premium-button text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-xl"
                    onClick={() => setShowLeadForm(true)}
                  >
                    <Calendar className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Schedule Visit
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/80 text-white hover:bg-white hover:text-navy-900 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 transition-all duration-300 backdrop-blur-sm shadow-xl bg-navy-900/40"
                  >
                    <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Download Brochure
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold-400 font-playfair drop-shadow-lg">25+</div>
                    <div className="text-sm md:text-base text-white/90 drop-shadow-md">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold-400 font-playfair drop-shadow-lg">1000+</div>
                    <div className="text-sm md:text-base text-white/90 drop-shadow-md">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold-400 font-playfair drop-shadow-lg">15+</div>
                    <div className="text-sm md:text-base text-white/90 drop-shadow-md">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Lead Form Card */}
            <div className="order-1 xl:order-2 flex justify-center xl:justify-end">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 max-w-md w-full">
                <h3 className="font-playfair text-xl lg:text-2xl font-bold text-white mb-2">Get Started Today</h3>
                <p className="text-white/80 mb-6 text-sm lg:text-base">Schedule a visit to your dream home</p>
                <LeadCaptureForm 
                  title=""
                  subtitle=""
                  context="hero_section"
                  className="bg-transparent border-white/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-playfair text-xl lg:text-2xl font-bold text-navy-900">Schedule Your Visit</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowLeadForm(false)}
                className="text-charcoal-600 hover:bg-gray-100"
              >
                ×
              </Button>
            </div>
            <LeadCaptureForm 
              title=""
              subtitle="Fill in your details and we'll get back to you within 24 hours"
              context="hero_modal"
              onSuccess={() => setShowLeadForm(false)}
            />
          </div>
        </div>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gold-400 w-6 md:w-8 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 right-4 md:right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/80 hover:text-gold-400 transition-colors cursor-pointer">
          <span className="text-xs md:text-sm mb-2 drop-shadow-md">Scroll</span>
          <ChevronDown className="w-5 md:w-6 h-5 md:h-6" />
        </div>
      </div>

      {/* Video Play Button */}
      <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 hidden lg:block">
        <Button
          variant="outline"
          size="icon"
          className="w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-white/50 text-white hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm shadow-xl"
        >
          <Play className="w-5 md:w-6 h-5 md:h-6 ml-1" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
