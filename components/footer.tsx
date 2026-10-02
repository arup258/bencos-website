import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

/** X (formerly Twitter) mark — lucide only ships the old bird. */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" aria-hidden className={className}>
      <path d="M4.5 2.9c-.3.2-.5.6-.5 1.1v16c0 .5.2.9.5 1.1L14 12 4.5 2.9Z" />
      <path d="M4.5 2.9 17 9.8 14 12" />
      <path d="M4.5 21.1 17 14.2 14 12" />
      <path d="m17 9.8 2.9 1.6c.5.3.5 1 0 1.2L17 14.2" />
    </svg>
  )
}

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/bencosrs/", icon: Facebook, hover: "hover:bg-[#1877F2]" },
  { name: "YouTube", href: "https://www.youtube.com/@bencosrs", icon: Youtube, hover: "hover:bg-[#FF0000]" },
  { name: "X", href: "https://x.com/BencosRS?t=tXnd3m-2MNFWu2yhecm5og&s=09", icon: XIcon, hover: "hover:bg-black" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bencosrs/",
    icon: Instagram,
    hover: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bencoshealth/posts/?feedView=all",
    icon: Linkedin,
    hover: "hover:bg-[#0A66C2]",
  },
]

// MyNeuron app store listings. If a URL is cleared, that badge shows as "Coming soon".
const APP_STORE_URL = "https://apps.apple.com/in/app/myneuron-world/id6814426551"
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.bencos.myneuron&pcampaignid=web_share"

const appBadges = [
  { name: "App Store", caption: "Download on the", href: APP_STORE_URL, icon: AppleIcon },
  { name: "Google Play", caption: "GET IT ON", href: PLAY_STORE_URL, icon: GooglePlayIcon },
]

const legalLinks = [
  { name: "Privacy Notice", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Terms of Service", href: "/terms" },
]

const badgeClass =
  "flex h-11 items-center gap-2.5 rounded-lg border border-white/70 bg-black px-3 text-white transition-colors"

const MYNEURON_LOGO = "/images/myneuron-logo.png"

function AppBadge({ badge }: { badge: (typeof appBadges)[number] }) {
  const inner = (
    <>
      <badge.icon className="h-6 w-6 shrink-0 text-white" />
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium tracking-wide text-white">
          {badge.href ? badge.caption : "Coming soon on"}
        </span>
        <span className="mt-0.5 block text-[15px] font-semibold tracking-tight">{badge.name}</span>
      </span>
    </>
  )
  return badge.href ? (
    <a
      href={badge.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${badge.caption} ${badge.name}`}
      className={`${badgeClass} hover:border-white hover:bg-neutral-900`}
    >
      {inner}
    </a>
  ) : (
    <span aria-label={`Coming soon on ${badge.name}`} className={`${badgeClass} cursor-default opacity-80`}>
      {inner}
    </span>
  )
}

export function Footer() {
  return (
    <footer className="bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Top: brand + socials | MyNeuron app */}
        <div className="flex flex-col items-center gap-10 py-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block">
              <img src="/RESEARCH WHITE.png" alt="Bencos Research Solutions" className="h-10 w-auto" />
            </Link>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-all hover:-translate-y-0.5 hover:ring-transparent ${social.hover}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* MyNeuron app */}
          {/* Logo tile stretches to the exact height of the text + buttons beside it */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:gap-5">
            <a
              href="https://www.myneuronworld.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MyNeuron"
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm transition-transform hover:scale-105 sm:h-auto sm:w-[106px]"
            >
              <img src={MYNEURON_LOGO} alt="MyNeuron logo" className="h-full max-h-[90px] w-full object-contain" />
            </a>
            <div className="flex flex-col justify-center text-center sm:text-left">
              <p className="text-lg font-semibold leading-none text-white">MyNeuron</p>
              <p className="mt-2 text-sm leading-none text-white/70">Get the app for iOS and Android.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2.5 sm:justify-start">
                {appBadges.map((badge) => (
                  <AppBadge key={badge.name} badge={badge} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col items-center gap-3 pb-6 pt-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[13px] text-white/80">&copy;{new Date().getFullYear()} Bencos Research Solutions</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] text-white/70 transition-colors hover:text-green-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
