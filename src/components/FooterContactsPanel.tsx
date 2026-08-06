import { Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import { site, siteLinks, type SiteContact } from "@/data/site";

function whatsappHref(contact: SiteContact): string | null {
  return contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null;
}

export function KeyContactCard({ contact }: { contact: SiteContact }) {
  const wa = whatsappHref(contact);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-royal/20 bg-white p-5 text-navy shadow-soft transition duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-elevated">
      <div className="flex items-start gap-3.5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-soft transition duration-300 group-hover:bg-royal group-hover:scale-105">
          <User className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h4 className="font-display text-base font-bold tracking-tight text-navy leading-snug">
            {contact.name}
          </h4>
        </div>
      </div>

      <a
        href={`tel:${contact.tel}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-royal"
      >
        <Phone className="h-3.5 w-3.5 shrink-0 text-royal" aria-hidden="true" />
        {contact.display}
      </a>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`tel:${contact.tel}`}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy/15 bg-surface px-3 py-2 text-xs font-semibold text-navy transition hover:border-navy/30 hover:bg-white"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Call
        </a>
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  );
}

/** Premium Key Contacts + Head Office block for dark footers. */
export function FooterContactsPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-8 lg:grid-cols-12 lg:gap-10 ${className}`}>
      <div className="lg:col-span-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Key Contacts</div>
        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">Speak with our team</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {site.contacts.map((contact) => (
            <KeyContactCard key={contact.tel} contact={contact} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            <MapPin className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
            Head Office
          </div>
          <div className="mt-4 font-display text-base font-bold text-white">{site.name}</div>
          <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/70">
            {site.addressMultiline}
          </div>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-white/75">
            <a href={siteLinks.email} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
              {site.email}
            </a>
            <div className="text-white/55">GSTIN: {site.gstin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
