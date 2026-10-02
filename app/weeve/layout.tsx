import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Weeve — Products & Platforms | Bencos Research Solutions",
  description:
    "Weeve connects data, teams and decisions across the research lifecycle — a Bencos platform built to turn scattered activity into one coherent thread.",
}

export default function WeeveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
