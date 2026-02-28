import { motion } from "framer-motion";

interface SectionHeaderProps {
  pill?: string;
  heading: string;
  sub?: string;
  className?: string;
}

export function SectionHeader({ pill, heading, sub, className = "" }: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-8 text-center ${className}`}
    >
      {pill && (
        <span className="mb-2 inline-block rounded-full bg-purple-deep/10 px-3 py-1 text-sm font-semibold text-purple-deep">
          {pill}
        </span>
      )}
      <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">{heading}</h2>
      {sub && <p className="mt-2 text-slate-600">{sub}</p>}
    </motion.header>
  );
}
