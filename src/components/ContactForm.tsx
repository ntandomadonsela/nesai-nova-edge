import { useState, type FormEvent } from "react";

export function ContactForm({
  options,
  accent = "gold",
  subjectPrefix,
}: {
  options: string[];
  accent?: "gold" | "nova";
  subjectPrefix: string;
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("first_name")} ${get("last_name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Enquiry: ${get("enquiry")}`,
      "",
      get("message"),
    ].join("\n");
    const href = `mailto:info@nesmaholdings.co.za?subject=${encodeURIComponent(
      `${subjectPrefix}: ${get("enquiry")}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground/40";
  const label = "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="card-corporate p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>First name</label>
          <input name="first_name" required className={field} />
        </div>
        <div>
          <label className={label}>Last name</label>
          <input name="last_name" required className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label className={label}>Company or organisation</label>
        <input name="company" className={field} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Email address</label>
          <input name="email" type="email" required className={field} />
        </div>
        <div>
          <label className={label}>Telephone</label>
          <input name="phone" type="tel" className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label className={label}>Area of interest</label>
        <select name="enquiry" className={field} defaultValue={options[0]}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className={label}>Requirement</label>
        <textarea name="message" rows={4} required className={field} />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
        style={{
          background: accent === "nova" ? "var(--gradient-nova)" : "var(--navy)",
        }}
      >
        Submit enquiry
      </button>
      {sent && (
        <p className="mt-4 text-center text-[12px] text-muted-foreground">
          Your enquiry has been prepared in your email client. Our team responds within one business
          day.
        </p>
      )}
    </form>
  );
}
