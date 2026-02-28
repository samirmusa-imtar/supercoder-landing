import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getClientIp, checkAdminRateLimit } from "@/lib/rateLimit";

function escapeCsvCell(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString();
  const s = String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  const expected = process.env.ADMIN_API_TOKEN;

  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ip = getClientIp(request.headers);
  const rate = checkAdminRateLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
    );
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    const headers = [
      "id",
      "fullName",
      "company",
      "email",
      "phone",
      "industry",
      "companySize",
      "monthlyInterviews",
      "message",
      "consent",
      "createdAt",
      "ipAddress",
      "userAgent",
    ];

    const rows = leads.map((l) =>
      headers
        .map((h) => escapeCsvCell((l as Record<string, unknown>)[h]))
        .join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="leads.csv"',
      },
    });
  } catch (e) {
    console.error("[admin/leads] Error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
