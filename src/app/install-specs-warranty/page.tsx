import Link from "next/link";
import { site } from "@/content/site";

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-3">
      <div className="text-sm font-medium">{k}</div>
      <div className="text-sm muted text-right">{v}</div>
    </div>
  );
}

export default function InstallSpecsWarrantyPage() {
  return (
    <div className="arc-container">
      <section className="arc-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium muted-2">Docs that installers actually use.</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Install, Specs & Warranty
            </h1>
            <p className="mt-3 max-w-2xl muted">
              Quick guidance for planning, installing, and maintaining rubber roll
              flooring. For exact product documents, grab the PDFs from our
              downloads.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/products">
              Browse products
            </Link>
            {site.documents?.installGuideHref ? (
              <a className="btn btn-outline" href={site.documents.installGuideHref}>
                Download install guide
              </a>
            ) : (
              <a className="btn btn-outline" href="/contact">
                Request documents
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Install */}
          <div className="card p-6">
            <h2 className="text-base font-semibold">Installation overview</h2>
            <ul className="mt-3 space-y-2 text-sm muted">
              <li>• Acclimate material in the install space before cutting.</li>
              <li>• Ensure subfloor is clean, flat, and dry.</li>
              <li>• Plan seam direction + layout before rolling out.</li>
              <li>• Use recommended adhesive/tape method for your application.</li>
              <li>• Roll/press seams, then trim clean edges.</li>
            </ul>
            <div className="mt-5">
              <Link className="btn btn-outline" href="/contact">
                Ask an install question
              </Link>
            </div>
          </div>

          {/* Specs */}
          <div className="card p-6 lg:col-span-1">
            <h2 className="text-base font-semibold">Typical specs</h2>
            <p className="mt-2 text-sm muted">
              Specs vary by product line. Use this as a starting point.
            </p>

            <div className="mt-4 divide-y divide-[var(--card-border)]">
              <SpecRow k="Use cases" v="Gyms, commercial, multipurpose" />
              <SpecRow k="Formats" v="Rolls (and other formats depending on line)" />
              <SpecRow k="Thickness options" v="Multiple (see product page)" />
              <SpecRow k="Cleaning" v="Routine sweep + damp mop as needed" />
            </div>
          </div>

          {/* Warranty */}
          <div className="card p-6">
            <h2 className="text-base font-semibold">Warranty notes</h2>
            <p className="mt-2 text-sm muted">
              Warranty depends on product + installation method. Common “gotchas”
              that can void coverage:
            </p>
            <ul className="mt-3 space-y-2 text-sm muted">
              <li>• Improper subfloor prep (moisture/flatness issues)</li>
              <li>• Using non-recommended adhesive or install method</li>
              <li>• Damage from harsh chemicals or incorrect maintenance</li>
              <li>• Cuts/tears from misuse or sharp equipment without protection</li>
            </ul>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/contact">
                Confirm warranty details
              </Link>
              {site.documents?.warrantyHref ? (
                <a className="btn btn-outline" href={site.documents.warrantyHref}>
                  Warranty PDF
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Download strip */}
        <div className="mt-8 card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">Need the official PDFs?</h3>
              <p className="mt-1 text-sm muted">
                We keep install/spec sheets and warranty docs in one place.
              </p>
            </div>
            <Link className="btn btn-outline" href="/contact">
              Request documents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
