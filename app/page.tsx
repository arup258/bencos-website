"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, animate, motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

// ----------------------------------------------------------------------------
// Animation helpers
//
// Centralises the fade/slide reveal that repeats across the page so each
// element can spread a single prop set instead of restating it.
// ----------------------------------------------------------------------------

interface RevealOptions {
  y?: number
  x?: number
  duration?: number
}

/** Reveal on mount — use for above-the-fold content (the hero). */
function revealOnMount(delay = 0, { y = 20, x = 0, duration = 0.6 }: RevealOptions = {}) {
  return {
    initial: { opacity: 0, x, y },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration, delay },
  } as const
}

/** Reveal when scrolled into view — use for sections below the fold. */
function revealInView(delay = 0, { y = 20, x = 0, duration = 0.6 }: RevealOptions = {}) {
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true },
    transition: { duration, delay },
  } as const
}

// ----------------------------------------------------------------------------
// Content
// ----------------------------------------------------------------------------

interface NewsItem {
  title: string
  description: string
  image: string
  href: string
}

interface Solution {
  title: string
  description: string
  image: string
  href: string
}

interface EventItem {
  /** Short label shown in the right-hand list. */
  name: string
  date: string
  /** Headline overlaid on the large left card. */
  heading: string
  image: string
  href: string
}

const news: NewsItem[] = [
  {
    title: "Bencos Launches TWINE v1.0",
    description:
      "An AI/ML no-code platform designed to accelerate fast, accurate, and seamless multi-omics data analysis without manual intervention.",
    image: "/images/image 13.png",
    href: "/twine",
  },
  {
    title: "MyNeuron Advances Healthcare Innovation",
    description:
      "My Neuron recognized for building a premier global network connecting researchers and clinicians for collaborative healthcare solutions.",
    image: "/images/image 14.png",
    href: "/myneuron",
  },
  {
    title: "Bencos presents at GATC LITE 2026 Conference",
    description:
      "Bencos to showcase precision medicine and deep tech genomics breakthroughs at the upcoming GATC LITE summit.",
    image: "/images/image 15.png",
    href: "/gatc",
  },

  
]

const solutions: Solution[] = [
  {
    title: "Life Sciences",
    description: "Advancing genomics, molecular biology and translational research at global scale.",
    image: "/images/image 426.png",
    href: "/life-sciences",
  },
  {
    title: "Healthcare",
    description: "Bringing precision diagnostics and clinical intelligence to hospitals and patients.",
    image: "/images/image 425.png",
    href: "/clinical-applications",
  },
  {
    title: "Technology Platforms",
    description: "Cloud, data and AI infrastructure engineered for the next decade of science.",
    image: "/images/image 424.png",
    href: "/twine",
  },
]

const events: EventItem[] = [
  {
    name: "GATC LITE",
    date: "19th & 20th June , 2026",
    heading: "Genomics Advancements Through Convergence — GATC LITE",
    image: "/images/image 31.png",
    href: "#",
  },
  {
    name: "WORLD HEALTH EXPO",
    date: "10th-13th August, 2026",
    heading: "WHX Labs — World Health Expo",
    image: "/images/image 32.png",
    href: "#",
  },
  {
    name: "GATC Lite BBSR",
    date: "11th-12th March 2026",
    heading: "GATC Lite BBSR",
    image: "/images/image 33.png",
    href: "#",
  },
]

const technologies: string[] = [
  "NGS sequencing platforms",
  "Cloud bioinformatics infrastructure",
  "AI/ML clinical pipelines",
  "ISO 15189 accredited labs",
]

// ----------------------------------------------------------------------------
// Sections
// ----------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/home-banner.png"
          aria-hidden="true"
        >
          <source src="/video/Bencos_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* <motion.h1
            {...revealOnMount(0.1, { y: 30, duration: 0.8 })}
            className="max-w-xl text-3xl sm:text-4xl font-medium leading-[1.05] text-white md:text-6xl lg:text-7xl"
          >
            Engineering The Future of Intelligent Genomics.
          </motion.h1> */}

          {/* <motion.p
            {...revealOnMount(0.25, { y: 20, duration: 0.8 })}
            className="mt-8 max-w-lg text-base leading-8 text-white/85 md:text-lg"
          >
            Bencos Research Solutions is a next-generation biotechnology ecosystem
            delivering advanced genomics, molecular biology, AI-powered healthcare
            systems, bioinformatics intelligence, and enterprise research technologies
            designed to accelerate scientific innovation.
          </motion.p> */}

          {/* <motion.div {...revealOnMount(0.4, { y: 20, duration: 0.8 })} className="mt-10">
            <Link
              href="/who-we-are"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-black/90"
            >
              Explore Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}

/** The "EYEBROW / Heading" pair reused across sections. */
function SectionHeading({
  tagline,
  title,
  className,
}: {
  tagline: string
  title: string
  className?: string
}) {
  return (
    <div className={className}>
      <motion.p
        {...revealInView()}
        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        {tagline}
      </motion.p>
      <motion.h2
        {...revealInView(0.1)}
        className="mt-4 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl text-balance"
      >
        {title}
      </motion.h2>
    </div>
  )
}

function NewsSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading tagline="" title="Latest Insights" />
         
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              {...revealInView(index * 0.1, { y: 30 })}
              className="group flex flex-col"
            >
              <Link href={item.href} className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-green-600 md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="mt-4 h-px w-full bg-border transition-colors group-hover:bg-green-600/50" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <motion.h2
  {...revealInView()}
  className="mb-12 max-w-6xl text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
>
  Integrated scientific solutions powering research, healthcare, and intelligent
  technology
</motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div key={solution.title} {...revealInView(index * 0.1, { y: 30 })}>
              <Link
                href={solution.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[455/500] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold text-foreground">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-green-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const brands = [
  {
    name: "Bencos Research Solutions",
    category: "Research",
    image: "/images/image 433.png",
    href: "/who-we-are",
    featured: true,
  },
  {
    name: "Bencos Health",
    category: "Clinical Care",
    image: "/images/image 434.png",
    href: "clinical-applications",
    external: true,
  },
  {
    name: "Bencos360",
    category: "Integrated Campus",
    image: "/images/image 435.png",
    href: "/bencos360",
  },
  {
    name: "TWINE",
    category: "Clinical Platform",
    image: "/images/image 436.png",
    href: "/twine",
  },
  {
    name: "MyNeuron",
    category: "Neuroscience AI",
    image: "/images/image 437.png",
    href: "/myneuron",
  },
  {
    name: "BREF",
    category: "Molecular Sciences",
    image: "/images/image 438.png",
    href: "/bref",
  },
  {
    name: "GATC",
    category: "Scientific Forum",
    image: "/images/image 439.png",
    href: "/gatc",
  },
]

function OurServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
        >
          One Vision. Multiple Innovations.
        </motion.h2>
        <motion.p
          {...revealInView(0.1)}
          className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Seven interconnected brands, each specialized, together forming a single continuum
          from discovery to care.
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4 md:grid-flow-row-dense">
          {brands.map((brand, index) => {
            const spanClass = brand.featured
              ? "col-span-2 h-72 md:col-span-2 md:row-span-2 md:h-auto"
              : "h-56 md:h-auto"
            const inner = (
              <>
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {brand.category}
                  </p>
                  <h3
                    className={`mt-1 font-semibold text-white ${
                      brand.featured ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {brand.name}
                  </h3>
                </div>
              </>
            )
            const linkClass =
              "group relative block h-full w-full overflow-hidden rounded-xl bg-neutral-900"
            return (
              <motion.div
                key={brand.name}
                {...revealInView(index * 0.06, { y: 20 })}
                className={spanClass}
              >
                {brand.external ? (
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={brand.href} className={linkClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function EventsSection() {
  const [active, setActive] = useState(0)
  const event = events[active]

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="mb-12 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
        >
          Meet us here
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: the currently selected event */}
          <motion.div
            {...revealInView(0.1)}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={event.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="max-w-xs text-xl font-bold uppercase leading-snug text-white">
                    {event.heading}
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-white">{event.date}</p>
                  <Link
                    href={event.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-lime-300"
                  >
                    Register now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: selectable event list */}
          <motion.div {...revealInView(0.2)}>
            {events.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className="block w-full border-b border-border py-6 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3
                      className={`text-lg font-bold uppercase transition-colors ${
                        active === index ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground">
                    Register now
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="mb-12 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
        >
          Technologies
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: facility image */}
          <motion.div
            {...revealInView(0.1)}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"
          >
            <Image
              src="/images/image 34.png"
              alt="Bencos research facility"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: copy + capability list */}
          <motion.div {...revealInView(0.2)}>
            <h3 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
              An infrastructure
              <br />
              of precision.
            </h3>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              From cleanroom-grade sequencing platforms to in-house bioinformatics
              pipelines, every layer of our research stack is purpose-built for
              reproducibility, speed and integrity at scale.
            </p>

            <ul className="mt-8">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 border-b border-border py-4 text-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            {...revealInView()}
            className="max-w-3xl text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl text-balance"
          >
            Let&apos;s build the future of scientific discovery.
          </motion.h2>

          <motion.div
            {...revealInView(0.15)}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              Contact our team
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border border-green-700 px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-green-50"
            >
              Join Bencos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

const scientificServices = [
  {
    title: "Genomics Services",
    description: "Whole-genome, exome and targeted sequencing at production scale.",
    image: "/images/image 427.png",
    href: "/genomics-services",
  },
  {
    title: "Bioinformatics",
    description: "Custom pipelines and secondary/tertiary analysis for complex datasets.",
    image: "/images/image 428.png",
    href: "/bioinformatics-services",
  },
  {
    title: "Clinical Genomics",
    description: "Regulated diagnostic workflows for hospitals and health systems.",
    image: "/images/image 429.png",
    href: "/clinical-genomics",
  },
  {
    title: "Proteomics & Metabolomics",
    description: "Mass-spectrometry powered discovery for biomarkers and pathways.",
    image: "/images/image 430.png",
    href: "/proteomics-metabolomics",
  },
  {
    title: "AI & Data Analytics",
    description: "Foundation models and analytics engineered for biomedical data.",
    image: "/images/image 431.png",
    href: "/ai-data-analytics",
  },
  {
    title: "Scientific Consulting",
    description: "Expert advisory across study design, regulatory and translation.",
    image: "/images/image 432.png",
    href: "/scientific-consulting",
  },
]

function ScientificServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
        >
          Scientific Services
        </motion.h2>
        <motion.p
          {...revealInView(0.1)}
          className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          End-to-end scientific programs delivered by dedicated teams in accredited
          laboratories.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scientificServices.map((service, index) => (
            <motion.div key={service.title} {...revealInView(index * 0.08, { y: 30 })}>
              <Link
                href={service.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const trustedStats = [
  { target: 15, suffix: "+", label: "Years Experience" },
  { target: 500, suffix: "+", label: "Research Projects" },
  { target: 100, suffix: "+", label: "Institutional Partners" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

function TrustedStatsSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="text-center text-2xl font-semibold text-foreground md:text-3xl"
        >
          Trusted by the world&apos;s leading researchers
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {trustedStats.map((stat, index) => (
            <motion.div key={stat.label} {...revealInView(index * 0.1, { y: 20 })}>
              <p className="text-3xl sm:text-4xl font-semibold text-green-500 md:text-5xl">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <SolutionsSection />
      <OurServicesSection />
      <ScientificServicesSection />
      <EventsSection />
      <TrustedStatsSection />
      <TechnologiesSection />
      <CtaSection />
    </>
  )
}
