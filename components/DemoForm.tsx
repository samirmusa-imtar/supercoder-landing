"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { demoFormSection, formSelectOptions } from "@/content";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = (data.get("fullName") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const consent = data.get("consent") === "on";
    const err: Record<string, string> = {};
    if (!fullName) err.fullName = "مطلوب";
    if (!company) err.company = "مطلوب";
    if (!email) err.email = "مطلوب";
    if (!consent) err.consent = "يجب الموافقة على سياسة الخصوصية";
    setErrors(err);
    if (Object.keys(err).length > 0) return;
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          company,
          email: data.get("email"),
          phone: data.get("phone"),
          industry: data.get("industry"),
          companySize: data.get("companySize"),
          monthlyInterviews: data.get("monthlyInterviews"),
          message: data.get("message"),
          consent: true,
        }),
      });
      if (!res.ok) throw new Error("خطأ في الإرسال");
      setSubmitted(true);
    } catch {
      setErrors({ form: "حدث خطأ. يرجى المحاولة لاحقاً." });
    }
  }

  if (submitted) {
    return (
      <section id="demo" className="border-t border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-green-200 bg-green-50 p-8"
          >
            <p className="font-semibold text-green-800">
              تم استلام طلبك بنجاح. سنتواصل معك قريباً.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" className="border-t border-slate-200/80 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-800">
          {demoFormSection.heading}
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
        >
          {errors.form && (
            <p className="mb-4 text-sm text-red-600">{errors.form}</p>
          )}
          {/* Honeypot: hidden from users; bots that fill it get fake success */}
          <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
            <label htmlFor="company_website">Website</label>
            <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="mb-1 block text-sm font-semibold text-slate-700">
                {demoFormSection.fields.fullName}
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-semibold text-slate-700">
                {demoFormSection.fields.company}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-600">{errors.company}</p>
              )}
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
                {demoFormSection.fields.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={demoFormSection.fields.emailPlaceholder}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-slate-700">
                {demoFormSection.fields.phone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={demoFormSection.fields.phonePlaceholder}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
              />
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="industry" className="mb-1 block text-sm font-semibold text-slate-700">
                {demoFormSection.fields.industry}
              </label>
              <select
                id="industry"
                name="industry"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
              >
                {formSelectOptions.industry.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="companySize" className="mb-1 block text-sm font-semibold text-slate-700">
                {demoFormSection.fields.companySize}
              </label>
              <select
                id="companySize"
                name="companySize"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
              >
                {formSelectOptions.companySize.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="monthlyInterviews" className="mb-1 block text-sm font-semibold text-slate-700">
              {demoFormSection.fields.monthlyInterviews}
            </label>
            <select
              id="monthlyInterviews"
              name="monthlyInterviews"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
            >
              {formSelectOptions.monthlyInterviews.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">
              {demoFormSection.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder={demoFormSection.fields.messagePlaceholder}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800"
            />
          </div>
          <div className="mt-4 flex items-start gap-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 rounded border-slate-300"
            />
            <label htmlFor="consent" className="text-sm text-slate-600">
              {demoFormSection.fields.consent}
            </label>
          </div>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-purple-deep py-3 font-semibold text-white transition hover:opacity-95"
          >
            {demoFormSection.fields.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
