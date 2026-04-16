"use client"

import { useEffect, useState } from "react"
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
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    setMounted(true)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  if (!mounted) {
    return null
  }

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      {isMobile ? (
        <>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/logo-full.png"
                alt="Smitholding LLC"
                width={300}
                height={70}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white"
            >
              <span className="text-2xl leading-none">
                {mobileMenuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>

        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="fixed inset-x-0 top-[88px] z-50 border-t border-white/10 bg-neutral-950 shadow-2xl">
              <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-white transition hover:bg-white/10"
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
          </>
        )}
        </>
      ) : (
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Link href="/" className="block">
            <Image
              src="/logo-full.png"
              alt="Smitholding LLC"
              width={300}
              height={70}
              priority
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-7 text-sm text-white/75">
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

          <Link
            href="/contact"
            className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-600"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}