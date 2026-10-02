import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteChrome } from '@/components/site-chrome'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins',
});

/** Google Tag Manager container for the site. */
const GTM_ID = 'GTM-NP7LWDVW'

// Google's standard container snippet, verbatim apart from the ID. Rendered as
// a plain inline <script> at the top of <head> so it ships in the server HTML
// and starts loading before hydration, as Google's install guide asks.
const gtmSnippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`

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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: gtmSnippet }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  )
}
