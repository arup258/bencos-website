import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation | Bencos Research Solutions",
  description:
    "Building a sustainable future through responsible science, ethical innovation, digital transformation, and collaborative partnerships.",
}

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
