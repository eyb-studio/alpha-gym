"use client";

import { AlphaLogo } from "@/components/AlphaLogo";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import Link from "next/link";

type Props = { dict: Dictionary; lang: Locale };

export function Footer({ dict, lang }: Props) {
  const otherLocale: Locale = lang === "en" ? "ar" : "en";

  return (
    <footer className="relative border-t border-bone/10 bg-ink pb-10 pt-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <AlphaLogo markOnly className="h-10 w-10 text-bone" />
              <span className="text-display text-2xl tracking-wider text-bone">
                ALPHA
              </span>
            </div>
            <p className="mt-6 max-w-xs text-bone/50">
              {dict.footer.tagline_small}
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <p className="text-mono text-bone/40">Location</p>
            <address className="mt-3 not-italic leading-relaxed text-bone/80">
              {dict.footer.address_line_1}
              <br />
              {dict.footer.address_line_2}
            </address>
          </div>

          {/* Hours + Phone */}
          <div className="md:col-span-4">
            <p className="text-mono text-bone/40">{dict.footer.hours_label}</p>
            <p className="mt-3 text-bone/80">{dict.footer.hours_value}</p>

            <p className="mt-6 text-mono text-bone/40">
              {dict.footer.phone_label}
            </p>
            <a
              href={`tel:${dict.cta.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-block text-display text-2xl text-bone hover:underline"
            >
              {dict.cta.phone}
            </a>

            <p className="mt-6 text-mono text-bone/40">
              {dict.footer.rating_label}
            </p>
            <p className="mt-2 text-bone/80">{dict.footer.rating_value}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 md:flex-row md:items-center">
          <p className="text-mono text-bone/40">{dict.footer.rights}</p>
          <Link
            href={`/${otherLocale}`}
            className="text-mono text-bone/40 transition-colors hover:text-bone"
          >
            {lang === "en" ? "العربية" : "English"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
