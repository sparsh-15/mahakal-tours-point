import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "#tours" },
    { name: "Cab Services", href: "#cabs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
              Mahakal
            </span>
            <span className="text-orange-500 ml-1">Tours</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          {/* CTA Button */}
          <a
            href="tel:+919999999999"
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-6 pb-8 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`block py-3 px-4 text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg font-medium transition-all duration-200 transform ${
                isOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
              }}
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile CTA */}
          <a
            href="tel:+919999999999"
            onClick={closeMobileMenu}
            className={`flex items-center justify-center space-x-2 mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-full font-medium transition-all duration-300 transform ${
              isOpen 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-4 opacity-0 scale-95'
            }`}
            style={{ 
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' 
            }}
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden"
          onClick={closeMobileMenu}
          style={{ top: scrolled ? '72px' : '88px' }}
        />
      )}
    </nav>
  );
};

export default Navbar;