import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
        <div>
          <div className="font-semibold">{site.name}</div>
          <div className="mt-2 text-sm text-zinc-700">{site.address}</div>
          <a className="mt-2 block text-sm text-zinc-700 hover:text-zinc-900" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
        <div className="text-sm text-zinc-600 md:text-right">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
