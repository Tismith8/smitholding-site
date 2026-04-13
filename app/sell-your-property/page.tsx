import Link from "next/link"

export default function SellYourPropertyPage() {
  const situations = [
    "Property needs repairs or updates",
    "Inherited property",
    "Vacant house",
    "Landlord ready to sell",
    "Looking for a straightforward sale",
    "Open to discussing flexible options",
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
            Sell Your Property
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Looking to sell your property?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Smitholding LLC works directly with homeowners to discuss property opportunities
            in a professional, straightforward, and flexible way. If you are thinking about
            selling, we are always open to the right conversation.
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-white/65">
            Every property and every situation is different. Some homes need updates, some are
            vacant, some are inherited, and some simply no longer fit the owner’s plans. Our
            goal is to make the process easy to discuss and simple to understand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Start the Conversation
            </Link>

            <Link
              href="/projects"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:bg-white/10"
            >
              View Completed Projects
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-white/45">
              Common Situations
            </div>

            <h2 className="mt-3 text-2xl font-bold text-white">
              We’re open to discussing properties in many different scenarios
            </h2>

            <div className="mt-6 grid gap-3">
              {situations.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-xl font-semibold text-white">Straightforward Communication</h3>
          <p className="mt-4 leading-7 text-white/65">
            We believe in clear, respectful communication and a practical approach to discussing
            real estate opportunities.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-xl font-semibold text-white">Flexible Approach</h3>
          <p className="mt-4 leading-7 text-white/65">
            Different situations call for different solutions. We are open to discussing what
            makes the most sense based on the property and your goals.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-xl font-semibold text-white">Professional Review</h3>
          <p className="mt-4 leading-7 text-white/65">
            Every opportunity is evaluated thoughtfully, with an emphasis on practicality,
            transparency, and long-term business credibility.
          </p>
        </div>
      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Ready to discuss your property?
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-white/60">
          Reach out through the contact page and share a few details about the property.
          We’ll review it and follow up with you.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Contact Smitholding
        </Link>
      </div>
    </section>
  )
}