import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BREF | Bencos Research Solutions",
  description:
    "BREF is a multidisciplinary platform that brings together researchers, educators, students and scientific communities to promote knowledge sharing, collaborative learning and impactful research across the life sciences.",
}

export default function BrefLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
