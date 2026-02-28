/**
 * In-memory IP-based rate limiter. Single instance only.
 * For multi-instance, replace with Redis or Nginx limit_req.
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_LEAD = 10;
const MAX_REQUESTS_ADMIN = 30;
const ADMIN_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

interface Entry {
  count: number;
  resetAt: number;
}

const leadStore = new Map<string, Entry>();
const adminStore = new Map<string, Entry>();

function cleanup(store: Map<string, Entry>) {
  const now = Date.now();
  Array.from(store.entries()).forEach(([key, entry]) => {
    if (entry.resetAt < now) store.delete(key);
  });
}

function checkLimit(
  store: Map<string, Entry>,
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: true } | { allowed: false; retryAfter: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  entry.count += 1;
  if (entry.count > maxRequests) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { allowed: true };
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export function checkLeadRateLimit(ip: string): { allowed: true } | { allowed: false; retryAfter: number } {
  cleanup(leadStore);
  return checkLimit(leadStore, ip, MAX_REQUESTS_LEAD, WINDOW_MS);
}

export function checkAdminRateLimit(ip: string): { allowed: true } | { allowed: false; retryAfter: number } {
  cleanup(adminStore);
  return checkLimit(adminStore, ip, MAX_REQUESTS_ADMIN, ADMIN_WINDOW_MS);
}
