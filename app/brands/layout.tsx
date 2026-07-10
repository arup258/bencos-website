import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Brands | Bencos Research Solutions",
  description:
    "Discover our portfolio of products and platforms driving innovation in genomics and bioinformatics - TWINE, GATC, Bencos Health, and BenED.",
}

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
