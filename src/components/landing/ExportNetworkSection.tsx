import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Factory,
  FileText,
  Globe,
  Handshake,
  Ship,
  ShieldCheck,
} from "lucide-react";

import worldMapDots from "@/assets/export-map-dots.svg";

const EASE = [0.2, 0.8, 0.2, 1] as const;

/* Pin coordinates inside the generated map's viewBox (0 0 81 64).
   Produced by scripts/generate-world-map.mjs from real lat/lng. */
const MAP_VIEWBOX = "0 0 81 64";
const INDIA = { x: 49, y: 30.3 };
const DUBAI = { x: 32, y: 23.4 };
const MALDIVES = { x: 50, y: 45.9 };

const ROUTE_DUBAI = `M${INDIA.x},${INDIA.y} Q ${(INDIA.x + DUBAI.x) / 2},15.5 ${DUBAI.x},${DUBAI.y}`;
const ROUTE_MALDIVES = `M${INDIA.x},${INDIA.y} Q 45.5,38 ${MALDIVES.x},${MALDIVES.y}`;

const DESTINATIONS = [
  {
    id: "dubai",
    point: DUBAI,
    label: "DUBAI (UAE)",
    sub: "Export Destination",
    route: ROUTE_DUBAI,
    duration: 4.6,
    labelX: DUBAI.x - 1.6,
    labelY: DUBAI.y - 3.2,
    anchor: "end" as const,
  },
  {
    id: "maldives",
    point: MALDIVES,
    label: "MALDIVES",
    sub: "Export Destination",
    route: ROUTE_MALDIVES,
    duration: 5.6,
    labelX: MALDIVES.x + 2.6,
    labelY: MALDIVES.y + 1,
    anchor: "start" as const,
  },
];

const CAPABILITIES = [
  {
    icon: FileText,
    title: "Export Documentation",
    desc: "Complete handling of commercial invoices, packing lists, certificates, shipping documentation, and export compliance.",
  },
  {
    icon: Ship,
    title: "Global Logistics",
    desc: "Reliable coordination with trusted logistics partners for safe and timely international deliveries.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Products are sourced from trusted manufacturers and undergo strict quality verification before dispatch.",
  },
  {
    icon: Factory,
    title: "Custom Manufacturing",
    desc: "Supporting OEM and customized manufacturing solutions based on buyer specifications.",
  },
  {
    icon: Handshake,
    title: "Global Trade Support",
    desc: "End-to-end assistance from sourcing and production to export documentation and final delivery.",
  },
];

export function ExportNetworkSection() {
  return (
    <section id="exports" className="relative section-y bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.28),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative container-x">
        <div className="max-w-3xl">
          <div className="eyebrow text-royal/90">
            <Globe className="h-3.5 w-3.5" /> Global Export Network
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-balance">
            Connecting Indian Manufacturing to Global Markets
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            HALI EXIMS simplifies international trade by combining trusted manufacturing partnerships, quality
            assurance, export documentation, and reliable logistics to serve customers across key international
            markets.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <ExportMap />
          </div>

          <div className="lg:col-span-5 grid gap-4 content-start">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.09]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute -inset-x-4 -bottom-10 h-24 rounded-full bg-royal/25 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

                <motion.div
                  whileHover={{ scale: 1.12, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal/35 to-royal/10 text-blue-100 ring-1 ring-white/10 transition-all duration-500 group-hover:from-royal group-hover:to-blue-400 group-hover:text-white group-hover:ring-blue-300/40 group-hover:shadow-[0_8px_24px_-6px_rgba(59,130,246,0.7)]"
                >
                  <c.icon className="h-5 w-5" />
                </motion.div>
                <div className="relative min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-display text-[15px] font-semibold text-white tracking-tight">{c.title}</div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-500 group-hover:text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-1 text-[13px] text-white/60 leading-relaxed">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExportMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#050f26] via-[#0a1d47] to-[#061230] p-5 sm:p-7"
    >
      <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/50">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Active Export Network
        </div>
        <span className="hidden sm:inline">India · Maldives · UAE</span>
      </div>

      <div className="relative mt-4">
        {/* Flat dotted world map (real geography) with route overlay sharing the same viewBox */}
        <div className="relative w-full aspect-[81/64]">
          <img
            src={worldMapDots}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-60"
            loading="lazy"
            decoding="async"
          />
          <svg
            viewBox={MAP_VIEWBOX}
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Flat world map showing HALI EXIMS export routes from India to Dubai and the Maldives"
          >
            <defs>
              <linearGradient id="exportRoute" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#bfdbfe" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
              </linearGradient>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
              <filter id="routeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Hub glow behind India */}
            <circle cx={INDIA.x} cy={INDIA.y} r="12" fill="url(#hubGlow)" />

            {/* Animated routes */}
            <g fill="none" strokeLinecap="round">
              {DESTINATIONS.map((d) => (
                <g key={d.id}>
                  <path d={d.route} stroke="rgba(147,197,253,0.18)" strokeWidth="0.5" />
                  <path
                    d={d.route}
                    stroke="url(#exportRoute)"
                    strokeWidth="0.4"
                    strokeDasharray="1.2 1.8"
                    filter="url(#routeGlow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-30"
                      dur={`${d.duration + 2}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Cargo particle */}
                  <circle r="0.75" fill="#eff6ff" filter="url(#routeGlow)">
                    <animateMotion dur={`${d.duration}s`} repeatCount="indefinite" path={d.route} />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.12;0.88;1"
                      dur={`${d.duration}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </g>

            {/* Destination markers */}
            {DESTINATIONS.map((d) => (
              <g key={`marker-${d.id}`}>
                <circle cx={d.point.x} cy={d.point.y} r="1.6" fill="rgba(147,197,253,0.3)">
                  <animate attributeName="r" values="1.6;3.4;1.6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle
                  cx={d.point.x}
                  cy={d.point.y}
                  r="1"
                  fill="#bfdbfe"
                  stroke="#ffffff"
                  strokeWidth="0.25"
                />
                <text
                  x={d.labelX}
                  y={d.labelY}
                  textAnchor={d.anchor}
                  fontFamily="Manrope, Inter, sans-serif"
                  fontSize="2.4"
                  fontWeight="700"
                  fill="#f5f9ff"
                  letterSpacing="0.2"
                >
                  {d.label}
                </text>
                <text
                  x={d.labelX}
                  y={d.labelY + 2.4}
                  textAnchor={d.anchor}
                  fontFamily="Manrope, Inter, sans-serif"
                  fontSize="1.5"
                  fontWeight="500"
                  fill="#93c5fd"
                >
                  {d.sub}
                </text>
              </g>
            ))}

            {/* India hub marker */}
            <g>
              <circle cx={INDIA.x} cy={INDIA.y} r="4" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="0.25">
                <animate attributeName="r" values="2.4;5.5;2.4" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3.6s" repeatCount="indefinite" />
              </circle>
              <circle cx={INDIA.x} cy={INDIA.y} r="1.9" fill="#2563EB" filter="url(#routeGlow)" />
              <circle cx={INDIA.x} cy={INDIA.y} r="1" fill="#ffffff" />
              <text
                x={INDIA.x + 3}
                y={INDIA.y - 1.4}
                fontFamily="Manrope, Inter, sans-serif"
                fontSize="3"
                fontWeight="800"
                fill="#ffffff"
                letterSpacing="0.3"
              >
                INDIA
              </text>
              <text
                x={INDIA.x + 3}
                y={INDIA.y + 1.2}
                fontFamily="Manrope, Inter, sans-serif"
                fontSize="1.5"
                fontWeight="600"
                fill="#93c5fd"
                letterSpacing="0.35"
              >
                Primary Export Hub
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/55">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-royal shadow-[0_0_10px_2px_rgba(37,99,235,0.7)]" /> Primary Hub
          — India
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_8px_2px_rgba(147,197,253,0.7)]" /> Export
          Destinations
        </span>
      </div>
    </motion.div>
  );
}
