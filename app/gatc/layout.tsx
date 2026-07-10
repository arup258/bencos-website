import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GATC — Genomics Analysis & Technology Conference | Bencos Research Solutions",
  description:
    "GATC brings together researchers, clinicians, industry leaders, innovators and students to explore the latest advancements in genomics, precision medicine, biotechnology and bioinformatics.",
}

export default function GatcLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
