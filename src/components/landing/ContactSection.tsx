import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { site, siteLinks, type SiteContact } from "@/data/site";
import { productCategoryNames } from "@/data/categories";
import { contactEnquirySchema } from "@/lib/contact-enquiry";
import { sendContactEnquiry } from "@/lib/send-contact-enquiry";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const ENQUIRY_ERROR_MESSAGE =
  "Something went wrong while sending your enquiry.\n\nPlease try again later or contact us directly at\nhalieximsindia@gmail.com";

const whyBuyers = [
  "Fast quotation",
  "Worldwide shipping",
  "Technical assistance",
  "Sample support",
  "Dedicated export manager",
] as const;

const trustBadges = [
  { icon: Clock, title: "Replies within 24 Hours" },
  { icon: Globe2, title: "Exporting Worldwide" },
  { icon: BadgeCheck, title: "Genuine Product Sourcing" },
] as const;

function waLink(contact: SiteContact): string | null {
  return contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null;
}

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    setError(null);
    setFieldError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const category = String(fd.get("category") ?? "").trim();
    const product = String(fd.get("product") ?? "").trim();
    const qty = String(fd.get("qty") ?? "").trim();
    const messageParts = [
      String(fd.get("message") ?? "").trim(),
      product ? `Product / Specification: ${product}` : "",
      qty ? `Quantity: ${qty}` : "",
    ].filter(Boolean);

    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      country: String(fd.get("country") ?? ""),
      subject: category,
      message: messageParts.join("\n\n"),
    };

    const parsed = contactEnquirySchema.safeParse(payload);
    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Please fill in all required fields.");
      return;
    }

    setSending(true);
    try {
      const result = await sendContactEnquiry({ data: parsed.data });
      if (!result.ok) {
        setError(result.message || ENQUIRY_ERROR_MESSAGE);
        return;
      }
      form.reset();
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(ENQUIRY_ERROR_MESSAGE);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative section-y bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.35),transparent_55%)]" />
      <div className="relative container-x">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="eyebrow text-royal/90">
            <ArrowRight className="h-3.5 w-3.5" /> Request a Quote
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Tell us what you need. We'll respond within 24 hours.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
            Share your requirement, destination and timeline. Our export specialists will respond with a competitive
            quotation and shipping plan.
          </p>
        </motion.div>

        {/* Team */}
        <motion.div
          className="mt-12 md:mt-14"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Speak With Our Export Specialists
          </div>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">Meet Your Export Team</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.contacts.map((contact, i) => (
              <TeamProfileCard key={contact.tel} contact={contact} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Info cards */}
          <div className="lg:col-span-5 space-y-4">
            <InfoActionCard
              icon={MapPin}
              title="Head Office"
              actionHref={siteLinks.maps}
              actionLabel="View on Map →"
              external
            >
              <div className="font-semibold text-white">{site.name}</div>
              <div className="mt-1 whitespace-pre-line text-sm leading-relaxed text-white/70">
                {site.addressMultiline}
              </div>
              <div className="mt-2 text-xs text-white/50">GSTIN: {site.gstin}</div>
            </InfoActionCard>

            <InfoActionCard
              icon={Phone}
              title="Sales Support"
              actionHref={siteLinks.phone}
              actionLabel="Call Now →"
            >
              <a href={siteLinks.phone} className="text-base font-semibold text-white hover:text-white/90 transition">
                {site.contactPrimary.display}
              </a>
            </InfoActionCard>

            <InfoActionCard
              icon={Package}
              title="Export Enquiries"
              actionHref={
                site.contactSecondary.whatsapp
                  ? `https://wa.me/${site.contactSecondary.whatsapp}`
                  : `tel:${site.contactSecondary.tel}`
              }
              actionLabel="WhatsApp →"
              external={Boolean(site.contactSecondary.whatsapp)}
            >
              <a
                href={`tel:${site.contactSecondary.tel}`}
                className="text-base font-semibold text-white hover:text-white/90 transition"
              >
                {site.contactSecondary.display}
              </a>
            </InfoActionCard>

            <InfoActionCard
              icon={Mail}
              title="Email"
              actionHref={siteLinks.email}
              actionLabel="Send Email →"
            >
              <a href={siteLinks.email} className="text-base font-semibold text-white hover:text-white/90 transition break-all">
                {site.email}
              </a>
            </InfoActionCard>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.06, ease: EASE }}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md shadow-soft"
                  >
                    <Icon className="h-4 w-4 text-royal" aria-hidden="true" />
                    <div className="mt-2 text-xs font-semibold leading-snug text-white/90">{badge.title}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.25rem] bg-white p-7 md:p-10 shadow-elevated text-foreground"
              noValidate
            >
              {sent ? (
                <div className="text-center py-16">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-royal/10 text-royal">
                    <BadgeCheck className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy">Enquiry Submitted Successfully</h3>
                  <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                    Thank you for contacting HALI EXIMS.
                    <br />
                    <br />
                    We have received your enquiry and our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="font-display text-xl md:text-2xl font-bold text-navy">Why Buyers Contact Us</div>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {whyBuyers.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-xs font-semibold text-navy"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-royal" aria-hidden="true" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-border pt-7">
                    <div className="font-display text-2xl font-bold text-navy">Buyer Inquiry Form</div>
                    <p className="text-sm text-muted-foreground mt-1">All fields marked * are required.</p>
                  </div>

                  {(fieldError || error) && (
                    <div
                      role="alert"
                      className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 whitespace-pre-line"
                    >
                      {fieldError || error}
                    </div>
                  )}

                  <div className="mt-6 grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name*" name="name" placeholder="Jane Doe" required />
                    <Field label="Company*" name="company" placeholder="Company Ltd." />
                    <Field label="Country*" name="country" placeholder="e.g. United Arab Emirates" required />
                    <Field label="Email*" name="email" type="email" placeholder="you@company.com" required />
                    <Field label="Phone" name="phone" placeholder="+___" required />
                    <Select label="Product Category*" name="category" options={productCategoryNames} />
                    <Field label="Product / Specification" name="product" placeholder="e.g. TMT Fe500 12mm" />
                    <Field label="Quantity" name="qty" placeholder="e.g. 20MT / 1x40HC" />
                  </div>

                  <div className="mt-5">
                    <label className="text-sm font-semibold text-navy">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Destination port, target price, timeline, specifications…"
                      className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal/40 focus:border-royal transition"
                    />
                  </div>

                  <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <label className="inline-flex items-center gap-3 rounded-xl border border-dashed border-border bg-surface px-4 py-3 cursor-pointer hover:border-navy transition">
                      <FileText className="h-4 w-4 text-royal" />
                      <span className="text-sm font-medium text-navy">Attach specification (PDF, XLS, JPG)</span>
                      <input type="file" className="hidden" />
                    </label>
                    <button
                      type="submit"
                      className="btn-accent disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={sending}
                      aria-busy={sending}
                    >
                      {sending ? (
                        "Sending..."
                      ) : (
                        <>
                          Submit Inquiry <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-7 flex items-start gap-3 rounded-2xl border border-royal/15 bg-gradient-to-r from-royal/5 to-navy/5 px-4 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        Your enquiry will be reviewed by our export specialists.
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Average response time: <span className="font-semibold text-navy">Under 24 Hours</span>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamProfileCard({ contact, delay = 0 }: { contact: SiteContact; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const wa = waLink(contact);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : delay, ease: EASE }}
      className="group rounded-[1.15rem] border border-white/15 bg-white p-5 md:p-6 text-navy shadow-elevated transition duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-soft transition group-hover:bg-royal group-hover:scale-105">
          <User className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h4 className="font-display text-lg font-bold tracking-tight text-navy">{contact.name}</h4>
          <a
            href={`tel:${contact.tel}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-royal"
          >
            <Phone className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
            {contact.display}
          </a>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={`tel:${contact.tel}`}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy/15 bg-surface px-3 py-2.5 text-xs font-semibold text-navy transition hover:border-navy/30"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Call
        </a>
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white transition hover:brightness-110"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        ) : null}
        <a
          href={siteLinks.email}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-royal"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          Email
        </a>
      </div>
    </motion.article>
  );
}

function InfoActionCard({
  icon: Icon,
  title,
  children,
  actionHref,
  actionLabel,
  external,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
  actionHref: string;
  actionLabel: string;
  external?: boolean;
}) {
  return (
    <div className="group rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md transition duration-300 hover:border-royal/40 hover:bg-white/[0.1] hover:shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_20px_50px_-24px_rgba(37,99,235,0.55)]">
      <div className="flex items-start gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/20 text-royal ring-1 ring-white/10 transition group-hover:bg-royal group-hover:text-white">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{title}</div>
          <div className="mt-2">{children}</div>
          <a
            href={actionHref}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="mt-3 inline-flex items-center text-sm font-semibold text-royal transition hover:text-white"
          >
            {actionLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal/40 focus:border-royal transition"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy">{label}</label>
      <select
        name={name}
        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal/40 focus:border-royal transition"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
