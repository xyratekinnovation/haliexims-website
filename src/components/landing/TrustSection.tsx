import { BadgeCheck, Star } from "lucide-react";
import {
  clientTestimonials,
  trustPillars,
  type ClientTestimonial,
  type TrustPillar,
} from "@/data/trust";

/**
 * Switch to "testimonials" once `clientTestimonials` has verified entries.
 * Layout (3-column cards) stays the same either way.
 */
const trustSectionMode: "pillars" | "testimonials" = "pillars";

export function TrustSection() {
  const showTestimonials = trustSectionMode === "testimonials" && clientTestimonials.length > 0;

  return (
    <section className="section-y" aria-label={showTestimonials ? "Client testimonials" : "Why clients choose us"}>
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">
            <BadgeCheck className="h-3.5 w-3.5" /> Why Clients Choose Us
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance">
            Building Long-Term Partnerships Through Trust & Reliability
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            At HALI EXIMS, we believe every successful export relationship is built on trust, transparency, and
            consistent delivery. We work closely with our clients to understand their sourcing requirements and provide
            dependable manufacturing and export solutions tailored to their business needs.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {showTestimonials
            ? clientTestimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} />)
            : trustPillars.map((p) => <PillarCard key={p.id} pillar={p} />)}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: TrustPillar }) {
  const Icon = pillar.icon;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 md:p-8 hover:border-navy/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-all duration-300 group-hover:bg-royal group-hover:scale-105">
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy">{pillar.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground grow">{pillar.description}</p>
    </article>
  );
}

/** Used when verified testimonials are added to `clientTestimonials`. */
function TestimonialCard({ testimonial }: { testimonial: ClientTestimonial }) {
  return (
    <figure className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 md:p-8 hover:border-navy/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
      {typeof testimonial.rating === "number" && testimonial.rating > 0 && (
        <div className="flex items-center gap-1 text-royal" aria-label={`${testimonial.rating} out of 5`}>
          {Array.from({ length: Math.min(5, Math.max(1, Math.round(testimonial.rating))) }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
          ))}
        </div>
      )}
      <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90 grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 pt-6 border-t border-border">
        <div className="font-semibold text-navy">{testimonial.author}</div>
        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
      </figcaption>
    </figure>
  );
}
