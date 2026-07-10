import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Aspiration | Bencos Research Solutions",
  description:
    "Our aspiration is to shape the future of life sciences through innovation, scientific excellence, artificial intelligence, genomics, and precision healthcare.",
}

export default function OurAspirationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
