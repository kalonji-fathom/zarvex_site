import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  image: string;
}

export function ProductCard({ title, description, icon: Icon, delay = 0, image }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="h-48 overflow-hidden relative">
         <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
         {/* Using descriptive comments for stock images */}
         {/* industrial machinery mining equipment close up */}
         <img 
           src={image} 
           alt={title} 
           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
         />
         <div className="absolute bottom-4 right-4 z-20 bg-accent text-white p-3 rounded-full shadow-lg">
           <Icon className="w-6 h-6" />
         </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center text-accent font-semibold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform cursor-pointer">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
