import type { CSSProperties } from "react";

const nodes = [
  { icon: "brand-communication", label: "Branding" },
  { icon: "design-thinking", label: "Design Thinking" },
  { icon: "analytics", label: "Analytics" },
  { icon: "ai-cloud", label: "AI Solutions" },
  { icon: "strategy-roadmap", label: "Strategy" },
  { icon: "sustainable", label: "Sustainability" },
];

// MIWA's capabilities orbiting its STEAM core. Nodes sit on the ring by rotating out from the centre;
// each label counter-rotates so it stays upright while the ring turns.
export function SteamOrbit() {
  return (
    <div
      className="orbit"
      role="img"
      aria-label={`STEAM at the core of MIWA, surrounded by ${nodes.map((n) => n.label).join(", ")}`}
    >
      <div className="orbit-ring" aria-hidden="true">
        {nodes.map((n, i) => (
          <div key={n.icon} className="orbit-node" style={{ "--a": `${(360 / nodes.length) * i - 90}deg` } as CSSProperties}>
            <div className="orbit-node-inner">
              <img src={`/icons/${n.icon}.svg`} alt="" width={64} height={64} />
              <span>{n.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="orbit-hub" aria-hidden="true">
        <img src="/icons/steam.svg" alt="" width={88} height={88} />
        <strong>S.T.E.A.M</strong>
        <span>Science · Tech · Engineering · Arts · Maths</span>
      </div>
    </div>
  );
}
