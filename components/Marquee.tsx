import type { ReactNode } from "react";

// Continuously sliding strip. The track holds two identical halves and slides by one half, so it loops
// seamlessly; `repeats` copies the items within each half so a half is always wider than the screen.
// Copies are hidden from screen readers and dropped when the visitor prefers reduced motion.
export function Marquee({
  items,
  repeats = 2,
  className = "",
}: {
  items: ReactNode[];
  repeats?: number;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <ul key={half} className="marquee-set" aria-hidden={half === 1 ? true : undefined}>
            {Array.from({ length: repeats }, (_, r) =>
              items.map((item, i) => (
                <li
                  key={`${r}-${i}`}
                  className={r > 0 ? "marquee-repeat" : undefined}
                  aria-hidden={r > 0 ? true : undefined}
                >
                  {item}
                </li>
              )),
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}
