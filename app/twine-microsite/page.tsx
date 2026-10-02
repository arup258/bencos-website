"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Maximize, Menu, Pause, Play, X } from "lucide-react"

// All TWINE images live in /public/images/twine — replace a file (same name) to swap it.
const IMG = "/images/twine"
const LOGO = `${IMG}/twine-logo.png`
const FOOTER_LOGO = `${IMG}/Twine-02.png` // white version for the dark footer

// Get a free access key at https://web3forms.com and paste it here.
const WEB3FORMS_ACCESS_KEY = "ea96e555-0fac-4c10-928a-bb399071be8b"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#applications" },
  { label: "Technology", href: "#technology" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#contact" },
  { label: "Contact", href: "#contact" },
]

const highlights = [
  { title: "Multi-omics", description: "Genomics and transcriptomics today, proteomics and metabolomics next." },
  { title: "Hybrid", description: "Runs across your local systems and the cloud without friction." },
  { title: "Scalable", description: "From a small sample group to a large population cohort." },
  { title: "Validated", description: "An end-to-end platform validated by NGS experts." },
]

const features = [
  {
    title: "End-to-End Solution",
    description:
      "Starting right from raw data files to processing multi-species sequencing reads and generating actionable insights, TWINE handles the complete workflow with 99.9% precision and accelerated speed.",
    image: `${IMG}/feature-1.webp`,
  },
  {
    title: "Multi-omics Platform",
    description:
      "With a strong focus on multi-omics integration, TWINE delivers unmatched accuracy in genomics and transcriptomics, with future readiness for proteomics and metabolomics.",
    image: `${IMG}/feature-2.webp`,
  },
  {
    title: "Fast, Accurate & Scalable",
    description:
      "Get results quickly without relying on third parties or compromising accuracy. Whether running a small sample group or a large population cohort, TWINE scales to meet your needs.",
    image: `${IMG}/feature-3.webp`,
  },
  {
    title: "Multi-sequencer Compatibility",
    description:
      "Process raw short or long, single-end or paired-end reads from all leading sequencing platforms, including Illumina, ONT, MGI, and PacBio.",
    image: `${IMG}/feature-4.webp`,
  },
  {
    title: "Advanced Tertiary Analysis",
    description:
      "Visualize your results as ready-to-publish tables, plots, and graphs with user-controlled parameter flexibility and flexible file export options.",
    image: `${IMG}/feature-5.webp`,
  },
  {
    title: "Comprehensive Analysis",
    description:
      "Support for multi-omic sequencing data analysis, longitudinal sample monitoring, and trend tracking — all in one unified platform.",
    image: `${IMG}/feature-6.webp`,
  },
]

const workflow = [
  {
    title: "Upload Data",
    description: "Bring raw reads from any sequencer or library type into a single workspace.",
    image: `${IMG}/workflow-1.webp`,
  },
  {
    title: "Run Analysis",
    description: "Automated no-code pipelines run variant calling, annotation and expression analysis.",
    image: `${IMG}/workflow-2.webp`,
  },
  {
    title: "Review Results",
    description: "Explore comprehensive gene and variant lists with full parameter flexibility.",
    image: `${IMG}/workflow-3.webp`,
  },
  {
    title: "Generate Report",
    description: "Export ready-to-publish tables, plots and graphs in flexible file formats.",
    image: `${IMG}/workflow-4.webp`,
  },
]

const screens = [
  { title: "Live pipeline monitoring", image: `${IMG}/screen-1.webp` },
  { title: "Variant review & prioritization", image: `${IMG}/screen-2.webp` },
  { title: "Expression & pathway analysis", image: `${IMG}/screen-3.webp` },
]

const applications = [
  {
    title: "Targeted or Whole Genome Sequencing",
    description:
      "Accelerate your research with flexible analysis pipelines and custom workflows for accurate variant calling.",
    image: `${IMG}/app-targeted.webp`,
    points: [
      "Whole Genome, Whole Exome & Targeted Panel compatibility",
      "Customizable workflows with gold-standard analysis tools",
      "Detects SNVs, Indels, CNVs and other Structural Variants",
      "Cohort-level analysis and comparison",
      "Selection of both GRCh37 and GRCh38 human build references",
      "Integration with public databases for variant prioritization",
      "Export data for downstream analysis",
    ],
  },
  {
    title: "Bulk RNA & Multi-RNA Species Sequencing",
    description:
      "Carry out expression and gene-regulation studies with multiple RNA analysis pipelines.",
    image: `${IMG}/app-rna.webp`,
    points: [
      "Bulk RNA, mRNA, miRNA, lncRNA, scRNA data analysis compatibility",
      "Additional options for RNA variant and RNA fusion analysis",
      "Advanced feature tool to analyse alternative splicing",
      "Customizable workflows with gold-standard analysis tools",
      "Cohort-level, longitudinal analysis and comparison",
      "Multi-species references from UCSC, Gencode, Ensembl (GRCh37 & GRCh38)",
      "Easy export of data for downstream analysis",
    ],
  },
  {
    title: "Microbial, Fungal & Viral Species Sequencing",
    description:
      "Process metagenomic data from multiple sample types and sequencing platforms for species detection and quantification.",
    image: `${IMG}/app-microbial.webp`,
    points: [
      "Supports Shotgun sequencing, Targeted (16S/18S/ITS) & WGS",
      "Species resolution based on Taxonomy and Phylogeny (DNA & RNA)",
      "Report relative microbial abundance within a sample",
      "Detects SNVs and InDels",
      "Monitor antimicrobial drug resistance genes",
      "Suited for large-scale epidemiological studies",
    ],
  },
]

const clinical = [
  {
    tag: "Oncology",
    title: "Tumor & Therapy Monitoring",
    description:
      "Process somatic tumor-normal matched samples and monitor chemotherapeutic treatment effects over time — all within one unified platform. Track variant allele frequencies, detect emerging resistance mutations, and predict treatment response patterns.",
    image: `${IMG}/clinical-1.webp`,
  },
  {
    tag: "Immunology",
    title: "Immune & Expression Profiling",
    description:
      "Track differential gene expression supported by single-cell data. Gain high-resolution insights into immune cell populations, gene regulation dynamics, and expression-level biomarkers relevant to immunological conditions.",
    image: `${IMG}/clinical-2.webp`,
  },
  {
    tag: "Rare & Hereditary Disease",
    title: "Genetic Diagnosis & Variant Discovery",
    description:
      "Obtain valuable genetic variants for accurate diagnosis of hereditary and rare disease conditions. Automated variant calling and filtering combined with clinical-grade interpretation accelerates the path from sequencing to actionable diagnosis.",
    image: `${IMG}/clinical-3.webp`,
  },
]

const benefits = [
  {
    title: "Insights clinicians can act on",
    description:
      "Our team of geneticists, molecular biologists, and bioinformaticians brings deep domain experience across genomics disciplines, translating complex data into meaningful scientific outcomes.",
    image: `${IMG}/why-1.webp`,
  },
  {
    title: "Truly hybrid, entirely yours",
    description:
      "TWINE integrates effortlessly across your local systems and the cloud, so sensitive data stays where your institution needs it while compute scales on demand.",
    image: `${IMG}/why-2.webp`,
  },
  {
    title: "Scale without third parties",
    description:
      "Get results quickly without relying on third parties or compromising accuracy. Whether running a small sample group or a large population cohort, TWINE scales to meet your needs.",
    image: `${IMG}/why-3.webp`,
  },
  {
    title: "Decision support at the point of care",
    description:
      "Clinical-grade interpretation accelerates the path from sequencing to actionable diagnosis across hereditary conditions, oncology panels and rare disease.",
    image: `${IMG}/why-4.webp`,
  },
]

// Video testimonials — the .mp4 files live in /public/video/testimonials.
// `poster` is the still shown before the video plays.
const testimonials = [
  {
    name: "Vikrant Bhor",
    role: "Scientist F, ICMR-National Institute for Research in Reproductive and Child Health",
    poster: `${IMG}/vikrant.webp`,
    video: "/video/testimonials/Vikrant Bhor twine.mp4",
  },
  {
    name: "Mainak Banerjee",
    role: "Scientist G, Rajiv Gandhi Centre for Biotechnology",
    poster: `${IMG}/mainak.webp`,
    video: "/video/testimonials/Mainak Banerjee twine.mp4",
  },
  {
    name: "Omshree Shetty",
    role: "Assistant Professor Scientific Officer, Tata Memorial Hospital",
    poster: `${IMG}/omshetty.webp`,
    video: "/video/testimonials/Omshree Shetty twine.mp4",
  },
]

const omicsTags = ["Proteomics", "Spatial Transcriptomics", "Epigenomics", "Metabolomics"]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-[18px]"

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div {...fadeUp}>
      <p className="text-base text-neutral-900">{eyebrow}</p>
      <h2 className="mt-6 text-[26px] font-medium leading-tight text-neutral-950 sm:text-[34px]">
        {title}
      </h2>
      {text && <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-900">{text}</p>}
    </motion.div>
  )
}

function TwineHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      <div className={`${container} flex h-[80px] items-center justify-between lg:h-[102px]`}>
        <Link href="/twine-microsite" aria-label="TWINE home" className="shrink-0">
          <img src={LOGO} alt="TWINE — The Future of Omics Research" className="h-12 w-auto lg:h-[66px]" />
        </Link>

        <nav className="hidden items-center gap-[42px] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-neutral-950 transition-colors hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#6fd44f] px-6 py-[11px] text-[15px] font-semibold text-neutral-950 transition-colors hover:bg-[#5ec23f]"
          >
            Request Demo
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
            className="overflow-hidden border-t border-neutral-100 bg-white lg:hidden"
          >
            <div className={`${container} flex flex-col gap-1 py-4`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-[15px] font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#6fd44f] px-6 py-3 text-center text-[15px] font-semibold text-neutral-950"
              >
                Request Demo
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function TwineFooter() {
  return (
    <footer className="bg-[#0f1729] text-white">
      <div className="mx-auto max-w-[1040px] px-4 pt-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.55fr_1fr_1fr]">
          <div>
            <Link href="/twine-microsite" aria-label="TWINE home" className="inline-block">
              <img src={FOOTER_LOGO} alt="TWINE — The Future of Omics Research" className="h-16 w-auto" />
            </Link>
            <p className="mt-5 max-w-[290px] text-[13px] leading-relaxed text-white/70">
              A no-code multi-omics NGS platform by Bencos Healthcare Solutions Pvt. Ltd.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold">Platform</p>
            <ul className="mt-4 space-y-2 text-[13px] text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#applications" className="hover:text-white">Solutions</a></li>
              <li><a href="#technology" className="hover:text-white">Technology</a></li>
              <li><a href="#contact" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold">Company</p>
            <ul className="mt-4 space-y-2 text-[13px] text-white/70">
              <li><Link href="/" className="hover:text-white">Bencos Healthcare Solutions Pvt. Ltd.</Link></li>
              <li><a href="#contact" className="hover:text-white">Request a Demo</a></li>
              <li><Link href="/contact" className="hover:text-white">Contact Sales</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/15 py-7 text-center text-[13px] text-white/70">
          © {new Date().getFullYear()} Bencos Healthcare Solutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function TestimonialCard({
  t,
  index,
  playing,
  onToggle,
  onEnded,
  onPlay,
  videoRef,
}: {
  t: (typeof testimonials)[number]
  index: number
  playing: boolean
  onToggle: () => void
  onEnded: () => void
  onPlay: () => void
  videoRef: (el: HTMLVideoElement | null) => void
}) {
  // The poster image covers the video until it has been started.
  const [started, setStarted] = useState(false)
  const localVideo = useRef<HTMLVideoElement | null>(null)
  useEffect(() => {
    if (playing) setStarted(true)
  }, [playing])

  // Show the native controls (seek, volume, exit) only while in full screen.
  const [fullscreen, setFullscreen] = useState(false)
  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === localVideo.current)
    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])

  const openFullscreen = () => {
    const video = localVideo.current as
      | (HTMLVideoElement & { webkitEnterFullscreen?: () => void })
      | null
    if (!video) return
    if (video.paused) onToggle()
    if (video.requestFullscreen) video.requestFullscreen().catch(() => {})
    else video.webkitEnterFullscreen?.() // iOS Safari
  }

  return (
    <article
      data-index={index}
      className="w-[300px] shrink-0 rounded-[22px] border border-neutral-400/70 bg-white px-5 pb-10 pt-5 shadow-[0_18px_30px_rgba(15,23,42,0.08)] sm:w-[420px] lg:w-[454px]"
    >
      <div className="group relative aspect-video w-full overflow-hidden rounded-[18px] bg-neutral-200">
        <video
          ref={(el) => {
            localVideo.current = el
            videoRef(el)
          }}
          src={t.video}
          poster={t.poster}
          playsInline
          controls={fullscreen}
          preload="none"
          onEnded={onEnded}
          onPause={onEnded}
          onPlay={onPlay}
          onClick={onToggle}
          className="h-full w-full cursor-pointer bg-black object-cover"
        />
        {!started && (
          <img
            src={t.poster}
            alt={t.name}
            onClick={onToggle}
            className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          />
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${playing ? "Pause" : "Play"} testimonial from ${t.name}`}
          className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-all hover:scale-110 ${
            playing ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100" : "opacity-100"
          }`}
        >
          {playing ? (
            <Pause className="h-6 w-6 fill-neutral-950 text-neutral-950" />
          ) : (
            <Play className="ml-1 h-6 w-6 fill-neutral-950 text-neutral-950" />
          )}
        </button>
        <button
          type="button"
          onClick={openFullscreen}
          aria-label={`Watch testimonial from ${t.name} in full screen`}
          className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <Maximize className="h-4 w-4" />
        </button>
      </div>
      <h3 className="mt-8 text-[26px] font-medium text-neutral-950">{t.name}</h3>
      <p className="mt-6 min-h-[40px] max-w-[380px] text-xs leading-[1.6] text-neutral-950">{t.role}</p>
    </article>
  )
}

function Testimonials() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const videos = useRef<(HTMLVideoElement | null)[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)
  const holdUntil = useRef(0)
  const playingRef = useRef(false)
  playingRef.current = playingIndex !== null

  // Repeat the list so the row can loop seamlessly.
  const loop = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  // Slow auto-scroll; pauses on hover, while a video plays, or right after manual scrolling.
  useEffect(() => {
    const el = scrollRef.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let pos = el.scrollLeft
    let last = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const dt = now - last
      last = now
      const half = el.scrollWidth / 2
      if (hovered.current || playingRef.current || now < holdUntil.current) {
        pos = el.scrollLeft
      } else {
        pos += 0.04 * dt
        if (pos >= half) pos -= half
        el.scrollLeft = pos
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const scrollCards = (direction: number) => {
    const el = scrollRef.current
    if (!el) return
    holdUntil.current = performance.now() + 1200
    const card = el.querySelector("article")
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: step * direction, behavior: "smooth" })
  }

  // Only one testimonial plays at a time.
  const toggle = (index: number) => {
    const video = videos.current[index]
    if (!video) return
    if (playingIndex === index && !video.paused) {
      video.pause()
      setPlayingIndex(null)
      return
    }
    videos.current.forEach((v, i) => i !== index && v?.pause())
    video.play().then(
      () => setPlayingIndex(index),
      () => setPlayingIndex(null),
    )
  }

  return (
    <section id="testimonials" className="scroll-mt-24 pb-24 pt-10">
      <div className={container}>
        <div className="flex items-end justify-between gap-6">
          <SectionIntro eyebrow="Our Testimonials" title="Trusted by scientists across research and diagnostics" />
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              aria-label="Previous testimonials"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-green-600 hover:text-green-600"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCards(1)}
              aria-label="Next testimonials"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-green-600 hover:text-green-600"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          onMouseEnter={() => (hovered.current = true)}
          onMouseLeave={() => (hovered.current = false)}
          onPointerDown={() => (holdUntil.current = performance.now() + 3000)}
          onWheel={() => (holdUntil.current = performance.now() + 1500)}
          onTouchStart={() => (holdUntil.current = performance.now() + 3000)}
          className="mt-16 flex items-start gap-5 overflow-x-auto pb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loop.map((t, i) => (
            <TestimonialCard
              key={`${t.name}-${i}`}
              t={t}
              index={i}
              playing={playingIndex === i}
              onToggle={() => toggle(i)}
              onEnded={() => setPlayingIndex((p) => (p === i ? null : p))}
              onPlay={() => setPlayingIndex(i)}
              videoRef={(el) => {
                videos.current[i] = el
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "TWINE newsletter subscription",
          from_name: "TWINE Newsletter",
          email,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("done")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#183a5e]">
      <img
        src={`${IMG}/newsletter.webp`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#183a5e]/70 via-[#183a5e]/20 to-transparent lg:hidden" />
      <div className={`${container} relative py-16 lg:py-[70px]`}>
        <motion.div {...fadeUp} className="max-w-[760px]">
          <span className="inline-block rounded-full border border-white/90 px-8 py-2 text-[15px] text-white">
            Stay Ahead with TWINE
          </span>
          <h2 className="mt-10 text-3xl font-semibold leading-[1.6] text-white sm:text-[40px]">
            Be the first to know as TWINE expands its multi-omics suite
          </h2>
          <p className="mt-8 text-lg font-medium leading-[1.75] text-white sm:text-[19px]">
            Subscribe to our newsletter for regular updates on upcoming integrations and platform
            capabilities. For our already subscribed patrons — at no extra cost!
          </p>
          <div className="mt-9 flex flex-wrap gap-5">
            {omicsTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/90 px-3 py-2 text-[15px] text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-11 flex flex-col gap-6 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institution.org"
              aria-label="Email address"
              className="h-[74px] w-full rounded-full bg-white px-6 text-xl text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-[#0bbf4f] sm:max-w-[496px]"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="h-[74px] shrink-0 rounded-full bg-[#0bbf4f] px-10 text-xl font-medium text-white transition-colors hover:bg-[#09a844] disabled:opacity-70"
            >
              {status === "sending" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
          {status === "done" && (
            <p className="mt-4 text-sm text-white">Thanks — you&apos;re subscribed to TWINE updates.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-200">Something went wrong. Please try again.</p>
          )}
        </motion.div>
      </div>
    </section>
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
          subject: `[TWINE Demo] Enquiry from ${form.name}`,
          from_name: "TWINE Demo Enquiry",
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

  const field =
    "mt-2 w-full rounded-md border border-neutral-500 px-4 py-3 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-600 focus:border-green-600"

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-2xl border border-neutral-900 px-5 pb-6 pt-6 sm:px-7"
    >
      <p className="text-[22px] font-bold text-neutral-950">Demo Enquiry</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-medium text-neutral-950">
          First Name
          <input name="name" required value={form.name} onChange={handleChange} placeholder="First Name" className={field} />
        </label>
        <label className="block text-xs font-medium text-neutral-950">
          Work email
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Work email" className={field} />
        </label>
      </div>
      <label className="mt-4 block text-xs font-medium text-neutral-950">
        Institution
        <input name="organization" value={form.organization} onChange={handleChange} placeholder="Institution / Organization" className={field} />
      </label>
      <label className="mt-4 block text-xs font-medium text-neutral-950">
        Message
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us about your NGS workflow" className={`${field} resize-none`} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 rounded-full bg-[#2f8f0b] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#277a09] disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "done" && (
        <p className="mt-4 text-sm text-green-700">Thanks! Our team will reach out to schedule your demo.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

export default function TwineMicrositePage() {
  return (
    <div className="scroll-smooth bg-white font-sans text-neutral-950">
      <TwineHeader />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-neutral-700">
        <img
          src={`${IMG}/hero.png`}
          alt="Laptop showing TWINE genomic analysis dashboards in a lab"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/45 md:hidden" />
        <div className={`${container} relative flex min-h-[520px] items-center py-16 lg:min-h-[605px]`}>
          <div className="max-w-[820px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[540px] text-4xl font-medium leading-[1.2] text-white sm:text-5xl lg:text-[58px] lg:leading-[1.15]"
            >
              Harmonizing NGS Workflow to Scale with Precision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base leading-[1.75] text-white"
            >
              TWINE offers meaningful insights via a robust, end-to-end platform validated by NGS
              experts. As a hybrid solution, it integrates across local systems and the cloud, with
              a platform-agnostic design ensuring compatibility with data from any sequencer or
              library type — delivering precision and speed without limits.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============================ OVERVIEW ============================ */}
      <section className="py-16 lg:pb-[113px] lg:pt-[113px]">
        <div className={`${container} grid items-start gap-10 lg:grid-cols-[739px_1fr] lg:gap-9`}>
          <motion.img
            {...fadeUp}
            src={`${IMG}/overview.webp`}
            alt="Two scientists reviewing genomic data together"
            className="aspect-[739/523] w-full object-cover"
          />
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="lg:pt-6">
            <p className="text-base text-neutral-900">Overview</p>
            <h2 className="mt-4 text-[26px] font-medium leading-[1.5] text-neutral-950 sm:text-[33px]">
              A fine blend of deep genomics expertise and advanced informatics
            </h2>
            <p className="mt-4 max-w-[590px] text-base leading-[1.6] text-neutral-900">
              Designed for scientific research needs &amp; diagnostic accuracy. TWINE handles the
              complete workflow — from raw data files to processing multi-species sequencing reads
              and generating actionable insights — with 99.9% precision and accelerated speed.
            </p>
            <div className="mt-9 border-t border-neutral-400" />
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.title}>
                  <h3 className="text-xl font-medium text-neutral-950">{h.title}</h3>
                  <p className="mt-2 max-w-[230px] text-[13px] leading-[1.6] text-neutral-800 lg:mt-4 lg:text-[11px]">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ FEATURES ============================ */}
      <section id="features" className="scroll-mt-24 bg-[#f3f4f8] pb-20 pt-16">
        <div className={container}>
          <SectionIntro
            eyebrow="Features"
            title="Everything the platform does, in one place"
            text="A unified environment built for scientific research needs and diagnostic accuracy."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-[76px] lg:gap-y-[70px]">
            {features.map((f, i) => (
              <motion.article
                key={f.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <img src={f.image} alt={f.title} className="aspect-[418/253] w-full object-cover" />
                <div className="px-[17px] pb-9 pt-8">
                  <h3 className="text-2xl font-normal text-neutral-950">{f.title}</h3>
                  <p className="mt-5 text-[15px] leading-[1.55] text-neutral-950 lg:mt-[60px]">{f.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WORKFLOW ============================ */}
      <section className="py-16 lg:pb-[90px] lg:pt-[110px]">
        <div className={container}>
          <SectionIntro
            eyebrow="Workflow"
            title="From raw reads to actionable insight"
            text="A harmonized workflow that removes handoffs, scripting and third-party dependencies."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-[7px]">
            {workflow.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="relative overflow-hidden rounded-[22px]">
                  <img src={step.image} alt={step.title} className="aspect-[346/263] w-full object-cover" />
                  <span className="absolute left-[21px] top-[32px] flex h-12 w-[60px] items-center justify-center rounded-full bg-[#d7fbfb] text-2xl text-neutral-950">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-medium text-neutral-950">{step.title}</h3>
                <p className="mt-8 pr-2 text-base leading-[1.6] text-neutral-900">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SEE TWINE IN ACTION ============================ */}
      <section id="technology" className="scroll-mt-24 bg-[#f3f4f8] pb-24 pt-16">
        <div className={container}>
          <SectionIntro
            eyebrow="See TWINE in Action"
            title="Experience Real-Time Analysis"
            text="Watch how TWINE processes NGS data in real-time, delivering comprehensive gene and variant lists with variant calling, annotation, differential gene expression, and downstream pathway analysis in minutes"
          />
          <motion.img
            {...fadeUp}
            src={`${IMG}/dashboard.webp`}
            alt="TWINE NGS analytics dashboard overview"
            className="mx-auto mt-12 w-full max-w-[1050px] shadow-[0_10px_30px_rgba(15,23,42,0.18)]"
          />
          <div className="mt-11 grid gap-8 md:grid-cols-3 md:gap-11">
            {screens.map((s, i) => (
              <motion.figure key={s.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[440/303] w-full object-cover shadow-[0_6px_20px_rgba(15,23,42,0.12)]"
                />
                <figcaption className="mt-6 text-lg text-neutral-950">{s.title}</figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="mt-11 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#07a94a] to-[#067a34] px-7 py-4 text-sm font-bold text-white shadow-md transition-shadow hover:shadow-lg hover:shadow-green-600/30"
            >
              Schedule Live Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================ APPLICATIONS ============================ */}
      <section id="applications" className="scroll-mt-24 py-16 lg:pb-[115px] lg:pt-[115px]">
        <div className={container}>
          <SectionIntro
            eyebrow="Applications"
            title="Multi-faceted Research Applications"
            text="TWINE adapts to your specific research and clinical needs."
          />
          <div className="mt-14 space-y-16 lg:space-y-[184px]">
            {applications.map((app, i) => {
              const reversed = i % 2 === 1
              return (
                <div
                  key={app.title}
                  className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[60px]"
                >
                  <motion.img
                    {...fadeUp}
                    src={app.image}
                    alt={app.title}
                    className={`aspect-[658/512] w-full object-cover lg:max-w-[658px] ${
                      reversed ? "lg:order-2 lg:justify-self-end" : ""
                    }`}
                  />
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={reversed ? "lg:order-1 lg:pt-8" : "lg:pt-5"}
                  >
                    <h3 className="text-3xl font-medium leading-[1.45] text-neutral-950 sm:text-[42px] lg:text-[50px]">
                      {app.title}
                    </h3>
                    <p className="mt-10 max-w-[560px] text-base leading-[1.6] text-neutral-900">
                      {app.description}
                    </p>
                    <div className="mt-7 max-w-[652px] border-t border-neutral-400" />
                    <ul className="mt-9 max-w-[540px] space-y-0.5 pl-2">
                      {app.points.map((p) => (
                        <li key={p} className="flex gap-3 text-base leading-[1.6] text-neutral-950">
                          <span className="mt-[11px] h-[3px] w-[3px] shrink-0 rounded-full bg-neutral-950" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================ CLINICAL APPLICATIONS ============================ */}
      <section className="bg-[#f3f4f8] pb-28 pt-16">
        <div className={container}>
          <SectionIntro
            eyebrow="Clinical Applications"
            title="Wide-spread Diagnostic & Translational Applications"
            text="Transform your human clinical data into actionable insights with rapid, accurate variant detection and interpretation for hereditary conditions, oncology panels, and rare disease diagnosis."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-[76px]">
            {clinical.map((c, i) => (
              <motion.article
                key={c.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <img src={c.image} alt={c.title} className="aspect-[418/253] w-full object-cover" />
                <div className="px-[15px] pb-6 pt-7">
                  <p className="text-[15px] uppercase tracking-[0.2em] text-[#1d4f7a]">{c.tag}</p>
                  <h3 className="mt-4 text-xl font-medium text-neutral-950">{c.title}</h3>
                  <p className="mt-6 text-[15px] leading-[1.55] text-neutral-950">{c.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY CHOOSE TWINE ============================ */}
      <section id="benefits" className="scroll-mt-24 pb-16 pt-16 lg:pt-[125px]">
        <div className={container}>
          <SectionIntro eyebrow="Why choose TWINE" title="Built for precision, speed and scale" />
          <div className="mt-14 space-y-16 lg:mt-[118px] lg:space-y-[95px]">
            {benefits.map((b, i) => {
              const reversed = i % 2 === 1
              return (
                <div key={b.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-[120px]">
                  <motion.img
                    {...fadeUp}
                    src={b.image}
                    alt={b.title}
                    className={`aspect-[626/447] w-full object-cover lg:max-w-[626px] ${
                      reversed ? "lg:order-2 lg:justify-self-end" : ""
                    }`}
                  />
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={reversed ? "lg:order-1 lg:pl-[106px]" : ""}
                  >
                    <h3 className="text-3xl font-medium leading-[1.5] text-neutral-950 sm:text-[42px] lg:text-[48px]">
                      {b.title}
                    </h3>
                    <p className="mt-5 max-w-[540px] text-base leading-[1.6] text-neutral-900">
                      {b.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIALS (VIDEO) ============================ */}
      <Testimonials />

      {/* ============================ NEWSLETTER ============================ */}
      <Newsletter />

      {/* ============================ CONTACT ============================ */}
      <section id="contact" className="scroll-mt-24 py-12 lg:py-16">
        <div className={`${container} grid items-center gap-8 lg:grid-cols-[480px_1fr] lg:gap-12`}>
          <motion.img
            {...fadeUp}
            src={`${IMG}/contact.webp`}
            alt="Team meeting in a modern office"
            className="hidden aspect-[4/5] w-full rounded-[22px] object-cover lg:block"
          />
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-[640px]">
            <p className="text-lg font-medium text-neutral-950">Contact</p>
            <h2 className="mt-3 text-[26px] font-medium leading-tight text-neutral-950 sm:text-[33px]">
              Ready to Transform Your NGS Workflow?
            </h2>
            <p className="mt-3 text-base leading-[1.6] text-neutral-950 sm:text-lg">
              Join leading research institutions using TWINE to deliver faster, more accurate NGS
              insights.
            </p>
            <DemoEnquiry />
          </motion.div>
        </div>
      </section>

      <TwineFooter />
    </div>
  )
}
