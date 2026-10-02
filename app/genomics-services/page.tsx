"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 257.webp"
const OVERVIEW_IMAGE = "/images/image 258.webp"

// Genomics service cards — image with overlaid title; grid reflows automatically.
const services = [
  { title: "Whole Genome Sequencing", image: "/images/image 259.png" },
  { title: "Whole Exome Sequencing", image: "/images/image 260.png" },
  { title: "RNA Sequencing", image: "/images/image 261.png" },
  { title: "Targeted Sequencing", image: "/images/image 262.png" },
  { title: "Single Cell Sequencing", image: "/images/image 263.png" },
  { title: "Variant Analysis", image: "/images/image 264.png" },
]

// Applications — image top, title below; grid reflows automatically.
const applications = [
  { title: "Cancer Research", image: "/images/image 265.png" },
  { title: "Rare Disease Research", image: "/images/image 266.png" },
  { title: "Precision Medicine", image: "/images/image 267.png" },
  { title: "Agricultural Genomics", image: "/images/image 268.png" },
  { title: "Drug Discovery", image: "/images/image 269.png" },
  { title: "Population Genomics", image: "/images/image 270.png" },
]

// Technology platform — image top, title below; grid reflows automatically.
const technology = [
  { title: "Next-Generation Sequencing", image: "/images/image 271.webp" },
  { title: "Long-Read Sequencing", image: "/images/image 272.webp" },
  { title: "Automated Laboratory Workflow", image: "/images/image 273.webp" },
  { title: "High-Performance Computing", image: "/images/image 274.webp" },
]

// Workflow — numbered steps; grid reflows automatically.
const workflow = [
  { step: "01", title: "Sample Collection", image: "/images/image 275.png" },
  { step: "02", title: "Library Preparation", image: "/images/image 276.png" },
  { step: "03", title: "DNA / RNA Sequencing", image: "/images/image 277.png" },
  { step: "04", title: "Bioinformatics Analysis", image: "/images/image 278.png" },
  { step: "05", title: "Quality Validation", image: "/images/image 279.png" },
  { step: "06", title: "Scientific Reporting", image: "/images/image 280.png" },
]

// Why choose Bencos — alternating rows; even index = image left, odd = image right.
const whyChoose = [
  {
    title: "Scientific Expertise",
    description:
      "Our team of geneticists, molecular biologists, and bioinformaticians\nbrings deep domain experience across genomics disciplines,\ntranslating complex data into meaningful scientific outcomes.",
    image: "/images/image 281.webp",
    imageAlt: "Two scientists discussing results in a laboratory",
  },
  {
    title: "Advanced Laboratory Infrastructure",
    description:
      "State-of-the-art sequencing platforms, automated liquid handling,\nand rigorously controlled environments deliver the reproducibility\nthat world-class research demands.",
    image: "/images/image 282.webp",
    imageAlt: "A modern automated genomics laboratory",
  },
  {
    title: "Accurate Bioinformatics",
    description:
      "Validated pipelines, curated reference databases, and transparent\nanalytics turn raw sequencing reads into biologically actionable\ninsights you can trust.",
    image: "/images/image 283.webp",
    imageAlt: "A bioinformatician analysing sequencing data on screen",
  },
  {
    title: "Reliable Scientific Partnership",
    description:
      "Every project contributes to improving healthcare, advancing\nresearch, and creating meaningful impact worldwide.",
    image: "/images/image 284.webp",
    imageAlt: "A research team collaborating in a meeting room",
  },
]

export default function GenomicsServicesPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Scientists analysing genomic data on multiple monitors in a modern lab"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
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
              Services
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
              Unlock the Power
              <br />
              of Genomics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Accelerating scientific discovery through advanced DNA and RNA sequencing, precision genomics, and comprehensive data analysis that empower research, diagnostics, and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Contact Our Experts
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= OVERVIEW ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Overview
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Comprehensive Genomics Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-5xl whitespace-pre-line text-muted-foreground leading-relaxed"
          >
            {"We provide end-to-end genomics services — from sample preparation and sequencing to advanced bioinformatics\nanalysis — enabling researchers and clinicians to uncover genetic insights with confidence."}
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
            src={OVERVIEW_IMAGE}
            alt="Scientists preparing samples for sequencing in a genomics laboratory"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= OUR GENOMICS SERVICES (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Our Genomics Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            A complete portfolio of sequencing and analysis services designed for scientific rigor and reproducibility.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <h3 className="absolute 
                group-hover:text-[#4ADE76]  pb-16 inset-x-0 bottom-0 p-6 text-xl font-semibold text-white md:text-2xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= APPLICATIONS (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Applications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Applications of Genomics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            Our genomics services support research, clinical innovation, agriculture,
            biotechnology, and pharmaceutical development by  <br/>delivering reliable genomic
            insights.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {applications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground md:text-xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= ADVANCED TECHNOLOGY PLATFORM (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Technology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Advanced Technology Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            We utilize industry-leading sequencing technologies and validated laboratory workflows to ensure accurate, reproducible, and <br/>high-quality genomic data.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {technology.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground md:text-xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= OUR WORKFLOW (STEPS) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Workflow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Our Workflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
            A meticulous, six-stage journey from biological sample to scientific insight.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-muted-foreground">{item.step}</p>
                <h3 className="mt-1 text-sm font-medium text-foreground">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHY CHOOSE BENCOS (ALTERNATING) ======================= */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Why Bencos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Why Choose Bencos
          </motion.h2>

          <div className="mt-12 space-y-16 lg:space-y-24">
            {whyChoose.map((item, index) => {
              const imageOnLeft = index % 2 === 0
              return (
                <div
                  key={item.title}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: imageOnLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900 ${
                      imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  {/* Heading + copy */}
                  <motion.div
                    initial={{ opacity: 0, x: imageOnLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={imageOnLeft ? "lg:order-2" : "lg:order-1"}
                  >
                    <h3 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl text-balance"
          >
            Transforming Genomic Data
            <br />
            Into Discovery.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos to accelerate research, unlock genomic insights, and advance
            scientific innovation through world-class genomics services.
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
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
