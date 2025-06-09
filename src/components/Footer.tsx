
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Award,
  Shield,
  Users
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Career', href: '/career' }
  ];

  const services = [
    'Residential Projects',
    'Commercial Spaces',
    'Plot Development',
    'Interior Design',
    'Construction Services',
    'Property Management'
  ];

  const certifications = [
    { icon: Award, text: 'RERA Certified' },
    { icon: Shield, text: 'ISO 9001:2015' },
    { icon: Users, text: 'Customer Centric' }
  ];

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                  Stay Updated with Our Latest Projects
                </h3>
                <p className="text-navy-800 text-lg mb-8">
                  Get exclusive access to new launches, special offers, and luxury living insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-navy-900 border-0 focus:ring-2 focus:ring-navy-500"
                  />
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white px-8">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                  <span className="text-navy-950 font-bold text-xl">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair font-bold text-2xl text-white">Trinethra</span>
                  <span className="text-white/80">Developers</span>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Creating premium living experiences in Kakinada for over 15 years. We build not just structures, but dreams, communities, and lasting legacies.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gold-400">Certifications & Trust</h4>
                <div className="flex flex-wrap gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2">
                      <cert.icon className="w-4 h-4 text-gold-400" />
                      <span className="text-sm text-white/80">{cert.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gold-400">Connect With Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Linkedin, href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-playfair text-xl font-bold text-gold-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-gold-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Contact */}
            <div className="space-y-6">
              <h4 className="font-playfair text-xl font-bold text-gold-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-white/80 flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Our Office</h5>
                <p className="text-white/80 text-sm">
                  123, Main Road, Suryaraopeta,<br />
                  Kakinada - 533001,<br />
                  Andhra Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Contact Numbers</h5>
                <p className="text-white/80 text-sm">
                  +91 98765 43210<br />
                  +91 88888 99999<br />
                  0884-1234567
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Working Hours</h5>
                <p className="text-white/80 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM<br />
                  <span className="text-gold-400">24/7 Emergency</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} Trinethra Developers. All rights reserved. | 
                <Link to="/privacy" className="text-gold-400 hover:text-gold-300 ml-1">Privacy Policy</Link> | 
                <Link to="/terms" className="text-gold-400 hover:text-gold-300 ml-1">Terms of Service</Link>
              </div>
              <div className="text-white/60 text-sm">
                <span className="text-gold-400">RERA Reg No:</span> AP12345678901234
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
