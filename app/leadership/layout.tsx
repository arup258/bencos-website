import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leadership | Bencos Research Solutions",
  description:
    "Our leadership team brings together expertise in biotechnology, genomics, healthcare, artificial intelligence, bioinformatics, and business strategy to drive innovation and create lasting impact.",
}

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
