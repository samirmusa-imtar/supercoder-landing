"use client";

import { motion } from "framer-motion";
import { complianceBadges } from "@/content";

export function Compliance() {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50/50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {complianceBadges.map((label, i) => (
            <span
              key={i}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
