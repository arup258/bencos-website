import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Bencos Research Solutions",
  description:
    "Explore our comprehensive genomics services including consultancy, NGS services, and Bioinformatics as a Service (BIAAS).",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
