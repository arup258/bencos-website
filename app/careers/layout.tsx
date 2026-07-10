import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Bencos Research Solutions",
  description:
    "Build the future with us — join a team of scientists, researchers, clinicians, engineers, and innovators transforming life sciences, precision healthcare, and intelligent technology.",
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
