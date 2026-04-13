import Image from "next/image"

export function LogoMark() {
  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-lg shadow-red-950/20">
      <Image
        src="/logo-icon.png"
        alt="Smitholding LLC logo icon"
        width={56}
        height={56}
        className="h-full w-full object-contain"
      />
    </div>
  )
}
