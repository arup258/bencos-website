import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights | Bencos Research Solutions",
  description:
    "Knowledge that drives innovation — the latest scientific discoveries, healthcare advancements, technology innovations, company updates and expert perspectives from across the Bencos ecosystem.",
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
