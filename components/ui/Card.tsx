import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
}

export function Card({ children, className = "", as: Comp = "div" }: CardProps) {
  const Component = Comp === "article" ? motion.article : Comp === "section" ? motion.section : motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5 ${className}`}
    >
      {children}
    </Component>
  );
}
