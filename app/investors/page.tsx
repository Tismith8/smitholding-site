import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Investors",
  description: "A partner-focused page for investors, buyers, and deal partners interested in Smitholding LLC.",
  path: "/investors",
})

export default function InvestorsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">For Investors</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            A partner focused on opportunities, improvements, and clear communication.
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Smitholding is positioned to work with investors, deal partners, and buyers looking for thoughtful underwriting, real market awareness, and practical execution.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            "Investor-friendly sourcing and deal analysis",
            "Renovation-aware underwriting and repositioning strategy",
            "Clear communication around project direction and opportunity fit",
            "A flexible approach across flips, rentals, STRs, and wholesale deals",
          ].map((item, index) => (
            <div key={item} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-700 text-base font-bold text-white">
                0{index + 1}
              </div>
              <div className="pt-2 text-lg text-white/78">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
