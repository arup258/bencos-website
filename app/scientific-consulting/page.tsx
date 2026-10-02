"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 400.webp"
const APPROACH_IMAGE = "/images/image 401.webp"

// Service cards — image with overlaid title/description.
const services = [
  {
    title: "Research Strategy",
    description: "Long-horizon scientific roadmaps that align capabilities, funding and discovery priorities.",
    image: "/images/image 402.png",
  },
  {
    title: "Experimental Design",
    description: "Rigorous, reproducible study design across in-vitro, in-vivo and translational programs.",
    image: "/images/image 403.png",
  },
  {
    title: "Clinical Research Advisory",
    description: "Protocol design, endpoint strategy and operational guidance for clinical development.",
    image: "/images/image 404.png",
  },
  {
    title: "Technology Assessment",
    description: "Independent evaluation of platforms, instruments and emerging scientific technologies.",
    image: "/images/image 405.png",
  },
  {
    title: "Regulatory Guidance",
    description: "Evidence packages and submission strategy across global regulatory frameworks.",
    image: "/images/image 406.png",
  },
  {
    title: "Innovation Consulting",
    description: "Translating discovery science into pipelines, partnerships and clinical impact.",
    image: "/images/image 407.png",
  },
]

// Applications — image top, title below; grid reflows automatically.
const applications = [
  { title: "Genomics", image: "/images/image 413.png" },
  { title: "Precision Medicine", image: "/images/image 412.png" },
  { title: "Biotechnology", image: "/images/image 411.png" },
  { title: "Clinical Diagnostics", image: "/images/image 410.png" },
  { title: "Multi-Omics Research", image: "/images/image 409.png" },
  { title: "AI in Life Sciences", image: "/images/image 408.png" },
]

// Expertise & platforms — image top, title below; grid reflows automatically.
const technology = [
  { title: "Genomics & Multi-Omics", image: "/images/image 413.png" },
  { title: "Bioinformatics & AI", image: "/images/image 414.png" },
  { title: "Clinical & Translational Science", image: "/images/image 415.png" },
  { title: "Regulatory Affairs", image: "/images/image 416.png" },
]

// Workflow — numbered steps; grid reflows automatically.
const workflow = [
  { step: "01", title: "Discovery", image: "/images/image 414.png" },
  { step: "02", title: "Assessment", image: "/images/image 415.png" },
  { step: "03", title: "Strategy Development", image: "/images/image 416.png" },
  { step: "04", title: "Implementation", image: "/images/image 417.png" },
  { step: "05", title: "Validation", image: "/images/image 418.png" },
  { step: "06", title: "Continuous Support", image: "/images/image 419.png" },
]

// Why choose Bencos — alternating rows; even index = image left, odd = image right.
const whyChoose = [
  {
    title: "Scientific Excellence",
    description:
      "Senior scientists lead every engagement, bringing decades of\nresearch and industry experience to complex challenges.",
    image: "/images/image 420.webp",
    imageAlt: "Senior scientific advisors in discussion",
  },
  {
    title: "Global Scientific Perspective",
    description:
      "A worldwide network of collaborators, institutions and clinical\npartners informs every recommendation we deliver.",
    image: "/images/image 421.webp",
    imageAlt: "A cross-disciplinary scientific team",
  },
  {
    title: "Evidence-Based Decision Making",
    description:
      "Strategies grounded in peer-reviewed evidence, robust data\nanalysis and reproducible scientific methodology.",
    image: "/images/image 422.webp",
    imageAlt: "Advisors reviewing research strategy",
  },
  {
    title: "Collaborative Partnership",
    description:
      "We embed with your teams — from principal investigators to\nleadership — as long-term scientific partners.",
    image: "/images/image 423.webp",
    imageAlt: "A team collaborating in a meeting room",
  },
]

export default function ScientificConsultingPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Scientific advisors collaborating in a strategy session"
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
              Scientific Expertise.
              <br />
              Strategic Guidance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Helping organizations transform scientific ideas into impactful research, innovation, and healthcare solutions through expert consulting, technical excellence, and evidence-based strategies.
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
            Trusted Scientific Advisors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            Our multidisciplinary consulting team supports research organizations, biotechnology companies, pharmaceutical industries,<br/> healthcare institutions, and government agencies with scientific planning, technology evaluation, research strategy, and<br/> innovation management.

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
            alt="Scientific advisors guiding a research strategy session"
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
            Consulting
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Our Consulting Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            Six practice areas engineered to move scientific programs from question to evidence to outcome.
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
                <div className="absolute inset-x-0 bottom-0 p-6 pb-16">
                  <h3 className="text-xl
group-hover:text-[#4ADE76] font-semibold text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-[4.25rem] text-sm leading-relaxed text-white/80">
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
           Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
           Areas of Expertise
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

      

      {/* ======================= OUR PROCESS (STEPS) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Our Consulting Approach
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
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl text-balance"
          >
            Science. Strategy. Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos to transform scientific challenges into innovative solutions<br/> through trusted consulting, strategic expertise, and collaborative research.
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
