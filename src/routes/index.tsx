import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — High-signal product execution" },
      {
        name: "description",
        content:
          "I build the structural alignment and high-trust culture enterprise product teams need to ship undeniable user value at record speed.",
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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[oklch(0.4_0.08_270)] opacity-[0.18] blur-[140px]" />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          <span>Index</span>
          <span className="text-subtle">/</span>
          <span className="text-muted-foreground">Portfolio</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#metrics" className="transition-colors hover:text-foreground">Metrics</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-32 pt-20 text-center sm:pt-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for enterprise engagements — Q3
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl md:text-7xl">
          What if your product teams operated purely on{" "}
          <span className="text-muted-foreground">high-signal clarity?</span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          I bring a serious obsession to enterprise delivery. I build the structural
          alignment and high-trust culture needed to ship undeniable user value at
          record speed.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#metrics"
            className="group inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_1px_0_oklch(1_0_0/0.4)_inset,0_8px_24px_-8px_oklch(1_0_0/0.25)] transition-transform duration-150 hover:-translate-y-0.5"
          >
            View Execution Metrics
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Get in touch
          </a>
        </div>

        {/* Metrics strip */}
        <div
          id="metrics"
          className="mt-28 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
        >
          {[
            { v: "0.94", l: "Ship velocity index" },
            { v: "11d", l: "Avg. cycle time" },
            { v: "8×", l: "Roadmap clarity" },
            { v: "100%", l: "Trust retention" },
          ].map((m) => (
            <div key={m.l} className="bg-background px-5 py-6 text-left">
              <div className="text-2xl font-semibold tracking-tight">{m.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-subtle">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer
        id="contact"
        className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between border-t border-border px-6 py-6 text-xs text-subtle"
      >
        <span>© {new Date().getFullYear()} — All systems operational.</span>
        <a href="mailto:hello@example.com" className="transition-colors hover:text-foreground">
          hello@example.com
        </a>
      </footer>
    </div>
  );
}
