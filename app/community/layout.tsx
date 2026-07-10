import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community | Bencos Research Solutions",
  description:
    "The Bencos community — researchers, clinicians, educators, and partners advancing science and healthcare together across the global life sciences ecosystem.",
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
