import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", to: "products" },
    { name: "About Us", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-display text-2xl font-bold tracking-tighter uppercase ${
              isScrolled ? "text-white" : "text-white"
            }`}>
              ZARVEX<span className="text-accent">GLOBAL</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-200 hover:text-accent font-medium text-sm uppercase tracking-widest cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button 
                variant="default" 
                className="bg-accent hover:bg-accent/90 text-white border-none rounded-none px-6 font-bold uppercase tracking-wider"
              >
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-white hover:text-accent hover:bg-white/5 rounded-md uppercase tracking-wider cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                 <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
