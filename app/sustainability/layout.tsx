import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sustainability | Bencos Research Solutions",
  description:
    "Driving scientific innovation responsibly while creating long-term value for people, healthcare, and the planet.",
}

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
