import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function Membership({ dict }: Props) {
  return (
    <section id="membership" className="relative bg-coal py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeader
          eyebrow={dict.membership.eyebrow}
          title={dict.membership.title}
          subtitle={dict.membership.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dict.membership.plans.map((plan, i) => (
            <Reveal key={i} delay={i * 0.1} fromY={50}>
              <div
                className={cn(
                  "group relative flex h-full flex-col border p-8 transition-all md:p-10",
                  plan.highlight
                    ? "border-bone bg-bone text-ink"
                    : "border-bone/15 bg-ink hover:border-bone/40",
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-px left-0 right-0 mx-auto w-fit -translate-y-1/2 bg-ink px-4 py-1">
                    <span className="text-mono text-bone">★ Best Value</span>
                  </div>
                )}

                <p
                  className={cn(
                    "text-mono",
                    plan.highlight ? "text-ink/60" : "text-bone/50",
                  )}
                >
                  {plan.name}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-display text-6xl md:text-7xl",
                      plan.highlight ? "text-ink" : "text-bone",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-mono",
                      plan.highlight ? "text-ink/50" : "text-bone/40",
                    )}
                  >
                    {dict.membership.currency}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.highlight ? "text-ink/60" : "text-bone/50",
                  )}
                >
                  {plan.period}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.perks.map((perk, j) => (
                    <li
                      key={j}
                      className={cn(
                        "flex items-start gap-3 text-sm",
                        plan.highlight ? "text-ink/80" : "text-bone/70",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-2 inline-block h-px w-3 flex-shrink-0",
                          plan.highlight ? "bg-ink/60" : "bg-bone/50",
                        )}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-10 inline-flex items-center justify-center border px-6 py-3 text-mono transition-all",
                    plan.highlight
                      ? "border-ink bg-ink text-bone hover:bg-transparent hover:text-ink"
                      : "border-bone/40 text-bone hover:border-bone hover:bg-bone hover:text-ink",
                  )}
                >
                  {dict.membership.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
