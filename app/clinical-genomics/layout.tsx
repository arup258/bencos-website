import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clinical Genomics | Bencos Research Solutions",
  description:
    "Clinical-grade genomics services — precision diagnostics, variant interpretation, and clinical reporting that bring genomic insight to the point of care.",
}

export default function ClinicalGenomicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
