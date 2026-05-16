import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** When true, render only the W mark (no wordmark) with a tight viewBox */
  markOnly?: boolean;
  outline?: boolean;
};

/**
 * Alpha Gym wordmark — dagger-W mark + "ALPHA" lockup.
 * The mark-only mode uses a tight viewBox so the W aligns flush
 * with adjacent text in the nav.
 */
export function AlphaLogo({ className, markOnly, outline }: Props) {
  const fill = outline ? "none" : "currentColor";
  const stroke = outline ? "currentColor" : "none";
  const sw = outline ? 1.4 : 0;

  if (markOnly) {
    return (
      <svg
        viewBox="20 23 200 130"
        className={cn("h-auto w-auto", className)}
        aria-label="Alpha"
      >
        <g
          fill={fill}
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="miter"
          strokeLinecap="square"
        >
          <path d="M20 25 L70 25 L120 150 L100 150 L60 50 L40 50 Z" />
          <path d="M220 25 L170 25 L120 150 L140 150 L180 50 L200 50 Z" />
          <path d="M75 35 L120 138 L165 35 L150 35 L120 100 L90 35 Z" />
          <path d="M117 60 L123 60 L123 120 L117 120 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 220"
      className={cn("h-auto w-auto", className)}
      aria-label="Alpha Gym"
    >
      <g
        fill={fill}
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin="miter"
        strokeLinecap="square"
      >
        <path d="M20 25 L70 25 L120 150 L100 150 L60 50 L40 50 Z" />
        <path d="M220 25 L170 25 L120 150 L140 150 L180 50 L200 50 Z" />
        <path d="M75 35 L120 138 L165 35 L150 35 L120 100 L90 35 Z" />
        <path d="M117 60 L123 60 L123 120 L117 120 Z" />
      </g>

      <text
        x="120"
        y="200"
        textAnchor="middle"
        fontFamily="var(--font-anton), 'Anton', sans-serif"
        fontSize="38"
        letterSpacing="3"
        fill={fill}
        stroke={stroke}
        strokeWidth={outline ? 0.8 : 0}
      >
        ALPHA
      </text>
    </svg>
  );
}
