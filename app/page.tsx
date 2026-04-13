export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
            Based in Copiague, NY • Operating Nationwide
          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Real estate investments built on discipline, execution, and long-term value.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Smitholding LLC focuses on strategic renovations, house flips, short-term rental investments,
            long-term rental properties, and wholesale opportunities designed for consistent growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Contact Us
            </a>
            <a
              href="/projects"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-white/45">
              Why Smitholding
            </div>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Focused on practical value creation
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-white/45">Acquire</div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Source opportunities with upside through disciplined market selection and practical underwriting.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-white/45">Improve</div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Create value through thoughtful renovations, repositioning, and execution.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-white/45">Monetize</div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Focus on the strongest path forward through resale, rental cash flow, or wholesale disposition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Renovations & House Flips",
            desc: "Value-driven renovations focused on strong resale margins and efficient execution.",
          },
          {
            title: "Short-Term Rentals",
            desc: "Properties designed to maximize guest appeal and short-term rental revenue.",
          },
          {
            title: "Long-Term Rentals",
            desc: "Stable rental investments built for consistent cash flow and long-term appreciation.",
          },
          {
            title: "Wholesale Opportunities",
            desc: "Access to off-market deals and investor-friendly acquisition opportunities.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Looking to sell, invest, or partner?
        </h2>
        <p className="mt-4 text-white/60">
          We’re always open to new opportunities, deals, and partnerships nationwide.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}