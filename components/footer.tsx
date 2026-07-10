import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Life Sciences", href: "/life-sciences" },
    { name: "Clinical Applications", href: "/clinical-applications" },
    { name: "TWINE Platform", href: "/twine" },
    { name: "Bencos360", href: "/bencos360" },
    { name: "BREF", href: "/bref" },
    { name: "GATC", href: "/gatc" },
    { name: "Genomics Services", href: "/genomics-services" },
    { name: "Bioinformatics Services", href: "/bioinformatics-services" },
    { name: "Proteomics & Metabolomics", href: "/proteomics-metabolomics" },
    { name: "Clinical Genomics", href: "/clinical-genomics" },
    { name: "AI & Data Analytics", href: "/ai-data-analytics" },
    { name: "Scientific Consulting", href: "/scientific-consulting" },
    { name: "NGS Services", href: "/services#ngs" },
    { name: "BIAAS", href: "/services#biaas" },
    { name: "Consultancy", href: "/services#consultancy" },
  ],
  company: [
    { name: "About Us", href: "/who-we-are" },
    { name: "Our Journey", href: "/who-we-are#journey" },
    { name: "Global Presence", href: "/who-we-are#global" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Innovation", href: "/innovation" },
    { name: "Leadership", href: "/leadership" },
    { name: "Community", href: "/community" },
    { name: "Our Ecosystem", href: "/our-ecosystem" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    
    { name: "Contact", href: "/contact" },
  ],
}

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/bencosrs/", icon: Facebook },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bencoshealth/posts/?feedView=all", icon: Linkedin },
  { name: "X", href: "https://x.com/BencosRS?t=tXnd3m-2MNFWu2yhecm5og&s=09", icon: Twitter },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
]

interface FooterColumnProps {
  title: string
  links: { name: string; href: string }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-green-600">{title}</h3>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-green-600"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/brs-01.png"
                alt="Bencos Research Solutions"
                width={200}
                height={64}
                className="h-20 w-auto"
                priority
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground">
              India&apos;s pioneering genomics research organization, advancing
              scientific discovery since 2011.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-green-600 transition-colors hover:text-green-700"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm font-medium text-foreground">
            {new Date().getFullYear()} Bencos Research Solutions. All rights reserved
          </p>
          <div className="flex items-center gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-green-600"
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
