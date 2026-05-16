import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"
      }
    >
      <Reveal delay={0} fromY={20}>
        <p className="text-mono text-bone/50">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.1} fromY={30}>
        <h2 className="mt-4 text-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] text-bone">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2} fromY={20}>
          <p className="mt-6 max-w-2xl text-lg text-bone/60">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
