import { useEffect, useState } from "react";

import construction from "@/assets/sector-construction.jpg";
import agriculture from "@/assets/sector-agriculture.jpg";
import energy from "@/assets/sector-energy.jpg";
import technology from "@/assets/sector-technology.jpg";

type Scene = {
  image: string;
  index: string;
  title: string;
  body: string;
  metrics: { label: string; value: string }[];
};

const scenes: Scene[] = [
  {
    image: construction,
    index: "01",
    title: "Construction and Infrastructure",
    body: "Civil engineering, commercial build programmes and infrastructure delivery executed to specification, on schedule and in full compliance.",
    metrics: [
      { label: "Disciplines", value: "Civil, Structural, Commercial" },
      { label: "Delivery model", value: "Principal contractor" },
    ],
  },
  {
    image: technology,
    index: "02",
    title: "Technology and Artificial Intelligence",
    body: "Enterprise automation, data operations and applied artificial intelligence delivered through the NesAI Nova division.",
    metrics: [
      { label: "Division", value: "NesAI Nova" },
      { label: "Focus", value: "Data operations, model evaluation" },
    ],
  },
  {
    image: agriculture,
    index: "03",
    title: "Agriculture and Food Production",
    body: "Commercial poultry production and sustainable farming systems that strengthen regional food security and rural employment.",
    metrics: [
      { label: "Operating company", value: "Sinewami Poultry" },
      { label: "Mandate", value: "Food security, local supply" },
    ],
  },
  {
    image: energy,
    index: "04",
    title: "Energy, Logistics and Engineering",
    body: "Energy project development, supply chain operations and technical engineering services across Southern African corridors.",
    metrics: [
      { label: "Scope", value: "Feasibility to operations" },
      { label: "Coverage", value: "Mpumalanga, Gauteng, SADC" },
    ],
  },
];

const DURATION = 6500;

export function SectorReel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const started = Date.now();
    const tick = window.setInterval(() => {
      setProgress(Math.min(1, (Date.now() - started) / DURATION));
    }, 60);
    const next = window.setTimeout(() => {
      setActive((i) => (i + 1) % scenes.length);
    }, DURATION);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(next);
    };
  }, [active]);

  const scene = scenes[active] ?? scenes[0]!;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-navy shadow-[var(--shadow-lift)]">
      {/* Image area. On mobile this only holds the photo and the small
          "running continuously" badge, so there is no text to collide with.
          From the sm breakpoint up, the full caption overlays the image. */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
        {scenes.map((s, i) => (
          <img
            key={s.title}
            src={s.image}
            alt={s.title}
            width={1600}
            height={900}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
            style={{
              opacity: i === active ? 1 : 0,
              animation: i === active ? "ken-burns 9s linear forwards" : "none",
            }}
          />
        ))}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.24 0.052 265 / 55%) 0%, oklch(0.24 0.052 265 / 15%) 40%, oklch(0.24 0.052 265 / 78%) 100%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 flex items-center gap-3 p-4 sm:p-10">
          <span
            className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gold"
            style={{ animation: "pulse-dot 2s infinite" }}
          />
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/80 sm:text-[10px] sm:tracking-[0.28em]">
            Group operations reel, running continuously
          </span>
        </div>

        {/* Desktop and tablet caption, overlaid on the image */}
        <div className="absolute inset-x-0 bottom-0 hidden max-w-xl p-6 sm:block sm:p-10">
          <div className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">
            Sector {scene.index}
          </div>
          <h3 className="mt-3 text-3xl text-white sm:text-4xl">{scene.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{scene.body}</p>
          <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
            {scene.metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {m.label}
                </dt>
                <dd className="text-sm text-white/90">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Mobile-only caption. Flows in normal document order below the
          photo, so it can never overlap it regardless of text length. */}
      <div className="p-5 sm:hidden">
        <div className="text-[10px] uppercase tracking-[0.24em] text-gold-soft">
          Sector {scene.index}
        </div>
        <h3 className="mt-2 text-2xl text-white">{scene.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{scene.body}</p>
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
          {scene.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {m.label}
              </dt>
              <dd className="text-sm text-white/90">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 sm:grid-cols-4">
        {scenes.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            className="group relative px-4 py-4 text-left transition-colors hover:bg-white/5"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{s.index}</div>
            <div
              className={`mt-1 text-xs leading-snug ${i === active ? "text-white" : "text-white/60"}`}
            >
              {s.title}
            </div>
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
              <span
                className="block h-full bg-gold transition-[width] duration-100 ease-linear"
                style={{ width: i === active ? `${progress * 100}%` : "0%" }}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
