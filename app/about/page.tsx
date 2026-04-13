export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold text-white">About Smitholding LLC</h1>

      <p className="mt-6 text-lg leading-8 text-white/70">
        Smitholding LLC is a real estate investment company focused on identifying, improving,
        and monetizing residential properties across multiple strategies.
      </p>

      <p className="mt-6 text-white/70 leading-7">
        The business is built on a disciplined approach to acquisitions, a practical mindset toward renovations,
        and a focus on long-term value creation. Each project is evaluated based on its ability to generate
        strong returns while maintaining quality and efficiency throughout execution.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold text-white">Disciplined Approach</h2>
          <p className="mt-3 text-sm text-white/60">
            Every opportunity is evaluated with a focus on risk, upside, and long-term potential.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold text-white">Execution Focused</h2>
          <p className="mt-3 text-sm text-white/60">
            Renovations and operations are handled with attention to detail and efficiency.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold text-white">Flexible Strategy</h2>
          <p className="mt-3 text-sm text-white/60">
            Projects are optimized for resale, rental income, or wholesale depending on market conditions.
          </p>
        </div>
      </div>
    </section>
  )
}