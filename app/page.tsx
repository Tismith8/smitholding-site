import { Hammer, Home, Building2, ArrowRightLeft } from "lucide-react"
export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
        <div>
          <div className="inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
            Based in Copiague, NY • Operating Nationwide
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-normal text-white sm:mt-6 sm:text-4xl md:text-5xl">
            Real estate investing built on discipline, execution, and long-term value.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
            Smitholding LLC focuses on strategic renovations, house flips, short-term rental investments,
            long-term rental properties, and wholesale opportunities designed for consistent growth. We also
            work directly with homeowners looking to sell, offering flexible and straightforward solutions.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600 sm:w-auto"
            >
              Contact Us
            </a>
            <a
              href="/projects"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:bg-white/10 sm:w-auto"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/20 sm:rounded-[2rem] sm:p-6">
          <div className="rounded-[1.25rem] border border-white/10 bg-neutral-900 p-4 sm:rounded-[1.5rem] sm:p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/45 sm:text-xs sm:tracking-[0.25em]">
              Why Smitholding
            </div>

            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              Focused on practical value creation
            </h2>

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.2em]">
                  Acquire
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Source opportunities with upside through disciplined market selection and practical underwriting.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.2em]">
                  Improve
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Create value through thoughtful renovations, repositioning, and execution.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.2em]">
                  Monetize
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Focus on the strongest path forward through resale, rental cash flow, or wholesale disposition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {[
          {
            title: "Renovations & House Flips",
            desc: "Value-driven renovations focused on strong resale margins and efficient execution.",
            icon: Hammer,
          },
          {
            title: "Short-Term Rentals",
            desc: "Properties designed to maximize guest appeal and short-term rental revenue.",
            icon: Home,
          },
          {
            title: "Long-Term Rentals",
            desc: "Stable rental investments built for consistent cash flow and long-term appreciation.",
            icon: Building2,
          },
          {
            title: "Wholesale Opportunities",
            desc: "Access to off-market deals and investor-friendly acquisition opportunities.",
            icon: ArrowRightLeft,
          },
        ].map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-60 pointer-events-none" />

              <div className="relative mb-5 flex items-center justify-start">
                {/* Glow */}
                <div className="absolute left-0 top-0 h-12 w-12 rounded-2xl bg-red-600 blur-2xl opacity-60 transition-all duration-300 group-hover:opacity-90 group-hover:scale-110" />

                {/* Icon badge */}
                <div className="relative z-10 inline-flex items-center justify-center rounded-2xl border border-red-500/30 bg-red-700/20 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-red-700/30">
                  <Icon className="h-5 w-5 text-red-500" />
                </div>
              </div>

                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.desc}
                </p>
              </div>
          )
        })}
      </div>

           {/* FOR HOMEOWNERS */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:mt-14 sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] sm:text-base">
            <span style={{ color: "#b91c1c" }}>For Homeowners</span>
          </div>

          <h2 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
            Looking to sell your property?
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            Smitholding LLC works directly with homeowners to discuss property opportunities,
            renovation situations, and flexible paths to a sale. If you have a property you
            are considering selling, we’re open to the conversation.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              className="flex items-center justify-center rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              style={{ width: "100%", maxWidth: "280px" }}
            >
              Sell Your Property
            </a>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:mt-20 sm:p-8 lg:mt-24 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Looking to sell, invest, or partner?
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/60 sm:mt-4 sm:text-base">
            We’re always open to new opportunities, deals, and partnerships nationwide.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              className="flex items-center justify-center rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              style={{ width: "100%", maxWidth: "260px" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}