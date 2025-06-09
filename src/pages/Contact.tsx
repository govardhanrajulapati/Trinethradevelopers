
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Navigation,
  Building
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Trinethra Developers",
        "Main Road, Ramachandra Rao Pet",
        "Kakinada - 533003",
        "Andhra Pradesh, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210",
        "+91 88765 43210",
        "0884-2345678"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@trinethra.com",
        "sales@trinethra.com",
        "support@trinethra.com"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 5:00 PM",
        "Public Holidays: Closed"
      ]
    }
  ];

  const offices = [
    {
      name: "Head Office",
      address: "Main Road, Ramachandra Rao Pet, Kakinada",
      phone: "+91 98765 43210",
      type: "Primary"
    },
    {
      name: "Sales Office",
      address: "One Town, Kakinada",
      phone: "+91 88765 43210",
      type: "Sales"
    },
    {
      name: "Project Office",
      address: "Salipeta, Kakinada",
      phone: "+91 77765 43210",
      type: "Project Site"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="section-spacing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Contact <span className="text-gold-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Get in touch with our expert team for personalized assistance with your real estate needs
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-charcoal-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-charcoal-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <LeadCaptureForm 
                title=""
                subtitle=""
                context="contact_page"
                className="shadow-lg"
              />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-6">
                  Visit Our Office
                </h2>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Office location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">Kakinada, Andhra Pradesh</p>
                      <p className="text-sm">Click to view on Google Maps</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button className="premium-button">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start hover:bg-gold-50 hover:border-gold-500">
                      <MessageSquare className="w-4 h-4 mr-3" />
                      WhatsApp Chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-gold-50 hover:border-gold-500">
                      <Phone className="w-4 h-4 mr-3" />
                      Schedule Call Back
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-gold-50 hover:border-gold-500">
                      <Building className="w-4 h-4 mr-3" />
                      Book Site Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-charcoal-600">
              Multiple convenient locations to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-playfair text-xl font-bold text-navy-900">
                      {office.name}
                    </h3>
                    <Badge className="bg-gold-500 text-navy-900">
                      {office.type}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                      <p className="text-charcoal-600">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gold-600" />
                      <p className="text-charcoal-600">{office.phone}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:border-gold-500 transition-colors">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal-600 mb-12">
            Quick answers to common questions about our projects and services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg text-left hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy-900 mb-2">What is the booking process?</h4>
                <p className="text-charcoal-600 text-sm">Simple 3-step process: Site visit, documentation, and booking confirmation with flexible payment plans.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-left hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy-900 mb-2">Do you provide home loans?</h4>
                <p className="text-charcoal-600 text-sm">Yes, we have partnerships with leading banks offering competitive interest rates and easy approval processes.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-left hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy-900 mb-2">What are the possession timelines?</h4>
                <p className="text-charcoal-600 text-sm">We strictly adhere to RERA timelines. Typical possession ranges from 18-36 months depending on project size.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-left hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy-900 mb-2">Are there any hidden charges?</h4>
                <p className="text-charcoal-600 text-sm">Complete transparency in pricing. All charges including taxes, fees, and amenities are clearly mentioned upfront.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
