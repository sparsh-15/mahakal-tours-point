import { useState, useEffect } from "react";
import { MapPin, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "TourPackages", href: "#packages" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md
          ${scrolled
            ? "bg-white/95 backdrop-blur-md py-2"
            : "bg-transparent backdrop-blur-md text-white py-4"
          }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3"
            aria-label="Homepage"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold flex items-center">
              <span
                className={`bg-clip-text text-transparent font-extrabold transition-colors duration-300
                  ${scrolled
                    ? "bg-gradient-to-r from-purple-700 to-purple-900" // Dark gradient for white bg
                    : "text-white"
                  }  // White text on transparent bg`}
              >Mahakal</span>
              <span
                className={`ml-1 font-semibold transition-colors duration-300
                  ${scrolled
                    ? "text-orange-600" // Slightly darker orange on white bg
                    : "text-orange-500"
                  }   // Original orange on transparent bg`}
              >Tours</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={` relative font-semibold transition-all duration-300 text-lg
                  ${scrolled
                    ? "text-gray-800 hover:text-purple-700"
                    : "text-white hover:text-orange-400"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300
                    ${scrolled
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 group-hover:w-full"
                      : "bg-white group-hover:w-full"
                    }`}
                ></span>
              </a>
            ))}

            {/* CTA */}
            <a
              href="tel:+919999999999"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
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
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg font-medium transition-all duration-200"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+919999999999"
              onClick={closeMobileMenu}
              className="flex items-center justify-center space-x-2 mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-full font-medium transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 lg:hidden"
            onClick={closeMobileMenu}
            style={{ top: scrolled ? "72px" : "88px" }}
          />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
