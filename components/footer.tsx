import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-2">
              <Image
                src="/logo-icon.png"
                alt="Smitholding LLC full logo"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="font-semibold uppercase tracking-[0.24em] text-white/80">Smitholding LLC</div>
              <div className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                Based in Copiague, NY • Operating nationwide across renovations, flips, short-term rentals, long-term rentals, and wholesale opportunities.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
              {siteConfig.email}
            </Link>
            <span className="hidden text-white/20 md:inline">•</span>
            <Link href={siteConfig.phoneHref} className="transition hover:text-white">
              {siteConfig.phone}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
