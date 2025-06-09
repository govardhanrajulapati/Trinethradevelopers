
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if we're on homepage to determine styling
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-navy-950/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-navy-950 font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair font-bold text-xl transition-colors ${
                isScrolled || !isHomePage ? 'text-navy-900' : 'text-white drop-shadow-lg'
              }`}>
                Trinethra
              </span>
              <span className={`text-sm font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-navy-600' : 'text-white/90 drop-shadow-md'
              }`}>
                Developers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-200 relative group ${
                  location.pathname === item.href
                    ? (isScrolled || !isHomePage ? 'text-gold-600' : 'text-gold-400 drop-shadow-lg')
                    : (isScrolled || !isHomePage ? 'text-navy-700 hover:text-gold-600' : 'text-white hover:text-gold-400 drop-shadow-md hover:drop-shadow-lg')
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+919876543210"
                className={`flex items-center space-x-1 transition-colors ${
                  isScrolled || !isHomePage ? 'text-navy-600 hover:text-gold-600' : 'text-white/90 hover:text-gold-400 drop-shadow-md'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
            </div>
            <Button className="premium-button shadow-lg">
              Schedule Visit
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`${
                  isScrolled || !isHomePage ? 'text-navy-900 hover:bg-navy-100' : 'text-white hover:bg-white/20 drop-shadow-lg'
                } transition-colors`}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-navy-950">
                <div className="flex flex-col space-y-8 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                      <span className="text-navy-950 font-bold">T</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-playfair font-bold text-lg text-white">Trinethra</span>
                      <span className="text-sm text-white/80">Developers</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors py-2 ${
                          location.pathname === item.href
                            ? 'text-gold-400'
                            : 'text-white hover:text-gold-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-6 space-y-4">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center space-x-3 text-white hover:text-gold-400 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a
                      href="mailto:info@trinethra.com"
                      className="flex items-center space-x-3 text-white hover:text-gold-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>info@trinethra.com</span>
                    </a>
                    <Button className="premium-button w-full mt-4">
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
