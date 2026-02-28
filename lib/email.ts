/**
 * Lead notification email: SES (preferred) or SMTP fallback.
 * Non-blocking: log errors, do not throw to caller.
 */

export interface LeadForEmail {
  fullName: string;
  company: string;
  email: string;
  phone: string | null;
  industry: string | null;
  companySize: string | null;
  monthlyInterviews: string | null;
  message: string | null;
  createdAt: string;
}

function plainLeadBody(lead: LeadForEmail): string {
  const lines = [
    `الاسم: ${lead.fullName}`,
    `الشركة: ${lead.company}`,
    `البريد: ${lead.email}`,
    lead.phone ? `الجوال: ${lead.phone}` : null,
    lead.industry ? `القطاع: ${lead.industry}` : null,
    lead.companySize ? `حجم الشركة: ${lead.companySize}` : null,
    lead.monthlyInterviews ? `عدد المقابلات شهرياً: ${lead.monthlyInterviews}` : null,
    lead.message ? `الرسالة: ${lead.message}` : null,
    `التاريخ: ${lead.createdAt}`,
  ].filter(Boolean);
  return lines.join("\n");
}

async function sendViaSES(lead: LeadForEmail): Promise<void> {
  const from = process.env.SES_FROM_EMAIL;
  const to = process.env.SES_SALES_TO_EMAIL;
  if (!from || !to) return;

  const { SESClient, SendEmailCommand } = await import("@aws-sdk/client-ses");
  const client = new SESClient({
    region: process.env.AWS_REGION ?? "eu-central-1",
    credentials:
      process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
        ? {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          }
        : undefined,
  });

  const subject = `Supercoder: طلب عرض تجريبي جديد — ${lead.company}`;
  const body = plainLeadBody(lead);

  const command = new SendEmailCommand({
    Source: from,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: {
        Text: { Data: body, Charset: "UTF-8" },
      },
    },
  });

  try {
    await client.send(command);
  } catch (err) {
    console.error("[email] SES send failed:", err);
    throw err; // caller may retry once
  }
}

async function sendViaSMTP(lead: LeadForEmail): Promise<void> {
  const host = process.env.SMTP_HOST;
  const to = process.env.SALES_EMAIL;
  if (!host || !to) return;

  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  const subject = `Supercoder: طلب عرض تجريبي جديد — ${lead.company}`;
  const body = plainLeadBody(lead);

  try {
    await transport.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to,
      subject,
      text: body,
    });
  } catch (err) {
    console.error("[email] SMTP send failed:", err);
    throw err;
  }
}

export async function sendLeadNotification(lead: LeadForEmail): Promise<void> {
  const useSES = process.env.SES_FROM_EMAIL && process.env.SES_SALES_TO_EMAIL;
  const useSMTP = process.env.SMTP_HOST && process.env.SALES_EMAIL;

  if (useSES) {
    try {
      await sendViaSES(lead);
      return;
    } catch {
      if (useSMTP) {
        try {
          await sendViaSMTP(lead);
        } catch (e) {
          console.error("[email] SES and SMTP failed", e);
        }
      }
      return;
    }
  }

  if (useSMTP) {
    try {
      await sendViaSMTP(lead);
    } catch (e) {
      console.error("[email] SMTP failed", e);
    }
  }
}

export async function sendAutoReply(lead: LeadForEmail): Promise<void> {
  const from = process.env.SES_FROM_EMAIL ?? process.env.SMTP_FROM;
  if (!from) return;

  const subject = "Supercoder AI — تم استلام طلبك";
  const text =
    "مرحباً،\n\nتم استلام طلب العرض التجريبي بنجاح. سنتواصل معك قريباً.\n\nفريق Supercoder AI";

  if (process.env.SES_FROM_EMAIL && process.env.SES_SALES_TO_EMAIL) {
    try {
      const { SESClient, SendEmailCommand } = await import("@aws-sdk/client-ses");
      const client = new SESClient({
        region: process.env.AWS_REGION ?? "eu-central-1",
        credentials:
          process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
            ? {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
              }
            : undefined,
      });
      await client.send(
        new SendEmailCommand({
          Source: from,
          Destination: { ToAddresses: [lead.email] },
          Message: {
            Subject: { Data: subject, Charset: "UTF-8" },
            Body: { Text: { Data: text, Charset: "UTF-8" } },
          },
        })
      );
    } catch (e) {
      console.error("[email] Auto-reply failed", e);
    }
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    try {
      const nodemailer = await import("nodemailer");
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT ?? "587", 10),
        secure: process.env.SMTP_SECURE === "true",
        auth:
          process.env.SMTP_USER && process.env.SMTP_PASS
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
      });
      await transport.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: lead.email,
        subject,
        text,
      });
    } catch (e) {
      console.error("[email] Auto-reply SMTP failed", e);
    }
  }
}
