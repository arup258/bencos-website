"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 117.png"
const DRIVES_IMAGE = "/images/image 118.png"
const GENOME_IMAGE = "/images/image 130.png"


const genomicsFeatures = [
  "High-throughput sequencing",
  "Long-read sequencing",
  "Variant detection",
  "Structural analysis",
  "Data interpretation",
]

// Expertise carousel cards — add/edit entries; the slider scrolls automatically.
const expertise = [
  {
    title: "Genomics",
    description:
      "We provide advanced DNA and RNA sequencing solutions that help researchers uncover genetic insights and accelerate scientific discovery.",
    image: "/images/image 119.png",
  },
  {
    title: "Bioinformatics",
    description:
      "Transforming complex genomic data into accurate, actionable insights through advanced bioinformatics and AI.",
    image: "/images/image 120.png",
  },
  {
    title: "Multi-Omics",
    description:
      "Integrating genomics, transcriptomics, proteomics, and metabolomics to deliver deeper biological insights and advance precision medicine.",
    image: "/images/image 121.png",
  },
  {
    title: "AI in Research",
    description:
      "Leveraging AI, machine learning, and intelligent analytics to accelerate research, improve genomic interpretation, and drive scientific discovery.",
    image: "/images/image 121(1).png",
  },
]

// Discipline cards — add/edit entries and the grid reflows automatically.
const disciplines = [
  { label: "Cancer Research", image: "/images/image 122.png" },
  { label: "Precision Medicine", image: "/images/image 123.png" },
  { label: "Agrigenomics", image: "/images/image 124.png" },
  { label: "Microbiology", image: "/images/image 125.png" },
  { label: "Population Genetics", image: "/images/image 126.png" },
  { label: "Drug Discovery", image: "/images/image 127.png" },
  { label: "Rare Disease Research", image: "/images/image 128.png" },
  { label: "Academic Research", image: "/images/image 129.png" },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Research Projects" },
  { value: "100+", label: "Institutional Partners" },
  { value: "99%", label: "Client Satisfaction" },
]

const capabilities = [
  "Advanced genomics and next-generation sequencing",
  "Bioinformatics and multi-omics data analysis",
  "AI-driven discovery and predictive modelling",
  "Precision medicine and clinical research support",
  "Scalable, reproducible research infrastructure",
]

export default function LifeSciencesPage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth * 0.9 * direction, behavior: "smooth" })
  }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Scientists working in an advanced life sciences laboratory"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-sm md:text-xl font-light tracking-tight antialiased"
            >
              What we do
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 h-px w-full origin-left bg-white/40"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-3xl sm:text-4xl md:text-4xl font-elegant thin tracking-wide text-white"
            >
              Advancing Life Sciences Through
              <br />
              Genomic Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white"
            >
              Empowering research through genomics, bioinformatics, multi-omics, and AI to accelerate scientific discovery and precision medicine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
             
                href="https://bencoshealth.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
              >
                Contact Experts
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* ======================= SCIENCE THAT DRIVES DISCOVERY ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900"
            >
              <img
                src={DRIVES_IMAGE}
                alt="A modern, well-equipped life sciences laboratory"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Right: heading + copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Science That Drives
                <br />
                Discovery
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed text -ig">
                Scientific breakthroughs begin with accurate data, innovative technologies, and trusted expertise. At Bencos Research Solutions, we combine cutting-edge genomic technologies with computational biology, bioinformatics, and artificial intelligence to help researchers solve complex biological questions faster and more effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     

      

      {/* ======================= LIFE SCIENCES EXPERTISE (CAROUSEL) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
              >
                Our Life Sciences Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-muted-foreground leading-relaxed"
              >
                Four disciplines, integrated end-to-end — from wet-lab sequencing to computational interpretation and AI-assisted discovery.
              </motion.p>
            </div>

            {/* Arrow controls */}
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] w-[85%] shrink-0 snap-start overflow-hidden rounded-sm bg-neutral-900 sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-green-600">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 line-clamp-3 min-h-[4.25rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= ADVANCED GENOMICS PLATFORM ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: heading + copy + feature pills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Advanced Genomics
                <br />
                Platform
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                A unified platform pairing best-in-class sequencing hardware with cloud-scale bioinformatics, designed for scientific rigor and speed.
              </p>

              <ul className="mt-10 max-w-sm space-y-4">
                {genomicsFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="flex items-center gap-3 rounded-full border border-border px-5 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm text-foreground md:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: dark image card with glass insight overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-950"
            >
              <img
                src={GENOME_IMAGE}
                alt="Real-time genome mapping visualised as a network sphere"
                className="h-full w-full object-cover"
              />
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= POWERING DISCOVERY (DISCIPLINES GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Powering discovery across
            <br />
            disciplines
          </motion.h2>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {disciplines.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group relative aspect-[327/354] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-medium text-white md:text-lg">
                  {item.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  )
}
