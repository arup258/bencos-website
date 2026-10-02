"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 502.webp"

// Certifications — add your ISO logo PNGs to /public/images and the matching
// PDFs to /public/pdfs, then update `image` and `pdf` below.
const certifications = [
  {
    id: "iso9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Ensures consistent quality management and continuous improvement across all our processes.",
    image: "/images/image 578.png",
    pdf: "/pdf/first_1.pdf",
  },
  {
    id: "iso15189",
    title: "ISO 15189:2022",
    subtitle: "Medical Laboratories",
    description:
      "Specifies quality and competence requirements for medical laboratories and diagnostic services.",
    image: "/images/image 579.png",
    pdf: "/pdf/first_2.pdf",
  },
  {
    id: "iso17025",
    title: "ISO 17025:2017",
    subtitle: "Testing & Calibration",
    description:
      "Ensures technical competence and reliability of testing and calibration laboratory operations.",
    image: "/images/image 580.png",
    pdf: "/pdf/first_3.pdf",
  },
  {
    id: "iso22692",
    title: "ISO/TS 22692:2020",
    subtitle: "Molecular In Vitro Diagnostics",
    description:
      "Specifies requirements for quality and competence in molecular in vitro diagnostic testing.",
    image: "/images/image 581.png",
    pdf: "/pdf/first_4.pdf",
  },
]

export default function GovernanceAccreditationPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A team upholding standards of quality and governance"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
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
              Governance,<br/> Accreditation &amp; Trust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              Built on globally recognized standards, accreditations, and quality systems — <br/>ensuring integrity, reliability, and trust in everything we deliver.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#certifications"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                View our certifications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= CERTIFICATIONS ======================= */}
      <section id="certifications" className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            More Reason to Trust us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
          >
            Certifications
          </motion.p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certification logo`}
                  className="h-24 w-24 object-contain"
                />
                <h3 className="mt-6 text-lg font-semibold text-[#1e40af]">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#1e40af]/80">{cert.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-green-600"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-4xl font-medium leading-tight text-foreground"
          >
            Creating Impact<br/> Beyond Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos to shape the future of science, healthcare, technology, and  <br/>enterprise through trusted collaboration and continuous innovation
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
