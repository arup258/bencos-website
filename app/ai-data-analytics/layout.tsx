import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & Data Analytics | Bencos Research Solutions",
  description:
    "AI-driven analytics services — machine learning, predictive modelling, and scalable data pipelines that turn complex scientific data into actionable intelligence.",
}

export default function AiDataAnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
