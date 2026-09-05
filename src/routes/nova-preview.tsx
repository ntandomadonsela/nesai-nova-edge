import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  Sparkles,
  Wallet,
  Clock,
  ListChecks,
  Send,
  Upload,
  BookOpen,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import novaLogo from "@/assets/nesai-nova-logo.png";

export const Route = createFileRoute("/nova-preview")({
  head: () => ({
    meta: [
      { title: "NesAI Nova Platform Preview (Internal)" },
      {
        name: "description",
        content:
          "Internal preview of the NesAI Nova learning vault, AI copilot and AI trainer workspace. Not part of the public site.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "NesAI Nova Platform Preview" },
      {
        property: "og:description",
        content: "Internal preview of the NesAI Nova student and AI trainer platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreviewPage,
});

/* ------------------------------- sample data ------------------------------ */

const resources = [
  { title: "Mathematics Paper 1", subject: "Mathematics", type: "Past paper", year: 2025, ai: true },
  { title: "Mathematics Paper 1 Memo", subject: "Mathematics", type: "Memo", year: 2025, ai: true },
  {
    title: "Physical Sciences Paper 2",
    subject: "Physical Sciences",
    type: "Past paper",
    year: 2024,
    ai: true,
  },
  { title: "Law of Contract Notes", subject: "Law", type: "Notes", year: 2025, ai: false },
  { title: "Financial Accounting Tutorial", subject: "Accounting", type: "Notes", year: 2024, ai: true },
  { title: "Life Sciences Paper 1", subject: "Life Sciences", type: "Past paper", year: 2023, ai: false },
];

const subjects = ["Mathematics", "Physical Sciences", "Law", "Accounting"] as const;

const sampleReplies: Record<string, string> = {
  Mathematics:
    "Before I answer, tell me what you already know. You have a quadratic in standard form. What does the discriminant tell you about the number of real roots, and what is its value here?",
  "Physical Sciences":
    "Let us reason it out together. Which forces act on the block while it slides, and which direction does each one point? Draw the free body diagram first and describe it to me.",
  Law: "Start with the elements. For a valid contract we need consensus, capacity, legality, possibility and formalities. Which of those do you think is in question on these facts, and why?",
  Accounting:
    "Work from the accounting equation. If the asset increases, what must happen on the other side of the entry, and which account carries it?",
};

const transactions = [
  { date: "2026-09-03", amount: 148.5, status: "cleared" },
  { date: "2026-09-02", amount: 96.0, status: "cleared" },
  { date: "2026-09-01", amount: 132.75, status: "pending QA" },
  { date: "2026-08-28", amount: 1000.0, status: "paid out" },
];

const task = {
  systemPrompt:
    "You are a customer support assistant for a South African bank. Answer the customer clearly, never invent product terms, and escalate anything involving suspected fraud.",
  responseA:
    "Your card has been blocked as a precaution. Please visit any branch with your identity document and we will reissue it within five working days.",
  responseB:
    "No problem, I have unblocked the card for you right now and removed the security hold, so you can carry on using it immediately.",
};

/* --------------------------------- helpers -------------------------------- */

const zar = (n: number) =>
  new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(n);

function SectionHeading({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div>
      <h2 className="text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

function PreviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <img src={novaLogo} alt="NesAI Nova" className="h-16 w-auto sm:h-20" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Internal preview
              </div>
              <div className="text-lg text-navy">Platform test round</div>
            </div>
          </div>
          <span
            className="self-start rounded-md px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white"
            style={{ background: "var(--gradient-nova)" }}
          >
            Not linked from the public site
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        <div className="card-corporate p-8">
          <h1 className="text-[clamp(26px,3.4vw,40px)] leading-tight text-navy">
            NesAI Nova platform preview
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            This page brings the student library, AI copilot and AI trainer workspace into the
            NesAI Nova design language for review. Everything shown here uses sample content, so
            nothing is saved and no live accounts, payments or model calls are involved.
          </p>
        </div>

        <Tabs defaultValue="vault">
          <TabsList className="flex-wrap">
            <TabsTrigger value="vault">The Vault</TabsTrigger>
            <TabsTrigger value="copilot">AI Copilot</TabsTrigger>
            <TabsTrigger value="workspace">Trainer workspace</TabsTrigger>
            <TabsTrigger value="wallet">Trainer wallet</TabsTrigger>
          </TabsList>

          <TabsContent value="vault" className="mt-8 space-y-6">
            <SectionHeading
              title="The Vault"
              blurb="Past papers, memos and study notes organised by subject, with student uploads folded into the same library."
            />
            <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <Upload className="mx-auto h-6 w-6" style={{ color: "var(--nova)" }} />
              <p className="mt-3 text-sm text-navy">Drop a paper, memo or set of notes here</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Preview only, uploads are disabled in this test round
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((r) => (
                <Card key={r.title} className="card-corporate">
                  <CardHeader className="flex-row items-start justify-between space-y-0 pb-2">
                    <FileText className="h-7 w-7" style={{ color: "var(--nova)" }} />
                    {r.ai && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Copilot ready
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-1 text-base text-navy">{r.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {r.subject} · {r.type} · {r.year}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="copilot" className="mt-8 space-y-6">
            <SectionHeading
              title="AI Copilot"
              blurb="A subject specific tutor that leads with questions rather than answers, grounded in the material sitting in the vault."
            />
            <CopilotDemo />
          </TabsContent>

          <TabsContent value="workspace" className="mt-8 space-y-6">
            <SectionHeading
              title="Trainer workspace"
              blurb="AI trainers compare a response pair against a written rubric, score each criterion and leave notes for quality review."
            />
            <WorkspaceDemo />
          </TabsContent>

          <TabsContent value="wallet" className="mt-8 space-y-6">
            <SectionHeading
              title="Trainer wallet"
              blurb="Earnings clear after quality review and pay out automatically once the threshold is reached."
            />
            <WalletDemo />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6 text-[11px] text-muted-foreground">
          Internal preview for NesAI Nova, a division of Nesma Holdings (Pty) Ltd. Sample content
          only.
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------- copilot --------------------------------- */

type Msg = { role: "student" | "tutor"; text: string };

function CopilotDemo() {
  const [subject, setSubject] = useState<string>(subjects[0]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "tutor",
      text: "Ask me about anything in your vault. I will guide you to the answer step by step rather than handing it over.",
    },
  ]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [
      ...m,
      { role: "student", text },
      { role: "tutor", text: sampleReplies[subject] ?? sampleReplies.Mathematics! },
    ]);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSubject(s)}
              className="rounded-md border px-3 py-2 text-xs transition-colors"
              style={
                subject === s
                  ? { borderColor: "var(--nova)", color: "var(--nova)" }
                  : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
              }
            >
              {s}
            </button>
          ))}
        </div>

        <Card className="card-corporate">
          <CardContent className="space-y-4 p-6">
            <div className="max-h-[360px] space-y-4 overflow-y-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "student" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className="max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed"
                    style={
                      m.role === "student"
                        ? { background: "var(--gradient-nova)", color: "white" }
                        : { background: "var(--nova-tint)", color: "var(--navy)" }
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 border-t border-border pt-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={`Ask the ${subject} tutor a question`}
                className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="button" onClick={send} className="gap-2">
                <Send className="h-4 w-4" /> Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="card-corporate h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm text-navy">
            <BookOpen className="h-4 w-4" style={{ color: "var(--nova)" }} /> Sources in use
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>{subject} Paper 1, 2025</p>
          <p>{subject} memorandum, 2025</p>
          <p>Class notes uploaded by you</p>
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------- workspace -------------------------------- */

function WorkspaceDemo() {
  const [scores, setScores] = useState({ tone: 5, accuracy: 5, safety: 5 });
  const [touched, setTouched] = useState({ tone: false, accuracy: false, safety: false });
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const criteria: { key: keyof typeof scores; label: string; hint: string }[] = [
    { key: "tone", label: "Tone", hint: "Is the register appropriate and respectful?" },
    { key: "accuracy", label: "Accuracy", hint: "Is the factual and reasoning content correct?" },
    { key: "safety", label: "Safety", hint: "Does it avoid unsafe or policy breaching content?" },
  ];

  const ready = Object.values(touched).every(Boolean);

  if (submitted) {
    return (
      <Card className="card-corporate">
        <CardContent className="space-y-4 p-10 text-center">
          <p className="text-navy">Review submitted. R32.50 added to your pending balance.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setTouched({ tone: false, accuracy: false, safety: false });
              setNotes("");
            }}
          >
            Load another task
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <Card className="card-corporate">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">System prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-navy">{task.systemPrompt}</p>
        </CardContent>
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        <Card className="card-corporate card-edge-nova">
          <CardHeader className="pb-2">
            <Badge>Response A</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-navy">{task.responseA}</p>
          </CardContent>
        </Card>
        <Card className="card-corporate card-edge-nova">
          <CardHeader className="pb-2">
            <Badge variant="secondary">Response B</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-navy">{task.responseB}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="card-corporate">
        <CardContent className="space-y-6 p-6">
          {criteria.map(({ key, label, hint }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-navy">{label}</Label>
                <span className="text-sm" style={{ color: "var(--nova)" }}>
                  {scores[key]} out of 10
                </span>
              </div>
              <Slider
                min={0}
                max={10}
                step={1}
                value={[scores[key]]}
                onValueChange={(v) => {
                  setScores((s) => ({ ...s, [key]: v[0] ?? 5 }));
                  setTouched((t) => ({ ...t, [key]: true }));
                }}
              />
              <p className="text-xs text-muted-foreground">{hint}</p>
            </div>
          ))}

          <div>
            <Label className="mb-2 block text-navy">Notes for quality review</Label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Anything a reviewer should know about your scoring"
              className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <Button className="w-full" disabled={!ready} onClick={() => setSubmitted(true)}>
            {ready ? "Submit review" : "Move every slider to submit"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

/* --------------------------------- wallet --------------------------------- */

function WalletDemo() {
  const cleared = 744.5;
  const pending = 132.75;
  const threshold = 1000;
  const pct = Math.min(100, (cleared / threshold) * 100);

  const cards = [
    { label: "Cleared funds", value: zar(cleared), icon: Wallet },
    { label: "Pending review", value: zar(pending), icon: Clock },
    { label: "Tasks completed", value: "128", icon: ListChecks },
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-3">
        {cards.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="card-corporate">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
              <Icon className="h-4 w-4" style={{ color: "var(--nova)" }} />
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-navy">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="card-corporate">
        <CardHeader>
          <CardTitle className="text-sm text-navy">Next payout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Progress value={pct} />
          <p className="text-xs text-muted-foreground">
            {zar(threshold - cleared)} more clears until the next automatic payout of{" "}
            {zar(threshold)}.
          </p>
        </CardContent>
      </Card>

      <Card className="card-corporate">
        <CardHeader>
          <CardTitle className="text-sm text-navy">Transaction history</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="py-2 font-medium">Date</th>
                  <th className="py-2 font-medium">Amount</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.date + t.amount} className="border-b border-border/60 last:border-0">
                    <td className="py-3 text-muted-foreground">
                      {new Date(t.date).toLocaleDateString("en-ZA")}
                    </td>
                    <td className="py-3 text-navy">{zar(t.amount)}</td>
                    <td className="py-3">
                      <Badge variant="secondary">{t.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
