"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/investors", label: "Investors" },
  { href: "/sell-your-property", label: "Sell Your Property" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="block w-[170px] sm:w-[210px] lg:w-[300px]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/logo-full.png"
            alt="Smitholding LLC"
            width={300}
            height={70}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-2xl bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-600 md:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
          >
            <span className="text-2xl leading-none">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-red-600"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}