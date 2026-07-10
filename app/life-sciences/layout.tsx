import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Life Sciences | Bencos Research Solutions",
  description:
    "Advancing life sciences through genomic innovation — empowering researchers, biotech, pharma, universities, and healthcare institutions with advanced genomics, bioinformatics, multi-omics, and AI-driven solutions.",
}

export default function LifeSciencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
