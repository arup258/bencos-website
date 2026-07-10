import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Genomics Services | Bencos Research Solutions",
  description:
    "Unlock the power of genomics — advanced DNA and RNA sequencing, precision genomics, and comprehensive data analysis that empower research, diagnostics, and innovation.",
}

export default function GenomicsServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
