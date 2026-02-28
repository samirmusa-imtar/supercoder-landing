/**
 * Allowed values for enum-like form fields (must match content.ts / formSelectOptions).
 */
export const ALLOWED_INDUSTRY = [
  "",
  "tech",
  "finance",
  "health",
  "retail",
  "government",
  "other",
] as const;

export const ALLOWED_COMPANY_SIZE = [
  "",
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
] as const;

export const ALLOWED_MONTHLY_INTERVIEWS = [
  "",
  "1-10",
  "11-50",
  "51-200",
  "200+",
] as const;

const MAX_FULL_NAME = 200;
const MAX_COMPANY = 200;
const MAX_EMAIL = 320;
const MAX_PHONE = 30;
const MAX_MESSAGE = 2000;

/** Strip control chars and trim; reject if contains angle brackets to avoid HTML injection */
function sanitizeText(value: unknown, maxLen: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  if (trimmed.length > maxLen) return null;
  if (/<|>|[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(trimmed)) return null;
  return trimmed;
}

/** Basic email format; max length per RFC */
function isValidEmail(s: string): boolean {
  if (s.length > MAX_EMAIL) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export interface SanitizedLead {
  fullName: string;
  company: string;
  email: string;
  phone: string | null;
  industry: string | null;
  companySize: string | null;
  monthlyInterviews: string | null;
  message: string | null;
  consent: boolean;
}

export interface SanitizeResult {
  success: true;
  data: SanitizedLead;
}

export interface SanitizeError {
  success: false;
  error: string;
}

export function sanitizeLeadBody(body: unknown): SanitizeResult | SanitizeError {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { success: false, error: "الاسم والشركة والبريد مطلوبة" };
  }

  const raw = body as Record<string, unknown>;

  const fullName = sanitizeText(raw.fullName, MAX_FULL_NAME);
  if (!fullName) {
    return { success: false, error: "الاسم الكامل مطلوب" };
  }

  const company = sanitizeText(raw.company, MAX_COMPANY);
  if (!company) {
    return { success: false, error: "اسم الشركة مطلوب" };
  }

  const emailRaw = sanitizeText(raw.email, MAX_EMAIL);
  if (!emailRaw || !isValidEmail(emailRaw)) {
    return { success: false, error: "البريد الوظيفي مطلوب أو غير صالح" };
  }

  const consent = raw.consent === true;
  if (!consent) {
    return { success: false, error: "يجب الموافقة على سياسة الخصوصية" };
  }

  const phone = sanitizeText(raw.phone, MAX_PHONE) ?? null;
  const industry =
    typeof raw.industry === "string" && ALLOWED_INDUSTRY.includes(raw.industry as (typeof ALLOWED_INDUSTRY)[number])
      ? raw.industry || null
      : null;
  const companySize =
    typeof raw.companySize === "string" &&
    ALLOWED_COMPANY_SIZE.includes(raw.companySize as (typeof ALLOWED_COMPANY_SIZE)[number])
      ? raw.companySize || null
      : null;
  const monthlyInterviews =
    typeof raw.monthlyInterviews === "string" &&
    ALLOWED_MONTHLY_INTERVIEWS.includes(raw.monthlyInterviews as (typeof ALLOWED_MONTHLY_INTERVIEWS)[number])
      ? raw.monthlyInterviews || null
      : null;
  const message = sanitizeText(raw.message, MAX_MESSAGE) ?? null;

  return {
    success: true,
    data: {
      fullName,
      company,
      email: emailRaw,
      phone,
      industry,
      companySize,
      monthlyInterviews,
      message,
      consent,
    },
  };
}
