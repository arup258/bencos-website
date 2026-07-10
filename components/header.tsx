"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, ChevronDown, ExternalLink, ArrowRight, Search } from "lucide-react"

/** Where the "Get Started" CTA sends users. */
const GET_STARTED_URL = "https://www.myneuronworld.com"

/** Pages the in-nav search can jump to. */
const searchablePages = [
  { title: "Home", href: "/", keywords: "home landing bencos" },
  {
    title: "Who We Are",
    href: "/who-we-are",
    keywords: "about journey milestones who we serve commitment story",
  },
  {
    title: "Our Aspiration",
    href: "/our-aspiration",
    keywords: "vision future life sciences aspiration purpose",
  },
  {
    title: "Sustainability",
    href: "/sustainability",
    keywords: "sustainability environment responsible green ethics planet esg",
  },
  {
    title: "Innovation",
    href: "/innovation",
    keywords: "innovation technology ai research discovery digital transformation platforms",
  },
  {
    title: "Life Sciences",
    href: "/life-sciences",
    keywords: "life sciences genomics bioinformatics multi-omics sequencing research",
  },
  {
    title: "Clinical Applications",
    href: "/clinical-applications",
    keywords: "clinical healthcare diagnostics precision medicine patient care reporting",
  },
  {
    title: "TWINE",
    href: "/twine",
    keywords: "twine technology platform ai bioinformatics sequencing genomic intelligence",
  },
  {
    title: "Bencos360",
    href: "/bencos360",
    keywords: "bencos360 customer experience ai automation business operations human intelligence",
  },
  {
    title: "BREF",
    href: "/bref",
    keywords: "bref research learn collaborate education knowledge sharing platform community",
  },
  {
    title: "GATC",
    href: "/gatc",
    keywords: "gatc conference genomics analysis technology event science innovation",
  },
  {
    title: "Insights",
    href: "/insights",
    keywords: "insights blog news articles knowledge discoveries perspectives updates newsroom",
  },
  {
    title: "Genomics Services",
    href: "/genomics-services",
    keywords: "genomics services dna rna sequencing ngs precision data analysis diagnostics",
  },
  {
    title: "Bioinformatics Services",
    href: "/bioinformatics-services",
    keywords: "bioinformatics services data analysis multi-omics transcriptomics pipelines ai insights",
  },
  {
    title: "Proteomics & Metabolomics Services",
    href: "/proteomics-metabolomics",
    keywords: "proteomics metabolomics mass spectrometry lipidomics biomarker metabolite protein analysis",
  },
  {
    title: "Clinical Genomics",
    href: "/clinical-genomics",
    keywords: "clinical genomics diagnostics variant interpretation oncology rare disease pharmacogenomics ngs",
  },
  {
    title: "AI & Data Analytics",
    href: "/ai-data-analytics",
    keywords: "ai data analytics machine learning deep learning predictive modelling data engineering mlops",
  },
  {
    title: "Scientific Consulting",
    href: "/scientific-consulting",
    keywords: "scientific consulting study design regulatory strategy grant publication research program advisory",
  },
  {
    title: "Leadership",
    href: "/leadership",
    keywords: "leadership team executives management board founders directors people",
  },
  {
    title: "Community",
    href: "/community",
    keywords: "community partners researchers clinicians educators network who we serve collaboration",
  },
  {
    title: "Our Ecosystem",
    href: "/our-ecosystem",
    keywords: "ecosystem network platforms collaboration connected research healthcare technology",
  },
  {
    title: "Services",
    href: "/services",
    keywords: "consultancy ngs biaas sequencing bioinformatics single cell",
  },
  {
    title: "Life Sciences",
    href: "/life-sciences",
    keywords: "life sciences genomics bioinformatics multi-omics ai precision research biotech pharma",
  },
  {
    title: "Our Brands",
    href: "/brands",
    keywords: "twine gatc bencos health bened products platforms panorama",
  },
  {
    title: "Newsroom",
    href: "/newsroom",
    keywords: "blog news whitepapers case studies insights press",
  },
  { title: "Careers", href: "/careers", keywords: "jobs roles hiring join team" },
  { title: "Contact", href: "/contact", keywords: "contact email phone reach support" },
  { title: "MyNeuron", href: "/myneuron", keywords: "myneuron platform insight engine" },
  { title: "Privacy Policy", href: "/privacy", keywords: "privacy policy data" },
  { title: "Terms", href: "/terms", keywords: "terms conditions legal" },
]

interface MenuLink {
  name: string
  href: string
  external?: boolean
}

interface MenuCategory extends MenuLink {
  /** Sub-links revealed in the third column when this category is hovered. */
  children?: MenuLink[]
}

interface MenuItem {
  label: string
  highlight: {
    title: string
    description: string
    cta: { label: string; href: string }
  }
  links: MenuCategory[]
}

const menuItems: MenuItem[] = [
  {
    label: "What we do",
    highlight: {
      title: "From biological samples to statistically robust insights.",
      description:
        "Built for innovators who demand precision at every stage of the discovery journey.",
      cta: { label: "Explore our work", href: "/services" },
    },
    links: [
      { name: "Life Sciences", href: "/life-sciences" },
      { name: "Healthcare", href: "/clinical-applications" },
      {
        name: "Technology Platforms",
        href: "/twine",
        children: [
          { name: "TWINE", href: "/twine" },
          { name: "MyNeuron", href: "/myneuron" },
        ],
      },
      { name: "Digital Ecosystem (Bencos360)", href: "/bencos360" },
      { name: "Scientific Publishing (BREF)", href: "/bref" },
      { name: "Scientific Conferences (GATC)", href: "/gatc" },
    ],
  },
  {
    label: "Who we are",
    highlight: {
      title: "14 years of advancing genomics research globally.",
      description:
        "A journey of innovation, scientific excellence and global collaboration.",
      cta: { label: "Discover our story", href: "/who-we-are" },
    },
    links: [
      { name: "About Us", href: "/who-we-are" },
      { name: "Our Aspiration", href: "/our-aspiration" },
      { name: "Leadership", href: "/leadership" },
      { name: "Community", href: "/community" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Our Ecosystem", href: "/our-ecosystem" },
    ],
  },
  {
    label: "Services",
    highlight: {
      title: "End-to-end scientific services, from sample to insight.",
      description:
        "Genomics, bioinformatics and consulting delivered with rigour, speed and reproducibility.",
      cta: { label: "Explore services", href: "/services" },
    },
    links: [
      { name: "Genomics Services", href: "/genomics-services" },
      { name: "Bioinformatics Services", href: "/bioinformatics-services" },
      { name: "Proteomics & Metabolomics Services", href: "/proteomics-metabolomics" },
      { name: "Clinical Genomics", href: "/clinical-genomics" },
      { name: "AI & Data Analytics", href: "/ai-data-analytics" },
      { name: "Scientific Consulting", href: "/scientific-consulting" },
    ],
  },
  {
    label: "Our Brands",
    highlight: {
      title: "A portfolio built for the future of precision science.",
      description:
        "Products and platforms driving innovation across the genomics ecosystem.",
      cta: { label: "View all brands", href: "/brands" },
    },
    links: [
      
      { name: "Bencos Health", href: "/clinical-applications"},
      { name: "Bencos360", href: "/bencos360" },
      { name: "TWINE", href: "/twine" },
      { name: "MyNeuron", href: "/myneuron" },
      { name: "BREF", href: "/bref" },
      { name: "GATC", href: "/gatc" },
    ],
  },
]

/** Top-level links shown alongside the mega-menu dropdowns. */
const simpleLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const toggleMenu = (label: string) => {
    setHoveredLink(null)
    setActiveMenu((prev) => (prev === label ? null : label))
  }

  const closeMenu = () => setActiveMenu(null)

  // Close the open dropdown on an outside click or the Escape key.
  useEffect(() => {
    if (!activeMenu) return
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null)
    }
    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [activeMenu])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-primary">
      {/* Top bar - optional */}
      <div className="hidden lg:block border-b border-sidebar-border/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex justify-end py-2">
          <div className="flex items-center gap-6 text-xs text-primary-foreground/60">
            <Link href="/careers" className="hover:text-green-600 transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-green-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/RESEARCH WHITE.png"
            alt="Bencos Research Solutions"
            className="h-10 w-auto"
          />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => toggleMenu(item.label)}
              aria-expanded={activeMenu === item.label}
              className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                activeMenu === item.label
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-green-600"
              }`}
            >
              {item.label}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === item.label ? "rotate-180" : ""
                }`}
              />
              {activeMenu === item.label && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}

          {/* Simple top-level links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-sm bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-all 
               hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-primary-foreground"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Full-Width Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 bg-primary border-t border-white/10 shadow-2xl"
          >
            {(() => {
              const active = menuItems.find((item) => item.label === activeMenu)
              if (!active) return null
              const current =
                active.links.find((link) => link.name === hoveredLink) ?? active.links[0]
              return (
                <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-10">
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Left: title + description + CTA */}
                    <motion.div
                      key={`${active.label}-copy`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      className="lg:col-span-3"
                    >
                      <h3 className="text-2xl font-light leading-snug text-primary-foreground ">
                      {active.highlight.title}
                    </h3>
                    <p className="mt-5 max-w-[500px] text-s text-white/60 scale-95 origin-left">
                      {active.highlight.description}
                    </p>
                      <Link
                        href={active.highlight.cta.href}
                        onClick={closeMenu}
                        className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground transition-colors hover:text-green-600"
                      >
                        {active.highlight.cta.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>

                    {/* Middle: category list with chevrons + separators */}
                    <div className="lg:col-span-4">
                      <ul>
                        {active.links.map((link, index) => {
                          const isActive = current?.name === link.name
                          const rowClass = `group flex items-center justify-between border-b border-white/10 py-4 pl-3 pr-3 -mx-3 transition-colors ${
                            isActive
                              ? "bg-white/5 text-accent"
                              : "text-primary-foreground/90 hover:text-green-600"
                          }`
                          const Chevron = (
                            <ChevronRight className="h-4 w-4 text-primary-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-green-600" />
                          )
                          return (
                            <motion.li
                              key={link.name}
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                              onMouseEnter={() => setHoveredLink(link.name)}
                            >
                              {link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMenu}
                                  className={rowClass}
                                >
                                  <span className="text-base">{link.name}</span>
                                  <ExternalLink className="h-4 w-4 text-primary-foreground/40 transition-all group-hover:text-green-600" />
                                </a>
                              ) : (
                                <Link href={link.href} onClick={closeMenu} className={rowClass}>
                                  <span className="text-base">{link.name}</span>
                                  {Chevron}
                                </Link>
                              )}
                            </motion.li>
                          )
                        })}
                      </ul>
                    </div>

                    {/* Right: sub-links of the hovered category */}
                    <div className="lg:col-span-5">
                      <AnimatePresence mode="wait">
                        {current?.children && (
                          <motion.div
                            key={current.name}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                          >
                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                              {current.name}
                            </p>
                            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                              {current.children.map((child, childIndex) => {
                                const childClass =
                                  "group flex items-center justify-between py-2.5 text-sm text-primary-foreground/70 transition-colors hover:text-green-600"
                                return (
                                  <motion.li
                                    key={child.name}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: childIndex * 0.04 }}
                                  >
                                    {child.external ? (
                                      <a
                                        href={child.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                        className={childClass}
                                      >
                                        <span>{child.name}</span>
                                        <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                                      </a>
                                    ) : (
                                      <Link href={child.href} onClick={closeMenu} className={childClass}>
                                        <span>{child.name}</span>
                                        <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                      </Link>
                                    )}
                                  </motion.li>
                                )
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-primary shadow-xl lg:hidden"
            >
              <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
                <span className="text-lg font-semibold text-primary-foreground">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-primary-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="overflow-y-auto h-[calc(100vh-4rem)] px-4 py-6">
                {menuItems.map((item) => (
                  <div key={item.label} className="mb-6">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                      {item.label}
                    </h3>
                    <ul className="space-y-1">
                      {item.links.map((link) => (
                        <li key={link.name}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 py-2.5 text-sm text-primary-foreground/80 hover:text-green-600 transition-colors"
                            >
                              {link.name}
                              <ExternalLink className="h-3 w-3 text-primary-foreground/40" />
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 text-sm text-primary-foreground/80 hover:text-green-600 transition-colors"
                            >
                              {link.name}
                            </Link>
                          )}
                          {link.children && (
                            <ul className="mb-1 ml-3 border-l border-white/10 pl-3">
                              {link.children.map((child) => (
                                <li key={child.name}>
                                  {child.external ? (
                                    <a
                                      href={child.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-2 py-2 text-xs text-primary-foreground/50 hover:text-green-600 transition-colors"
                                    >
                                      {child.name}
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  ) : (
                                    <Link
                                      href={child.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block py-2 text-xs text-primary-foreground/50 hover:text-green-600 transition-colors"
                                    >
                                      {child.name}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Simple top-level links */}
                <ul className="mb-2 space-y-1 border-t border-sidebar-border pt-4">
                  {simpleLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2.5 text-sm font-medium text-primary-foreground/90 hover:text-green-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-sidebar-border pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full rounded-sm bg-accent py-3 text-center text-sm font-medium text-primary"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
