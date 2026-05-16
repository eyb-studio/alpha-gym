"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AlphaLogo } from "./AlphaLogo";
import { cn } from "@/lib/cn";
import type { Dictionary, Locale } from "@/lib/dictionaries";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export function Nav({ lang, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const otherLocale: Locale = lang === "en" ? "ar" : "en";

  useEffect(() => {
    const onScroll = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(y > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    { href: "#disciplines", label: dict.nav.disciplines },
    { href: "#coaches", label: dict.nav.coaches },
    { href: "#meals", label: dict.nav.meals },
    { href: "#membership", label: dict.nav.membership },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        "reveal-fade fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-bone/10 bg-ink/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
      style={{ ["--reveal-delay" as string]: "0.1s" }}
    >
      <div className="w-full px-6 py-4 md:px-12">
        <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2.5 text-bone"
            aria-label="Alpha Gym home"
          >
            <AlphaLogo markOnly className="h-6 w-auto" />
            <span className="text-display text-xl leading-none tracking-[0.18em]">
              ALPHA
            </span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-mono text-bone/70 transition-colors hover:text-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLocale}`}
              className="text-mono text-bone/60 transition-colors hover:text-bone"
              aria-label={`Switch language to ${otherLocale.toUpperCase()}`}
            >
              {lang === "en" ? "ع" : "EN"}
            </Link>
            <a
              href="#membership"
              className="hidden border border-bone/40 px-5 py-2.5 text-mono text-bone transition-all hover:border-bone hover:bg-bone hover:text-ink sm:inline-block"
            >
              {dict.nav.join}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
