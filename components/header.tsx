import Link from "next/link"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="Smitholding LLC"
            width={400}
            height={70}
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-2xl bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-600 md:inline-flex"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}
