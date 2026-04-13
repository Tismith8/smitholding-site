import { TrendingUp } from "lucide-react"

export function HeroCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/45">Why Smitholding</div>
            <div className="mt-2 text-2xl font-bold text-white">Focused on practical value creation</div>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-500">
            <TrendingUp className="h-7 w-7" />
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["Acquire", "Source opportunities with upside through direct outreach, local market research, and investor-aware underwriting."],
            ["Improve", "Renovate and reposition properties to improve functionality, appeal, and income or resale performance."],
            ["Monetize", "Exit through resale, long-term rental cash flow, short-term rental optimization, or investor disposition."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm uppercase tracking-[0.2em] text-white/45">{title}</div>
              <div className="mt-2 text-base leading-7 text-white/80">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
