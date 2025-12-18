import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

const features = [
  { title: "Impact absorption", desc: "Built for high-traffic and high-impact environments." },
  { title: "Slip resistant", desc: "Grip and stability where it matters." },
  { title: "Durable by design", desc: "Long-lasting materials made to take abuse." },
];

const thickness = [
  { title: '1/4"', desc: "Ideal for transforming any space into a functional workout area." },
  { title: "8mm", desc: "Extra durable for commercial and home environments." },
  { title: '3/8"', desc: "The most popular product; that's versatile enough to be used in almost every setting." },
  { title: '1/2"', desc: "Highly durable rubber designed for high-intensity use and extreme shock absorption." },
];

const gallery = [
  { src: "/images/arc06.webp", alt: "Gym flooring close-up with hands" },
  { src: "/images/arc05.webp", alt: "Lunges on rubber flooring" },
  { src: "/images/arc03.webp", alt: "Mats in use at a gym" },
  { src: "/images/arc01.webp", alt: "Forklift and stored rubber rolls" },
];

const docs = [
  {
    title: "Installation Instructions",
    desc: "Prep, adhesive, acclimation, and install steps.",
    href: "/documents/ARC Installation Instructions.pdf",
  },
  {
    title: "Specification Sheet",
    desc: "ASTM test results + sizes and tolerances.",
    href: "/documents/ARC Specification Sheet.pdf",
  },
  {
    title: "Warranty",
    desc: "1-year manufacturer materials warranty details.",
    href: "/documents/ARC Warranty Rolled Flooring.pdf",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/arc02.webp"
            alt="Rubber flooring in a gym setting"
            fill
            priority
            className="object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
          {/* subtle glow using your theme */}
          <div className="absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
               style={{ background: "color-mix(in oklab, var(--arc-blue) 55%, transparent)" }} />
        </div>

        <div className="relative arc-container arc-section">
          <p className="text-sm font-medium text-white/80">
            Rubber roll flooring for gyms, commercial spaces, and more.
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {site.hero.headline}
          </h1>

          <p className="arc-hero-subtitle text-white/80">{site.hero.subheadline}</p>

          {/* trust chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Made for high-traffic", "Commercial-grade", "Fast quoting", "Warehouse stock"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.hero.ctaPrimary.href} className="btn btn-primary px-5 py-3">
              {site.hero.ctaPrimary.label}
            </Link>
            <Link href={site.hero.ctaSecondary.href} className="btn btn-outline px-5 py-3 text-white/90">
              {site.hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-muted bg-[color-mix(in_oklab,var(--bg)_92%,var(--arc-slate))]">
        <div className="arc-container arc-section">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((x) => (
              <div key={x.title} className="card p-6">
                <div className="text-lg font-semibold">{x.title}</div>
                <p className="mt-2 text-sm">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THICKNESS / PRODUCT CALLOUT */}
      <section className="border-t border-muted">
        <div className="arc-container arc-section">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Choose the right thickness</h2>
              <p className="mt-3 max-w-xl">
                Pick based on impact needs, traffic level, and durability expectations. If you’re unsure, request a quote
                and we’ll recommend a spec that fits your space.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {thickness.map((t) => (
                  <div key={t.title} className="card p-5">
                    <div className="text-sm font-semibold">{t.title}</div>
                    <p className="mt-1 text-sm">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                <Link href="/products" className="btn btn-primary">
                  View Products
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Ask a Question
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/arc04.webp"
                  alt="Thickness guide chart"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-muted p-5">
                <div className="text-sm font-semibold">Quick thickness guide</div>
                <p className="mt-1 text-sm">
                  Common options for home gyms through extreme commercial use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-muted bg-[color-mix(in_oklab,var(--bg)_94%,var(--arc-slate))]">
        <div className="arc-container arc-section">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Real-world installs & inventory</h2>
              <p className="mt-2 max-w-2xl">
                From gyms to warehouses — here’s what our rolled rubber looks like in the wild.
              </p>
            </div>
            <Link href="/applications" className="hidden text-sm font-medium text-[color:var(--arc-blue)] sm:inline">
              Explore applications →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.src} className="card overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={g.src} alt={g.alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="border-t border-muted">
        <div className="arc-container arc-section">
          <h2 className="text-3xl font-semibold tracking-tight">Docs & details</h2>
          <p className="mt-2 max-w-2xl">
            Specs, warranty, and installation guidance — ready to send to contractors or keep for your records.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {docs.map((d) => (
              <a
                key={d.title}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card block p-6"
              >
                <div className="text-lg font-semibold">{d.title}</div>
                <p className="mt-2 text-sm">{d.desc}</p>
                <div className="mt-4 text-sm font-medium text-[color:var(--arc-blue)]">Open PDF →</div>
              </a>
            ))}
          </div>

          <div className="mt-10 card p-6">
            <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <div className="text-lg font-semibold">Need pricing fast?</div>
                <p className="mt-1 text-sm">
                  Tell us your square footage, thickness, and delivery ZIP — we’ll quote it.
                </p>
              </div>
              <Link href={site.hero.ctaPrimary.href} className="btn btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
