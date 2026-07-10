import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clinical Applications | Bencos Research Solutions",
  description:
    "Advancing healthcare through clinical innovation — empowering clinicians with precision genomics, AI-powered diagnostics, automated clinical reporting, and personalized medicine for faster, smarter patient care.",
}

export default function ClinicalApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
