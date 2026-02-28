import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sanitizeLeadBody } from "@/lib/sanitize";
import { getClientIp, checkLeadRateLimit } from "@/lib/rateLimit";
import { sendLeadNotification, sendAutoReply } from "@/lib/email";

const HONEYPOT_FIELD = "company_website";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request.headers);
    const rate = checkLeadRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "عدد الطلبات كبير. يرجى المحاولة لاحقاً." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
      );
    }

    const body = await request.json();

    if (body[HONEYPOT_FIELD] != null && String(body[HONEYPOT_FIELD]).trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const result = sanitizeLeadBody(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { data } = result;
    const userAgent = request.headers.get("user-agent") ?? null;

    const lead = await prisma.lead.create({
      data: {
        fullName: data.fullName,
        company: data.company,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
        companySize: data.companySize,
        monthlyInterviews: data.monthlyInterviews,
        message: data.message,
        consent: data.consent,
        ipAddress: ip !== "unknown" ? ip : null,
        userAgent,
      },
    });

    const leadForEmail = {
      fullName: lead.fullName,
      company: lead.company,
      email: lead.email,
      phone: lead.phone,
      industry: lead.industry,
      companySize: lead.companySize,
      monthlyInterviews: lead.monthlyInterviews,
      message: lead.message,
      createdAt: lead.createdAt.toISOString(),
    };

    try {
      await sendLeadNotification(leadForEmail);
    } catch {
      try {
        await new Promise((r) => setTimeout(r, 1000));
        await sendLeadNotification(leadForEmail);
      } catch (e) {
        console.error("[lead] Email notification failed after retry", e);
      }
    }

    if (process.env.SEND_AUTO_REPLY === "true") {
      sendAutoReply(leadForEmail).catch((e) => console.error("[lead] Auto-reply failed", e));
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[lead] Error:", e);
    return NextResponse.json(
      { error: "خطأ في المعالجة" },
      { status: 500 }
    );
  }
}
