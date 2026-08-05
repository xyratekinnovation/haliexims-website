import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type Stat = { value: number; suffix?: string; label: string };

const EASE = [0.2, 0.8, 0.2, 1] as const;

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="Company statistics" className="section-y-tight bg-surface border-b border-border">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="rounded-2xl border border-border bg-white p-6 md:p-8 text-center hover:border-navy/30 hover:shadow-elevated transition"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-navy">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / 1400);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    });
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, value]);
  return (
    <span ref={setRef}>
      {n}
      {suffix}
    </span>
  );
}
