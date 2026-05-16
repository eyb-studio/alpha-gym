"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function Hero({ dict }: Props) {
  const ref = useRef<HTMLElement>(null);
  // Scroll-driven effects only — entrance animations are pure CSS (see globals.css)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Hero image with parallax */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 cinema-img bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 md:px-12"
      >
        <div className="mx-auto max-w-[1600px]">
          <p
            className="reveal text-mono text-bone/60"
            style={{ ["--reveal-delay" as string]: "0.1s" }}
          >
            {dict.hero.eyebrow}
          </p>

          <h1 className="mt-6 text-display text-bone">
            <span
              className="reveal reveal-from-y-up block text-[clamp(3.5rem,12vw,11rem)]"
              style={{ ["--reveal-delay" as string]: "0.25s" }}
            >
              {dict.hero.headline_top}
            </span>
            <span
              className="reveal reveal-from-y-up block text-[clamp(3.5rem,12vw,11rem)]"
              style={{ ["--reveal-delay" as string]: "0.45s" }}
            >
              {dict.hero.headline_bottom}
            </span>
          </h1>

          <p
            className="reveal mt-8 max-w-md text-lg text-bone/70 md:text-xl"
            style={{ ["--reveal-delay" as string]: "0.7s" }}
          >
            {dict.hero.tagline}
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ ["--reveal-delay" as string]: "0.9s" }}
          >
            <a
              href="#membership"
              className="group relative overflow-hidden border border-bone bg-bone px-8 py-4 text-mono text-ink transition-all hover:bg-transparent hover:text-bone"
            >
              <span className="relative z-10">{dict.hero.cta_primary}</span>
            </a>
            <a
              href="#contact"
              className="border border-bone/40 px-8 py-4 text-mono text-bone transition-all hover:border-bone"
            >
              {dict.hero.cta_secondary}
            </a>
          </div>
        </div>
      </motion.div>

      <div
        className="reveal-fade absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ ["--reveal-delay" as string]: "1.4s" }}
      >
        <span className="text-mono text-bone/40">{dict.hero.scroll}</span>
        <div className="h-8 w-px bg-bone/40 animate-scroll-pulse" />
      </div>
    </section>
  );
}
