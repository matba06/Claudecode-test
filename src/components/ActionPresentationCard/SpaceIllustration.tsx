import type { SVGProps } from "react";

/**
 * SpaceIllustration — the decorative astronaut/space scene shown on the right of
 * the ActionPresentationCard. Authored as a self-contained inline SVG (black
 * line-art on transparent) so it renders crisply on every card background and
 * ships with no external/expiring assets.
 */
export function SpaceIllustration({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 175 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g
        stroke="#000000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Planet horizon — two concentric arcs across the bottom */}
        <path d="M2 84 A 92 92 0 0 1 173 84" />
        <path d="M16 86 A 78 78 0 0 1 165 73" fill="none" strokeWidth={1.5} />

        {/* Small craters / moons on the surface */}
        <circle cx="42" cy="80" r="6" />
        <circle cx="132" cy="79" r="4.5" />
        <circle cx="119" cy="74" r="2.2" strokeWidth={1.5} />

        {/* Ringed planet (Saturn) top-right */}
        <circle cx="150" cy="34" r="8" fill="#ffffff" />
        <ellipse
          cx="150"
          cy="34"
          rx="13"
          ry="4.5"
          transform="rotate(-20 150 34)"
          strokeWidth={1.5}
        />

        {/* Crescent moon, left */}
        <path
          d="M24 26 a 9 9 0 1 0 6 14 a 7 7 0 1 1 -6 -14 z"
          fill="#ffffff"
          strokeWidth={1.5}
        />

        {/* Sparkle stars */}
        <path d="M122 17 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6 z" fill="#000000" strokeWidth={1} />
        <path d="M44 12 l1.3 2.7 2.7 1.3 -2.7 1.3 -1.3 2.7 -1.3 -2.7 -2.7 -1.3 2.7 -1.3 z" fill="#000000" strokeWidth={1} />
        <path d="M163 58 l1.1 2.3 2.3 1.1 -2.3 1.1 -1.1 2.3 -1.1 -2.3 -2.3 -1.1 2.3 -1.1 z" fill="#000000" strokeWidth={1} />

        {/* Flag the astronaut holds */}
        <path d="M86 24 v34" strokeWidth={2} />
        <path d="M86 25 h13 l-3 4 3 4 h-13 z" fill="#f55daf" strokeWidth={1.5} />

        {/* Astronaut backpack */}
        <rect x="64" y="42" width="12" height="20" rx="4" fill="#ffffff" />

        {/* Astronaut body / suit */}
        <path
          d="M70 46 q12 -2 18 4 q4 4 3 12 q-1 6 -3 10 h-22 q-3 -8 -2 -16 q1 -10 6 -14 z"
          fill="#ffffff"
        />
        {/* Arm holding the flag */}
        <path d="M84 52 q5 -4 3 -10" fill="none" />
        {/* Bent legs (sitting) */}
        <path d="M66 70 q-4 4 -2 10" fill="none" />
        <path d="M82 72 q3 4 1 9" fill="none" />

        {/* Helmet */}
        <circle cx="74" cy="34" r="14" fill="#ffffff" />
        {/* Visor */}
        <rect x="66" y="28" width="16" height="13" rx="6.5" fill="#000000" />
        {/* Visor highlight */}
        <path d="M70 32 q3 -2 6 -1" stroke="#ffffff" strokeWidth={1.5} />
      </g>
    </svg>
  );
}

export default SpaceIllustration;
