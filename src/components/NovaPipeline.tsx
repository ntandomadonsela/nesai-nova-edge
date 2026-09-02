import { useEffect, useState } from "react";

const stages = [
  {
    key: "ingest",
    label: "Ingest",
    detail: "Domain corpora, speech, imagery and enterprise documents received into a ring fenced workspace.",
  },
  {
    key: "annotate",
    label: "Annotate",
    detail: "Named entity, intent, segmentation, keypoint and diarisation tasks dispatched to vetted specialists.",
  },
  {
    key: "review",
    label: "Consensus review",
    detail: "Dual pass adjudication with inter annotator agreement scored against gold standard items.",
  },
  {
    key: "rlhf",
    label: "Preference and rubric grading",
    detail: "Pairwise ranking and multi dimensional rubric scoring across accuracy, tone, safety and format.",
  },
  {
    key: "deliver",
    label: "Deliver",
    detail: "Structured, versioned datasets released under POPIA and GDPR governance with a full audit trail.",
  },
];

const feedTemplates = [
  { task: "NER batch 4192", detail: "Commercial contracts, isiZulu and English", state: "Adjudicated" },
  { task: "Pairwise rank 8871", detail: "Response A preferred, rubric 4.6 of 5", state: "Scored" },
  { task: "Speech alignment 2210", detail: "Sesotho, 42 minutes, timestamped", state: "Verified" },
  { task: "Red team suite 118", detail: "37 adversarial prompts, 4 guardrail gaps", state: "Escalated" },
  { task: "Document AI 5540", detail: "Key value extraction, 1 284 invoices", state: "Released" },
  { task: "SFT exemplars 903", detail: "STEM reasoning, gold standard set", state: "Approved" },
];

export function NovaPipeline() {
  const [stage, setStage] = useState(0);
  const [feed, setFeed] = useState(() => feedTemplates.slice(0, 4));
  const [counter, setCounter] = useState(18342);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStage((s) => (s + 1) % stages.length);
      setFeed((f) => {
        const next = feedTemplates[(feedTemplates.findIndex((t) => t.task === f[0]?.task) + 5) % feedTemplates.length]!;
        return [next, ...f].slice(0, 4);
      });
      setCounter((c) => c + Math.floor(40 + Math.random() * 160));
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="card-corporate overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-[var(--nova-tint)] px-5 py-3">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--nova)", animation: "pulse-dot 1.8s infinite" }}
          />
          <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            NesAI Nova Core, live annotation pipeline
          </span>
        </div>
        <div className="text-[11px] tracking-wide text-muted-foreground">
          Tasks completed today{" "}
          <span className="font-medium text-nova-gradient">{counter.toLocaleString("en-ZA")}</span>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-5">
        {stages.map((s, i) => {
          const done = i < stage;
          const live = i === stage;
          return (
            <div
              key={s.key}
              className="relative border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              style={{ background: live ? "var(--nova-tint)" : "transparent" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px]"
                  style={{
                    background: live || done ? "var(--gradient-nova)" : "var(--muted)",
                    color: live || done ? "white" : "var(--muted-foreground)",
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-xs font-medium tracking-wide">{s.label}</span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">{s.detail}</p>
              <span className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
                <span
                  className="block h-full transition-all duration-700"
                  style={{
                    width: live ? "100%" : done ? "100%" : "0%",
                    background: "var(--gradient-nova)",
                    opacity: live ? 1 : 0.35,
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border">
        {feed.map((row, i) => (
          <div
            key={`${row.task}-${i}`}
            className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3 last:border-b-0 transition-opacity"
            style={{ opacity: 1 - i * 0.18 }}
          >
            <div>
              <div className="text-xs font-medium">{row.task}</div>
              <div className="text-[11px] text-muted-foreground">{row.detail}</div>
            </div>
            <span
              className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]"
              style={{ background: "var(--nova-tint)", color: "var(--nova)" }}
            >
              {row.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
