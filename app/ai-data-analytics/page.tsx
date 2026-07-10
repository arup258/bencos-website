"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 372.png"
const APPROACH_IMAGE = "/images/image 373.png"

// Service cards — image with overlaid title/description.
const services = [
  {
    title: "Precision Medicine",
    description: "Personalized treatment insights guided by AI.",
    image: "/images/image 374.png",
  },
  {
    title: "Cancer Research",
    description: "Biomarker discovery and tumor profiling.",
    image: "/images/image 375.png",
  },
  {
    title: "Rare Disease Research",
    description: "Genomic pattern discovery for rare conditions.",
    image: "/images/image 376.png",
  },
  {
    title: "Drug Discovery",
    description: "AI-accelerated therapeutic development.",
    image: "/images/image 377.png",
  },
  {
    title: "Clinical Research",
    description: "Trial analytics and outcome interpretation.",
    image: "/images/image 378.png",
  },
  {
    title: "Population Health Analytics",
    description: "Large-scale healthcare data understanding.",
    image: "/images/image 379.png",
  },
]

// Applications — image top, title below; grid reflows automatically.
const applications = [
  { title: "Machine Learning Models", image: "/images/image 380.png" },
  { title: "Predictive Analytics", image: "/images/image 381.png" },
  { title: "Genomic AI", image: "/images/image 382.png" },
  { title: "Data Visualization", image: "/images/image 383.png" },
  { title: "Clinical Data Analytics", image: "/images/image 384.png" },
  { title: "Decision Support Systems", image: "/images/image 385.png" },
]

// Technology & platforms — image top, title below; grid reflows automatically.
const technology = [
  { title: "Artificial Intelligence", image: "/images/image 391.png" },
  { title: "High Performance Computing", image: "/images/image 386.png" },
  { title: "Cloud-Based Analytics", image: "/images/image 387.png" },
  { title: "Interactive Scientific Dashboards", image: "/images/image 388.png" },
]

// Workflow — numbered steps; grid reflows automatically.
const workflow = [
  { step: "01", title: "Data Collection", image: "/images/image 389.png" },
  { step: "02", title: "Data Preparation", image: "/images/image 390.png" },
  { step: "03", title: "Machine Learning Analysis", image: "/images/image 391.png" },
  { step: "04", title: "Pattern Recognition", image: "/images/image 383.png" },
  { step: "05", title: "Scientific Validation", image: "/images/image 393.png" },
  { step: "06", title: "Actionable Insights", image: "/images/image 397.png" },
]

// Why choose Bencos — alternating rows; even index = image left, odd = image right.
const whyChoose = [
  {
    title: "AI-Driven Scientific Expertise",
    description:
      "Board-certified molecular pathologists, clinical geneticists, and laboratory scientists guide every case with rigor and empathy.",
    image: "/images/image 398.png",
    imageAlt: "Data scientists reviewing model results",
  },
  {
    title: "Advanced Data Infrastructure",
    description:
      "High-performance computing built for the demands of modern genomics and biomedical research.",
    image: "/images/image 395.png",
    imageAlt: "A cloud computing and analytics environment",
  },
  {
    title: "Accurate Predictive Analytics",
    description:
      "Multi-tier quality controls, independent review, and internationally recognized standards on every clinical report.",
    image: "/images/image 396.png",
    imageAlt: "An explainable AI dashboard on screen",
  },
  {
    title: "Trusted Research Partnership",
    description:
      "Long-term collaboration with academic, clinical, and industry partners across the discovery lifecycle.",
    image: "/images/image 399.png",
    imageAlt: "A team collaborating in a meeting room",
  },
]

export default function AiDataAnalyticsPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Data scientists working with AI analytics dashboards"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-medium uppercase tracking-[0.15em] text-white"
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
              className="mt-8 text-3xl sm:text-4xl font-medium text-white md:text-4xl"
            >
              AI That Powers Scientific Discovery
              <br />
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Leverage artificial intelligence, machine learning, and advanced analytics to transform complex biological and clinical data into actionable scientific insights that accelerate research and innovation
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

      {/* ======================= APPROACH ======================= */}
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
           Smarter science through artificial intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
           Bencos combines artificial intelligence, computational biology, and data science to improve research accuracy, automate complex workflows, identify hidden biological patterns, and support faster scientific decision-making.
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
            src={APPROACH_IMAGE}
            alt="Data scientists analysing AI model outputs on large screens"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= OUR SERVICES (GRID) ======================= */}
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
            Applications across life sciences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
            Our AI-driven solutions empower researchers, clinicians, and healthcare organizations to accelerate discovery, improve diagnostics, and support precision medicine.
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
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
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
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Our AI & Data Analytics services.

          </motion.h2>
          

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

      {/* ======================= TECHNOLOGY & PLATFORMS (GRID) ======================= */}
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
            Advanced Diagnostic Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
           Our clinical laboratories utilize internationally recognized technologies to ensure accurate, reliable, and clinically actionable genomic results.
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
            Our Analytical Workflow
          </motion.h2>
          

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
                    <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
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
            Where Science Meets Intelligence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos to unlock the power of artificial intelligence and advanced data analytics for genomics, healthcare, and scientific research.
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
