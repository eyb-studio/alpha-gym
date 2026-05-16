import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

const COACH_IMAGES = [
  "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
];

export function Coaches({ dict }: Props) {
  return (
    <section id="coaches" className="relative bg-ink py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeader
          eyebrow={dict.coaches.eyebrow}
          title={dict.coaches.title}
          subtitle={dict.coaches.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {dict.coaches.list.map((coach, i) => (
            <Reveal key={i} delay={i * 0.15} fromY={60}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-coal">
                  <div
                    className="absolute inset-0 transition-all duration-1000 ease-[var(--ease-cinema)] group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${COACH_IMAGES[i % COACH_IMAGES.length]}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      filter: "grayscale(1) contrast(1.15) brightness(0.75)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span className="text-mono text-bone/70">{coach.spec}</span>
                  </div>
                </div>

                <figcaption className="mt-5">
                  <p className="text-mono text-bone/40">{coach.role}</p>
                  <h3 className="mt-1 text-display text-2xl text-bone md:text-3xl">
                    {coach.name}
                  </h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
