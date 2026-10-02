"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 117.webp"
const DRIVES_IMAGE = "/images/image 118.webp"
const GENOME_IMAGE = "/images/image 130.png"


const genomicsFeatures = [
  "High-throughput sequencing",
  "Long-read sequencing",
  "Accurate variant detection",
  "Structural variant & genome mapping analysis",
  "Comprehensive data interpretation & reporting",
]

// Expertise carousel cards — add/edit entries; the slider scrolls automatically.
const expertise = [
  {
    title: "Genomics",
    description:
      "Advanced DNA and RNA sequencing solutions, including whole-genome, whole-exome, transcriptome, and targeted NGS panels that help researchers uncover genetic insights, identify variants, and accelerate scientific discovery.",
    image: "/images/image 119.webp",
  },
  {
    title: "Bioinformatics",
    description:
      "Transforming complex NGS and multi-omics data into accurate, actionable insights through advanced bioinformatics pipelines, variant interpretation, and AI-supported analysis for research and clinical use.",
    image: "/images/image 120.webp",
  },
  {
    title: "Multi-Omics",
    description:
      "Integrating genomics, transcriptomics, proteomics, and metabolomics to deliver deeper biological insights, systems-level understanding, and accelerated pathways to precision medicine.",
    image: "/images/image 121.webp",
  },
  {
    title: "AI in Research",
    description:
      "Leveraging artificial intelligence, machine learning, and intelligent analytics to accelerate research workflows, improve genomic interpretation accuracy, and drive faster scientific discovery.",
    image: "/images/image 121(1).png",
  },
]

// Discipline cards — add/edit entries and the grid reflows automatically.
const disciplines = [
  { label: "Cancer Research", image: "/images/image 122.webp" },
  { label: "Precision Medicine", image: "/images/image 123.webp" },
  { label: "Agrigenomics", image: "/images/image 124.webp" },
  { label: "Microbiology", image: "/images/image 125.webp" },
  { label: "Population Genetics", image: "/images/image 126.webp" },
  { label: "Drug Discovery", image: "/images/image 127.webp" },
  { label: "Rare Disease Research", image: "/images/image 128.webp" },
  { label: "Academic Research", image: "/images/image 129.webp" },
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
              className="mt-8 text-3xl sm:text-4xl md:text-3xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Advancing Life Sciences Through Genomic
              
              Innovation & Multi-Omics Bioinformatics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Empowering researchers, clinicians, and biopharma teams with end-to-end next-generation sequencing (NGS), custom multi-omics analysis, AI-driven bioinformatics, and cloud-scale platforms. Accelerate scientific discovery, biomarker identification, and precision medicine from raw data to actionable insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
             
                href="/brs-microsite"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore Solution
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
              >
               Talk to Our Experts

              </Link> */}
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
        <p className="mt-6 max-w-xl text-[16px] text-sm text-muted-foreground leading-relaxed text-4xl">
          Scientific breakthroughs begin with accurate data, innovative technologies, and trusted expertise. At Bencos Research Solutions, we combine cutting-edge next-generation sequencing (NGS), multi-omics analysis, computational biology, advanced bioinformatics, and artificial intelligence to help researchers and clinicians solve complex biological questions faster and more effectively, accelerating discovery from bench to precision medicine.
        </p>
      </motion.div>
    </div>
  </div>
</section>

     

      

      {/* ======================= LIFE SCIENCES EXPERTISE (CAROUSEL) ======================= */}
   <section className="bg-background py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
      >
        Our Life Sciences Expertise
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 lg:whitespace-nowrap text-[#000000] text-white-foreground  leading-relaxed"
      >
        Our integrated disciplines from wet-lab next-generation sequencing (NGS) to computational interpretation and AI-assisted<br className="hidden lg:block" /> discovery delivering end-to-end genomic solutions for research, clinical, and precision medicine applications.

      </motion.p>

      {/* Arrow controls - pinned to top right */}
      <div className="mt-6 flex shrink-0 gap-3 md:absolute md:right-0 md:top-0 md:mt-0">
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
          className="group relative aspect-[3/4] w-[85%] shrink-0 snap-start overflow-hidden rounded-sm bg-neutral-900 sm:w-[45%] lg:aspect-[4/5] lg:w-[calc(33.333%-1rem)]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-green-600 md:text-2xl">
              {item.title}
            </h3>
            {/* Full description (no clamping) so the sentence is never cut mid-line. */}
            <p className="mt-3 min-h-[6.6rem] text-[13px] leading-relaxed text-white/85">{item.description}</p>
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
                Platform for NGS & Multi-Omics Analysis
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                A unified end-to-end platform that pairs best-in-class next-generation sequencing (NGS) hardware with cloud-scale bioinformatics and AI-driven analytics engineered for scientific rigor, speed, and actionable genomic insights.
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
            Powering Discovery Across
            <br />
            Disciplines
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
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-medium text-white transition-colors md:text-lg group-hover:text-green-600">
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
