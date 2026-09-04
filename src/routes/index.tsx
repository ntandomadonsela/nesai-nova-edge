import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SectorReel } from "@/components/SectorReel";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import nesmaLogo from "@/assets/nesma-logo.webp";
import novaLogo from "@/assets/nesai-nova-logo.png";
import poultryLogo from "@/assets/sinewami-poultry-logo.png";
import foundationLogo from "@/assets/sinewami-foundation-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nesma Holdings (Pty) Ltd" },
      {
        name: "description",
        content:
          "Nesma Holdings is a South African investment and services group operating across construction, technology, agriculture, energy, logistics and engineering.",
      },
      { property: "og:title", content: "Nesma Holdings (Pty) Ltd" },
      {
        property: "og:description",
        content:
          "A diversified investment and services group delivering sustainable value across construction, technology, agriculture and energy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HoldingsPage,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Group companies", href: "#companies" },
  { label: "Performance", href: "#performance" },
];

const values = [
  { title: "Purpose led", body: "Every allocation is anchored in long term value and community outcome." },
  { title: "Integrity first", body: "Transparent dealings, accountable leadership and disciplined governance." },
  { title: "Africa focused", body: "Local operating insight applied with continental ambition." },
  { title: "Innovation applied", body: "From applied artificial intelligence to sustainable agriculture." },
];

const sectors = [
  {
    n: "01",
    title: "Construction and Infrastructure",
    body: "Civil engineering, commercial construction and infrastructure development delivered with precision, full compliance and lasting structural integrity.",
    tags: ["Civil engineering", "Commercial build", "Infrastructure"],
  },
  {
    n: "02",
    title: "Technology and Artificial Intelligence",
    body: "Enterprise data operations, intelligent automation and applied artificial intelligence, delivered through the NesAI Nova division.",
    tags: ["Data operations", "Enterprise automation", "Applied AI"],
  },
  {
    n: "03",
    title: "Agriculture and Food Production",
    body: "Commercial poultry production and sustainable farming systems that strengthen regional food security and create durable rural employment.",
    tags: ["Poultry production", "Sustainable farming", "Food security"],
  },
  {
    n: "04",
    title: "Energy",
    body: "Energy project development and delivery from feasibility through to operation, in service of a more energy secure continent.",
    tags: ["Project development", "Delivery", "Sustainability"],
  },
  {
    n: "05",
    title: "Logistics",
    body: "End to end supply chain operations enabling efficient movement of goods, raw materials and equipment across Southern African corridors.",
    tags: ["Supply chain", "Transport", "Distribution"],
  },
  {
    n: "06",
    title: "Engineering Services",
    body: "Technical engineering expertise deployed across infrastructure, industrial and commercial projects with safe, compliant and cost effective outcomes.",
    tags: ["Mechanical", "Electrical", "Project engineering"],
  },
];

const performance = [
  {
    value: "6+",
    label: "Years of operating growth",
    body: "Trusted relationships and delivered outcomes across South Africa and the broader continent since inception.",
  },
  {
    value: "50+",
    label: "Projects delivered",
    body: "Across construction, technology, agriculture and energy, each completed to defined quality and compliance standards.",
  },
  {
    value: "6",
    label: "Core industries",
    body: "A deliberately diversified portfolio structured for resilience and cross sector synergy.",
  },
  {
    value: "100%",
    label: "Commitment to quality",
    body: "Every division of the group operates to a single, uncompromising operating standard.",
  },
];

function HoldingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="holdings" items={nav} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory pt-36 pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 20%, color-mix(in oklab, var(--gold) 10%, transparent), transparent), radial-gradient(50% 45% at 85% 15%, color-mix(in oklab, var(--navy) 6%, transparent), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
              style={{ animation: "pulse-dot 2.4s infinite" }}
            />
            <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Middelburg, Mpumalanga · Pretoria, Gauteng · South Africa
            </span>
          </div>
          <h1 className="mt-7 max-w-4xl text-[clamp(32px,4.8vw,60px)] leading-[1.1] text-navy">
            Building the next industrial era in Africa,
            <span className="mt-2 block font-medium" style={{ color: "var(--gold)" }}>
              with discipline and intent.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Nesma Holdings (Pty) Ltd is a diversified investment and services group creating
            sustainable value across construction, technology, agriculture, energy, logistics and
            engineering.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#sectors"
              className="group inline-flex items-center gap-3 rounded-md bg-navy px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              Explore the portfolio
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[color-mix(in_oklab,var(--gold)_12%,transparent)]"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              Partner with the group
            </a>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {[
              ["Established", "2019"],
              ["Core industries", "Six"],
              ["Operating footprint", "SA and SADC"],
              ["Group standard", "One"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-serif text-lg font-semibold text-navy">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16">
            <SectorReel />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="eyebrow">Who we are</div>
            <h2 className="mt-4 text-[clamp(30px,4vw,50px)] text-navy">
              Built on integrity.
              <span className="block italic" style={{ color: "var(--gold)" }}>
                Directed by innovation.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              The group holds and develops operating companies across six industries, applying a
              single standard of governance, safety and commercial discipline to each.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our philosophy is rooted in measured progress, talent development and strategic
              partnership. We invest where operational capability, regulatory compliance and
              community benefit align, and we hold our businesses to results that can be evidenced.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title}>
                  <div className="rule-gold" />
                  <h3 className="mt-4 text-lg text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-corporate p-8">
              <img src={nesmaLogo} alt="Nesma Holdings" className="h-16 w-auto" />
              <div className="mt-8 rule-gold" />
              <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Office of the Managing Director
              </div>
              <div className="mt-2 text-2xl text-navy">Ntando Madonsela</div>
              <div className="text-[12px] uppercase tracking-[0.16em]" style={{ color: "var(--gold)" }}>
                Managing Director
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Directing group strategy across infrastructure, technology, agriculture and energy,
                with a mandate to build businesses that create durable value for the communities in
                which they operate.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
                {[
                  ["Head office", "Middelburg, Mpumalanga"],
                  ["Central office", "Pretoria, Gauteng"],
                  ["Email", "info@nesmaholdings.co.za"],
                 
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow">Core sectors</div>
          <h2 className="mt-4 max-w-2xl text-[clamp(30px,4vw,50px)] text-navy">
            Six industries. One operating standard.
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
            A selected portfolio of high impact sectors, each aligned with national development
            priorities and the group commitment to sustainable value creation.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <article className="card-corporate h-full p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div className="text-[11px] tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-xl text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section id="companies" className="mx-auto max-w-7xl px-6 py-24">
        <div className="eyebrow">Group companies</div>
        <h2 className="mt-4 text-[clamp(30px,4vw,50px)] text-navy">The businesses within the group</h2>
        <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
          Distinct operating entities, each with a defined mandate and domain expertise.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <a
              href="https://www.sinewamipoultry.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="card-corporate block h-full p-8 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Agricultural division
              </div>
              <img
                src={poultryLogo}
                alt="Sinewami Poultry (Pty) Ltd"
                loading="lazy"
                className="mt-4 h-20 w-auto max-w-full rounded-md object-contain sm:h-24"
              />
              <h3 className="mt-5 text-2xl text-navy">Sinewami Poultry (Pty) Ltd</h3>
              <p className="mt-1 text-sm italic text-muted-foreground">Eat fresh. Buy local.</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Commercial poultry production focused on food security, sustainable farming practice
                and rural employment, supplying fresh locally produced poultry into regional value
                chains.
              </p>
              <div className="mt-6 text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                Visit Sinewami Poultry
              </div>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <Link
              to="/nesai-nova"
              className="card-corporate block h-full p-8 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              style={{ background: "var(--nova-tint)" }}
            >
              <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--nova)" }}>
                Artificial intelligence division
              </div>
              <img src={novaLogo} alt="NesAI Nova" className="mt-4 h-14 w-auto" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                The data operations and applied artificial intelligence division of Nesma Holdings,
                delivering training data, human evaluation and managed AI trainer operations to
                model developers and enterprises.
              </p>
              <div className="mt-6 text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--nova)" }}>
                Enter the NesAI Nova division
              </div>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-corporate h-full p-8">
              <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Corporate social responsibility
              </div>
              <img
                src={foundationLogo}
                alt="Sinewami Foundation NPC"
                loading="lazy"
                className="mt-4 h-16 w-auto max-w-full object-contain sm:h-20"
              />
              <h3 className="mt-5 text-2xl text-navy">Sinewami Foundation NPC</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The non profit arm of the group, running targeted programmes in education, food
                security and rural upliftment so that commercial performance translates into
                community development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-corporate h-full p-8">
              <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Portfolio expansion
              </div>
              <h3 className="mt-3 text-2xl text-navy">Future divisions</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The group evaluates opportunities in media, financial services, property and direct
                investment. The diversified structure is designed to accommodate new ventures as
                strategic alignment allows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold-soft">Performance</div>
          <h2 className="mt-4 text-[clamp(30px,4vw,50px)] text-white">Outcomes that can be evidenced</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {performance.map((p) => (
              <div key={p.label} className="border-t border-white/15 pt-6">
                <div className="font-serif text-5xl" style={{ color: "var(--gold-soft)" }}>
                  {p.value}
                </div>
                <div className="mt-3 text-sm text-white">{p.label}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ivory py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Contact</div>
            <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] text-navy">
              Speak with the group directly
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              For construction partnerships, investment discussions, poultry supply, energy and
              engineering scopes, or artificial intelligence deployments through NesAI Nova, our
              office will route your enquiry to the responsible division.
            </p>
            <dl className="mt-10 space-y-6">
              {[
                ["Email", "info@nesmaholdings.co.za"],
                ["Telephone", "+27 60 503 9241"],
                ["Head office", "Middelburg, Mpumalanga"],
                ["Central office", "Pretoria, Gauteng"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-4">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-base text-navy">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 card-corporate p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Response standard
              </div>
              <div className="mt-1 text-lg text-navy">Within one business day</div>
            </div>
          </div>
          <ContactForm
            subjectPrefix="Nesma Holdings enquiry"
            options={[
              "Construction and infrastructure",
              "Artificial intelligence (NesAI Nova)",
              "Agriculture and poultry (Sinewami)",
              "Energy and engineering",
              "Logistics and supply chain",
              "Investment or partnership",
              "Sinewami Foundation",
              "General enquiry",
            ]}
          />
        </div>
      </section>

      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
          <img src={nesmaLogo} alt="Nesma Holdings" className="h-14 w-auto" />
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-muted-foreground">
            <a href="#about">About</a>
            <a href="#sectors">Sectors</a>
            <a href="#companies">Group companies</a>
            <Link to="/nesai-nova">NesAI Nova</Link>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Nesma Holdings (Pty) Ltd. Nurturing businesses, delivering
          results. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
