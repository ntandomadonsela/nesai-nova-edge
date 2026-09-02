import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { NovaPipeline } from "@/components/NovaPipeline";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import novaLogo from "@/assets/nesai-nova-logo.png.asset.json";
import nesmaLogo from "@/assets/nesma-logo.png.asset.json";

export const Route = createFileRoute("/nesai-nova")({
  head: () => ({
    meta: [
      { title: "NesAI Nova | AI Training Data, Annotation and RLHF Operations" },
      {
        name: "description",
        content:
          "NesAI Nova, the artificial intelligence division of Nesma Holdings, delivers data collection, semantic annotation, RLHF evaluation and managed AI trainer operations.",
      },
      { property: "og:title", content: "NesAI Nova | Applied AI Data Operations" },
      {
        property: "og:description",
        content:
          "Training data generation, labelling, RLHF and managed AI trainer teams delivered from South Africa at enterprise standard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NovaPage,
});

const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Platform", href: "#platform" },
  { label: "Operations", href: "#operations" },
];

const pillars = [
  {
    n: "01",
    title: "Data Collection and Generation",
    body: "Sourcing and creation of high value training data across text, speech, image and multimodal formats, including low resource African languages, domain specific corpora and synthetic augmentation under strict provenance control.",
    points: [
      "Multilingual text and speech capture",
      "Image, video and document collection",
      "Prompt and response authoring",
      "Consent, licensing and provenance records",
    ],
  },
  {
    n: "02",
    title: "Data Labelling and Semantic Annotation",
    body: "Precision annotation delivered by trained specialists working to written guidelines, calibrated rubrics and layered quality control, producing datasets that hold up under model training and audit.",
    points: [
      "Named entity and intent annotation",
      "Segmentation, bounding boxes and keypoints",
      "Transcription, diarisation and timestamping",
      "Taxonomy design and gold standard sets",
    ],
  },
  {
    n: "03",
    title: "Reinforcement Learning from Human Feedback and Evaluation",
    body: "Human preference data and structured model evaluation that improve alignment, factual accuracy and safety, from pairwise ranking through to adversarial red teaming and release readiness reporting.",
    points: [
      "Pairwise and rubric based preference ranking",
      "Supervised fine tuning exemplars",
      "Red teaming and safety adjudication",
      "Benchmarking and evaluation reporting",
    ],
  },
  {
    n: "04",
    title: "Managed Workforce and AI Trainer Operations",
    body: "Dedicated AI trainer teams recruited, assessed, trained and managed by NesAI Nova, operating under enterprise governance with transparent throughput, quality and utilisation reporting.",
    points: [
      "Recruitment and competency assessment",
      "Continuous trainer certification",
      "Dedicated pods with named delivery leads",
      "Security cleared and confidential workflows",
    ],
  },
  {
    n: "05",
    title: "Proprietary Platform Technology, NesAI Nova Core",
    body: "Our in house delivery platform orchestrates task routing, quality scoring, reviewer consensus and client visibility, giving every engagement measurable control from ingestion through to delivery.",
    points: [
      "Automated task routing and workload balancing",
      "Inter annotator agreement scoring",
      "Client dashboards and audit trails",
      "API and secure data exchange",
    ],
  },
];

const operations = [
  { label: "Quality target", value: "98 percent plus" },
  { label: "Review layers", value: "Three stage" },
  { label: "Languages supported", value: "20 plus" },
  { label: "Delivery model", value: "Dedicated pods" },
];

function NovaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="nova" items={nav} />

      <section id="overview" className="aurora-nova relative overflow-hidden border-b border-border">
        <span
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: "var(--gradient-nova)" }}
        />
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-28 pt-36 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-36 lg:pt-44">
          <Reveal>
            <div>
              <span className="pill">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--gradient-nova)", animation: "pulse-dot 2.4s infinite" }}
                />
                A division of Nesma Holdings (Pty) Ltd
              </span>
              <img src={novaLogo.url} alt="NesAI Nova" className="mt-8 h-28 w-auto sm:h-36" />
              <h1 className="mt-9 text-[clamp(34px,4.6vw,58px)] leading-[1.06] text-navy">
                Human intelligence,
                <span className="text-nova-gradient block italic">engineered for machines.</span>
              </h1>
              <span className="mt-7 block h-[2px] w-24" style={{ background: "var(--gradient-nova)" }} />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                NesAI Nova builds, labels and evaluates the data that frontier and enterprise models
                depend on. We combine trained African talent, disciplined quality systems and our own
                delivery platform to produce training data that is accurate, traceable and ready for
                production use.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#services" className="btn-nova">
                  Explore our services
                </a>
                <a href="#contact" className="btn-nova-ghost">
                  Request a pilot
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <NovaPipeline />
          </Reveal>
        </div>
      </section>


      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--nova)" }}>
              Service pillars
            </div>
            <h2 className="mt-4 text-[clamp(28px,3.6vw,46px)] leading-[1.1] text-navy">
              Five capabilities, delivered as
              <span className="text-nova-gradient block italic">one accountable programme.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Engagements begin with a scoped pilot and scale into managed programmes with fixed
              quality thresholds, agreed throughput and continuous reporting.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <article className="card-corporate card-edge-nova h-full p-9">
                <div className="glyph-nova">{p.n}</div>
                <h3 className="mt-4 text-2xl leading-snug text-navy">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-navy">
                      <span
                        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--gradient-nova)" }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>


      <section
        id="platform"
        className="relative overflow-hidden border-y border-border"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 0%, color-mix(in oklab, var(--nova) 10%, transparent) 0%, transparent 65%), var(--nova-tint)",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--nova)" }}>
                NesAI Nova Core
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.6vw,46px)] leading-[1.1] text-navy">
                Automation that keeps
                <span className="text-nova-gradient block italic">quality measurable.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Every task entering our operation is routed automatically to a qualified trainer,
                scored against a rubric, sampled by a reviewer and reconciled through consensus
                before release. Clients see throughput, agreement scores and exception queues in
                real time, with a full audit trail retained for every record delivered.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                {operations.map((o) => (
                  <div key={o.label} className="bg-card px-6 py-5">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {o.label}
                    </div>
                    <div className="mt-1 font-serif text-2xl text-navy">{o.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>


          <Reveal delay={100}>
            <div className="card-corporate p-8">
              <h3 className="text-xl text-navy">How an engagement runs</h3>
              <ol className="mt-6 space-y-5">
                {[
                  ["Scoping", "Use case, data definitions, rubrics and success criteria agreed in writing."],
                  ["Calibration pilot", "A limited batch establishes baseline agreement and throughput."],
                  ["Scaled delivery", "Dedicated pods run to agreed volumes with layered review."],
                  ["Assurance", "Sampling, agreement scoring and remediation before each release."],
                  ["Reporting", "Quality, volume and utilisation reported on an agreed cadence."],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                    <span
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] text-white"
                      style={{ background: "var(--gradient-nova)" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-sm text-navy">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="operations" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--nova)" }}>
              Governance
            </div>
            <h2 className="mt-4 text-[clamp(28px,3.6vw,46px)] leading-[1.1] text-navy">
              Enterprise standards applied
              <span className="text-nova-gradient block italic">to every record.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Data protection",
              body: "Processing aligned to POPIA and GDPR principles, with role based access, confidentiality undertakings and secure client environments.",
            },
            {
              title: "Workforce ethics",
              body: "Fair pay, formal contracts, structured training and career progression for every AI trainer in our operation.",
            },
            {
              title: "Auditability",
              body: "Version controlled guidelines, immutable task histories and reviewer records supporting client and regulatory audit.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="card-corporate card-edge-nova h-full p-8">
                <h3 className="text-xl text-navy">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <section id="contact" className="border-t border-border" style={{ background: "var(--nova-tint)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--nova)" }}>
                Contact
              </div>
              <h2 className="mt-4 text-3xl text-navy sm:text-4xl">Start with a calibration pilot</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Send us your use case and data definitions. We will return a scoped pilot proposal
                with timelines, quality thresholds and commercial terms.
              </p>
              <div className="mt-8 space-y-2 text-sm text-navy">
                <div>info@nesmaholdings.co.za</div>
                <div>Republic of South Africa</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-corporate p-8">
              <ContactForm
                accent="nova"
                subjectPrefix="NesAI Nova enquiry"
                options={[
                  "Data collection and generation",
                  "Data labelling and semantic annotation",
                  "RLHF and model evaluation",
                  "Managed AI trainer operations",
                  "NesAI Nova Core platform",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
          <img src={nesmaLogo.url} alt="Nesma Holdings" className="h-14 w-auto" />
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-muted-foreground">
            <Link to="/">Nesma Holdings</Link>
            <a href="#services">Services</a>
            <a href="#platform">Platform</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} NesAI Nova, a division of Nesma Holdings (Pty) Ltd. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
