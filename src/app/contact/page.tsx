import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-zinc-700">{site.address}</p>
      <a className="mt-2 inline-block underline" href={site.phoneHref}>{site.phone}</a>
    </div>
  );
}
