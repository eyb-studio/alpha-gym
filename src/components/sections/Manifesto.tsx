import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function Manifesto({ dict }: Props) {
  return (
    <section className="relative bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="space-y-2 text-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-bone">
          {dict.manifesto.lines.map((line, i) => (
            <Reveal key={i} delay={i * 0.15} fromY={30}>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.8} fadeOnly>
          <p className="mt-12 text-mono text-bone/40">
            {dict.manifesto.signoff}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
