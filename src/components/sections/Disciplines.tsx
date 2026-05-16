import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

const DISC_IMAGES = [
  "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
];

export function Disciplines({ dict }: Props) {
  return (
    <section id="disciplines" className="relative bg-coal py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeader
          eyebrow={dict.disciplines.eyebrow}
          title={dict.disciplines.title}
        />

        <div className="mt-16 grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-3">
          {dict.disciplines.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} fromY={40}>
              <article className="group relative overflow-hidden bg-coal">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-1000 ease-[var(--ease-cinema)] group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${DISC_IMAGES[i % DISC_IMAGES.length]}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(1) contrast(1.1) brightness(0.65)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                  <div className="absolute top-6 left-6 frame-thin px-3 py-1">
                    <span className="text-mono text-bone">{item.tag}</span>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                    <h3 className="text-display text-3xl text-bone md:text-4xl">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone/65 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
