"use client";

import { ClipboardCheck, Lightbulb, Play, Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuresSection } from "@/content";
import { IconBadge } from "@/components/ui/IconBadge";

const icons = [ClipboardCheck, Lightbulb, Play, Globe];

export function Features() {
  return (
    <section id="features" className="border-t border-slate-200/80 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          pill={featuresSection.pill}
          heading={featuresSection.heading}
        />
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuresSection.cards.map((item, i) => (
            <Card key={i} as="article">
              <IconBadge icon={icons[i]} className="mb-3" size={36} />
              <h3 className="font-bold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
