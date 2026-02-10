import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ subtitle, title, align = "center", className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-accent font-bold tracking-widest text-sm mb-2 block font-sans uppercase"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-primary"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1.5 w-24 bg-accent mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
