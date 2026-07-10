import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Bencos Research Solutions",
  description:
    "Get in touch with Bencos Research Solutions to discuss genomics consultancy, NGS services, bioinformatics, and partnerships.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
