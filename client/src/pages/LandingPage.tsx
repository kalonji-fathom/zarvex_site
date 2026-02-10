import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Settings, FlaskConical, Wrench, MapPin, Mail, Phone, ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          {/* industrial mining site open pit excavation landscape high resolution */}
          <img 
            src="https://pixabay.com/get/gf89d1041b5b627d76a012b0701d32ef4f262612a4e1f9f73defc4b254ef69158ad33a288a2fdbbec6873115874c80c6d3c657c3602dda954b383870efafbe876_1280.jpg" 
            alt="Mining Operation Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter shadow-black drop-shadow-lg">
              RELIABLE SOLUTIONS FOR <br />
              <span className="text-accent">MINING & MINERAL</span> PROCESSING
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
              Providing world-class industrial equipment and laboratory supplies to the African mining sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="contact" smooth={true} duration={800} offset={-80}>
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-widest text-lg rounded-none transition-all hover:-translate-y-1 hover:shadow-lg shadow-accent/20">
                  Request a Quote
                </button>
              </Link>
              <Link to="products" smooth={true} duration={800} offset={-80}>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-lg rounded-none transition-all">
                  Our Products
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <Link to="products" smooth={true} duration={800} offset={-80} className="absolute bottom-10 z-20 cursor-pointer animate-bounce">
          <ArrowDown className="w-10 h-10 text-white/50 hover:text-accent transition-colors" />
        </Link>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Our Capabilities" 
            title="Industrial Solutions" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Mineral Processing"
              description="High-performance ball mills, jaw crushers, and slurry pumps designed for optimal extraction efficiency in rugged environments."
              icon={Settings}
              delay={0.1}
              // industrial ball mill mining equipment heavy machinery
              image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
            />
            <ProductCard 
              title="Laboratory Equipment"
              description="Precision furnaces, crucibles, and glassware for analytical testing and metallurgical quality control."
              icon={FlaskConical}
              delay={0.2}
              // chemistry laboratory glassware science research
              image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
            />
            <ProductCard 
              title="General Industrial"
              description="Reliable electric motors, gearboxes, and electrical components to keep your operations running with minimal downtime."
              icon={Wrench}
              delay={0.3}
              // industrial electric motor machinery factory
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                subtitle="Who We Are" 
                title="Your Strategic Partner in African Mining" 
                align="left"
                className="mb-8"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Headquartered in Germiston, Gauteng, ZARVEX GLOBAL is positioned at the industrial heart of South Africa. We specialize in sourcing and supplying critical machinery and components to mining operations across Gauteng, North West, and Limpopo.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With deep technical expertise and a commitment to reliability, we ensure that your supply chain remains robust, minimizing downtime and maximizing productivity.
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Headquarters</h4>
                    <p className="text-gray-600">6 Knights Road, Germiston, Gauteng, 1400</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 z-0" />
              {/* industrial warehouse logistics mining supply chain */}
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="ZARVEX Global Warehouse" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-secondary relative text-white">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg" /> 
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display">Get In Touch</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to optimize your operations? Contact our technical sales team for quotes, product specifications, or partnership opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-10">
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors">
                <h3 className="text-2xl font-bold mb-6 text-accent">Contact Details</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Visit Us</h4>
                      <p className="text-gray-300">6 Knights Road<br />Germiston, Gauteng<br />1400, South Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Call Us</h4>
                      <p className="text-gray-300">+27 (0) 11 123 4567</p>
                      <p className="text-sm text-gray-400">Mon-Fri: 8am - 5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Email Us</h4>
                      <p className="text-gray-300">sales@zarvex.co.za</p>
                      <p className="text-gray-300">support@zarvex.co.za</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-l-4 border-accent bg-white/5">
                <p className="italic text-gray-300">
                  "ZARVEX has consistently delivered high-quality milling components on time, helping us maintain our production targets."
                </p>
                <p className="mt-4 font-bold text-accent">— Operations Manager, Platinum Mine (Rustenburg)</p>
              </div>
            </div>

            <div className="text-gray-900">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary/95 text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="font-display text-2xl font-bold tracking-tighter uppercase">
                ZARVEX<span className="text-accent">GLOBAL</span>
              </span>
              <p className="text-gray-400 text-sm mt-2">Reliable Solutions for Mining & Mineral Processing</p>
            </div>
            
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>

            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ZARVEX GLOBAL (Pty) Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
