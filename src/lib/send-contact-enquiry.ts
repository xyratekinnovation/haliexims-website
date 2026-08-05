import { createServerFn } from "@tanstack/react-start";
import {
  buildEnquiryEmailBody,
  contactEnquirySchema,
  ENQUIRY_EMAIL_SUBJECT,
  ENQUIRY_TO_EMAIL,
  formatEnquirySubmittedAt,
  type ContactEnquiryInput,
} from "@/lib/contact-enquiry";

export type SendContactEnquiryResult =
  | { ok: true }
  | { ok: false; error: "validation" | "config" | "send"; message: string };

const ENQUIRY_FAIL_MESSAGE =
  "Something went wrong while sending your enquiry.\n\nPlease try again later or contact us directly at\nhalieximsindia@gmail.com";

function readEnv(key: string): string {
  const value = process.env[key];
  return typeof value === "string" ? value.trim() : "";
}

function getSmtpConfig() {
  const host = readEnv("SMTP_HOST");
  const portRaw = readEnv("SMTP_PORT") || "465";
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const from = readEnv("SMTP_FROM") || user;
  const secureEnv = readEnv("SMTP_SECURE");
  const port = Number(portRaw);
  const secure = secureEnv ? secureEnv === "true" : port === 465;

  if (!host || !user || !pass || !from || Number.isNaN(port)) {
    return null;
  }

  return { host, port, secure, user, pass, from };
}

async function sendEnquiryMail(data: ContactEnquiryInput): Promise<SendContactEnquiryResult> {
  const smtp = getSmtpConfig();
  if (!smtp) {
    console.error(
      "[contact-enquiry] Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (and optionally SMTP_FROM, SMTP_SECURE) in .env.local.",
    );
    return { ok: false, error: "config", message: ENQUIRY_FAIL_MESSAGE };
  }

  const submittedAt = formatEnquirySubmittedAt();
  const text = buildEnquiryEmailBody(data, submittedAt);

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    await transporter.sendMail({
      from: smtp.from,
      to: ENQUIRY_TO_EMAIL,
      replyTo: data.email,
      subject: ENQUIRY_EMAIL_SUBJECT,
      text,
    });

    return { ok: true };
  } catch (error) {
    console.error("[contact-enquiry] Failed to send email:", error);
    return { ok: false, error: "send", message: ENQUIRY_FAIL_MESSAGE };
  }
}

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => contactEnquirySchema.parse(input))
  .handler(async ({ data }): Promise<SendContactEnquiryResult> => {
    return sendEnquiryMail(data);
  });
