"use client";

import { useEffect, useRef, useState } from "react";

// Counts a figure such as "700+" up from zero the first time it scrolls into view. The final value is
// rendered on the server, so it shows as-is without JavaScript or when the visitor prefers reduced motion.
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!target || !el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Leave figures that are already on screen alone rather than flashing them back to zero.
    const box = el.getBoundingClientRect();
    if (box.top < innerHeight && box.bottom > 0) return;

    setShown(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setShown(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {shown}
        {suffix}
      </span>
    </span>
  );
}
