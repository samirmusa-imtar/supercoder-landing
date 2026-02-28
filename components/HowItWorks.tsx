"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSection } from "@/content";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = howItWorksSection.steps[active];
  const panel = howItWorksSection.step1Panel;

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          heading={howItWorksSection.heading}
          sub={howItWorksSection.sub}
        />
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {howItWorksSection.steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition sm:h-12 sm:w-12 ${
                active === i
                  ? "bg-purple-deep text-white shadow"
                  : "bg-white text-slate-600 shadow-sm hover:bg-slate-100"
              }`}
              aria-pressed={active === i}
              aria-label={`الخطوة ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-semibold text-purple-deep">
            {panel.stepTitle}
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-800">
            {howItWorksSection.steps[active].title}
          </h3>
          <p className="mt-2 text-slate-600">{step.desc}</p>
          {active === 0 && (
            <div className="mt-6 space-y-4 border-t border-slate-100 pt-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {panel.jobOverview}
                </label>
                <p className="mt-1 text-sm text-slate-500">
                  {panel.jobOverviewPlaceholder}
                </p>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {panel.questionsLabel}
                </label>
                <p className="mt-1 text-sm text-slate-500">
                  {panel.questionsStatus}
                </p>
              </div>
              <button
                type="button"
                className="rounded-lg bg-purple-deep/10 px-4 py-2 text-sm font-semibold text-purple-deep"
              >
                {panel.confirmLabel}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
