"use client";

import { useEffect, useState } from "react";

const STAGE_DRAW = 1500; // ms — outline stroke draws in
const STAGE_FILL = 900; // ms — outline → filled W, ALPHA fades in
const STAGE_HOLD = 600; // ms — let the logo breathe
const STAGE_EXIT = 700; // ms — overlay fades out
const TOTAL = STAGE_DRAW + STAGE_FILL + STAGE_HOLD + STAGE_EXIT;

export function IntroAnimation() {
  // SSR renders the overlay opaque from the very first paint, so the user
  // never sees Hero/Nav flash. Once playback completes we unmount it.
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("intro-playing");

    const finish = () => {
      setShow(false);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("intro-playing");
      document.documentElement.classList.add("intro-done");
      window.dispatchEvent(new Event("alpha-intro-done"));
    };

    // Auto-finish after CSS animation completes
    const timer = setTimeout(finish, TOTAL);

    // Skip on click/tap (anywhere)
    const skip = () => {
      clearTimeout(timer);
      finish();
    };
    const overlay = document.getElementById("alpha-intro-overlay");
    overlay?.addEventListener("click", skip, { once: true });

    return () => {
      clearTimeout(timer);
      overlay?.removeEventListener("click", skip);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("intro-playing");
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="alpha-intro-overlay"
      role="presentation"
      className="alpha-intro fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Vignette glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,242,236,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="alpha-intro-stage relative w-[min(70vw,460px)] text-bone">
        <svg viewBox="0 0 240 280" className="h-auto w-full" aria-hidden>
          {/* Outline that draws via CSS */}
          <g
            className="alpha-intro-outline"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinejoin="miter"
            strokeLinecap="square"
          >
            <path
              className="alpha-intro-stroke alpha-intro-stroke-1"
              d="M20 25 L70 25 L120 150 L100 150 L60 50 L40 50 Z"
            />
            <path
              className="alpha-intro-stroke alpha-intro-stroke-2"
              d="M220 25 L170 25 L120 150 L140 150 L180 50 L200 50 Z"
            />
            <path
              className="alpha-intro-stroke alpha-intro-stroke-3"
              d="M75 35 L120 138 L165 35 L150 35 L120 100 L90 35 Z"
            />
            <path
              className="alpha-intro-stroke alpha-intro-stroke-4"
              d="M117 60 L123 60 L123 120 L117 120 Z"
            />
          </g>

          {/* Filled W (fades in after outline draws) */}
          <g className="alpha-intro-fill" fill="currentColor">
            <path d="M20 25 L70 25 L120 150 L100 150 L60 50 L40 50 Z" />
            <path d="M220 25 L170 25 L120 150 L140 150 L180 50 L200 50 Z" />
            <path d="M75 35 L120 138 L165 35 L150 35 L120 100 L90 35 Z" />
            <path d="M117 60 L123 60 L123 120 L117 120 Z" />
          </g>

          {/* ALPHA wordmark */}
          <text
            className="alpha-intro-wordmark"
            x="120"
            y="215"
            textAnchor="middle"
            fontFamily="var(--font-anton), 'Anton', sans-serif"
            fontSize="40"
            letterSpacing="5"
            fill="currentColor"
          >
            ALPHA
          </text>

          {/* Underline */}
          <line
            className="alpha-intro-underline"
            x1="85"
            y1="232"
            x2="155"
            y2="232"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* Subline */}
          <text
            className="alpha-intro-subline"
            x="120"
            y="252"
            textAnchor="middle"
            fontFamily="var(--font-jetbrains), monospace"
            fontSize="9"
            letterSpacing="3"
            fill="currentColor"
            opacity="0.5"
          >
            SHARJAH · EST. 2023
          </text>
        </svg>
      </div>

      <span className="alpha-intro-skip absolute bottom-10 left-1/2 -translate-x-1/2 text-mono text-bone/40">
        Tap to skip
      </span>
    </div>
  );
}
