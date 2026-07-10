import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Who We Are | Bencos Research Solutions",
  description:
    "Discover our journey from 2011 to present, our global footprint, and the BREF community driving innovation in genomics research.",
}

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
