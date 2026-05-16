import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function Voices({ dict }: Props) {
  return (
    <section className="relative bg-ink py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeader
          eyebrow={dict.voices.eyebrow}
          title={dict.voices.title}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.voices.quotes.map((q, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} fromY={40}>
              <figure className="frame-thin relative flex h-full flex-col justify-between p-8 md:p-10">
                <div className="text-mono text-bone/30">★ ★ ★ ★ ★</div>
                <blockquote className="mt-6 text-lg leading-relaxed text-bone md:text-xl">
                  <span className="text-bone/40">&ldquo;</span>
                  {q.text}
                  <span className="text-bone/40">&rdquo;</span>
                </blockquote>
                <figcaption className="mt-8 text-mono text-bone/50">
                  — {q.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
