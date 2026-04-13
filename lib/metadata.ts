import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
