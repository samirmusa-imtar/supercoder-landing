"use client";

import { motion } from "framer-motion";
import { videoSection } from "@/content";

export function VideoSection() {
  return (
    <section id="video" className="border-t border-slate-200/80 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-800">
          {videoSection.heading}
        </h2>
        <p className="mb-8 text-center text-slate-600">{videoSection.sub}</p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-lg"
        >
          <div className="aspect-video w-full">
            <iframe
              src={videoSection.embedUrl}
              title={videoSection.heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <p className="absolute bottom-2 start-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
            {videoSection.playHint}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
