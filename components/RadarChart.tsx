"use client";

import { useMemo } from "react";
import { reportSection } from "@/content";
import { reportInsightsData } from "@/content";

const RADAR_SIZE = 200;
const CX = RADAR_SIZE / 2;
const CY = RADAR_SIZE / 2;
const MAX_R = (RADAR_SIZE / 2) * 0.85;

function polarToCart(angleRad: number, r: number) {
  // Start from top (-90°), go clockwise (RTL-friendly)
  const x = CX + r * Math.sin(angleRad);
  const y = CY - r * Math.cos(angleRad);
  return { x, y };
}

export function RadarChart() {
  const skills = reportInsightsData.skills;
  const n = skills.length;
  const points = useMemo(() => {
    return skills.map((s, i) => {
      const angleRad = (i * 2 * Math.PI) / n - Math.PI / 2;
      const r = (s.value / 10) * MAX_R;
      return polarToCart(angleRad, r);
    });
  }, [n]);

  const polygonPoints = useMemo(
    () => points.map((p) => `${p.x},${p.y}`).join(" "),
    [points]
  );

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const labelRadius = MAX_R * 1.15;

  return (
    <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
      <h3 className="mb-1 text-sm font-bold text-slate-800">
        {reportSection.radarTitle}
      </h3>
      <p className="mb-4 text-xs text-slate-600">{reportSection.radarSub}</p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center">
        <svg
          viewBox={`0 0 ${RADAR_SIZE} ${RADAR_SIZE}`}
          className="h-52 w-52 shrink-0"
          aria-label="مخطط الرادار للمهارات"
        >
          {/* Grid circles */}
          {gridLevels.map((level, i) => (
            <circle
              key={i}
              cx={CX}
              cy={CY}
              r={MAX_R * level}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.15}
              strokeWidth={0.5}
            />
          ))}
          {/* Axis lines */}
          {skills.map((_, i) => {
            const angleRad = (i * 2 * Math.PI) / n - Math.PI / 2;
            const end = polarToCart(angleRad, MAX_R);
            return (
              <line
                key={i}
                x1={CX}
                y1={CY}
                x2={end.x}
                y2={end.y}
                stroke="currentColor"
                strokeOpacity={0.2}
                strokeWidth={0.5}
              />
            );
          })}
          {/* Data polygon */}
          <polygon
            points={polygonPoints}
            fill="rgba(88, 28, 135, 0.2)"
            stroke="rgba(88, 28, 135, 0.8)"
            strokeWidth={1.5}
          />
        </svg>

        {/* Legend */}
        <ul className="flex flex-col gap-1 text-xs text-slate-600" dir="rtl">
          {skills.map((s, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor:
                    s.value <= 3
                      ? "rgb(251, 191, 36)"
                      : s.value <= 6
                        ? "rgb(126, 34, 206)"
                        : "rgb(16, 185, 129)",
                }}
              />
              <span className="line-clamp-1" title={s.label}>
                {s.label}
              </span>
              <span className="font-semibold text-slate-800">{s.value}/10</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
