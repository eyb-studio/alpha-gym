import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

const SPACE_IMAGES = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1600&auto=format&fit=crop",
];

export function Space({ dict }: Props) {
  return (
    <section className="relative bg-ink py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeader
          eyebrow={dict.space.eyebrow}
          title={dict.space.title}
          subtitle={dict.space.subtitle}
        />

        <div className="mt-16 grid grid-cols-12 gap-3 md:gap-4">
          <Reveal
            delay={0}
            fromY={60}
            className="col-span-12 md:col-span-8 md:row-span-2"
          >
            <div
              className="aspect-[16/9] md:aspect-auto md:h-full"
              style={{
                backgroundImage: `url('${SPACE_IMAGES[0]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(1) contrast(1.1) brightness(0.8)",
              }}
            />
          </Reveal>
          <Reveal
            delay={0.1}
            fromY={60}
            className="col-span-6 md:col-span-4"
          >
            <div
              className="aspect-square md:aspect-[4/3]"
              style={{
                backgroundImage: `url('${SPACE_IMAGES[1]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(1) contrast(1.1) brightness(0.8)",
              }}
            />
          </Reveal>
          <Reveal
            delay={0.2}
            fromY={60}
            className="col-span-6 md:col-span-4"
          >
            <div
              className="aspect-square md:aspect-[4/3]"
              style={{
                backgroundImage: `url('${SPACE_IMAGES[2]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(1) contrast(1.1) brightness(0.8)",
              }}
            />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px bg-bone/10 md:grid-cols-4">
          {dict.space.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} fromY={30}>
              <div className="flex flex-col items-start gap-2 bg-ink p-8 md:p-10">
                <span className="text-display text-5xl text-bone md:text-7xl">
                  {stat.value}
                </span>
                <span className="text-mono text-bone/50">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
