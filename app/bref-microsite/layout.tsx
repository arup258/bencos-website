import type { Metadata } from "next"
import { Fraunces } from "next/font/google"

// Serif used for the closing "Let's Build What Comes Next." heading.
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-fraunces" })

export const metadata: Metadata = {
  title: "Bencos Research and Education Foundation | BREF",
  description:
    "Bencos Research and Education Foundation works across research, education, healthcare and social development.",
}

export default function BrefMicrositeLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>
}
