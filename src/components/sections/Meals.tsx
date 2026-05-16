import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function Meals({ dict }: Props) {
  return (
    <section id="meals" className="relative bg-coal py-32">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/3 lg:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1) contrast(1.1) brightness(0.55)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-coal via-coal/70 to-transparent lg:block"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeader
          eyebrow={dict.meals.eyebrow}
          title={dict.meals.title}
          subtitle={dict.meals.subtitle}
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {dict.meals.tags.map((tag, i) => (
            <Reveal key={i} delay={i * 0.08} fromY={10}>
              <span className="frame-thin inline-block px-4 py-2 text-mono text-bone/80">
                {tag}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-2">
          {dict.meals.plans.map((plan, i) => (
            <Reveal key={i} delay={i * 0.08} fromY={30}>
              <div className="group flex items-center justify-between border border-bone/15 bg-ink/40 p-6 transition-all hover:border-bone/40 hover:bg-ink md:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-display text-5xl text-bone md:text-6xl">
                    {plan.meals}
                  </span>
                  <span className="text-mono text-bone/50">{plan.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-display text-2xl text-bone md:text-3xl">
                    {plan.price}
                  </span>
                  <span className="ms-2 text-mono text-bone/40">
                    {plan.currency}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-mono text-bone/40">{dict.meals.footnote}</p>
      </div>
    </section>
  );
}
