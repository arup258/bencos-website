import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsroom & Insights | Bencos Research Solutions",
  description:
    "Stay updated with the latest news, blog posts, and whitepapers from Bencos Research Solutions.",
}

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
