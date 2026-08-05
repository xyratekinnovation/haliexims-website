import { z } from "zod";

/** Shared enquiry payload — validated on client and server. */
export const contactEnquirySchema = z.object({
  name: z.string().trim().min(1, "Full name is required"),
  company: z.string().trim().optional().default(""),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required"),
  country: z.string().trim().min(1, "Country is required"),
  subject: z.string().trim().optional().default(""),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactEnquiryInput = z.infer<typeof contactEnquirySchema>;

export function formatEnquirySubmittedAt(date = new Date()): string {
  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });
}

export function buildEnquiryEmailBody(data: ContactEnquiryInput, submittedAt: string): string {
  return `New enquiry received from the HALI EXIMS website.

----------------------------------------

Name:
${data.name}

Company:
${data.company || "—"}

Email:
${data.email}

Phone:
${data.phone}

Country:
${data.country}

Subject:
${data.subject || "—"}

Message:
${data.message}

----------------------------------------

Submitted At:
${submittedAt}
`;
}

export const ENQUIRY_EMAIL_SUBJECT = "New Website Enquiry - HALI EXIMS";
export const ENQUIRY_TO_EMAIL = "halieximsindia@gmail.com";
