"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportSection } from "@/content";
import { ReportInsights } from "@/components/ReportInsights";

export function ReportShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveTab((prev) => Math.min(prev + 1, reportSection.tabs.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveTab((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveTab(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveTab(reportSection.tabs.length - 1);
      }
    },
    []
  );

  return (
    <section className="border-t border-slate-200/80 bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-1 text-center text-xl font-bold text-slate-800">
          {reportSection.heading}
        </h2>
        <p className="mb-4 text-center text-sm text-slate-600">
          {reportSection.explanation}
        </p>

        {/* Tab list — scrollable on mobile */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="أقسام التقرير"
          className="relative flex overflow-x-auto overflow-y-hidden pb-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="flex min-w-0 gap-1.5">
            {reportSection.tabs.map((label, i) => (
              <button
                key={i}
                role="tab"
                tabIndex={activeTab === i ? 0 : -1}
                id={`report-tab-${i}`}
                aria-selected={activeTab === i}
                aria-controls={`report-panel-${i}`}
                onClick={() => setActiveTab(i)}
                onKeyDown={handleKeyDown}
                className={`relative shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2 ${
                  activeTab === i
                    ? "text-purple-deep"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {label}
                {activeTab === i && (
                  <motion.span
                    layoutId="report-tab-indicator"
                    className="absolute inset-0 -z-10 rounded-lg bg-purple-100"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels */}
        <div className="mt-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              role="tabpanel"
              id={`report-panel-${activeTab}`}
              aria-labelledby={`report-tab-${activeTab}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ReportInsights activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
