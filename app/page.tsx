"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, animate, motion, useInView } from "framer-motion"
import { ArrowRight, Droplet } from "lucide-react"

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
  /** Show the "Register now" button for this event. */
  register?: boolean
}

const news: NewsItem[] = [
  {
    title: "Bencos Launches TWINE v1.0",
    description:
      "An AI-powered no-code platform that delivers fast, accurate multi-omics data analysis, accelerating genomic insights without manual intervention.",
    image: "/images/image 13.webp",
    href: "/twine",
  },
  {
    title: "MyNeuron Advances Healthcare Innovation",
    description:
      "MyNeuron builds a premier global network connecting researchers and clinicians to drive collaborative healthcare and precision medicine solutions.",
    image: "/images/image 14.webp",
    href: "/myneuron",
  },
  {
    title: "Bencos presents at GATC LITE 2026 Conference",
    description:
      "Bencos presents breakthroughs in precision medicine and deep tech genomics at the GATC LITE 2026 Conference.",
    image: "/images/image 15.webp",
    href: "/gatc",
  },

  
]



const events: EventItem[] = [
  
  //  {
  //   name: "Annual Arvo india meeting",
  //   date: "24th-27th July 2026",
  //   heading: "Annual Arvo-india meeting",
  //   image: "/images/image 634.png",
  //   href: "#",
  // }, 
  {
    name: "GATC ",
    date: "7th & 9th June , 2026",
    heading: "Genomics Advancements Through Convergence ",
    image: "/images/image 31.png",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScMIblTJm23zItS7edEzrOaUZuvoi9g-L6AXSUpnAntJMmzpQ/viewform",
    register: true,
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
    <section className="relative flex flex-col overflow-hidden bg-[#F7F1E7] lg:min-h-[90vh] lg:flex-row lg:items-center">
      {/* Background video — pinned to the right so the left stays clear for the copy.
          The still is the poster, so it shows while the video loads and if playback is blocked. */}
      {/* Phones/tablets: video sits on top as its own block. Desktop: pinned behind the copy on the right. */}
      <div className="relative aspect-[390/340] w-full sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[58%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          
          aria-hidden
          className="h-full w-full object-cover object-center"
        >
          <source src="/video/demo1.mp4" type="video/mp4" />
        </video>
        {/* Fades the video's left edge into the section background so there is no hard seam. */}
        <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#F7F1E7] to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F7F1E7] to-transparent lg:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-6 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          
          <motion.h1
            {...revealOnMount(0.25, { y: 20, duration: 0.8 })}
            className="text-[34px] font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:mt-10 lg:text-5xl"
          >
            <span className="block text-black lg:inline">One Platform.</span>{" "}
            <span className="block text-[#6CBF3F] sm:whitespace-nowrap lg:inline">Endless Possibilities.</span>
          </motion.h1>
          <motion.p
            {...revealOnMount(0.4, { y: 20, duration: 0.8 })}
            className="mt-5 max-w-md text-base leading-[1.7] text-neutral-600 md:text-lg"
          >
            Uniting healthcare, AI technology, research & genomics, business solutions, and scientific networks to power the next generation of digital innovation.

          </motion.p>

          <motion.div
            {...revealOnMount(0.55, { y: 20, duration: 0.8 })}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10"
          >
            <Link
              href="/our-ecosystem"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-green-600 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-green-700 sm:py-3.5 sm:text-sm"
            >
              Explore Our Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-green-600 bg-white/80 px-7 py-4 text-base font-semibold text-green-700 backdrop-blur-sm transition-colors hover:bg-green-50 sm:py-3.5 sm:text-sm"
            >
              Talk To Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Our Businesses — hovering a category swaps the background image + copy.
// Images should be 1920×1080 (16:9). Swap srcs/copy as needed.
interface Business {
  name: string
  /** Short line shown under the big heading on the left (optional). */
  subtitle?: string
  description: string
  image: string
  href: string
}

const businesses: Business[] = [
  {
    name: "Bencos Research",
    subtitle: "Advancing genomics, multi-omics, and bioinformatics research",
    description:
      "Delivering end-to-end NGS services, multi-omics analysis, and AI-powered bioinformatics solutions that transform complex biological data into accurate, publication-ready insights, accelerating scientific discovery for research institutes, universities, and biopharma worldwide.",
    image: "/images/image 635.jpeg",
    href: "/who-we-are",
  },
  {
    name: "Bencos Healthcare",
    subtitle: "Precision diagnostics and clinical genomics solutions",
    description:
      "Empowering hospitals and diagnostic labs with clinical NGS, AI-assisted variant interpretation, and accredited laboratory services that deliver faster, more accurate diagnoses and improved patient outcomes through precision medicine.",
    image: "/images/image 636.jpeg",
    href: "/clinical-applications",
  },
  {
    name: "Bencos AI",
    subtitle: "AI-powered intelligence for life sciences and healthcare",
    description:
      "Leveraging advanced AI, machine learning, and predictive analytics to convert complex genomic and operational data into faster decisions, automated workflows, and meaningful clinical and business outcomes.",
    image: "/images/image 610.webp",
    href: "/ai-data-analytics",
  },
  {
    name: "Bencos 360",
    subtitle: "Integrated enterprise ecosystem for sustainable growth",
    description:
      "Connecting people, technology, customer experience, and intelligent business operations into one seamless platform. Bencos 360 delivers end-to-end business process outsourcing, customer experience management, talent augmentation, process optimization, and managed enterprise services that help healthcare, life sciences, and other organizations streamline operations, reduce costs, and accelerate digital transformation.",
    image: "/images/image 458.webp",
    href: "/bencos360",
  },
]

function OurBusinessesSection() {
  const [active, setActive] = useState(0)
  const business = businesses[active]

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900">
      {/* Background image (crossfades on change) */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={business.image}
            src={business.image}
            alt={business.name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[720px] lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Left: eyebrow + title + copy + read more */}
        <motion.div {...revealInView(0, { x: -30 })}>
          <div className="flex items-center gap-2">
            {/* <Droplet className="h-5 w-5 fill-amber-500 text-amber-500" /> */}
            <p className="text-sm font-semibold uppercase tracking-widest text-white">
              Our Businesses
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={business.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="mt-6 font-serif text-4xl font-normal leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {business.name}
              </h2>
              {business.subtitle && (
                <p className="mt-5 text-lg font-normal text-white md:text-xl">{business.subtitle}</p>
              )}
              <p className="mt-8 max-w-lg text-sm leading-7 text-white/85 md:text-base">
                {business.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <Link
            href={business.href}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#4ADE76] hover:text-[#4ADE76]"
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Right: selectable business list */}
        <motion.div {...revealInView(0.15, { x: 30 })} className="lg:pl-10">
          {businesses.map((item, index) => {
            const isActive = active === index
            return (
              <button
                key={item.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group block w-full border-b border-white/20 px-5 py-5 text-left transition-all hover:border-[#4ADE76] ${
                  isActive
                    ? "rounded-md border-b-transparent bg-white/5 ring-1 ring-white/40 shadow-[inset_0_-2px_0_0_#4ADE76]"
                    : ""
                }`}
              >
                <span className="text-lg font-semibold uppercase tracking-wide text-white">
                  {item.name}
                </span>
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// BREF Foundation — left logo/copy, right image that auto-rotates.
// Add the BREF logo at /images/bref-logo.png and swap the rotating images below.
const brefImages = [
  "/images/image 604.jpeg",
  "/images/image 605.jpeg",
  "/images/image 606.jpeg",
]

function BrefFoundationSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % brefImages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
        {/* Left: logo + copy + read more */}
        <motion.div
          {...revealInView(0, { x: -30 })}
          className="flex flex-col justify-center lg:col-span-2"
        >
          <img
            src="/images/bref_logo.png"
            alt="BREF — Bencos Research & Education Foundation"
            className="h-[120px] w-[180px] object-contain object-left"
          />
          <h2 className="mt-6 max-w-md text-2xl font-medium leading-tight text-foreground md:text-3xl">
            Bencos Research &amp; Education Foundation (BREF)
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
            Empowering the next generation of scientists through research education, genomics training, and collaborative knowledge programs. The Bencos Research & Education Foundation (BREF) supports researchers, students, and institutions with impactful initiatives and partnerships that strengthen scientific capacity and accelerate innovation in life sciences.

          </p>
          <div className="mt-10">
            <Link
              href="/bref"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-green-600/60 hover:text-green-600"
            >
              Explore BREF
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Right: auto-rotating image */}
        <motion.div
          {...revealInView(0.1, { x: 30 })}
          className="relative aspect-[16/10] overflow-hidden rounded-sm bg-neutral-900 lg:col-span-3 lg:aspect-auto"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={brefImages[index]}
              src={brefImages[index]}
              alt="BREF Foundation programs in action"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {brefImages.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Focus pillars — clicking a tab swaps the left copy + right image.
interface Pillar {
  tab: string
  title: string
  paragraphs: string[]
  image: string
  href: string
}

const pillars: Pillar[] = [
  {
    tab: "Sustainability",
    title: "Corporate Sustainability",
    paragraphs: [
      "At Bencos, sustainability is a core principle guiding how we innovate, operate, and grow. By integrating environmental stewardship, ethical governance, scientific excellence, and social responsibility into our business, we create long-term value for people, partners, communities, and the planet while building a more resilient and sustainable future in healthcare and life sciences.",
    ],
    image: "/images/image 607.jpeg",
    href: "/sustainability",
  },
  {
    tab: "Innovation",
    title: "Innovation",
    paragraphs: [
      "Innovation drives everything we do at Bencos. By uniting scientific research, artificial intelligence, genomics, digital platforms, and enterprise technology, we transform ideas into practical solutions that address real-world challenges from accelerating discovery in the lab to optimizing large-scale business operations. Through strategic investments and a culture of collaboration, we shape the future of healthcare, life sciences, and enterprise innovation while delivering sustainable value worldwide.",
      
    ],
    image: "/images/image 608.jpeg",
    href: "/innovation",
  },
  {
    tab: "Our Impact",
    title: "Our Impact",
    paragraphs: [
      "At Bencos, impact is the true measure of our success. Every innovation, technology, research initiative, and business solution is designed to create meaningful value for researchers, healthcare professionals, enterprises, and the communities we serve. By advancing scientific discovery, enabling precision healthcare, empowering future talent, and driving operational excellence and digital transformation, we build solutions that improve lives and help organizations grow smarter and more sustainably.",
    ],
    image: "/images/image 609.jpeg",
    href: "/our-ecosystem",
  },
]

function FocusPillarsSection() {
  const [active, setActive] = useState(0)
  const pillar = pillars[active]

  return (
    <section className="bg-[#F3F5F9] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <motion.div {...revealInView(0, { y: 30 })} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((item, index) => {
            const isActive = active === index
            return (
              <button
                key={item.tab}
                type="button"
                onClick={() => setActive(index)}
                className="group text-left"
              >
                <div
                  className={`h-0.5 w-full transition-colors group-hover:bg-[#F3F5F9] ${
                    isActive ? "bg-[#4ADE76]" : "bg-black/40"
                  }`}
                />
                <span
                  className={`mt-3 block text-lg font-semibold transition-colors ${
                    isActive ? "text-black" : "text-black/80"
                  }`}
                >
                  {item.tab}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Content */}
        <motion.div {...revealInView(0.1, { y: 30 })} className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: title + copy + read more */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-4xl font-normal leading-none text-black sm:text-5xl md:text-6xl">
                {pillar.title}
              </h2>
              <div className="mt-8 space-y-5">
                {pillar.paragraphs.map((para, i) => (
                  <p key={i} className="max-w-lg text-sm leading-7 text-black/85">
                    {para}
                  </p>
                ))}
              </div>
              <Link
                href={pillar.href}
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-black/70 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white hover:text-[#0b2f7a]"
              >
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right: image */}
          <div className="relative aspect-[16/12] overflow-hidden rounded-md bg-[#0a2668]">
            <AnimatePresence mode="wait">
              <motion.img
                key={pillar.image}
                src={pillar.image}
                alt={pillar.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </motion.div>
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
    <section className="bg-background py-16 ">
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

                {/* Reserve two lines so a short headline in one language and a
                    wrapped one in another still start their body copy on the
                    same line across the row. Sized in rem (text-xl/2xl at
                    leading-snug) rather than the `lh` unit, which needs a very
                    recent browser and silently does nothing on older ones. */}
                <h3 className="mt-6 min-h-[3.4375rem] text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-green-600 md:min-h-[4.125rem] md:text-2xl">
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



const brands = [
  {
    name: "Bencos Research Solutions",
    category: "Research",
    image: "/images/image 433.webp",
    href: "/who-we-are",
    featured: true,
  },
  {
    name: "Bencos Healthcare",
    category: "Clinical Care",
    image: "/images/image 434.webp",
    href: "/clinical-applications",
  },
  {
    name: "Bencos360",
    category: "INTELLIGENT PROCESS OUTSOURCING",
    image: "/images/image 435.webp",
    href: "/bencos360",
  },
  {
    name: "TWINE",
    category: "Clinical Platform",
    image: "/images/image 436.webp",
    href: "/twine",
  },
  {
    name: "MyNeuron",
    category: "PROFESSIONAL COLLABORATION",
    image: "/images/image 437.webp",
    href: "/myneuron",
  },
  {
    name: "BREF",
    category: "Molecular Sciences",
    image: "/images/image 438.webp",
    href: "/bref",
  },
  {
    name: "GATC",
    category: "Scientific Forum",
    image: "/images/image 439.webp",
    href: "/gatc",
  },

  {
    name: "Bencos AI",
    category: "Enterprise Intelligence & AI",
    image: "/images/image 615.webp",
    href: "/ai-data-analytics",
  },

  {
    name: "BenEd",
    category: "Industry-Focused Education",
    image: "/images/image 616.webp",
    href: "/bened",
  },
]

function OurServicesSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
        >
          One Vision. Multiple Innovations.
        </motion.h2>
        <motion.p
          {...revealInView(0.1)}
          className="mt-3 max-w-none whitespace-normal text-sm text-muted-foreground md:whitespace-nowrap md:text-base"
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
                  <p className="text-[10px]  font-semibold uppercase tracking-[0.2em] text-white/70">
                    {brand.category}
                  </p>
                  <h3
                    className={`mt-1 font-normal text-white ${
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
                <Link href={brand.href} className={linkClass}>
                  {inner}
                </Link>
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
    <section className="bg-background py-16 ">
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
                  {event.register && (
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00732b] to-[#00a63e] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Register now
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: selectable event list */}
          <motion.div {...revealInView(0.2)}>
            {events.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 border-b border-border py-6"
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="flex-1 text-left"
                >
                  <h3
                    className={`text-lg font-bold uppercase transition-colors ${
                      active === index ? "text-[#00a63e]" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
                </button>
                {item.register && (
                  // Opens the registration Google Form in a new tab.
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-[#00a63e]"
                  >
                    Register now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  return (
    <section className="bg-background py-16">
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
              An Infrastructure
              <br />
              of Precision
            </h3>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              From cleanroom-grade NGS sequencing platforms to in-house bioinformatics pipelines, every layer of our research infrastructure is purpose-built for reproducibility, speed, and data integrity at scale.
            </p>

            <ul className="mt-8">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 border-b border-[#4ADE76] py-4 text-foreground"
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
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="text-3xl font-medium leading-tight text-balance text-foreground sm:text-4xl md:text-4xl"
        >
          Let&apos;s Build The Future Of Scientific Discovery
        </motion.h2>

        <motion.div
          {...revealInView(0.15)}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
          >
            Contact our team
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-green-600/60 hover:text-green-600"
          >
            Join Bencos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

// const scientificServices = [
//   {
//     title: "Genomics Services",
//     description: "Whole-genome, exome and targeted sequencing at production scale.",
//     image: "/images/image 427.png",
//     href: "/genomics-services",
//   },
//   {
//     title: "Bioinformatics",
//     description: "Custom pipelines and secondary/tertiary analysis for complex datasets.",
//     image: "/images/image 428.png",
//     href: "/bioinformatics-services",
//   },
//   {
//     title: "Clinical Genomics",
//     description: "Regulated diagnostic workflows for hospitals and health systems.",
//     image: "/images/image 429.png",
//     href: "/clinical-genomics",
//   },
//   {
//     title: "Proteomics & Metabolomics",
//     description: "Mass-spectrometry powered discovery for biomarkers and pathways.",
//     image: "/images/image 430.png",
//     href: "/proteomics-metabolomics",
//   },
//   {
//     title: "AI & Data Analytics",
//     description: "Foundation models and analytics engineered for biomedical data.",
//     image: "/images/image 431.png",
//     href: "/ai-data-analytics",
//   },
//   {
//     title: "Scientific Consulting",
//     description: "Expert advisory across study design, regulatory and translation.",
//     image: "/images/image 432.png",
//     href: "/scientific-consulting",
//   },
// ]

// function ScientificServicesSection() {
//   return (
//     <section className="bg-background py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           {...revealInView()}
//           className="text-3xl sm:text-4xl  font-medium leading-tight text-foreground md:text-5xl"
//         >
//           Scientific Services
//         </motion.h2>
//         <motion.p
//           {...revealInView(0.1)}
//           className="mt-5 max-w-5xl text-sm text-muted-foreground md:text-base"
//         >
//           End-to-end scientific programs delivered by dedicated teams in accredited
//           laboratories.
//         </motion.p>

//         <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {scientificServices.map((service, index) => (
//             <motion.div key={service.title} {...revealInView(index * 0.08, { y: 30 })}>
//               <Link
//                 href={service.href}
//                 className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
//               >
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
//                 <div className="absolute inset-x-0 bottom-0 p-6">
//                   <h3 className="whitespace-nowrap text-2xl leading-relaxed group-hover:text-[#4ADE76] font-semibold text-white">{service.title}</h3>
//                   <p className=" mt-4 text-sm leading-5 text-white/80">
//                     {service.description}
//                   </p>
//                   <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[#4ADE76]">
//                     Read more
//                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

const whatWeDo = [
  {
    title: "Research Consultancy",
    description: "Expert advisory across study design, regulatory strategy and translational research.",
    image: "/images/image 440.webp",
    href: "/scientific-consulting",
  },
  {
    title: "Product Development",
    description: "From concept to clinic — building diagnostic and life-science products end to end.",
    image: "/images/image 441.webp",
    href: "/clinical-applications",
  },
  {
    title: "IT & Software",
    description: "Engineering scalable platforms, data infrastructure and enterprise software.",
    image: "/images/image 442.webp",
    href: "/it-software",
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation and AI systems that accelerate research and operations.",
    image: "/images/image 443.webp",
    href: "/ai-automation",
  },
  {
    title: "Scientific Writing",
    description: "Publication-ready manuscripts, grants and regulatory documentation.",
    image: "/images/image 444.webp",
    href: "/bref",
  },
  {
    title: "Business Solutions",
    description: "Integrated campus and enterprise solutions that connect discovery to growth.",
    image: "/images/image 445.webp",
    href: "/business-solutions",
  },
  {
    title: "Climate Resilience",
    description: "Climate risk, ESG and sustainability strategies engineered to endure.",
    image: "/images/image 446.webp",
    href: "/climate-resilience",
  },
  {
    title: "Events & Expo",
    description: "Convening researchers and clinicians through flagship scientific forums.",
    image: "/images/image 447.webp",
    href: "/gatc",
  },
]

function WhatWeDoSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealInView()}
          className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
        >
          What We Do
        </motion.h2>
        <motion.p
          {...revealInView(0.1)}
          className="mt-5 max-w-5xl text-sm text-muted-foreground md:text-base"
        >
          A connected suite of consulting, technology and scientific capabilities that take
          organizations from idea to measurable impact.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((service, index) => (
            <motion.div key={service.title} {...revealInView(index * 0.06, { y: 30 })}>
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-green-600">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-green-600">
                    Read more
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
      <TrustedStatsSection />
      <OurBusinessesSection />
      <BrefFoundationSection />
      <FocusPillarsSection />
      <NewsSection />

      <OurServicesSection />
      {/* <ScientificServicesSection /> */}
      <EventsSection />
      <TechnologiesSection />
      <CtaSection />
    </>
  )
}
