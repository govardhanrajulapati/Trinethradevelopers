
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  Image as ImageIcon,
  Building2,
  Home,
  Camera,
  Users,
  X
} from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All Images', icon: ImageIcon },
    { key: 'architecture', label: 'Architecture', icon: Building2 },
    { key: 'interiors', label: 'Interiors', icon: Home },
    { key: 'progress', label: 'Site Progress', icon: Camera },
    { key: 'events', label: 'Events', icon: Users }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "architecture",
      title: "Trinethra Heights Exterior",
      description: "Modern architectural design with premium finishes"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "architecture",
      title: "Golden Palms Villa",
      description: "Luxury villa with contemporary design elements"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "interiors",
      title: "Living Room Design",
      description: "Spacious living area with modern amenities"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "interiors",
      title: "Master Bedroom",
      description: "Elegant bedroom with premium fixtures"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "architecture",
      title: "Royal Residency",
      description: "High-rise luxury apartments"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1564540574859-0dfb63293365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "interiors",
      title: "Modern Kitchen",
      description: "State-of-the-art modular kitchen"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "progress",
      title: "Construction Progress",
      description: "Marina Bay Towers under construction"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "progress",
      title: "Site Development",
      description: "Green Valley Plots infrastructure development"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      title: "Project Launch Event",
      description: "Grand opening ceremony of Trinethra Heights"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      title: "Customer Appreciation",
      description: "Annual customer meet and appreciation event"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "architecture",
      title: "Orchid Gardens",
      description: "Garden villas with premium landscaping"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "interiors",
      title: "Bathroom Design",
      description: "Luxury bathroom with premium fittings"
    }
  ];

  const filteredImages = images.filter(image => 
    activeCategory === 'all' || image.category === activeCategory
  );

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="section-spacing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Project <span className="text-gold-400">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Browse through our stunning collection of architectural excellence and interior designs
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                onClick={() => setActiveCategory(category.key)}
                className={`${activeCategory === category.key ? "premium-button" : ""} flex items-center gap-2`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-sm mb-1 drop-shadow-lg">{image.title}</h3>
                      <p className="text-xs text-white/90 drop-shadow-md">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-charcoal-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}

      {/* Lead Capture */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-navy-950">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Impressed by Our Work?
              </h2>
              <p className="text-lg leading-relaxed">
                Schedule a site visit to experience our quality and craftsmanship in person.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Schedule a Visit"
                subtitle="See our projects up close"
                context="gallery_page"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
