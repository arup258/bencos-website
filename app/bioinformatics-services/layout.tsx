import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bioinformatics Services | Bencos Research Solutions",
  description:
    "Transforming data into discovery — advanced bioinformatics solutions that convert complex genomic, transcriptomic, and multi-omics datasets into accurate, actionable, research-ready insights.",
}

export default function BioinformaticsServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
