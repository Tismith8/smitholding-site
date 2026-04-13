export default function ServicesPage() {
  const services = [
    {
      title: "Renovations & House Flips",
      description:
        "Value-driven renovations and flip projects focused on improving property appeal, maximizing resale potential, and executing efficiently.",
    },
    {
      title: "Short-Term Rental Investments",
      description:
        "Properties selected and positioned to perform well as short-term rentals, with attention to guest appeal, design, and revenue potential.",
    },
    {
      title: "Long-Term Rental Properties",
      description:
        "Rental opportunities approached with a focus on steady cash flow, long-term appreciation, and durable asset quality.",
    },
    {
      title: "Wholesale Opportunities",
      description:
        "Off-market and investor-friendly opportunities structured to create speed, flexibility, and attractive value for buyers.",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
          Services
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
          Multiple strategies. One disciplined approach.
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          Smitholding LLC operates across several real estate strategies with a focus on practical execution,
          long-term value creation, and identifying the strongest path forward for each opportunity.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-4 leading-7 text-white/65">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <h2 className="text-2xl font-bold text-white">Built around flexibility and execution</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/65">
          Every deal is different. Some are best suited for resale, others for long-term cash flow,
          short-term rental performance, or investor disposition. The goal is to evaluate each opportunity
          carefully and pursue the strategy that creates the strongest overall outcome.
        </p>
      </div>
    </section>
  )
}