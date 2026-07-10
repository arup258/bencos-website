import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Bencos Research Solutions | Genomics & Bioinformatics Partner',
  description: 'Empowering universities and innovators to move from biological samples to statistically robust, insight-rich outputs. Serious science. Scalable discovery.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/brs-04.png',
        type: 'image/png',
      },
    ],
    shortcut: '/brs-04.png',
    apple: '/brs-04.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
