"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { brand, heroReportSnippet } from "@/content";
import { PillButton } from "@/components/ui/PillButton";

export function Hero() {
  const reduce = useReducedMotion();

  // Micro parallax (tiny) — disabled for reduced motion
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bgX = useTransform(mx, [-50, 50], reduce ? [0, 0] : [-12, 12]);
  const bgY = useTransform(my, [-50, 50], reduce ? [0, 0] : [-10, 10]);

  const container = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-purple-deep via-purple-mid to-purple-light px-4 pb-16 pt-8 sm:py-20"
      onMouseMove={(e) => {
        if (reduce) return;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mx.set(Math.max(-50, Math.min(50, x / 10)));
        my.set(Math.max(-50, Math.min(50, y / 10)));
      }}
    >
      {/* Subtle spotlight layer */}
      <motion.div
        aria-hidden
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-56 left-[-10%] h-[560px] w-[560px] rounded-full bg-fuchsia-400/10 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl py-6 sm:py-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-white lg:col-span-7"
            dir="rtl"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              {brand.name} — {brand.heroTitle}
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-4 text-3xl font-bold leading-snug sm:text-5xl"
            >
              {brand.heroSub}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base"
            >
              {brand.heroDescription}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
              <PillButton href="#demo" variant="primary">
                {brand.ctaPrimary}
              </PillButton>
              <PillButton href="#video" variant="secondary">
                {brand.ctaSecondary}
              </PillButton>
            </motion.div>
          </motion.div>

          {/* Visual cards */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main glass card */}
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between text-white/90">
                  <div className="text-sm font-semibold">
                    {heroReportSnippet.mainCardLabel}
                  </div>
                  <div className="text-xs text-white/70">
                    {heroReportSnippet.mainCardSub}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-3xl font-bold text-white">
                      {heroReportSnippet.score}
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      {heroReportSnippet.violationsLabel}
                    </div>
                  </div>
                  {heroReportSnippet.cards.map((card, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl bg-white/10 p-4 ${i === heroReportSnippet.cards.length - 1 ? "col-span-2" : ""}`}
                    >
                      <div className="text-sm font-semibold text-white">
                        {card.title}
                      </div>
                      <div className="mt-1 text-xs text-white/70">
                        {card.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
