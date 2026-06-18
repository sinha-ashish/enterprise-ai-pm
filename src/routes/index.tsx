import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useReducedMotion,
  animate as motionAnimate,
} from "motion/react";
import { OperatorsInstinct } from "@/components/OperatorsInstinct";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — High-signal product execution" },
      {
        name: "description",
        content:
          "Elite Product & Delivery Orchestrator. Structural alignment and high-trust culture for enterprise AI delivery at record speed.",
      },
      { property: "og:title", content: "Portfolio — High-signal product execution" },
      {
        property: "og:description",
        content:
          "Structural alignment and high-trust culture for enterprise product teams.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="pointer-events-none fixed left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[oklch(0.4_0.08_270)] opacity-[0.15] blur-[140px]" />

      <FloatingNav />

      <Hero />
      <ExecutionDashboard />
      <OperatorsInstinct />
      <OperatingManual />
      <ArchitectureVault />
      <ContactFooter />
    </div>
  );
}

/* ---------------- Floating Nav ---------------- */
function FloatingNav() {
  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4">
      <nav className="flex items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1.5 text-xs backdrop-blur-xl sm:gap-2 sm:text-sm">
        <a href="#hero" className="flex items-center gap-2 rounded-full px-3 py-1.5 font-medium text-foreground transition-colors hover:bg-card">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="hidden sm:inline">Index</span>
        </a>
        <a href="#dashboard" className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
          Dashboard
        </a>
        <a href="#manual" className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
          Manual
        </a>
        <a href="#resume" className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
          Resume
        </a>
      </nav>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 600], [0, -80]);
  const subY = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section
      id="hero"
      className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-32 pt-32 text-center sm:pt-40"
    >
      <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
            style={{ animation: "status-pulse 2s ease-in-out infinite" }}
          />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="font-medium">Status:</span>
        <span>Available for High-Impact General Partner Roles</span>
      </div>

      <motion.h1
        style={{ y: headlineY, willChange: "transform" }}
        className="text-balance bg-gradient-to-b from-white to-[oklch(0.62_0.01_270)] bg-clip-text text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-transparent sm:text-6xl md:text-7xl"
      >
        What if your product teams operated purely on high-signal clarity?
      </motion.h1>

      <motion.p
        style={{ y: subY, willChange: "transform" }}
        className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        I bring a serious obsession to enterprise delivery. I build the structural
        alignment and high-trust culture needed to ship undeniable user value at
        record speed.
      </motion.p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <a href="#dashboard" className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.6),0_0_28px_-4px_oklch(1_0_0/0.5)]">
          <span className="relative z-10">View Execution Metrics</span>
          <svg className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <a href="#manual" className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Read the Operating Manual
        </a>
      </div>
    </section>
  );
}

/* ---------------- Execution Dashboard ---------------- */
function ExecutionDashboard() {
  return (
    <section id="dashboard" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-32 scroll-mt-24">
      <SectionLabel>Execution Dashboard</SectionLabel>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DashboardCard index={0} tag="Performance Metric" title="AI Production Pipeline" metric={<>15+ GenAI Use Cases <span className="text-subtle">|</span> 100+ Hrs/Wk Automated</>} body="Orchestrating cross-functional engineering squads to rapidly deploy advanced AI capabilities directly into enterprise delivery pipelines." className="md:col-span-2">
          <div aria-hidden className="h-16" />
        </DashboardCard>

        <DashboardCard index={1} tag="Risk Mitigation" title="Enterprise Compliance Architecture" metric="€30M Portfolio Guardrailing" body="Architecting and deploying a unified AI governance infrastructure aligned with the EU AI Act to secure compliant live production deployments.">
          <ComplianceChecklist />
        </DashboardCard>

        <DashboardCard index={2} tag="Growth & Adoption" title="Platform Scale & Adoption" metric={<>150+ Institutional Partners <span className="text-subtle">|</span> 87% CSAT</>} body="Architected the 0-to-1 product strategy and go-to-market for an EU-funded deep tech learning platform — scaling institutional adoption from zero to a 150+ partner network across Europe, and driving 55% growth in active adoption within 6 months." className="md:col-span-3">
          <AdoptionViz />
        </DashboardCard>
      </div>
    </section>
  );
}

function DashboardCard({
  tag, title, metric, body, children, className = "", index = 0,
}: {
  tag: string; title: string; metric: React.ReactNode; body: string; children?: React.ReactNode; className?: string; index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      style={{ willChange: "transform" }}
      className={`group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-foreground/20 hover:bg-[oklch(0.22_0.007_270)] ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_oklch(0.78_0.18_155)]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">{tag}</span>
      </div>
      <h3 className="mb-4 text-lg font-medium tracking-tight text-muted-foreground">{title}</h3>
      <div className="mb-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{metric}</div>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-auto">{children}</div>
    </motion.div>
  );
}

function AdoptionViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const [barFilled, setBarFilled] = useState(false);

  useEffect(() => {
    const unsub = count.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [count]);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(150);
      setBarFilled(true);
      return;
    }
    const controls = motionAnimate(count, 150, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    const t = setTimeout(() => setBarFilled(true), 60);
    return () => {
      controls.stop();
      clearTimeout(t);
    };
  }, [inView, reduce, count]);

  return (
    <div ref={ref} className="mt-2 rounded-lg border border-border bg-background/40 p-5">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-subtle">Institutional partners</div>
          <div className="mt-1 font-mono text-4xl font-semibold tracking-tight text-foreground tabular-nums sm:text-5xl">
            {display}
            <span className="text-emerald-400">+</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-widest text-subtle">CSAT</div>
          <div className="mt-1 font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-3xl">87%</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative h-1.5 overflow-hidden rounded-full bg-[oklch(0.24_0.008_270)]">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-400/80 to-emerald-400 transition-[width] duration-[1400ms] ease-out"
            style={{ width: barFilled ? "55%" : "0%" }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-subtle">
          <span>55% adoption growth · 6mo</span>
          <span>0 → 150 partners</span>
        </div>
      </div>
    </div>
  );
}

function ComplianceChecklist() {
  return (
    <div className="mt-2 space-y-1.5 rounded-lg border border-border bg-background/40 p-3">
      {["EU AI Act — Tier II", "Data Lineage", "Model Cards", "Audit Trail"].map((item) => (
        <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
          <svg className="h-3 w-3 text-emerald-400 transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_6px_oklch(0.78_0.18_155))]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8.5l3 3 7-7" />
          </svg>
          {item}
        </div>
      ))}
    </div>
  );
}

function TokenTierVisual() {
  const reduce = useReducedMotion();
  const tiers = [
    {
      label: "Tier 1 — Internal Productivity",
      sub: "lightweight · ROI-tracked",
      width: "62%",
      barClass: "h-2 bg-[oklch(0.78_0.18_155)]/70",
    },
    {
      label: "Tier 2 — High-Risk / Confidential",
      sub: "enterprise cloud · hard-encrypted",
      width: "92%",
      barClass: "h-3 bg-emerald-400 ring-1 ring-inset ring-emerald-300/60 shadow-[0_0_18px_-4px_oklch(0.78_0.18_155)]",
    },
    {
      label: "Tier 3 — Lightweight Operations",
      sub: "fast-tracked admin workflows",
      width: "38%",
      barClass: "h-1 bg-[oklch(0.78_0.18_155)]/45",
    },
  ];
  return (
    <div className="rounded-xl border border-border bg-background/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">Multi-Model Routing Tiers</div>
        <div className="text-[10px] text-subtle">Right-sized infrastructure for right-sized risk</div>
      </div>
      <div className="space-y-4">
        {tiers.map((t, i) => (
          <div key={t.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-xs font-medium tracking-tight text-foreground">{t.label}</span>
              <span className="text-[10px] uppercase tracking-widest text-subtle">{t.sub}</span>
            </div>
            <div className="relative overflow-hidden rounded-full bg-[oklch(0.22_0.007_270)]">
              <motion.div
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: reduce ? 0 : 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0, width: t.width }}
                className={`rounded-full ${t.barClass}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Operating Manual ---------------- */
function OperatingManual() {
  const [open, setOpen] = useState<number | null>(0);

  const principles = [
    {
      title: "Problem Obsession Over Feature Attachment",
      text: "Our objective is not to release meticulously built features; it is to solve the business problem. When a blocker hits—like an unavailable model—we do not panic. We pivot, explore, and often end up interfacing a more powerful or cost-effective alternative. Let's get to it.",
      extra: <CrisisFlowchart />,
    },
    {
      title: "High-Trust, Ego-Free Execution",
      text: "I intentionally build self-aware, transparent engineering squads. We prioritize the right outcome over being the loudest voice in the room. Feedback loops are instant, and we move faster because we do not waste time protecting egos.",
    },
    {
      title: "Long-Range Strategic Instinct",
      text: "I look past immediate roadmaps to anchor product decisions in long-term enterprise scale. I don't just solve the visible ticket; I architect structural solutions that prevent the next ten friction points.",
    {
      title: "Model & Token Fluency",
      text: "I model user session token metrics, context window spend, and routing optimization to scale AI capability without sacrificing performance or cost discipline. This goes beyond budgeting — it means real fluency across model tiers and multi-model routing, knowing when a lightweight model is the right call versus when a task genuinely needs frontier-level reasoning. Hard limits on usage exist, but they're reserved for the rare, extravagant use case — not the default constraint most teams over-apply. In practice, that means I've built strong instincts for recommending the right setup for the business problem in front of me, grounded in product thinking first rather than chasing the newest model for its own sake. That instinct comes from comprehensive use-case prototyping over time — testing real scenarios against real model capabilities until the trade-offs become intuitive, not theoretical.",
      extra: <TokenTierVisual />,
    },
  ];

  return (
    <section id="manual" className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-32 scroll-mt-24">
      <SectionLabel>The Leadership Vault — Operating Principles</SectionLabel>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {principles.map((p, i) => {
          const isOpen = open === i;
          return (
            <div key={p.title} className={`border-b border-border last:border-b-0 ${isOpen ? "bg-[oklch(0.22_0.007_270)]" : ""}`}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-6 px-6 py-6 text-left transition-colors hover:bg-[oklch(0.22_0.007_270)]"
              >
                <span className="text-xs font-mono text-subtle">0{i + 1}</span>
                <span className="flex-1 text-base font-medium tracking-tight text-foreground sm:text-lg">{p.title}</span>
                <svg className={`h-4 w-4 shrink-0 text-subtle transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.8 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-8 pl-[3.75rem] pr-6">
                      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{p.text}</p>
                      {p.extra ? <div className="mt-6">{p.extra}</div> : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CrisisFlowchart() {
  const steps = ["Ruthless Triage", "Map Stakeholder Impact", "Enforce Hackathon Mode", "Deploy Bare Minimum Necessity"];
  return (
    <div className="rounded-xl border border-border bg-background/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">Crisis Resolution Flowchart</div>
        <div className="text-[10px] text-subtle">Emotionally Disassociated Triage Framework</div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-lg border border-border bg-card p-3">
              <div className="text-[10px] text-subtle">Step {i + 1}</div>
              <div className="mt-1 text-xs font-medium tracking-tight text-foreground">{s}</div>
            </div>
            {i < steps.length - 1 && (
              <svg className="hidden h-4 w-4 shrink-0 text-subtle sm:block" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Architecture Vault ---------------- */
function ArchitectureVault() {
  return (
    <section id="resume" className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-32 scroll-mt-24">
      <SectionLabel>Architecture Vault</SectionLabel>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">Playbook</div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Token Consumption Optimization</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A reusable enterprise playbook: balance input/output rate limits, exploit prompt caching, route by complexity, and degrade gracefully under load — without sacrificing premium model quality.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {["Tiered model routing", "Context window budgeting", "Prompt + KV cache hits", "Speculative decoding"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#a78bfa]" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border bg-[oklch(0.18_0.005_270)] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.45_0.02_30)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.45_0.02_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.45_0.05_150)]" />
              <span className="ml-3 text-xs font-mono text-subtle">token-optimizer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
<code>{`// Tiered routing by signal complexity
const route = (req: Query) => {
  if (req.cacheKey && cache.has(req.cacheKey))
    return models.cached         // ~$0.00 / call

  if (req.complexity < 0.3)
    return models.haiku          // fast + cheap

  if (req.complexity < 0.7)
    return models.sonnet         // balanced

  return models.opus             // premium reasoning
}

// Budget guardrail per session
const budget = {
  input:  120_000,   // ctx tokens
  output:  4_000,    // hard cap
  ttl:     90 * 60   // seconds
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact Footer ---------------- */
function ContactFooter() {
  return (
    <footer id="contact" className="relative z-10 overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 footer-mesh" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">Contact</div>
            <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s architect undeniable execution.
            </h3>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href="mailto:hello@example.com" className="text-foreground underline-offset-4 transition hover:underline">
                hello@example.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                LinkedIn ↗
              </a>
              <a href="#hero" className="text-muted-foreground transition-colors hover:text-foreground">
                Back to top
              </a>
            </div>
          </div>

          <a href="#" className="group inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-[oklch(0.22_0.007_270)]">
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v9M4 7l4 4 4-4M2 14h12" />
            </svg>
            Download Master Profile JSON/PDF
          </a>
        </div>

        <div className="mt-16 flex items-center justify-between text-xs text-subtle">
          <span>© {new Date().getFullYear()} — All systems operational.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            v1.0 · live
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Shared ---------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-subtle">{children}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
