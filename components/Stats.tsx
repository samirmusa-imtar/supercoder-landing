"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, FileText, Shield, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { statsSection } from "@/content";
import { IconBadge } from "@/components/ui/IconBadge";

const icons = [Clock, FileText, Shield, CheckSquare];

function useCountUp(end: number, suffix: string, enabled: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const duration = 1500;
    const step = end / (duration / 16);
    let current = 0;
    const id = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(id);
  }, [end, enabled]);
  return `${count}${suffix}`;
}

function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  index,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Clock;
  index: number;
  inView: boolean;
}) {
  const display = useCountUp(value, suffix, inView);
  return (
    <Card as="article" className="flex flex-col items-center text-center">
      <IconBadge icon={Icon} className="mb-2" size={36} />
      <span className="text-2xl font-bold text-slate-800 sm:text-3xl">
        {display}
      </span>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </Card>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-t border-slate-200/80 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          pill={statsSection.pill}
          heading={statsSection.heading}
          sub={statsSection.sub}
        />
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsSection.cards.map((card, i) => (
            <StatCard
              key={i}
              value={card.value}
              suffix={card.suffix}
              label={card.label}
              icon={icons[i]}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
