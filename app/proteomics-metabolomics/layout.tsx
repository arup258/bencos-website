import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proteomics & Metabolomics Services | Bencos Research Solutions",
  description:
    "Comprehensive proteomics and metabolomics services that decode proteins and metabolites into actionable biological insight for research, diagnostics, and drug discovery.",
}

export default function ProteomicsMetabolomicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
