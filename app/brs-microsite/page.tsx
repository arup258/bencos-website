"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, animate, useInView } from "framer-motion"
import {
  ArrowRight,
  Cloud,
  ClipboardCheck,
  Code2,
  Layers,
  LifeBuoy,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react"

// All page images live in /public/images/brs — replace a file (same name) to swap it.
const IMG = "/images/brs"
const LOGO = `${IMG}/bencos-logo.png`
const FOOTER_LOGO = `${IMG}/bencos-logo-white.png`

// Get a free access key at https://web3forms.com and paste it here.
const WEB3FORMS_ACCESS_KEY = "ea96e555-0fac-4c10-928a-bb399071be8b"

const PHONE = "+91 96066 66610"
const EMAIL = " info@bencoslife.com"
const WHATSAPP_URL = "https://wa.me/919606666610"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "TWINE", href: "#twine" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
]

const focusAreas = [
  "Genomics",
  "Clinical Reporting",
  "NGS",
  "AI",
  "Bioinformatics",
  "Scientific expertise",
]

const products = [
  {
    tag: "Product",
    title: "Sample Collection & Isolation",
    description: "Stabilised collection and nucleic acid isolation built for downstream NGS quality.",
    image: `${IMG}/product-1.webp`,
    href: "#contact",
  },
  {
    tag: "Product",
    title: "Preset & Custom Panels",
    description: "Curated disease panels, or a panel designed around your gene list.",
    image: `${IMG}/product-2.webp`,
    href: "#contact",
  },
  {
    tag: "Product",
    title: "Library Preparation Kits",
    description: "Consistent, low-input library chemistry for DNA and RNA workflows.",
    image: `${IMG}/product-3.webp`,
    href: "#contact",
  },
  {
    tag: "Software",
    title: "TWINE Clinical Reporting Software",
    description: "No-code genomic analysis and clinical interpretation in one secure platform.",
    image: `${IMG}/product-4.webp`,
    href: "/twine-microsite",
  },
]

const services = [
  {
    title: "Consultancy",
    description: "Turn complex research goals into actionable strategies.",
    image: `${IMG}/service-1.webp`,
    href: "/scientific-consulting",
  },
  {
    title: "Bioinformatics as a Service",
    description: "Transform raw genomic data into meaningful discoveries.",
    image: `${IMG}/service-2.webp`,
    href: "/bioinformatics-services",
  },
  {
    title: "Clinical Reporting",
    description: "Turn genomic variation into clear, clinically relevant insights.",
    image: `${IMG}/service-3.webp`,
    href: "/clinical-applications",
  },
]

const platformFeatures = [
  {
    icon: Code2,
    title: "No-code genomic analysis",
    description: "Run validated pipelines without writing a line of code.",
    tint: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Layers,
    title: "Advanced pipelines",
    description: "WGS, WES, RNA-Seq, single-cell and targeted panels.",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ClipboardCheck,
    title: "Clinical interpretation",
    description: "ACMG-aligned classification and report templates.",
    tint: "bg-amber-50 text-amber-500",
  },
  {
    icon: Cloud,
    title: "Cloud-enabled analysis",
    description: "Elastic compute that scales with cohort size.",
    tint: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure data handling",
    description: "Role-based access, encryption and full audit trails.",
    tint: "bg-neutral-100 text-neutral-900",
  },
  {
    icon: LifeBuoy,
    title: "24×7 expert support",
    description: "Bioinformaticians on call throughout your project.",
    tint: "bg-blue-50 text-blue-600",
  },
]

const articles = [
  {
    tag: "Transcriptomics",
    date: "12 Mar 2026",
    title: "How RNA Sequencing Enhances Clinical Diagnostics",
    description:
      "Where DNA sequencing ends, transcriptomics often begins - resolving variants of uncertain significance through functional evidence.",
    image: `${IMG}/article-1.webp`,
    href: "/insights",
  },
  {
    tag: "Clinical Genomics",
    date: "28 Feb 2026",
    title: "Clinical Reporting for Germline Disease",
    description:
      "A practical view of classification, phenotype correlation and how reports should read at the bedside.",
    image: `${IMG}/article-2.webp`,
    href: "/insights",
  },
  {
    tag: "Laboratory",
    date: "09 Feb 2026",
    title: "Pre-analytical Steps for Clinical Genomics",
    description:
      "Most failed runs are decided long before sequencing. Collection, storage and extraction set the ceiling on data quality.",
    image: `${IMG}/article-3.webp`,
    href: "/insights",
  },
  {
    tag: "Sequencing",
    date: "21 Jan 2026",
    title: "Whole-Exome Sequencing: Significance and Clinical Applications",
    description:
      "Why the exome remains the pragmatic first-line test across rare disease and oncology programmes.",
    image: `${IMG}/article-4.webp`,
    href: "/insights",
  },
]

// `count` animates from 1 up to that number when the section scrolls into view;
// `value` is what is shown once the count finishes (entries without `count` stay static).
const stats = [
  { value: "10+", count: 10, label: "Countries" },
  { value: "2K+", count: 2000, label: "Customers" },
  { value: "AWS", label: "Partner" },
  { value: "150+", count: 150, label: "High-impact journal articles" },
]

/** Stats row whose numbers count up from 1 together once the row scrolls into view. */
function StatsRow() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, 1, {
      duration: 2,
      ease: "easeOut",
      onUpdate: setProgress,
      onComplete: () => setProgress(1),
    })
    return () => controls.stop()
  }, [inView])

  const display = (s: (typeof stats)[number]) => {
    if (!s.count || progress >= 1) return s.value
    return Math.max(1, Math.round(1 + (s.count - 1) * progress)).toLocaleString("en-IN")
  }

  return (
    <div
      ref={ref}
      className="mt-24 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[296px_337px_339px_1fr]"
    >
      {stats.map((s, i) => (
        <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
          <p className="text-5xl font-semibold tabular-nums text-[#fb8c1f] sm:text-[64px] sm:leading-none">
            {display(s)}
          </p>
          <div className="mt-5 w-full max-w-[238px] border-t border-neutral-900" />
          <p className="mt-4 text-lg text-neutral-950 sm:text-[18px] lg:whitespace-nowrap">{s.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

const footerExplore = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "TWINE", href: "/twine-microsite" },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bencoshealth/posts/?feedView=all" },
  { label: "X", href: "https://x.com/BencosRS" },
  { label: "YouTube", href: "https://www.youtube.com/@bencosrs" },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-[17px]"
const orangeBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#fb8c1f] font-semibold text-white transition-colors hover:bg-[#ea7c10]"

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[15px] font-medium uppercase tracking-wide text-neutral-500 ${className}`}>
      {children}
    </p>
  )
}

function BrsHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-[#f8f9fb] transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className={`${container} flex h-[80px] items-center justify-between lg:h-[102px]`}>
        <Link href="/brs-microsite" aria-label="Bencos home" className="shrink-0">
          <img src={LOGO} alt="Bencos Healthcare Solution" className="h-12 w-auto lg:h-[62px]" />
        </Link>

        <nav className="hidden items-center lg:flex">
          <div className="mr-[112px] flex items-center gap-[39px]">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium text-neutral-950 transition-colors hover:text-[#fb8c1f] ${
                  i === 0 ? "mr-5" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#fb8c1f] px-[35px] py-[11px] text-[15px] font-semibold text-neutral-950 transition-colors hover:bg-[#ea7c10]"
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-900 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-neutral-200 bg-[#f8f9fb] lg:hidden"
          >
            <div className={`${container} flex flex-col gap-1 py-4`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-[15px] font-medium text-neutral-900 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#fb8c1f] px-6 py-3 text-center text-[15px] font-semibold text-neutral-950"
              >
                Get Started
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function DemoEnquiry() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Bencos Demo] Enquiry from ${form.name}`,
          from_name: "Bencos Demo Enquiry",
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("done")
        setForm({ name: "", email: "", organization: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const label = "block text-xs font-semibold uppercase tracking-wide text-neutral-700"
  const field =
    "mt-2 w-full rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#fb8c1f] focus:ring-2 focus:ring-[#fb8c1f]/20"

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 rounded-2xl bg-white px-6 py-10 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:px-10"
    >
      <p className="text-[22px] font-bold text-neutral-950">Demo Enquiry</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className={label}>
          First Name
          <input name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Sarah" className={field} />
        </label>
        <label className={label}>
          Work Email
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="e.g. sarah@institution.org" className={field} />
        </label>
      </div>
      <label className={`${label} mt-5`}>
        Company / Institution
        <input name="organization" value={form.organization} onChange={handleChange} placeholder="e.g. Genomics Lab Group" className={field} />
      </label>
      <label className={`${label} mt-5`}>
        Enquiry Details
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your genomics scope or platform needs..."
          className={`${field} resize-none`}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-md bg-gradient-to-r from-[#c75f02] to-[#fb8c1f] py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "done" && (
        <p className="mt-4 text-sm text-green-700">Thanks! Our experts will be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

function BrsFooter() {
  return (
    <footer className="bg-[#040b14] text-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-[88px] sm:px-6 lg:px-[80px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[560px_400px_1fr] lg:gap-0">
          <div>
            <Link href="/brs-microsite" aria-label="Bencos home" className="inline-block">
              <img src={FOOTER_LOGO} alt="Bencos Healthcare Solution" className="h-[80px] w-auto" />
            </Link>
            <p className="mt-6 max-w-[360px] text-sm leading-[1.6] text-white/70">
              Bencos Health builds the products, pipelines and clinical expertise that turn genomic
              data into decisions – for research institutions, hospitals and diagnostic
              laboratories.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fb8c1f]">Explore</p>
            <ul className="mt-7 space-y-3.5 text-sm text-white/70">
              {footerExplore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fb8c1f]">Contact</p>
            <ul className="mt-7 space-y-3.5 text-sm text-white/70">
              <li>Awfis Technopolis, BP Block, Sector V, Bidhannagar
              Kolkata, West Bengal, India</li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-white">
                  {PHONE}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              {socials.map((s, i) => (
                <span key={s.label} className="flex items-center gap-4">
                  {i > 0 && <span className="text-white/30">|</span>}
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {s.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 py-8 text-xs text-white/50">
          © {new Date().getFullYear()} Bencos Health. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function BrsMicrositePage() {
  return (
    <div className="scroll-smooth bg-[#f8f9fb] font-sans text-neutral-950">
      <BrsHeader />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#08121c]">
        <img
          src={`${IMG}/hero.png`}
          alt="Scientist in a genomics laboratory"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40 md:hidden" />
        <div className={`${container} relative flex min-h-[520px] items-center py-16 lg:min-h-[605px]`}>
          <div className="max-w-[720px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-medium leading-[1.2] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.2]"
            >
              The Future of Genomic <br className="hidden sm:block" />
              Medicine Is <span className="text-[#fb8c1f]">You.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 max-w-[600px] text-base leading-[1.75] text-white"
            >
              Advancing genomics, bioinformatics and clinical insights to transform research and
              precision healthcare.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-14 flex flex-wrap gap-6"
            >
              <a href="#products" className={`${orangeBtn} h-[57px] w-[225px] text-sm font-bold`}>
                Explore Our Solutions
              </a>
              <a
                href="#contact"
                className="inline-flex h-[57px] w-[225px] items-center justify-center rounded-full border border-white text-sm font-bold text-white transition-colors hover:bg-white hover:text-neutral-950"
              >
                Talk to Our Experts
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ OVERVIEW ============================ */}
      <section id="about" className="scroll-mt-24 py-16 lg:pb-[112px] lg:pt-[112px]">
        <div className={`${container} grid items-start gap-10 lg:grid-cols-[666px_1fr] lg:gap-[97px]`}>
          <motion.img
            {...fadeUp}
            src={`${IMG}/overview.webp`}
            alt="Scientist pipetting samples in a genomics lab"
            className="aspect-[666/561] w-full rounded-[34px] object-cover"
          />
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="lg:pt-6">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-8 text-[26px] font-medium leading-[1.5] text-neutral-950 sm:text-[33px]">
              Turning Complex Genomic Data Into Meaningful Decisions.
            </h2>
            <p className="mt-8 text-base leading-[1.6] text-neutral-900">
              Bencos Health is a life sciences company working at the intersection of genomics,
              next-generation sequencing and computational biology. We support research
              institutions, hospitals and diagnostic laboratories from study design through to
              clinically actionable reporting.
              <br />
              Our teams combine wet-lab products, scalable bioinformatics pipelines, AI-assisted
              interpretation and clinical scientific review inside a single workflow — so that
              genomic data arrives as evidence, not as a backlog.
            </p>
            <div className="mt-7 border-t border-neutral-400" />
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-6 text-base font-medium text-neutral-950">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#fb8c1f]" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============================ PRODUCTS ============================ */}
      <section id="products" className="scroll-mt-24 bg-[#f3f4f7] pb-24 pt-16">
        <div className={container}>
          <motion.div {...fadeUp}>
            <Eyebrow>Products</Eyebrow>
            <h2 className="mt-8 text-[26px] font-medium leading-[1.5] text-neutral-950 sm:text-[33px]">
              Integrated Products.
              <br />
              Complete Solutions.
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-[46px] lg:gap-y-[86px]">
            {products.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <img src={p.image} alt={p.title} className="aspect-[680/396] w-full object-cover" />
                <div className="flex flex-1 flex-col px-[19px] pb-[30px] pt-8">
                  <p className="text-xl uppercase tracking-[0.1em] text-[#fb8c1f]">{p.tag}</p>
                  <h3 className="mt-4 text-2xl font-medium text-neutral-950">{p.title}</h3>
                  <p className="mt-5 flex-1 text-base leading-[1.65] text-neutral-900">{p.description}</p>
                  <Link
                    href={p.href}
                    className="mt-12 inline-flex w-fit rounded-full border border-[#fb8c1f]/70 px-4 py-2 text-base uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:bg-[#fb8c1f] hover:text-white"
                  >
                    Explore
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section id="services" className="scroll-mt-24 pb-20 pt-[110px]">
        <div className={container}>
          <motion.div {...fadeUp}>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-8 text-[26px] font-medium text-neutral-950 sm:text-[33px]">Our Services</h2>
            <p className="mt-6 text-base text-neutral-900">From scientific strategy to genomic interpretation.</p>
          </motion.div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-[59px]">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col overflow-hidden rounded-[26px] border border-neutral-300 bg-white"
              >
                <img src={s.image} alt={s.title} className="aspect-[429/397] w-full object-cover" />
                <div className="flex flex-1 flex-col px-[13px] pb-11 pt-7">
                  <p className="text-xl text-green-600">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-2xl font-medium text-neutral-950">{s.title}</h3>
                  <p className="mt-4 flex-1 text-sm font-light text-neutral-600">{s.description}</p>
                  <Link
                    href={s.href}
                    className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#07a74a] to-[#066f2c] text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_6px_14px_rgba(7,167,74,0.25)] transition-opacity hover:opacity-90"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TWINE PLATFORM ============================ */}
      <section id="twine" className="scroll-mt-24 pt-6">
        <div className={`${container} flex flex-wrap items-end justify-between gap-6`}>
          <motion.div {...fadeUp}>
            <Eyebrow>Platform</Eyebrow>
            <h2 className="mt-8 text-[26px] font-medium text-neutral-950 sm:text-[33px]">TWINE</h2>
            <p className="mt-6 text-base text-neutral-900">From genomic data to actionable insight.</p>
          </motion.div>
          <Link
            href="/twine-microsite"
            className="group mb-1 inline-flex h-[61px] items-center gap-2 rounded-full bg-gradient-to-r from-[#07a74a] to-[#066f2c] px-7 text-sm font-bold text-white transition-shadow hover:shadow-lg hover:shadow-green-600/30"
          >
            Explore TWINE
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {/* Whole screenshot, fitted to the page width (no cropping). */}
        <div className={`${container} mt-8`}>
          <motion.img
            {...fadeUp}
            src={`${IMG}/twine-platform.webp`}
            alt="TWINE platform sign-in screen"
            className="block h-auto w-full rounded-2xl border border-neutral-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          />
        </div>
        <div className="mx-auto -mt-2 grid max-w-[1232px] gap-6 px-4 pt-[50px] sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {platformFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-neutral-200 bg-white px-6 pb-6 pt-7"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${f.tint}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-medium text-neutral-950">{f.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-[1.6] text-neutral-600">{f.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ============================ INSIGHTS ============================ */}
      <section id="insights" className="scroll-mt-24 pb-20 pt-[120px]">
        <div className={container}>
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600">Genomics Services</p>
            <h2 className="mt-3 text-3xl font-medium text-neutral-950 sm:text-[38px]">
              Built for modern genomics workflows
            </h2>
            <p className="mt-5 max-w-[740px] text-[17px] leading-[1.55] text-neutral-500">
              From no-code pipelines to clinical interpretation, our platform is designed to reduce
              friction and accelerate decision-making across teams.
            </p>
          </motion.div>
          <div className="mt-14 grid items-start gap-10 md:grid-cols-2 md:gap-x-[50px] md:gap-y-12">
            {articles.map((a, i) => (
              <motion.article
                key={a.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="rounded-[22px] border border-neutral-200 bg-white p-[19px] pb-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
              >
                <img src={a.image} alt={a.title} className="aspect-[639/396] w-full rounded-2xl object-cover" />
                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#fb8c1f]">{a.tag}</span>
                  <span className="text-xs text-neutral-600">{a.date}</span>
                </div>
                <h3 className="mt-5 text-[22px] font-bold leading-snug text-neutral-950">{a.title}</h3>
                <p className="mt-5 text-sm leading-[1.6] text-neutral-700">{a.description}</p>
                <Link
                  href={a.href}
                  className={`${orangeBtn} group mt-7 h-11 px-[18px] text-sm shadow-[0_8px_18px_rgba(7,167,74,0.18)]`}
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY BENCOS ============================ */}
      <section className="pb-24 pt-10">
        <div className={container}>
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600">Why Bencos?</p>
            <h2 className="mt-3 text-3xl font-medium text-neutral-950 sm:text-[38px]">Why Bencos?</h2>
            <p className="mt-5 max-w-[740px] text-[17px] leading-[1.55] text-neutral-500">
              From no-code pipelines to clinical interpretation, our platform is designed to reduce
              friction and accelerate decision-making across teams.
            </p>
          </motion.div>
          <StatsRow />
        </div>
      </section>

      {/* ============================ COLLABORATION BANNER ============================ */}
      <section className="relative overflow-hidden bg-[#10304f]">
        <img
          src={`${IMG}/collaboration.webp`}
          alt="Scientists reviewing results together"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-[#0d2a45]/50 md:hidden" />
        <div className={`${container} relative flex min-h-[460px] items-center py-16 lg:min-h-[543px]`}>
          <motion.div {...fadeUp} className="max-w-[730px]">
            <h2 className="text-3xl font-medium leading-[1.2] text-white sm:text-[36px]">
              Science is powerful.
              <br />
              Collaboration makes it meaningful.
            </h2>
            <p className="mt-10 text-lg leading-[1.35] text-white sm:text-[20px]">
              Behind every pipeline and every report there is a team of scientists, clinicians and
              engineers who care about the question being asked. We work closely with our
              customers — reviewing data together, challenging assumptions and adapting the
              approach until the science holds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================ CONTACT ============================ */}
      <section id="contact" className="scroll-mt-24 py-16 lg:pb-[66px] lg:pt-[175px]">
        <div className="mx-auto grid w-full max-w-[1440px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[500px_1fr] lg:gap-16 lg:px-[80px]">
          <motion.img
            {...fadeUp}
            src={`${IMG}/contact.webp`}
            alt="Bencos team in conversation at the office"
            className="hidden aspect-[500/920] w-full rounded-[26px] object-cover lg:block"
          />
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-[716px]">
            <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase text-[#fb8c1f]">
              Contact
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.2] text-[#0f172a] sm:text-[42px]">
              Let&apos;s Build the Future of Genomic Medicine.
            </h2>
            <p className="mt-6 text-base leading-[1.65] text-neutral-600">
              Tell us what you&apos;re working on. Our experts are ready to collaborate on your
              clinical or research initiatives.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
              {[
                { icon: Phone, label: "Talk to an Expert", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
                { icon: MessageSquare, label: "WhatsApp Business", value: "Chat with our team", href: WHATSAPP_URL },
                { icon: Mail, label: "Email Inquiries", value: EMAIL, href: `mailto:${EMAIL}` },
              ].map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-[#fb8c1f]">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span>
                      <span className="block text-xs text-neutral-700">{c.label}</span>
                      <span className="block text-base font-semibold text-neutral-950 group-hover:text-[#fb8c1f]">
                        {c.value}
                      </span>
                    </span>
                  </a>
                )
              })}
            </div>
            <DemoEnquiry />
          </motion.div>
        </div>
      </section>

      <BrsFooter />
    </div>
  )
}
