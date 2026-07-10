import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bencos360 | Bencos Research Solutions",
  description:
    "Human Intelligence Meets AI — Bencos360 helps organizations create exceptional customer experiences by combining human expertise, intelligent automation, and AI-driven solutions to deliver measurable business growth.",
}

export default function Bencos360Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
