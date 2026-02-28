"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { reportInsightsData } from "@/content";
import {
  Check,
  RefreshCw,
  AlertTriangle,
  FileSearch,
  Pin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { RadarChart } from "@/components/RadarChart";

type SortOrder = "high" | "low";

interface ReportInsightsProps {
  activeTab: number;
}

export function ReportInsights({ activeTab }: ReportInsightsProps) {
  const reduce = useReducedMotion();
  const [sortOrder, setSortOrder] = useState<SortOrder>("high");
  const [notesExpanded, setNotesExpanded] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const d = reportInsightsData;
  const activeRec = d.recommendation.active;

  // Sort skills (high = descending, low = ascending)
  const sortedSkills = [...d.skills].sort((a, b) =>
    sortOrder === "high" ? b.value - a.value : a.value - b.value
  );

  const getBarColor = (v: number) => {
    if (v <= 3) return "bg-amber-400";
    if (v <= 6) return "bg-purple-mid";
    return "bg-emerald-500";
  };

  useEffect(() => {
    if (reduce) return;
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setSkillsInView(e.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <div className="space-y-4" dir="rtl">
      {/* A) Header Summary Row — always visible */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-black/5 bg-white px-3 py-2.5 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-600">الدرجة:</span>
          <span className="text-lg font-bold text-purple-deep">
            {d.headerSummary.overallScore}
          </span>
          <span className="text-xs text-slate-500">
            / {d.headerSummary.overallScoreMax}
          </span>
        </div>
        <div className="h-3 w-px bg-slate-200" />
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-600">التطابق:</span>
          <span className="text-sm font-bold text-slate-800">
            {d.headerSummary.match}
          </span>
        </div>
        <div className="h-3 w-px bg-slate-200" />
        <div className="flex items-center gap-1.5">
          {activeRec === "approval" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
              <Check className="h-3.5 w-3.5" aria-hidden />
              {d.headerSummary.decisionApproval}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
              <RefreshCw className="h-3.5 w-3.5" aria-hidden />
              {d.headerSummary.decisionFollowup}
            </span>
          )}
        </div>
        <div className="ms-auto flex flex-wrap gap-1.5">
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
            {d.strengths.length} {d.headerSummary.strengthsLabel}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
            {d.gaps.length} {d.headerSummary.gapsLabel}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
            0 {d.headerSummary.violationsLabel}
          </span>
        </div>
      </div>

      {/* B) Tab-specific content */}
      {activeTab === 0 && (
        <>
          <div
            ref={skillsRef}
            className="flex flex-col rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-1.5">
              <h3 className="text-sm font-bold text-slate-800">
                {d.skillsCardTitle}
              </h3>
              <button
                type="button"
                onClick={() =>
                  setSortOrder((s) => (s === "high" ? "low" : "high"))
                }
                className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200"
              >
                {d.sortOrder.label}:{" "}
                {sortOrder === "high" ? d.sortOrder.high : d.sortOrder.low}
              </button>
            </div>
            <ul className="flex flex-1 flex-col gap-2">
              {sortedSkills.map((skill, i) => (
                <SkillBarRow
                  key={skill.label}
                  skill={skill}
                  animate={!reduce && skillsInView}
                  delay={i * 0.05}
                  getBarColor={getBarColor}
                />
              ))}
            </ul>
          </div>
          <QuickSummaryTable d={d} />
        </>
      )}

      {activeTab === 1 && <RadarChart />}

      {activeTab === 2 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <InsightCard
            icon={<Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden />}
            title={d.strengthsTitle}
          >
            <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-xs text-slate-600">
              {d.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </InsightCard>
          <InsightCard
            icon={
              <AlertTriangle className="h-3.5 w-3.5 text-amber-600" aria-hidden />
            }
            title={d.gapsTitle}
          >
            <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-xs text-slate-600">
              {d.gaps.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </InsightCard>
        </div>
      )}

      {activeTab === 3 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <InsightCard
            icon={<Pin className="h-3.5 w-3.5 text-purple-deep" aria-hidden />}
            title={d.recommendationTitle}
            highlight
          >
            <div className="mt-2">
              <div className="mb-1.5">
                {activeRec === "approval" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800">
                    <Check className="h-4 w-4" aria-hidden />
                    {d.recommendation.approval.label}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-800">
                    <RefreshCw className="h-4 w-4" aria-hidden />
                    {d.recommendation.followup.label}
                  </span>
                )}
              </div>
              <p className="text-xs leading-5 text-slate-600">
                {activeRec === "approval"
                  ? d.recommendation.approval.justification
                  : d.recommendation.followup.justification}
              </p>
            </div>
          </InsightCard>
          <InsightCard
            icon={<FileSearch className="h-3.5 w-3.5 text-slate-600" aria-hidden />}
            title={d.notesTitle}
          >
            <div className="mt-1.5">
              <p
                className={`text-xs text-slate-600 ${!notesExpanded ? "line-clamp-2" : ""}`}
              >
                {d.notes}
              </p>
              <button
                type="button"
                onClick={() => setNotesExpanded((e) => !e)}
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-purple-deep hover:underline"
              >
                {notesExpanded ? d.showLess : d.showMore}
                {notesExpanded ? (
                  <ChevronUp className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                )}
              </button>
            </div>
          </InsightCard>
        </div>
      )}
    </div>
  );
}

function QuickSummaryTable({
  d,
}: {
  d: typeof reportInsightsData;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      <table className="w-full text-start">
        <tbody>
          <tr className="border-b border-slate-100">
            <th
              scope="row"
              className="ps-4 pe-3 py-2 text-xs font-semibold text-slate-700"
            >
              {d.quickSummary.strengthsLabel}
            </th>
            <td className="pe-4 py-2 text-xs text-slate-600">
              {d.quickSummary.strengths}
            </td>
          </tr>
          <tr className="border-b border-slate-100">
            <th
              scope="row"
              className="ps-4 pe-3 py-2 text-xs font-semibold text-slate-700"
            >
              {d.quickSummary.gapsLabel}
            </th>
            <td className="pe-4 py-2 text-xs text-slate-600">
              {d.quickSummary.gaps}
            </td>
          </tr>
          <tr className="border-b border-slate-100">
            <th
              scope="row"
              className="ps-4 pe-3 py-2 text-xs font-semibold text-slate-700"
            >
              {d.quickSummary.finalScoreLabel}
            </th>
            <td className="pe-4 py-2 text-xs font-bold text-purple-deep">
              {d.quickSummary.finalScore}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="ps-4 pe-3 py-2 text-xs font-semibold text-slate-700"
            >
              {d.quickSummary.decisionLabel}
            </th>
            <td className="pe-4 py-2 text-xs font-semibold text-slate-800">
              {d.quickSummary.decision}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SkillBarRow({
  skill,
  animate,
  delay,
  getBarColor,
}: {
  skill: { label: string; value: number };
  animate: boolean;
  delay: number;
  getBarColor: (v: number) => string;
}) {
  const max = 10;
  const pct = (skill.value / max) * 100;

  return (
    <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
      <span className="min-w-0 flex-1 text-xs text-slate-700" title={skill.label}>
        <span className="line-clamp-2">{skill.label}</span>
      </span>
      <div className="flex shrink-0 items-center gap-1.5 sm:w-32">
        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
          {animate ? (
            <motion.div
              className={`h-full rounded-full ${getBarColor(skill.value)}`}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{
                duration: 0.5,
                delay,
                ease: "easeOut",
              }}
            />
          ) : (
            <div
              className={`h-full rounded-full ${getBarColor(skill.value)}`}
              style={{ width: `${pct}%` }}
            />
          )}
        </div>
        <span className="w-5 text-end text-xs font-semibold text-slate-800">
          {skill.value}
        </span>
      </div>
    </li>
  );
}

function InsightCard({
  icon,
  title,
  children,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md ${
        highlight ? "ring-1 ring-purple-deep/10" : ""
      }`}
    >
      <div className="flex items-center gap-1.5">
        {icon}
        <h3 className="text-sm font-bold text-slate-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}
