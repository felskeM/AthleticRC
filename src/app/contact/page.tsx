import Link from "next/link";
import { site } from "@/content/site";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-sm font-medium">{label}</div>
      {hint ? <div className="mt-1 text-xs muted-2">{hint}</div> : null}
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default function ContactPage() {
  return (
    <div className="arc-container">
      <section className="arc-section">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium muted-2">Let’s talk flooring.</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Contact
            </h1>
            <p className="mt-3 max-w-2xl muted">
              Get a quote, ask about lead times, or request samples. We’ll reply
              fast with the info you actually need.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <Link className="btn btn-outline" href="/products">
              View products
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Left: cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <h2 className="text-base font-semibold">Address</h2>
              <p className="mt-2 whitespace-pre-line muted">{site.address}</p>

              <div className="mt-5 flex flex-col gap-2 text-sm">
                <a className="underline underline-offset-4" href={site.phoneHref}>
                  {site.phone}
                </a>
                {site.email ? (
                  <a
                    className="underline underline-offset-4"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-base font-semibold">What to include</h2>
              <ul className="mt-3 space-y-2 text-sm muted">
                <li>• Project type (gym, commercial, home, etc.)</li>
                <li>• Approx square footage + timeline</li>
                <li>• Color / thickness preferences</li>
                <li>• Shipping destination ZIP</li>
              </ul>
              <div className="mt-5">
                <Link className="btn btn-outline" href="/install-specs-warranty">
                  Install, specs & warranty
                </Link>
              </div>
            </div>
          </div>

          {/* Right: “form” */}
          <div className="lg:col-span-3">
            <div className="card p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Send a message</h2>
              <p className="mt-2 text-sm muted">
                This UI is ready. Hook it up to your contact API route whenever
                you’re ready.
              </p>

              <form className="mt-6 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      className="w-full rounded-xl border border-[var(--card-border)] bg-transparent px-3 py-2 text-sm outline-none"
                      placeholder="Your name"
                      name="name"
                    />
                  </Field>

                  <Field label="Phone / Email" hint="Whatever is easiest to reach you at.">
                    <input
                      className="w-full rounded-xl border border-[var(--card-border)] bg-transparent px-3 py-2 text-sm outline-none"
                      placeholder="you@company.com"
                      name="contact"
                    />
                  </Field>
                </div>

                <Field label="Message" hint="Tell us what you’re building + what you need.">
                  <textarea
                    className="min-h-[140px] w-full rounded-xl border border-[var(--card-border)] bg-transparent px-3 py-2 text-sm outline-none"
                    placeholder="Square footage, thickness, color, timeline…"
                    name="message"
                  />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs muted-2">
                    Tip: add photos, floor plan, or measurements when you email.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    aria-disabled="true"
                    title="Hook this up to your API route when ready"
                  >
                    Send message
                  </button>
                </div>
              </form>

              <div className="mt-6 border-t border-[var(--card-border)] pt-5">
                <p className="text-xs muted-2">
                  Prefer direct? Call{" "}
                  <a className="underline underline-offset-4" href={site.phoneHref}>
                    {site.phone}
                  </a>{" "}
                  or email{" "}
                  {site.email ? (
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  ) : (
                    <span className="muted">(add site.email to enable)</span>
                  )}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
