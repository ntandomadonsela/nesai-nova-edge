import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import nesmaLogo from "nesai-nova-edge/blob/main/src/assets/nesma%20logo.png";
import novaLogo from "@/assets/nesai-nova-logo.png.asset.json";

type NavItem = { label: string; href: string };

export function SiteHeader({
  variant,
  items,
}: {
  variant: "holdings" | "nova";
  items: NavItem[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isNova = variant === "nova";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "oklch(1 0 0 / 96%)" : "oklch(1 0 0 / 82%)",
        backdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-card)" : "none",
      }}
    >
      <span
        className="block h-[3px] w-full"
        style={{ background: isNova ? "var(--gradient-nova)" : "var(--gradient-gold)" }}
      />
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link to={isNova ? "/nesai-nova" : "/"} className="flex items-center">
          <img
            src={isNova ? novaLogo.url : nesmaLogo.url}
            alt={isNova ? "NesAI Nova" : "Nesma Holdings (Pty) Ltd"}
            className={isNova ? "h-16 w-auto sm:h-[72px]" : "h-14 w-auto sm:h-16"}
          />
        </Link>


        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {isNova ? (
            <Link
              to="/"
              className="rounded-md border border-border px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Nesma Holdings
            </Link>
          ) : (
            <Link
              to="/nesai-nova"
              className="rounded-md px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--gradient-nova)" }}
            >
              NesAI Nova
            </Link>
          )}
          <a
            href="#contact"
            className="rounded-md border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden"
        >
          <span className="block h-px w-6 bg-foreground" />
          <span className="mt-[6px] block h-px w-6 bg-foreground" />
          <span className="mt-[6px] block h-px w-4 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            {isNova ? (
              <Link to="/" className="text-sm text-foreground">
                Nesma Holdings
              </Link>
            ) : (
              <Link to="/nesai-nova" className="text-sm text-foreground">
                NesAI Nova division
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
