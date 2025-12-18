import Link from "next/link";
import { site } from "@/content/site";

type ProductCardProps = {
  title: string;
  desc: string;
  bullets: string[];
  ctaHref?: string;
  ctaLabel?: string;
  badge?: string;
};

function ProductCard({
  title,
  desc,
  bullets,
  ctaHref,
  ctaLabel = "Get a quote",
  badge,
}: ProductCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            {badge ? (
              <span
                className="rounded-full px-2 py-0.5 text-xs font-medium"
                style={{
                  border: "1px solid var(--card-border)",
                  background: "color-mix(in oklab, var(--card) 88%, transparent)",
                }}
              >
                {badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm muted">{desc}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm muted">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link className="btn btn-primary" href={ctaHref ?? "/contact"}>
          {ctaLabel}
        </Link>
        <Link className="btn btn-outline" href="/install-specs-warranty">
          Install/specs
        </Link>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="arc-container">
      <section className="arc-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium muted-2">
              Rubber roll flooring • gyms • commercial • more
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Products
            </h1>
            <p className="mt-3 max-w-2xl muted">
              Choose a category below and we’ll help you match thickness, color,
              and performance to your space.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Request pricing
            </Link>
            {site.documents?.catalogHref ? (
              <a className="btn btn-outline" href={site.documents.catalogHref}>
                Download catalog
              </a>
            ) : (
              <a className="btn btn-outline" href={site.phoneHref}>
                Call {site.phone}
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ProductCard
            title="Gym & Fitness Rolls"
            badge="Most popular"
            desc="Durable rubber flooring designed for training spaces, free weights, and high-traffic gyms."
            bullets={[
              "Multiple thickness options for impact + sound control",
              "Works for commercial gyms and home setups",
              "Ask about edge finishing and seam recommendations",
            ]}
          />

          <ProductCard
            title="Commercial & Multi-Purpose"
            desc="General-purpose rubber roll flooring for corridors, studios, and flexible-use areas."
            bullets={[
              "Easy maintenance and consistent appearance",
              "Good for schools, offices, and mixed-use facilities",
              "Spec sheets available upon request",
            ]}
          />

          <ProductCard
            title="Custom / Project Orders"
            badge="By quote"
            desc="Need a specific thickness, color direction, or large-volume quote? We’ll scope it with you."
            bullets={[
              "Large orders + recurring projects supported",
              "Shipping coordination and lead time planning",
              "We can help validate spec fit before you buy",
            ]}
            ctaLabel="Talk to sales"
          />
        </div>

        {/* CTA band */}
        <div className="mt-8 card p-6">
          <div className="grid gap-4 sm:grid-cols-3 sm:items-center">
            <div className="sm:col-span-2">
              <h3 className="text-base font-semibold">Not sure what you need?</h3>
              <p className="mt-1 text-sm muted">
                Send square footage + use-case and we’ll recommend thickness and
                an install approach.
              </p>
            </div>
            <div className="sm:justify-self-end">
              <Link className="btn btn-primary" href="/contact">
                Get recommendations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
