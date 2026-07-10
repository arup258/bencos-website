import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TWINE — Technology Platform | Bencos Research Solutions",
  description:
    "TWINE combines AI, machine learning, and advanced bioinformatics to transform genomic sequencing data into actionable clinical and research intelligence.",
}

export default function TwineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
