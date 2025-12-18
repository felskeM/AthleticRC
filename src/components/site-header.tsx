import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden gap-6 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden text-sm text-zinc-700 hover:text-zinc-900 sm:block" href={site.phoneHref}>
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
