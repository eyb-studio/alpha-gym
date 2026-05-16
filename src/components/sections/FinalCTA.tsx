import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function FinalCTA({ dict }: Props) {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1) contrast(1.15) brightness(0.4)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <Reveal delay={0} fromY={40}>
          <h2 className="text-display text-[clamp(5rem,18vw,16rem)] leading-[0.85] text-bone">
            {dict.cta.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15} fromY={20}>
          <p className="mt-6 text-xl text-bone/70">{dict.cta.subtitle}</p>
        </Reveal>

        <Reveal delay={0.3} fromY={20}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${dict.cta.phone.replace(/\s/g, "")}`}
              className="border border-bone bg-bone px-8 py-4 text-mono text-ink transition-all hover:bg-transparent hover:text-bone"
            >
              {dict.cta.call} · {dict.cta.phone}
            </a>
            <a
              href={`https://wa.me/971${dict.cta.phone.replace(/[\s0]/g, "").slice(0, 9)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-bone/40 px-8 py-4 text-mono text-bone transition-all hover:border-bone"
            >
              {dict.cta.whatsapp}
            </a>
            <a
              href="https://maps.google.com/?q=Alpha+Gym+Sharjah+Industrial+Area+6"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-bone/40 px-8 py-4 text-mono text-bone transition-all hover:border-bone"
            >
              {dict.cta.directions}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
