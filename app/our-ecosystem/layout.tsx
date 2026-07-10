import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Ecosystem | Bencos Research Solutions",
  description:
    "The Bencos ecosystem brings together scientific research, precision healthcare, intelligent technology platforms, and scientific collaboration into one connected network.",
}

export default function OurEcosystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
