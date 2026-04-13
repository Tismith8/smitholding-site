import { SellerIntakeForm } from "@/components/seller-intake-form"

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
            in a professional, straightforward, and flexible way.
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-white/65">
            Share a few details about the property below and we’ll review it and follow up.
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-white/45">
                Common Situations
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white">
                We’re open to discussing many different property scenarios
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

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold text-white">Property Intake Form</h2>
          <p className="mt-3 text-white/60">
            Fill out the form below and we’ll review the property details.
          </p>

          <div className="mt-8">
            <SellerIntakeForm />
          </div>
        </div>
      </div>
    </section>
  )
}