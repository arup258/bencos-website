"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Dna, Microscope, Activity, Baby, Pill, Bug } from "lucide-react"

// Section images live in /public/images — swap the src below to change it.
const HERO_IMAGE = "/images/image 131.webp"
const TRANSFORM_IMAGE = "/images/image 136.png"

// Clinical spectrum carousel cards — add/edit entries; include `href` for a "Read more" link.
const spectrum = [
  {
    title: "Clinical Genomics",
    description: "Genetic testing for inherited disorders with curated, evidence-grade panels.",
    image: "/images/image 132.webp",
    href: "",
  },
  {
    title: "Cancer Genomics",
    description:
      "Precision oncology and targeted therapy support across solid & hematologic tumors.",
    image: "/images/image 133.webp",
    href: "/services",
  },
  {
    title: "Rare Disease Diagnostics",
    description: "Advanced variant interpretation that resolves the diagnostic odyssey.",
    image: "/images/image 134.webp",
    href: "",
  },
  {
    title: "Reproductive Health",
    description: "Carrier screening and prenatal insights delivered in a clinician-ready format.",
    image: "/images/image 135.webp",
    href: "",
  },

  {
    title: "Pharmacogenomics",
    description: "Personalized drug selection and dosing using actionable genomic insights.",
    image: "/images/image 135(1).png",
    href: "",
  },

   {
    title: "Infectious Disease",
    description: "Rapid pathogen identification and resistance profiling via NGS.",
    image: "/images/image 135(2).png",
    href: "",
  },
]

// Who we serve — add/edit entries and the grid reflows automatically.
const served = [
  {
    title: "Hospitals",
    description: "Helping healthcare providers improve diagnostic accuracy and patient outcomes.",
    image: "/images/image 137.webp",
  },
  {
    title: "Diagnostic Laboratories",
    description: "Delivering advanced genomic analysis and molecular diagnostic solutions.",
    image: "/images/image 138.webp",
  },
  {
    title: "Healthcare Institutions",
    description:
      "Supporting modern healthcare systems through precision medicine and digital innovation.",
    image: "/images/image 139.webp",
  },
  {
    title: "Research Hospitals",
    description: "Connecting clinical research with real-world healthcare applications.",
    image: "/images/image 140.webp",
  },
]

// Genomic frontier cards — each has an icon and a colored border/tint.
const frontier = [
  {
    icon: Dna,
    title: "Clinical Genomics",
    description: "Diagnostic-grade pipelines for hospitals and clinics.",
    border: "border-indigo-500/40",
    tint: "from-indigo-500/20",
  },
  {
    icon: Microscope,
    title: "Cancer Genomics",
    description: "Somatic, germline and tumor-normal in one workflow.",
    border: "border-lime-500/40",
    tint: "from-lime-500/20",
  },
  {
    icon: Activity,
    title: "Rare Disease Diagnostics",
    description: "Accelerate the diagnostic odyssey with AI triage.",
    border: "border-blue-500/40",
    tint: "from-blue-500/20",
  },
  {
    icon: Baby,
    title: "Reproductive Health",
    description: "Carrier screening, NIPT and preimplantation workflows.",
    border: "border-amber-400/40",
    tint: "from-amber-400/20",
  },
  {
    icon: Pill,
    title: "Pharmacogenomics",
    description: "Personalize therapy with PGx panels and reporting.",
    border: "border-orange-500/40",
    tint: "from-orange-500/20",
  },
  {
    icon: Bug,
    title: "Infectious Disease",
    description: "Pathogen ID, AMR profiling and outbreak surveillance.",
    border: "border-emerald-500/40",
    tint: "from-emerald-500/20",
  },
]

// Case-study cards — each `border`/`glow` pair tints the card outline.
const caseStudies = [
  {
  title: "Accelerating cancer diagnosis at a leading academic center",
  description: "Time-to-treatment reduced from 21 to 6 days across solid tumor patients.",
  border: "border-blue-500/50",
  glow: "shadow-[0_0_40px_-12px_rgba(59,130,246,0.6)]",
  text: "text-[#4ADE76]",
},
{
  title: "Resolving the diagnostic odyssey for pediatric patients",
  description: "84% of unsolved pediatric cases received a clinically actionable result.",
  border: "border-teal-400/50",
  glow: "shadow-[0_0_40px_-12px_rgba(45,212,191,0.6)]",
  text: "text-[#4ADE76]",
},
{
  title: "Population-scale screening across a national health network",
  description: "Identified at-risk carriers in 1 in 32 patients enrolled in screening.",
  border: "border-lime-400/50",
  glow: "shadow-[0_0_40px_-12px_rgba(163,230,53,0.6)]",
  text: "text-[#4ADE76]",
},
{
  title: "Decision support integrated into tumor boards",
  description: "Reduced manual chart review by 6 hours per board meeting.",
  border: "border-purple-500/50",
  glow: "shadow-[0_0_40px_-12px_rgba(168,85,247,0.6)]",
  text: "text-[#4ADE76]",
},
]

export default function ClinicalApplicationsPage() {
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
            alt="Clinicians reviewing genomic diagnostics in a modern clinical lab"
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
              Who we are

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
              Advancing Healthcare Through
              <br />
              Clinical Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Empowering clinicians with precision genomics, AI-powered diagnostics, automated clinical reporting, and personalized medicine — for faster, smarter patient care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Link
              target="_blank"
              rel="noopener noreferrer"
                href="/brs-microsite"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore Clinical Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= CLINICAL SPECTRUM (CAROUSEL) ======================= */}
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
              Built For The Full Clinical Spectrum
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
            {spectrum.map((item) => (
              <div
                key={item.title}
                className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
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
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= TRANSFORMING RESEARCH ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl lg:whitespace-nowrap"
          >
            Transforming Research into Better Patient Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 text-[14px] text-muted-foreground leading-relaxed text-pretty"
          >
            Healthcare is evolving through genomics, artificial intelligence, and precision medicine. Bencos combines scientific expertise with innovative technologies to support faster diagnoses, personalized treatment strategies, and improved clinical decision-making across modern healthcare.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-10 aspect-[4/3] w-full overflow-hidden bg-neutral-900 sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src={TRANSFORM_IMAGE}
            alt="A clinician analysing patient data on dual diagnostic monitors"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= WHO WE SERVE (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Built For The Full Clinical Spectrum
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {served.map((item, index) => (
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

      {/* ======================= REAL OUTCOMES (CASE STUDIES) ======================= */}
      <section className="bg-[#05070a] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold leading-tight text-white md:text-4xl"
          >
            Real Outcomes From Real Clinics
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className={`rounded-2xl border bg-white/[0.02] p-8 ${study.border} ${study.glow}`}
              >
                <h3 className={`text-lg font-normal leading-snug md:text-xl ${study.text}`}>
                  {study.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white">
                  {study.description}
                </p>
                {/* <Link
                  href="/contact"
                  className="mt-6 inline-block text-xs font-semibold text-white transition-colors hover:text-green-600"
                >
                  Read case study
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-gradient-to-r from-neutral-50 via-white to-neutral-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Transform Clinical Care with
            <br />
            Precision Genomics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-muted-foreground leading-relaxed"
          >
            Accelerate diagnosis, improve patient outcomes, and empower clinicians with
            AI-driven genomic intelligence.
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-700 to-green-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-green-500/30"
            >
              Contact our team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
