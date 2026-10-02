"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/** Routes that render their own header/footer (standalone product microsites). */
const STANDALONE_ROUTES = ["/twine-microsite", "/brs-microsite", "/bencos360-microsite", "/bref-microsite"]

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const standalone = STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`),
  )

  if (standalone) return <main>{children}</main>

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[81px]">{children}</main>
      <Footer />
    </>
  )
}
