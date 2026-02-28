"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqSection } from "@/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-800">
          {faqSection.heading}
        </h2>
        <div className="space-y-2">
          {faqSection.items.map((item, i) => (
            <motion.div
              key={i}
              initial={false}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-right text-sm font-semibold text-slate-800 hover:bg-slate-50"
                aria-expanded={open === i}
              >
                {item.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-slate-100"
                  >
                    <p className="p-4 pt-3 text-sm leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
