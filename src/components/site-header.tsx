import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/25">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-tight text-white">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden text-sm text-white/80 hover:text-white transition sm:block"
            href={site.phoneHref}
          >
            {site.phone}
          </a>

          <Link
            href="/contact"
            className="rounded-xl px-3 py-2 text-sm font-medium text-white shadow-sm transition
                       bg-white/10 hover:bg-white/15 border border-white/15"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
