import Link from "next/link";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-medium text-zinc-600">Rubber roll flooring for gyms, commercial spaces, and more.</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.hero.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-700">{site.hero.subheadline}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={site.hero.ctaPrimary.href}
            className="rounded-md bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
          >
            {site.hero.ctaPrimary.label}
          </Link>
          <Link
            href={site.hero.ctaSecondary.href}
            className="rounded-md border border-zinc-300 px-5 py-3 text-center text-sm font-medium hover:bg-zinc-50"
          >
            {site.hero.ctaSecondary.label}
          </Link>
        </div>
      </section>

      <section className="border-t bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">
          {[
            { title: "Impact absorption", desc: "Built for high-traffic and high-impact environments." },
            { title: "Slip resistant", desc: "Grip and stability where it matters." },
            { title: "Durable by design", desc: "Long-lasting materials made to take abuse." },
          ].map((x) => (
            <div key={x.title} className="rounded-xl border bg-white p-6">
              <div className="text-lg font-semibold">{x.title}</div>
              <p className="mt-2 text-sm text-zinc-700">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
