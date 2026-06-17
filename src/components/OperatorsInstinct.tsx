import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Moment = {
  label: string;
  headline: string;
  narrative: string;
  killer: string;
  chips?: string[];
};

const moments: Moment[] = [
  {
    label: "Ambiguity",
    headline: "No brief. Two weeks. An unfamiliar stack.",
    narrative:
      "Brought a business-critical problem from an internal enterprise client at global scale, inside a Group IT model where business units operate with governance on par with external procurement. No clean brief, a two-week window, an unfamiliar tech stack. Proposed a working prototype targeting the core user journeys before being asked, validated it immediately, then ran a 3-day hackathon with tech leads and engineers — functional user journeys delivered in five days.",
    killer: "Sceptical stakeholders became advocates because they understood why, not just what.",
  },
  {
    label: "Growth Mechanics",
    headline: "Distribution through trust, not spend.",
    narrative:
      "Scaled a 0-to-1 EU-funded platform from zero to a 150+ partner network by aligning with research institutions people already trusted, rather than competing for cold attention. Redesigned onboarding separately for creators and learners to remove first-use friction, and built a free certification mechanic that gave both sides a reason to return.",
    killer: "The platform was discovered through channels people already trusted — not sold to them cold.",
    chips: ["55% adoption growth · 6mo", "87% CSAT"],
  },
  {
    label: "Builder's Instinct",
    headline: "I build my own tools before I'm asked to.",
    narrative:
      "Outside the core role, vibe-coded an AI-powered personal system using Claude that manages interview prep, positioning, and application content as a structured, reusable, swappable database — the same instinct now directed at enterprise AI delivery: spot the process running on scripts and good intentions, and build the infrastructure that makes it repeatable.",
    killer: "I built a personal AI Studio before I knew the name for it.",
  },
];

export function OperatorsInstinct() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const momentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      // Progress line fill
      if (progressRef.current && sectionRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      }

      momentRefs.current.forEach((el) => {
        if (!el) return;
        const label = el.querySelector("[data-anim='label']");
        const headline = el.querySelector("[data-anim='headline']");
        const narrative = el.querySelector("[data-anim='narrative']");
        const killer = el.querySelector("[data-anim='killer']");
        const chips = el.querySelector("[data-anim='chips']");

        if (reduced || isMobile) {
          // Simple fade-on-enter
          gsap.from([label, headline, narrative, killer, chips].filter(Boolean), {
            opacity: 0,
            y: 16,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          return;
        }

        // Pin + scrub reveal sequence
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
          },
        });

        if (label) tl.fromTo(label, { y: 14, opacity: 0 }, { y: 0, opacity: 1 }, 0);
        if (headline)
          tl.fromTo(
            headline,
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            { clipPath: "inset(0 0% 0 0)", opacity: 1 },
            0.15,
          );
        if (narrative) tl.fromTo(narrative, { y: 18, opacity: 0 }, { y: 0, opacity: 1 }, 0.45);
        if (killer) tl.fromTo(killer, { y: 8, opacity: 0 }, { y: 0, opacity: 1 }, 0.75);
        if (chips) tl.fromTo(chips, { y: 6, opacity: 0 }, { y: 0, opacity: 1 }, 0.85);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="instinct"
      className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-32 scroll-mt-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-subtle">
          The Operator&apos;s Instinct
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="relative">
        {/* Progress line */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-border/60 md:block">
          <div
            ref={progressRef}
            className="h-full w-px origin-top bg-emerald-400 shadow-[0_0_8px_oklch(0.78_0.18_155_/_0.6)]"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="md:pl-10">
          {moments.map((m, i) => (
            <div
              key={m.label}
              ref={(el) => {
                momentRefs.current[i] = el;
              }}
              className="flex min-h-[100vh] flex-col justify-center py-20"
            >
              <div
                data-anim="label"
                className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-400"
              >
                {m.label}
              </div>
              <h3
                data-anim="headline"
                className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl"
              >
                {m.headline}
              </h3>
              <p
                data-anim="narrative"
                className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {m.narrative}
              </p>
              <p
                data-anim="killer"
                className="mt-6 max-w-2xl text-base italic tracking-tight text-foreground/90 sm:text-lg"
              >
                &ldquo;{m.killer}&rdquo;
              </p>
              {m.chips && (
                <div data-anim="chips" className="mt-5 flex flex-wrap gap-2">
                  {m.chips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
