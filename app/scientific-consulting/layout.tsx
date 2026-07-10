import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scientific Consulting | Bencos Research Solutions",
  description:
    "Strategic scientific consulting — expert guidance on study design, data strategy, regulatory affairs, and research programs that accelerate discovery.",
}

export default function ScientificConsultingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
