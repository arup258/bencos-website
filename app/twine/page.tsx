"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the src below to change it.
const HERO_IMAGE = "/images/image 141.webp"

// Genomic stack carousel cards — add/edit entries; include `href` for a "Read more" link.
const stack = [
  {
    title: "Whole Genome Analysis",
    description: "End-to-end WGS pipelines with germline and somatic variant calling.",
    image: "/images/image 142.webp",
    target: "_blank",
    href: "https://bencoshealth.in/Consultancy.html",
  },
  {
    title: "Whole Exome Analysis",
    description: "Clinical-grade WES workflows built for high accuracy.",
    image: "/images/image 143.webp",
    target: "_blank",
    href: "https://bencoshealth.in/Consultancy.html",
    
  },
  {
    title: "Transcriptomics",
    description: "Bulk and single-cell RNA-seq with differential expression analysis",
    image: "/images/image 144.webp",
    target: "_blank",
    href: "https://bencoshealth.in/Consultancy.html",
  },
  {
    title: "Variant Interpretation",
    description: "ACMG-aligned, AI-augmented variant classification and reporting for faster clinical decisions.",
    image: "/images/image 145.webp",
    target: "_blank",
    href: "https://bencoshealth.in/Consultancy.html",
  },

  

  {
    title: "AI Assisted Decision Support",
    description: "Contextual recommendations drawn from millions of variants to support precise genomic interpretation.",
    image: "/images/image 145(2).png",
    href: "",
  },
]

// Who uses TWINE — add/edit entries and the grid reflows automatically.
const users = [
  {
    title: "Clinical Laboratories",
    description: "Supporting genomic diagnostics with intelligent interpretation.",
    image: "/images/image 146.webp",
  },
  {
    title: "Hospitals & Healthcare Systems",
    description: "Enabling precision medicine through advanced genomic technologies.",
    image: "/images/image 147.webp",
  },
  {
    title: "Biotech & Pharma",
    description: "Accelerating biological discovery with scalable genomic analysis.",
    image: "/images/image 151.webp",
  },
  {
    title: "Research Institutions",
    description: "Accelerating biological discovery with scalable genomic analysis.",
    image: "/images/image 148.webp",
  },
]

// Ecosystem integrations — add/edit entries and the grid reflows automatically.
const integrations = [
  {
    title: "Bencos Research Solutions",
    description: "Advanced genomics, bioinformatics, and scientific expertise.",
    image: "/images/image 152.png",
  },
  {
    title: "Bencos Healthcare",
    description: "Clinical genomics, precision medicine, and healthcare innovation.",
    image: "/images/image 149.png",
  },
  {
    title: "MyNeuron",
    description:
      "Research collaboration and scientific knowledge platform supporting connected innovation.",
    image: "/images/image 150.png",
  },
]

// Genomic frontier cards — `icon` is a PNG in /public/icon; colored border/tint; hover-reveal detail.
const frontier = [
  {
    icon: "/icon/Clinical Genomics.png",
    title: "Clinical Genomics",
    description: "Diagnostic-grade pipelines for hospitals and clinics.",
    extra: "Validated workflows, curated knowledge bases and reporting templates tailored to this domain.",
    border: "border-indigo-500/40",
    tint: "from-indigo-500/20",
  },
  {
    icon: "/icon/Cancer Genomics.png",
    title: "Cancer Genomics",
    description: "Somatic, germline and tumor-normal in one workflow.",
    extra: "Comprehensive oncology pipelines with integrated variant calling, annotation and clinical reporting.",
    border: "border-lime-500/40",
    tint: "from-lime-500/20",
  },
  {
    icon: "/icon/Rare Disease Diagnostics.png",
    title: "Rare Disease Diagnostics",
    description: "Accelerate the diagnostic odyssey with AI triage.",
    extra: "AI-assisted prioritization and interpretation to shorten time-to-diagnosis for rare genetic disorders.",
    border: "border-blue-500/40",
    tint: "from-blue-500/20",
  },
  {
    icon: "/icon/Reproductive Health.png",
    title: "Reproductive Health",
    description: "Carrier screening, NIPT and preimplantation workflows.",
    extra: "End-to-end solutions supporting fertility clinics and prenatal genetic testing programs.",
    border: "border-amber-400/40",
    tint: "from-amber-400/20",
  },
  {
    icon: "/icon/Pharmacogenomics.png",
    title: "Pharmacogenomics",
    description: "Personalize therapy with PGx panels and reporting.",
    extra: "Actionable PGx insights that guide drug selection and dosing for safer, more effective treatment.",
    border: "border-orange-500/40",
    tint: "from-orange-500/20",
  },
  {
    icon: "/icon/Infectious Disease.png",
    title: "Infectious Disease",
    description: "Pathogen ID, AMR profiling and outbreak surveillance.",
    extra: "Rapid detection and antimicrobial resistance analysis for clinical and public health applications.",
    border: "border-emerald-500/40",
    tint: "from-emerald-500/20",
  },
]

export default function TwinePage() {
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
            alt="Scientists analysing genomic data on the TWINE platform"
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
              className="mt-8 text-3xl sm:text-4xl md:text-4xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Transform Genomic Data Into
              <br />
              Clinical Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              TWINE combines AI, machine learning, and advanced bioinformatics to turn NGS and multi-omics data into actionable clinical and research insights.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="/twine-microsite"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore TWINE
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= GENOMIC STACK (CAROUSEL) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
            >
              One Platform For The Entire Genomic Stack
            </motion.h2>

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
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stack.map((item) => (
              <div
                key={item.title}
                className="group/card w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href || "/services"}
                  className="group/more mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 hover:text-green-600 group-hover/card:opacity-100"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/more:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHO USES TWINE (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Who Uses TWINE
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {users.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= ECOSYSTEM INTEGRATION (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Integrated Within The Bencos Ecosystem
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {integrations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 pb-12">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#4ADE76] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= GENOMIC FRONTIER (ICON GRID) ======================= */}
      <section className="bg-[#05070a] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold leading-tight text-white md:text-4xl"
          >
            Built For Every Genomic Frontier
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {frontier.map((item, index) => {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border bg-neutral-950 p-8 ${item.border}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t ${item.tint} to-transparent`}
                  />
                  <div className="relative">
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 object-contain"
                    />
                    <h3 className="mt-5 text-xl group-hover:text-[#4ADE76] font-semibold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>

                    {/* Hover-reveal detail */}
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="mt-6 h-px w-full bg-white/15" />
                        <p className="mt-6 text-sm leading-relaxed text-white/60">
                          {item.extra}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Ready To Unlock Genomic
            <br />
            Intelligence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-muted-foreground leading-relaxed"
          >
            Join the leading hospitals, research institutes and pharma teams already building
            on TWINE.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
