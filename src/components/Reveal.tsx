"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  /** Distance to translate from (in px). Default 40. */
  fromY?: number;
  /** When true, only fade (no Y translation) */
  fadeOnly?: boolean;
};

/**
 * Scroll-reveal wrapper. Uses native IntersectionObserver + CSS transitions
 * so it works reliably on every browser including mobile WebKit (where
 * motion/react's whileInView can fail).
 *
 * Failsafe: forces visibility after 5s even if the observer never fires.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  fromY = 40,
  fadeOnly = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Failsafe — if IntersectionObserver never fires (broken/disabled),
    // show the element after 1.5s so the user never stares at blank space.
    const failsafe = window.setTimeout(() => setVisible(true), 1500);

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      clearTimeout(failsafe);
      return;
    }

    // If the element already overlaps the viewport at mount (e.g. above-the-fold,
    // or revealed by the intro completing), trigger immediately. Mobile Safari
    // sometimes skips the initial IntersectionObserver callback after a layout
    // shift, so we don't rely on it for already-visible content.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setVisible(true);
      clearTimeout(failsafe);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            clearTimeout(failsafe);
            obs.disconnect();
            break;
          }
        }
      },
      {
        // Fire as soon as any pixel enters the viewport. Negative rootMargin
        // and non-zero thresholds are unreliable on iOS Safari during
        // momentum scroll.
        rootMargin: "0px",
        threshold: 0,
      },
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal",
        fadeOnly && "scroll-reveal-fade",
        visible && "is-visible",
        className,
      )}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-from-y": `${fromY}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
