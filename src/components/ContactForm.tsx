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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);
    setSent(false);
    setError(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    // Creates the email subject in Formspree
    data.append(
      "_subject",
      `${subjectPrefix}: ${String(data.get("enquiry") ?? "").trim()}`,
    );

    try {
      const response = await fetch("https://formspree.io/f/xgoqqoaw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground/40";

  const label =
    "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <form
      onSubmit={onSubmit}
      className="card-corporate p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className={label}>
            First name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className={field}
          />
        </div>

        <div>
          <label htmlFor="last_name" className={label}>
            Last name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className={field}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="company" className={label}>
          Company or organisation
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={field}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </div>

        <div>
          <label htmlFor="phone" className={label}>
            Telephone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={field}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="enquiry" className={label}>
          Area of interest
        </label>

        <select
          id="enquiry"
          name="enquiry"
          className={field}
          defaultValue={options[0]}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={label}>
          Requirement
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={field}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-md px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        style={{
          background:
            accent === "nova"
              ? "var(--gradient-nova)"
              : "var(--navy)",
        }}
      >
        {sending ? "Submitting..." : "Submit enquiry"}
      </button>

      {sent && (
        <p
          className="mt-4 text-center text-[12px] text-muted-foreground"
          role="status"
        >
          Thank you. Your enquiry has been submitted successfully. Our team
          will respond within one business day.
        </p>
      )}

      {error && (
        <p
          className="mt-4 text-center text-[12px] text-red-600"
          role="alert"
        >
          We could not submit your enquiry. Please try again.
        </p>
      )}
    </form>
  );
}
