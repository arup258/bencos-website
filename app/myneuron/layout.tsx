import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MyNeuron | Bencos Research Solutions",
  description:
    "MyNeuron — a unified ecosystem empowering scientific discovery through intelligent technology, for research, innovation, learning and collaboration.",
}

export default function MyNeuronLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
